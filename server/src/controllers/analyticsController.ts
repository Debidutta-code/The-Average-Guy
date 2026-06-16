import { Response } from 'express';
import Lead from '../models/Lead.js';
import { AuthRequest } from '../middleware/authMiddleware.js';

// @desc    Get dashboard statistics
// @route   GET /api/analytics/stats
// @access  Private
export const getStats = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user._id;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);

    const [
      totalLeads,
      todayFollowUps,
      overdueFollowUps,
      interestedLeads,
      clientsWon,
      notInterested,
      totalCalls
    ] = await Promise.all([
      Lead.countDocuments({ user: userId }),
      Lead.countDocuments({
        user: userId,
        nextFollowUpDateTime: { $gte: today, $lte: endOfToday },
        status: { $nin: ['Not Interested', 'Client Won', 'Dead Lead'] }
      }),
      Lead.countDocuments({
        user: userId,
        nextFollowUpDateTime: { $lt: today },
        status: { $nin: ['Not Interested', 'Client Won', 'Dead Lead'] }
      }),
      Lead.countDocuments({
        user: userId,
        status: { $in: ['Interested', 'Somewhat Interested'] }
      }),
      Lead.countDocuments({ user: userId, status: 'Client Won' }),
      Lead.countDocuments({ user: userId, status: 'Not Interested' }),
      Lead.aggregate([
        { $match: { user: userId } },
        { $group: { _id: null, total: { $sum: '$totalCalls' } } }
      ])
    ]);

    res.json({
      totalLeads,
      todayFollowUps,
      overdueFollowUps,
      interestedLeads,
      clientsWon,
      notInterested,
      totalCalls: totalCalls[0]?.total || 0,
      conversionRate: totalLeads > 0 ? (clientsWon / totalLeads) * 100 : 0
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get chart data
// @route   GET /api/analytics/charts
// @access  Private
export const getChartData = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user._id;

    // Status Distribution
    const statusDistribution = await Lead.aggregate([
      { $match: { user: userId } },
      { $group: { _id: '$status', count: { $sum: 1 } } },
      { $project: { name: '$_id', value: '$count', _id: 0 } }
    ]);

    // Monthly Lead Growth (last 6 months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const monthlyGrowth = await Lead.aggregate([
      { $match: { user: userId, createdAt: { $gte: sixMonthsAgo } } },
      {
        $group: {
          _id: { month: { $month: '$createdAt' }, year: { $year: '$createdAt' } },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]);

    // Calls Per Day (last 14 days)
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

    const callsPerDay = await Lead.aggregate([
        { $match: { user: userId } },
        { $unwind: '$callHistory' },
        { $match: { 'callHistory.date': { $gte: fourteenDaysAgo } } },
        {
            $group: {
                _id: { $dateToString: { format: "%Y-%m-%d", date: "$callHistory.date" } },
                count: { $sum: 1 }
            }
        },
        { $sort: { _id: 1 } },
        { $project: { date: '$_id', calls: '$count', _id: 0 } }
    ]);

    res.json({
      statusDistribution,
      monthlyGrowth: monthlyGrowth.map(m => ({
          name: `${m._id.month}/${m._id.year}`,
          leads: m.count
      })),
      callsPerDay
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
