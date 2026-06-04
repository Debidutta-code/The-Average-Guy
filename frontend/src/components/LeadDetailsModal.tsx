"use client"

import { useEffect, useState, useCallback } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { ArrowLeft, Phone, Mail, MessageCircle, Calendar, Edit, Trash, Star, Globe, ExternalLink, X } from "lucide-react"
import api from "@/utils/api"
import { format } from "date-fns"
import { motion, AnimatePresence } from "framer-motion"

export default function LeadDetailsModal({ id, isOpen, onClose, onUpdate }: { id: string, isOpen: boolean, onClose: () => void, onUpdate: () => void }) {
  const [lead, setLead] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [note, setNote] = useState("")
  const [sendingEmail, setSendingEmail] = useState(false)

  const fetchLead = useCallback(async () => {
    if (!id) return;
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
    if (isOpen) fetchLead()
  }, [isOpen, fetchLead])

  const handleStatusChange = async (status: string) => {
    try {
      const res = await api.put(`/leads/${id}`, { ...lead, status })
      setLead(res.data)
      onUpdate()
    } catch (err) {
      console.error(err)
    }
  }

  const handleAddNote = async () => {
    if (!note.trim()) return
    try {
      const updatedNotes = [...(lead.notes || []), { text: note }]
      const res = await api.put(`/leads/${id}`, { ...lead, notes: updatedNotes })
      setLead(res.data)
      setNote("")
    } catch (err) {
      console.error(err)
    }
  }

  const generateWhatsAppMsg = (template: number) => {
    const text = template === 1
      ? `Hi Dr. ${lead.doctorName}, I noticed your clinic in ${lead.city}. I build websites that bring patients from Google searches. Can I show you a free demo?`
      : `Just checking in Dr. ${lead.doctorName}, should I send the free clinic website demo?`

    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/${lead.mobileNumber || lead.phone}?text=${encoded}`, '_blank')
  }

  const handleSendEmail = async () => {
    if (!lead.email) return alert('No email address provided for this lead.');
    setSendingEmail(true);
    try {
      const subject = `Digital Presence for ${lead.clinicName || 'your clinic'}`;
      const text = `Hi Dr. ${lead.doctorName},\n\nI noticed your clinic in ${lead.city}. I build websites that bring patients from Google searches.\n\nCan I show you a free demo?\n\nBest regards,\nClinicFlow Team`;

      await api.post(`/leads/${id}/email`, { subject, text });
      alert('Email sent successfully');
      fetchLead();
    } catch (err) {
      console.error(err);
      alert('Failed to send email');
    } finally {
      setSendingEmail(false);
    }
  };

  const handleFollowUpDateChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
        const res = await api.put(`/leads/${id}`, { ...lead, followUpDate: e.target.value });
        setLead(res.data);
    } catch (err) {
        console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
            <h2 className="text-xl font-bold">Lead Details</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full h-8 w-8 p-0">
                <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {loading ? (
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
            ) : lead ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-3xl font-bold">{lead.doctorName}</h1>
                                <p className="text-xl text-gray-500">{lead.clinicName || lead.businessType}</p>
                                <div className="flex items-center mt-4 gap-4">
                                    <Badge variant={lead.scoreBadge.toLowerCase() as any} className="text-sm px-3 py-1">
                                        {lead.scoreBadge} ({lead.score}/10)
                                    </Badge>
                                    <select
                                        value={lead.status}
                                        onChange={(e) => handleStatusChange(e.target.value)}
                                        className="text-sm border rounded px-2 py-1 bg-gray-50 dark:bg-gray-800"
                                    >
                                        {['New', 'Contacted', 'Interested', 'Follow-up', 'Closed'].map(s => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center text-yellow-500 mb-1">
                                    <Star className="w-5 h-5 fill-current" />
                                    <span className="ml-1 font-bold text-lg">{lead.rating}</span>
                                </div>
                                <p className="text-sm text-gray-400">Rating ({lead.reviewCount} reviews)</p>
                            </div>
                        </div>

                        <Card>
                            <CardHeader title="Outreach Actions" />
                            <CardContent className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <Button onClick={() => generateWhatsAppMsg(1)} className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
                                        <MessageCircle className="w-4 h-4" /> WhatsApp
                                    </Button>
                                    <Button onClick={handleSendEmail} disabled={sendingEmail} className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" /> {sendingEmail ? 'Sending...' : 'Email'}
                                    </Button>
                                    <Button variant="outline" onClick={() => window.location.href=`tel:${lead.mobileNumber || lead.phone}`} disabled={!lead.hasPhone} className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" /> Call
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader title="Notes & Activity" />
                            <CardContent className="space-y-4">
                                <div className="flex gap-2">
                                    <input
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        placeholder="Add a note..."
                                        className="flex-1 p-2 border rounded dark:bg-gray-800"
                                    />
                                    <Button onClick={handleAddNote}>Add</Button>
                                </div>
                                <div className="space-y-3 mt-6 max-h-60 overflow-y-auto">
                                    {lead.notes?.map((n: any, i: number) => (
                                        <div key={i} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm">
                                            <p>{n.text}</p>
                                            <p className="text-xs text-gray-400 mt-1">{format(new Date(n.createdAt), 'PPp')}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6 text-sm">
                        <Card>
                            <CardHeader title="Lead Info" />
                            <CardContent className="space-y-3">
                                <div>
                                    <p className="text-gray-500 uppercase text-[10px] font-bold">Location</p>
                                    <p>{lead.city}</p>
                                    <p className="text-gray-400 text-xs">{lead.fullAddress}</p>
                                </div>
                                {lead.googleMapLink && (
                                    <a href={lead.googleMapLink} target="_blank" className="text-blue-600 hover:underline flex items-center text-xs">
                                        View on Maps <ExternalLink className="w-3 h-3 ml-1" />
                                    </a>
                                )}
                                <div className="pt-2">
                                    <p className="text-gray-500 uppercase text-[10px] font-bold">Contact</p>
                                    <p>{lead.mobileNumber || lead.phone || 'N/A'}</p>
                                    <p>{lead.email || 'N/A'}</p>
                                </div>
                                {lead.website && (
                                    <a href={lead.website} target="_blank" className="text-blue-600 hover:underline flex items-center text-xs">
                                        Website <ExternalLink className="w-3 h-3 ml-1" />
                                    </a>
                                )}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader title="Next Follow-up" />
                            <CardContent>
                                <div className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg dark:bg-blue-900/30 dark:text-blue-400">
                                    <Calendar className="w-5 h-5" />
                                    <input
                                        type="date"
                                        className="bg-transparent border-none focus:ring-0 font-medium cursor-pointer w-full text-sm"
                                        value={lead.followUpDate ? new Date(lead.followUpDate).toISOString().split('T')[0] : ''}
                                        onChange={handleFollowUpDateChange}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex gap-2">
                            <Button variant="outline" className="flex-1 text-red-600 border-red-100 hover:bg-red-50" onClick={async () => {
                                if(confirm('Delete lead?')) {
                                    await api.delete(`/leads/${id}`);
                                    onUpdate();
                                    onClose();
                                }
                            }}>
                                <Trash className="w-4 h-4 mr-2" /> Delete
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="p-8 text-center text-gray-500">Lead not found</div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

function ScoreItem({ label, value, active }: any) {
    return (
        <div className={`flex justify-between items-center text-xs ${active ? 'text-gray-900 dark:text-gray-100 font-medium' : 'text-gray-400'}`}>
            <span>{label}</span>
            <span className={active ? (value.startsWith('+') ? 'text-green-600' : 'text-red-600') : ''}>{value}</span>
        </div>
    )
}
