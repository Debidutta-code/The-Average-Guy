"use client"

import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Star, MapPin, Phone, PhoneOff, MessageCircle, Mail, Map as MapIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/Button"

export function LeadCard({ lead }: { lead: any }) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/lead/${lead._id}`)
  }

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Card
      className="group hover:shadow-xl transition-all cursor-pointer border-gray-100 dark:border-gray-800 relative overflow-hidden h-full"
      onClick={handleClick}
    >
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1">
            <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors line-clamp-1">{lead.doctorName}</h3>
            <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-3 h-3 mr-1" />
                {lead.city}
            </div>
          </div>
          <Badge variant={lead.scoreBadge.toLowerCase() as any}>
            {lead.scoreBadge}
          </Badge>
        </div>

        <div className="flex items-center gap-4 mt-auto">
            <div className="flex items-center text-yellow-500 text-sm font-bold">
                <Star className="w-4 h-4 fill-current mr-1" />
                {lead.rating}
            </div>
            <div className="flex items-center gap-1">
                {lead.hasPhone ? (
                    <span className="flex items-center text-xs text-green-600 font-medium">
                        <Phone className="w-3 h-3 mr-1" /> Yes
                    </span>
                ) : (
                    <span className="flex items-center text-xs text-red-500 font-medium">
                        <PhoneOff className="w-3 h-3 mr-1" /> No
                    </span>
                )}
            </div>
            <Badge variant="default" className="text-[10px] uppercase ml-auto">
                {lead.status}
            </Badge>
        </div>

        {/* Hover Quick Actions */}
        <div
            className="absolute inset-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4"
            onClick={stopPropagation}
        >
            <Button size="sm" variant="outline" className="h-10 w-10 p-0 rounded-full bg-white dark:bg-gray-800 shadow-sm border-blue-100" onClick={() => window.location.href=`tel:${lead.mobileNumber || lead.phone}`} disabled={!lead.hasPhone}>
                <Phone className="w-4 h-4 text-blue-600" />
            </Button>
            <Button size="sm" variant="outline" className="h-10 w-10 p-0 rounded-full bg-white dark:bg-gray-800 shadow-sm border-green-100" onClick={() => {
                const text = `Hi Dr. ${lead.doctorName}, I noticed your clinic in ${lead.city}...`;
                window.open(`https://wa.me/${lead.mobileNumber || lead.phone}?text=${encodeURIComponent(text)}`, '_blank');
            }} disabled={!lead.hasPhone}>
                <MessageCircle className="w-4 h-4 text-green-600" />
            </Button>
            <Button size="sm" variant="outline" className="h-10 w-10 p-0 rounded-full bg-white dark:bg-gray-800 shadow-sm border-purple-100" onClick={() => window.location.href=`mailto:${lead.email}`} disabled={!lead.email}>
                <Mail className="w-4 h-4 text-purple-600" />
            </Button>
            <Button size="sm" variant="outline" className="h-10 w-10 p-0 rounded-full bg-white dark:bg-gray-800 shadow-sm" onClick={() => window.open(lead.googleMapLink, '_blank')} disabled={!lead.googleMapLink}>
                <MapIcon className="w-4 h-4 text-gray-600" />
            </Button>
            <Button size="sm" className="ml-2" onClick={handleClick}>
                View Profile
            </Button>
        </div>
      </CardContent>
    </Card>
  )
}
