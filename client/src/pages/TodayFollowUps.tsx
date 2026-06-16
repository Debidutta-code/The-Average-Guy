import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import api from '../lib/api';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Phone, ChevronRight, Calendar, AlertCircle, Clock } from 'lucide-react';
import { format, isPast, isToday, isFuture } from 'date-fns';

const TodayFollowUps: React.FC = () => {
    const { data: leads, isLoading } = useQuery({
        queryKey: ['follow-ups-today'],
        queryFn: async () => {
            const response = await api.get('/leads/follow-ups/today');
            return response.data;
        },
    });

    if (isLoading) return <div className="animate-pulse space-y-4 pt-10"><div className="h-20 bg-muted rounded-lg"></div><div className="h-40 bg-muted rounded-lg"></div></div>;

    const overdue = leads?.filter((l: any) => l.nextFollowUpDateTime && isPast(new Date(l.nextFollowUpDateTime)) && !isToday(new Date(l.nextFollowUpDateTime)));
    const today = leads?.filter((l: any) => l.nextFollowUpDateTime && isToday(new Date(l.nextFollowUpDateTime)));
    const upcoming = leads?.filter((l: any) => l.nextFollowUpDateTime && isFuture(new Date(l.nextFollowUpDateTime)) && !isToday(new Date(l.nextFollowUpDateTime)));

    const renderLeadCard = (lead: any) => (
        <Card key={lead._id} className="hover:border-primary/50 transition-colors border-l-4 border-l-primary">
            <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-bold text-lg leading-tight">{lead.clinicName}</h3>
                        <p className="text-sm text-muted-foreground">{lead.contactPerson}</p>
                    </div>
                    <Badge variant={lead.priority === 'High' ? 'destructive' : 'outline'}>{lead.priority}</Badge>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm font-medium">
                    <Clock className="h-4 w-4 text-primary" />
                    {format(new Date(lead.nextFollowUpDateTime), 'hh:mm a')}
                    <Badge variant="secondary" className="ml-auto">{lead.status}</Badge>
                </div>

                <div className="flex gap-2">
                    <Button asChild className="flex-1 gap-2 h-12" variant="primary">
                        <a href={`tel:${lead.phoneNumber}`}>
                            <Phone className="h-4 w-4" /> Call
                        </a>
                    </Button>
                    <Button asChild className="w-12 h-12" variant="outline" size="icon">
                        <Link to={`/leads/${lead._id}`}>
                            <ChevronRight className="h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="space-y-8 pb-20">
            <h1 className="text-3xl font-bold tracking-tight">Today's Schedule</h1>

            {/* Overdue Section */}
            {overdue?.length > 0 && (
                <section className="space-y-4">
                    <div className="flex items-center gap-2 text-destructive">
                        <AlertCircle className="h-5 w-5" />
                        <h2 className="text-xl font-bold">Overdue</h2>
                        <Badge variant="destructive" className="ml-2">{overdue.length}</Badge>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {overdue.map(renderLeadCard)}
                    </div>
                </section>
            )}

            {/* Today Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                    <Calendar className="h-5 w-5" />
                    <h2 className="text-xl font-bold">Today</h2>
                    <Badge className="ml-2">{today?.length || 0}</Badge>
                </div>
                {today?.length === 0 ? (
                    <Card className="bg-muted/30 border-dashed">
                        <CardContent className="p-10 text-center text-muted-foreground">
                            No calls scheduled for today.
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {today.map(renderLeadCard)}
                    </div>
                )}
            </section>

            {/* Upcoming Section */}
            {upcoming?.length > 0 && (
                <section className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-5 w-5" />
                        <h2 className="text-xl font-bold">Upcoming</h2>
                        <Badge variant="outline" className="ml-2">{upcoming.length}</Badge>
                    </div>
                    <div className="grid grid-cols-1 gap-4 opacity-75">
                        {upcoming.map(renderLeadCard)}
                    </div>
                </section>
            )}
        </div>
    );
};

export default TodayFollowUps;
