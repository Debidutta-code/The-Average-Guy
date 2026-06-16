import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import api from '../lib/api';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import CSVActions from '../components/ui/CSVActions';
import {
  Search,
  Phone,
  Plus,
  ChevronRight
} from 'lucide-react';
import { format } from 'date-fns';

const LeadList: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('');
  const [priorityFilter, setPriorityFilter] = React.useState('');
  const [sortBy, setSortBy] = React.useState('createdAt');
  const [order, setOrder] = React.useState('desc');

  const { data: leads, isLoading } = useQuery({
    queryKey: ['leads', searchTerm, statusFilter, priorityFilter, sortBy, order],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (searchTerm) params.append('search', searchTerm);
      if (statusFilter) params.append('status', statusFilter);
      if (priorityFilter) params.append('priority', priorityFilter);
      params.append('sortBy', sortBy);
      params.append('order', order);

      const response = await api.get(`/leads?${params.toString()}`);
      return response.data;
    },
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'destructive';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'outline';
    }
  };

  const getStatusColor = (status: string) => {
      if (status === 'Client Won') return 'success';
      if (['Not Interested', 'Dead Lead'].includes(status)) return 'destructive';
      if (['Interested', 'Meeting Scheduled'].includes(status)) return 'default';
      return 'secondary';
  }

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Leads</h1>
            <CSVActions />
        </div>
        <Link to="/leads/new">
          <Button className="w-full sm:w-auto gap-2">
            <Plus className="h-4 w-4" /> Add New Lead
          </Button>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search clinic, phone, city..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
        >
            <option value="">All Statuses</option>
            <option value="New Lead">New Lead</option>
            <option value="Interested">Interested</option>
            <option value="Meeting Scheduled">Meeting Scheduled</option>
            <option value="Client Won">Client Won</option>
            <option value="Not Interested">Not Interested</option>
        </select>
        <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
        >
            <option value="">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
      </div>

      {/* Sorting Tabs - Simple */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <Button
            variant={sortBy === 'createdAt' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => {
                if (sortBy === 'createdAt') setOrder(order === 'desc' ? 'asc' : 'desc');
                else { setSortBy('createdAt'); setOrder('desc'); }
            }}
            className="whitespace-nowrap"
          >
              Date Added {sortBy === 'createdAt' && (order === 'desc' ? '↓' : '↑')}
          </Button>
          <Button
            variant={sortBy === 'nextFollowUpDateTime' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => {
                if (sortBy === 'nextFollowUpDateTime') setOrder(order === 'desc' ? 'asc' : 'desc');
                else { setSortBy('nextFollowUpDateTime'); setOrder('asc'); }
            }}
            className="whitespace-nowrap"
          >
              Follow-up {sortBy === 'nextFollowUpDateTime' && (order === 'desc' ? '↓' : '↑')}
          </Button>
          <Button
            variant={sortBy === 'clinicName' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => {
                if (sortBy === 'clinicName') setOrder(order === 'desc' ? 'asc' : 'desc');
                else { setSortBy('clinicName'); setOrder('asc'); }
            }}
            className="whitespace-nowrap"
          >
              Clinic Name {sortBy === 'clinicName' && (order === 'desc' ? '↓' : '↑')}
          </Button>
      </div>

      {/* Leads List */}
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-32 bg-muted rounded-lg animate-pulse"></div>
          ))}
        </div>
      ) : leads?.length === 0 ? (
        <div className="text-center py-20 border rounded-lg bg-background">
            <Plus className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No leads found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or add a new lead.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {leads?.map((lead: any) => (
            <Card key={lead._id} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg leading-tight">{lead.clinicName}</h3>
                    <p className="text-sm text-muted-foreground">{lead.contactPerson} • {lead.city}</p>
                  </div>
                  <Badge variant={getPriorityColor(lead.priority)}>{lead.priority}</Badge>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant={getStatusColor(lead.status)}>{lead.status}</Badge>
                    {lead.nextFollowUpDateTime && (
                        <Badge variant="outline" className="bg-blue-50">
                            Follow-up: {format(new Date(lead.nextFollowUpDateTime), 'dd MMM, hh:mm a')}
                        </Badge>
                    )}
                </div>

                <div className="flex gap-2">
                  <Button asChild className="flex-1 gap-2 h-12 text-base" variant="primary">
                    <a href={`tel:${lead.phoneNumber}`} onClick={(e) => e.stopPropagation()}>
                      <Phone className="h-4 w-4" /> Call
                    </a>
                  </Button>
                  <Button asChild className="gap-2 h-12 w-12" variant="outline" size="icon">
                    <Link to={`/leads/${lead._id}`}>
                        <ChevronRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeadList;
