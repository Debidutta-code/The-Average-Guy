import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import {
    Phone,
    MapPin,
    Globe,
    Edit,
    Trash2,
    ChevronLeft,
    Clock,
    User,
    Save
} from 'lucide-react';
import { format } from 'date-fns';

const STATUS_OPTIONS = [
  'New Lead', 'Not Called Yet', "Didn't Pick Call", 'Call Disconnected', 'Cut The Call',
  'Busy Right Now', 'Asked To Call Later', 'Asked To Call Tomorrow', 'Asked To Call Next Week',
  'Asked To Call After 7 PM', 'Asked To Call After Office Hours', 'Interested',
  'Somewhat Interested', 'Need More Information', 'Asked For Portfolio', 'Asked For Pricing',
  'Asked For Website Examples', 'Asked For Proposal', 'Meeting Scheduled', 'Demo Scheduled',
  'Follow Up Required', 'Thinking About It', 'Decision Pending', 'Need Approval From Partner',
  'Need Approval From Management', 'Already Has Website', 'Website Under Development',
  'Using Another Agency', 'Not Interested', 'Very Rude Response', 'Wrong Number',
  'Number Switched Off', 'Number Not Reachable', 'Duplicate Lead', 'Client Won',
  'Project Started', 'Project Completed', 'Dead Lead'
];

const LeadDetail: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // Follow-up state
    const [status, setStatus] = React.useState('');
    const [nextFollowUp, setNextFollowUp] = React.useState('');
    const [note, setNote] = React.useState('');
    const [isSaving, setIsSaving] = React.useState(false);

    const { data: lead, isLoading } = useQuery({
        queryKey: ['lead', id],
        queryFn: async () => {
            const response = await api.get(`/leads/${id}`);
            setStatus(response.data.status);
            if (response.data.nextFollowUpDateTime) {
                setNextFollowUp(new Date(response.data.nextFollowUpDateTime).toISOString().slice(0, 16));
            }
            return response.data;
        },
    });

    const updateMutation = useMutation({
        mutationFn: (data: any) => api.put(`/leads/${id}`, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['lead', id] });
            setNote('');
            alert('Follow-up saved successfully!');
        },
    });

    const deleteMutation = useMutation({
        mutationFn: () => api.delete(`/leads/${id}`),
        onSuccess: () => {
            navigate('/leads');
        }
    })

    if (isLoading) return <div className="animate-pulse space-y-4 pt-10"><div className="h-40 bg-muted rounded-lg"></div><div className="h-80 bg-muted rounded-lg"></div></div>;

    const handleSaveFollowUp = async () => {
        setIsSaving(true);
        try {
            await updateMutation.mutateAsync({
                status,
                nextFollowUpDateTime: nextFollowUp,
                newNote: note,
                updateCallHistory: true
            });
        } finally {
            setIsSaving(false);
        }
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this lead?')) {
            deleteMutation.mutate();
        }
    }

    return (
        <div className="space-y-6 pb-24">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2 px-0">
                    <ChevronLeft className="h-4 w-4" /> Back
                </Button>
                <div className="flex gap-2">
                    <Link to={`/leads/${id}/edit`}>
                        <Button variant="outline" size="sm" className="gap-2">
                            <Edit className="h-4 w-4" /> Edit
                        </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="gap-2 text-destructive" onClick={handleDelete}>
                        <Trash2 className="h-4 w-4" /> Delete
                    </Button>
                </div>
            </div>

            {/* Lead Info Card */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h1 className="text-2xl font-bold mb-1">{lead.clinicName}</h1>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <User className="h-4 w-4" />
                                <span>{lead.contactPerson}</span>
                            </div>
                        </div>
                        <Badge className="text-sm px-3 py-1" variant={lead.priority === 'High' ? 'destructive' : lead.priority === 'Medium' ? 'warning' : 'success'}>
                            {lead.priority} Priority
                        </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Phone Number</p>
                                <a href={`tel:${lead.phoneNumber}`} className="font-semibold text-lg hover:underline">{lead.phoneNumber}</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">City</p>
                                <p className="font-semibold text-lg">{lead.city}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-8">
                        <Button asChild className="flex-1 h-14 text-lg gap-2" variant="primary">
                            <a href={`tel:${lead.phoneNumber}`}>
                                <Phone className="h-5 w-5" /> Call Now
                            </a>
                        </Button>
                        {lead.googleMapLink && (
                            <Button asChild variant="outline" className="h-14 px-6">
                                <a href={lead.googleMapLink} target="_blank" rel="noreferrer">
                                    <MapPin className="h-5 w-5" />
                                </a>
                            </Button>
                        )}
                        {lead.website && (
                            <Button asChild variant="outline" className="h-14 px-6">
                                <a href={lead.website.startsWith('http') ? lead.website : `https://${lead.website}`} target="_blank" rel="noreferrer">
                                    <Globe className="h-5 w-5" />
                                </a>
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Follow-up Update Form */}
            <Card className="border-primary/20 shadow-md">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" /> Update Follow-Up
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">New Status</label>
                            <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                {STATUS_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Next Follow-Up</label>
                            <Input
                                type="datetime-local"
                                value={nextFollowUp}
                                onChange={(e) => setNextFollowUp(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Call Notes</label>
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            placeholder="What happened in the call?"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>
                    <Button
                        className="w-full h-12 gap-2"
                        onClick={handleSaveFollowUp}
                        disabled={isSaving}
                    >
                        <Save className="h-4 w-4" /> {isSaving ? 'Saving...' : 'SAVE CHANGES'}
                    </Button>
                </CardContent>
            </Card>

            {/* Tabs for History/Notes */}
            <div className="space-y-4">
                <div className="flex border-b">
                    <button className="px-4 py-2 font-bold border-b-2 border-primary text-primary">History & Notes</button>
                </div>

                <div className="space-y-4">
                    {lead.callHistory?.length === 0 && lead.notes?.length === 0 ? (
                        <p className="text-center py-10 text-muted-foreground">No call history yet.</p>
                    ) : (
                        <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-muted">
                            {lead.callHistory?.map((call: any, idx: number) => (
                                <div key={idx} className="relative">
                                    <div className="absolute -left-6 top-1 h-3 w-3 rounded-full bg-primary border-4 border-background"></div>
                                    <div className="bg-background rounded-lg border p-3 shadow-sm">
                                        <div className="flex justify-between items-center mb-1">
                                            <Badge variant="secondary" className="text-[10px] uppercase">Call #{lead.callHistory.length - idx}</Badge>
                                            <span className="text-xs text-muted-foreground">{format(new Date(call.date), 'dd MMM yyyy, hh:mm a')}</span>
                                        </div>
                                        <p className="font-bold text-sm">{call.status}</p>
                                        {call.notes && <p className="text-sm mt-1 text-muted-foreground">{call.notes}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Sticky Bottom Call Button for Mobile */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t lg:hidden">
                <Button asChild className="w-full h-14 text-lg gap-2 shadow-lg" variant="primary">
                    <a href={`tel:${lead.phoneNumber}`}>
                        <Phone className="h-6 w-6" /> Call Now
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default LeadDetail;
