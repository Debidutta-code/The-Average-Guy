"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardHeader, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { ArrowLeft, Phone, Mail, MessageCircle, Calendar, Edit, Trash, Star, Instagram, Globe, ExternalLink } from "lucide-react"
import Link from "next/link"
import api from "@/utils/api"
import { format } from "date-fns"

export default function LeadDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [lead, setLead] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [note, setNote] = useState("")

  useEffect(() => {
    fetchLead()
  }, [id])

  const fetchLead = async () => {
    try {
      const res = await api.get(`/leads/${id}`)
      setLead(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (status: string) => {
    try {
      const res = await api.put(`/leads/${id}`, { ...lead, status })
      setLead(res.data)
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
      ? `Hi Dr. ${lead.doctorName}, I noticed your clinic in ${lead.city}. I build websites that bring patients from Google searches like 'best ${lead.specialty?.toLowerCase()} near me'. Can I show you a free demo?`
      : `Just checking in Dr. ${lead.doctorName}, should I send the free clinic website demo?`

    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/${lead.phone}?text=${encoded}`, '_blank')
  }

  if (loading) return <div>Loading...</div>
  if (!lead) return <div>Lead not found.</div>

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center">
        <Link href="/dashboard/leads" className="flex items-center text-sm text-gray-500 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Leads
        </Link>
        <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50" onClick={async () => {
                if(confirm('Delete lead?')) {
                    await api.delete(`/leads/${id}`);
                    router.push('/dashboard/leads');
                }
            }}>
                <Trash className="w-4 h-4 mr-2" /> Delete
            </Button>
            <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" /> Edit
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold">{lead.doctorName}</h1>
                  <p className="text-xl text-gray-500">{lead.clinicName}</p>
                  <div className="flex items-center mt-4 gap-4">
                    <Badge variant={lead.scoreBadge.toLowerCase() as any} className="text-sm px-3 py-1">
                      {lead.scoreBadge} ({lead.score}/10)
                    </Badge>
                    <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(e.target.value)}
                        className="text-sm border rounded px-2 py-1 bg-gray-50"
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
                  <p className="text-sm text-gray-400">Google Rating</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase">Specialty</p>
                    <p className="font-semibold">{lead.specialty}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase">City</p>
                    <p className="font-semibold">{lead.city}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase">Source</p>
                    <p className="font-semibold">{lead.source}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase">Instagram</p>
                    <p className="font-semibold">{lead.hasInstagram ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Outreach Actions" />
            <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button onClick={() => generateWhatsAppMsg(1)} className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" /> WhatsApp (Intro)
                    </Button>
                    <Button onClick={() => generateWhatsAppMsg(2)} variant="outline" className="text-green-600 border-green-200 hover:bg-green-50 flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" /> WhatsApp (F-up)
                    </Button>
                    <Button className="flex items-center gap-2">
                        <Mail className="w-4 h-4" /> Send Cold Email
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
                <div className="space-y-4 mt-6">
                    {lead.notes?.map((n: any, i: number) => (
                        <div key={i} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="text-sm">{n.text}</p>
                            <p className="text-xs text-gray-400 mt-2">{format(new Date(n.createdAt), 'PPp')}</p>
                        </div>
                    ))}
                    {(!lead.notes || lead.notes.length === 0) && <p className="text-center text-gray-500 text-sm py-4">No notes yet.</p>}
                </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader title="Contact Info" />
            <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>{lead.phone || 'Not available'}</span>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>{lead.email || 'Not available'}</span>
                </div>
                {lead.website && (
                    <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <a href={lead.website} target="_blank" className="text-blue-600 hover:underline flex items-center">
                            Website <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                    </div>
                )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Score Breakdown" />
            <CardContent>
                <div className="space-y-3">
                    <ScoreItem label="No Website" value="+3" active={!lead.website} />
                    <ScoreItem label="Specialty (Derm/Dentist)" value="+2" active={['Dermatologist', 'Dentist'].includes(lead.specialty)} />
                    <ScoreItem label="High Rating (>4.0)" value="+2" active={lead.rating > 4.0} />
                    <ScoreItem label="Tier 2/3 City" value="+1" active={!['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'].includes(lead.city)} />
                    <ScoreItem label="Has Instagram" value="+1" active={lead.hasInstagram} />
                    <ScoreItem label="Has Website" value="-2" active={!!lead.website} />
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                    <span className="font-bold">Final Score</span>
                    <span className="text-2xl font-black text-blue-600">{lead.score}</span>
                </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Next Follow-up" />
            <CardContent>
                <div className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">Set a date</span>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ScoreItem({ label, value, active }: any) {
    return (
        <div className={`flex justify-between items-center text-sm ${active ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
            <span>{label}</span>
            <span className={active ? (value.startsWith('+') ? 'text-green-600' : 'text-red-600') : ''}>{value}</span>
        </div>
    )
}
