"use client"

import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { MessageCircle, Phone, Mail, CheckCircle, MoreHorizontal, Star, MapPin } from "lucide-react"

export function LeadCard({ lead, onClick, onStatusUpdate }: { lead: any, onClick: () => void, onStatusUpdate: (id: string, status: string) => void }) {
  const generateWhatsAppMsg = (e: React.MouseEvent) => {
    e.stopPropagation()
    const text = `Hi Dr. ${lead.doctorName}, I noticed your clinic in ${lead.city}. I build websites that bring patients from Google searches. Can I show you a free demo?`
    window.open(`https://wa.me/${lead.mobileNumber || lead.phone}?text=${encodeURIComponent(text)}`, '_blank')
  }

  const handleCall = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.location.href = `tel:${lead.mobileNumber || lead.phone}`
  }

  const handleEmail = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.location.href = `mailto:${lead.email}`
  }

  const handleStatusQuick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onStatusUpdate(lead._id, 'Contacted')
  }

  return (
    <Card className="group hover:shadow-md transition-all cursor-pointer border-gray-100 dark:border-gray-800" onClick={onClick}>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1">
            <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">{lead.doctorName}</h3>
            <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-3 h-3 mr-1" />
                {lead.city} • {lead.businessType || lead.specialty}
            </div>
          </div>
          <Badge variant={lead.scoreBadge.toLowerCase() as any}>
            {lead.scoreBadge} {lead.score}
          </Badge>
        </div>

        <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-yellow-500 text-sm font-bold">
                <Star className="w-4 h-4 fill-current mr-1" />
                {lead.rating}
            </div>
            {!lead.hasPhone && (
                <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded">No Phone</span>
            )}
            <span className="text-xs text-gray-400">
                {lead.status}
            </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800">
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full border-green-200 text-green-600 hover:bg-green-50" onClick={generateWhatsAppMsg}>
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full border-blue-200 text-blue-600 hover:bg-blue-50" onClick={handleCall} disabled={!lead.hasPhone}>
              <Phone className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full border-gray-200 text-gray-600 hover:bg-gray-50" onClick={handleEmail} disabled={!lead.email}>
              <Mail className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-2">
             <Button size="sm" variant="ghost" className="h-8 text-xs gap-1 text-gray-500" onClick={handleStatusQuick}>
                <CheckCircle className="w-3 h-3" /> Mark Contacted
             </Button>
             <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="w-4 h-4" />
             </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
