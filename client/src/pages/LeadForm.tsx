import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent, CardFooter } from '../components/ui/Card';
import { ChevronLeft, Save } from 'lucide-react';

const leadSchema = z.object({
  clinicName: z.string().min(2, 'Clinic name is required'),
  contactPerson: z.string().min(2, 'Contact person is required'),
  phoneNumber: z.string().min(10, 'Invalid phone number'),
  googleMapLink: z.string().url('Invalid URL').optional().or(z.literal('')),
  website: z.string().optional().or(z.literal('')),
  city: z.string().min(2, 'City is required'),
  priority: z.enum(['High', 'Medium', 'Low']),
});

type LeadFormValues = z.infer<typeof leadSchema>;

const LeadForm: React.FC = () => {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [error, setError] = React.useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
        priority: 'Medium'
    }
  });

  const { isLoading: isFetching } = useQuery({
    queryKey: ['lead', id],
    queryFn: async () => {
        const response = await api.get(`/leads/${id}`);
        reset(response.data);
        return response.data;
    },
    enabled: isEdit
  });

  const mutation = useMutation({
    mutationFn: (data: LeadFormValues) =>
      isEdit ? api.put(`/leads/${id}`, data) : api.post('/leads', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
      if (isEdit) queryClient.invalidateQueries({ queryKey: ['lead', id] });
      navigate(isEdit ? `/leads/${id}` : '/leads');
    },
    onError: (err: any) => {
        setError(err.response?.data?.message || 'Something went wrong');
    }
  });

  const onSubmit = (data: LeadFormValues) => {
    mutation.mutate(data);
  };

  if (isFetching) return <div className="animate-pulse h-96 bg-muted rounded-lg pt-10"></div>;

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-10">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate(-1)} size="icon">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          {isEdit ? 'Edit Lead' : 'Add New Lead'}
        </h1>
      </div>

      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="p-6 space-y-4">
            {error && (
              <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium">Clinic Name *</label>
              <Input {...register('clinicName')} placeholder="e.g. City Dental Clinic" />
              {errors.clinicName && <p className="text-xs text-destructive">{errors.clinicName.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Contact Person *</label>
                    <Input {...register('contactPerson')} placeholder="e.g. Dr. Ramesh" />
                    {errors.contactPerson && <p className="text-xs text-destructive">{errors.contactPerson.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number *</label>
                    <Input {...register('phoneNumber')} placeholder="e.g. +919999999999" />
                    {errors.phoneNumber && <p className="text-xs text-destructive">{errors.phoneNumber.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">City *</label>
                    <Input {...register('city')} placeholder="e.g. Bhubaneswar" />
                    {errors.city && <p className="text-xs text-destructive">{errors.city.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Priority *</label>
                    <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        {...register('priority')}
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Google Map Link</label>
              <Input {...register('googleMapLink')} placeholder="https://maps.google.com/..." />
              {errors.googleMapLink && <p className="text-xs text-destructive">{errors.googleMapLink.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Website</label>
              <Input {...register('website')} placeholder="www.clinic.com" />
              {errors.website && <p className="text-xs text-destructive">{errors.website.message}</p>}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-6 pt-0">
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button type="submit" disabled={mutation.isPending} className="gap-2">
              <Save className="h-4 w-4" /> {mutation.isPending ? 'Saving...' : 'Save Lead'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default LeadForm;
