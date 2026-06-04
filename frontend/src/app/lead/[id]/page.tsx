"use client"

import { useEffect, useState, useCallback } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardHeader, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { ArrowLeft, Phone, Mail, MessageCircle, Calendar, Edit2, Trash2, Star, Globe, ExternalLink, MapPin, Save, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import api from "@/utils/api"
import { format } from "date-fns"

export default function LeadProfilePage() {
  const params = useParams()
  const id = params.id as string
  const router = useRouter()

  const [lead, setLead] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [note, setNote] = useState("")
  const [editingField, setEditingField] = useState<string | null>(null)
  const [editValue, setEditValue] = useState("")

  const fetchLead = useCallback(async () => {
    try {
      setLoading(true)
      const res = await api.get(`/leads/${id}`)
      setLead(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchLead()
  }, [fetchLead])

  const handleUpdateField = async (field: string, value: any) => {
    try {
      const res = await api.patch(`/leads/${id}/update-field`, { field, value })
      setLead(res.data)
      setEditingField(null)
    } catch (err) {
      console.error(err)
    }
  }

  const handleStatusChange = async (status: string) => {
    try {
      const res = await api.put(`/leads/${id}`, { status })
      setLead(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleCallOutcomeChange = async (callOutcome: string) => {
    try {
        const res = await api.put(`/leads/${id}`, { callOutcome });
        setLead(res.data);
    } catch (err) {
        console.error(err);
    }
  };

  const handleFollowUpChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
        const res = await api.put(`/leads/${id}`, { followUpDate: e.target.value });
        setLead(res.data);
    } catch (err) {
        console.error(err);
    }
  };

  const handleAddNote = async () => {
    if (!note.trim()) return
    try {
      const updatedNotes = [...(lead.notes || []), { text: note }]
      const res = await api.put(`/leads/${id}`, { notes: updatedNotes })
      setLead(res.data)
      setNote("")
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return <div className="flex items-center justify-center h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>
  if (!lead) return <div className="p-8 text-center">Lead not found. <Link href="/dashboard/leads" className="text-blue-600 underline">Back to leads</Link></div>

  return (
    <div className="space-y-6 pb-20">
      <div className="flex justify-between items-center">
        <Button variant="ghost" onClick={() => router.back()} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
        <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-red-600 border-red-100 hover:bg-red-50" onClick={async () => {
                if(confirm('Permanently delete this lead?')) {
                    await api.delete(`/leads/${id}`);
                    router.push('/dashboard/leads');
                }
            }}>
                <Trash2 className="w-4 h-4 mr-2" /> Delete Lead
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none shadow-sm overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700" />
            <CardContent className="relative pt-16 p-8">
                <div className="absolute -top-12 left-8 bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-lg">
                    <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center rounded-xl">
                        <Star className="w-10 h-10 text-blue-600 fill-current" />
                    </div>
                </div>

                <div className="flex justify-between items-start">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-black">{lead.doctorName}</h1>
                            <Badge variant={lead.scoreBadge.toLowerCase() as any} className="px-3 py-1 text-sm">{lead.scoreBadge}</Badge>
                        </div>
                        <p className="text-xl text-gray-500 font-medium">{lead.clinicName || lead.businessType}</p>
                        <div className="flex items-center text-gray-400 gap-4 text-sm font-medium">
                            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {lead.city}</span>
                            <span className="flex items-center"><Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" /> {lead.rating} ({lead.reviewCount} reviews)</span>
                        </div>
                    </div>
                </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Lead Overview" subtitle="Profile details and location" />
            <CardContent className="p-0">
                <div className="divide-y divide-gray-50 dark:divide-gray-800">
                    <EditableField label="Full Name" value={lead.doctorName} onSave={(v) => handleUpdateField('doctorName', v)} />
                    <EditableField label="Clinic Name" value={lead.clinicName} onSave={(v) => handleUpdateField('clinicName', v)} />
                    <EditableField label="Phone Number" value={lead.mobileNumber || lead.phone} onSave={(v) => handleUpdateField('mobileNumber', v)} />
                    <EditableField label="Email" value={lead.email} onSave={(v) => handleUpdateField('email', v)} />
                    <EditableField label="Website" value={lead.website} onSave={(v) => handleUpdateField('website', v)} />
                    <EditableField label="City" value={lead.city} onSave={(v) => handleUpdateField('city', v)} />
                    <EditableField label="Full Address" value={lead.fullAddress} onSave={(v) => handleUpdateField('fullAddress', v)} />
                    <div className="px-8 py-4 flex justify-between items-center group">
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider w-1/3">Maps Link</span>
                        <div className="flex-1 flex justify-between items-center">
                            <span className="truncate text-blue-600 text-sm font-medium pr-4">{lead.googleMapLink || 'N/A'}</span>
                            {lead.googleMapLink && (
                                <a href={lead.googleMapLink} target="_blank" className="p-2 hover:bg-gray-100 rounded-lg"><ExternalLink className="w-4 h-4" /></a>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Activity Timeline" subtitle="Track every interaction and update" />
            <CardContent>
                <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100 dark:before:bg-gray-800">
                    {lead.activityTimeline?.slice().reverse().map((activity: any, i: number) => (
                        <div key={i} className="relative pl-8">
                            <div className="absolute left-0 top-1.5 w-[24px] h-[24px] bg-white dark:bg-gray-900 border-2 border-blue-600 rounded-full flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold text-sm">{activity.action}</p>
                                <p className="text-sm text-gray-500">{activity.details}</p>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {format(new Date(activity.createdAt), 'PPp')}
                                </p>
                            </div>
                        </div>
                    ))}
                    {(!lead.activityTimeline || lead.activityTimeline.length === 0) && (
                        <p className="text-center text-gray-500 py-4 text-sm">No activity recorded yet.</p>
                    )}
                </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          <Card className="bg-blue-600 text-white border-none">
            <CardHeader title="CRM Status" />
            <CardContent className="space-y-6">
                <div>
                    <label className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2 block">Pipeline Status</label>
                    <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(e.target.value)}
                        className="w-full bg-white/10 border-white/20 text-white rounded-xl p-3 focus:ring-0 outline-none"
                    >
                        {['New', 'Contacted', 'Follow-up', 'Interested', 'Converted', 'Not Interested'].map(s => (
                            <option key={s} value={s} className="text-gray-900">{s}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2 block">Call Outcome</label>
                    <select
                        value={lead.callOutcome}
                        onChange={(e) => handleCallOutcomeChange(e.target.value)}
                        className="w-full bg-white/10 border-white/20 text-white rounded-xl p-3 focus:ring-0 outline-none"
                    >
                        {['None', 'Did Not Pick Up', 'Busy', 'Asked to Call Later (TTYL)', 'Wrong Number', 'Interested'].map(s => (
                            <option key={s} value={s} className="text-gray-900">{s}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2 block">Follow-up Date</label>
                    <div className="flex items-center gap-3 bg-white/10 border-white/20 rounded-xl p-3">
                        <Calendar className="w-5 h-5 opacity-70" />
                        <input
                            type="date"
                            className="bg-transparent border-none focus:ring-0 w-full text-white cursor-pointer"
                            value={lead.followUpDate ? new Date(lead.followUpDate).toISOString().split('T')[0] : ''}
                            onChange={handleFollowUpChange}
                        />
                    </div>
                </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Quick Actions" />
            <CardContent className="grid grid-cols-2 gap-3">
                <ActionBtn icon={<Phone className="w-4 h-4" />} label="Call" color="blue" onClick={() => window.location.href=`tel:${lead.mobileNumber || lead.phone}`} disabled={!lead.hasPhone} />
                <ActionBtn icon={<MessageCircle className="w-4 h-4" />} label="WhatsApp" color="green" onClick={() => {
                    const text = `Hi Dr. ${lead.doctorName}, I noticed your clinic in ${lead.city}...`;
                    window.open(`https://wa.me/${lead.mobileNumber || lead.phone}?text=${encodeURIComponent(text)}`, '_blank');
                }} disabled={!lead.hasPhone} />
                <ActionBtn icon={<Mail className="w-4 h-4" />} label="Email" color="purple" onClick={() => window.location.href=`mailto:${lead.email}`} disabled={!lead.email} />
                <ActionBtn icon={<Globe className="w-4 h-4" />} label="Website" color="gray" onClick={() => window.open(lead.website, '_blank')} disabled={!lead.website} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Notes" />
            <CardContent className="space-y-4">
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Type interaction note..."
                    className="w-full p-4 border rounded-xl dark:bg-gray-800 text-sm h-32 outline-none focus:border-blue-600 transition-colors"
                />
                <Button className="w-full gap-2" onClick={handleAddNote}>
                    <CheckCircle2 className="w-4 h-4" /> Save Note
                </Button>

                <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    {lead.notes?.slice().reverse().map((n: any, i: number) => (
                        <div key={i} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-sm">
                            <p>{n.text}</p>
                            <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-wider">{format(new Date(n.createdAt), 'PPp')}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function EditableField({ label, value, onSave }: { label: string, value: string, onSave: (v: string) => void }) {
    const [isEditing, setIsEditing] = useState(false);
    const [val, setVal] = useState(value || '');

    useEffect(() => { setVal(value || '') }, [value]);

    const handleSave = () => {
        onSave(val);
        setIsEditing(false);
    }

    return (
        <div className="px-8 py-4 flex justify-between items-center group">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider w-1/3">{label}</span>
            <div className="flex-1 flex justify-between items-center min-w-0">
                {isEditing ? (
                    <input
                        autoFocus
                        className="flex-1 border-b border-blue-600 bg-transparent text-sm font-medium outline-none py-1 min-w-0"
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                    />
                ) : (
                    <span className="truncate text-sm font-bold pr-4">{value || 'N/A'}</span>
                )}
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                        <Edit2 className="w-3 h-3 text-gray-400" />
                    </button>
                )}
            </div>
        </div>
    )
}

function ActionBtn({ icon, label, color, onClick, disabled }: any) {
    const colors: any = {
        blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
        green: 'bg-green-50 text-green-600 hover:bg-green-100',
        purple: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
        gray: 'bg-gray-50 text-gray-600 hover:bg-gray-100',
    }
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-colors gap-2 ${colors[color]} disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed`}
        >
            {icon}
            <span className="text-[10px] font-black uppercase tracking-tighter">{label}</span>
        </button>
    )
}
