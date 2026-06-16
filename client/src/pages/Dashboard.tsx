import React from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import {
  Users,
  PhoneCall,
  ThumbsUp,
  UserCheck,
  XCircle,
  AlertCircle
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const Dashboard: React.FC = () => {
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const response = await api.get('/analytics/stats');
      return response.data;
    },
  });

  const { data: charts, isLoading: chartsLoading } = useQuery({
    queryKey: ['charts'],
    queryFn: async () => {
      const response = await api.get('/analytics/charts');
      return response.data;
    },
  });

  if (statsLoading || chartsLoading) {
    return <div className="animate-pulse space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-32 bg-muted rounded-lg"></div>
        ))}
      </div>
      <div className="h-80 bg-muted rounded-lg"></div>
    </div>;
  }

  const statCards = [
    { title: 'Total Leads', value: stats.totalLeads, icon: Users, color: 'text-blue-600' },
    { title: "Today's Follow Ups", value: stats.todayFollowUps, icon: PhoneCall, color: 'text-green-600' },
    { title: 'Overdue Calls', value: stats.overdueFollowUps, icon: AlertCircle, color: 'text-red-600' },
    { title: 'Interested', value: stats.interestedLeads, icon: ThumbsUp, color: 'text-orange-600' },
    { title: 'Clients Won', value: stats.clientsWon, icon: UserCheck, color: 'text-emerald-600' },
    { title: 'Not Interested', value: stats.notInterested, icon: XCircle, color: 'text-slate-600' },
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statCards.map((stat, i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-xs font-medium text-muted-foreground truncate">{stat.title}</p>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Calls Per Day Line Chart */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Calls Per Day (Last 14 Days)</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={charts.callsPerDay}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="date"
                  fontSize={10}
                  tickFormatter={(value) => value.split('-').slice(1).join('/')}
                />
                <YAxis fontSize={10} />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="calls"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Status Distribution Pie Chart */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Leads by Status</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={charts.statusDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={(props: any) => (props.percent || 0) > 0.05 ? `${props.name}` : ''}
                >
                  {charts.statusDistribution.map((_: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Growth Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Monthly Lead Growth</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={charts.monthlyGrowth}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip />
              <Bar dataKey="leads" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
