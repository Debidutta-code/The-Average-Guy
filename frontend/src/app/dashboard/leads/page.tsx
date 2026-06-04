"use client"

import { useEffect, useState } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Search, Plus, Filter, Download, MoreHorizontal, ExternalLink } from "lucide-react"
import Link from "next/link"
import api from "@/utils/api"

export default function LeadsPage() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const res = await api.get('/leads')
      setLeads(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const filteredLeads = leads.filter((lead: any) =>
    lead.doctorName.toLowerCase().includes(search.toLowerCase()) ||
    lead.clinicName?.toLowerCase().includes(search.toLowerCase()) ||
    lead.city?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Leads Management</h1>
          <p className="text-gray-500">Manage and score your clinic leads</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" /> Import CSV
          </Button>
          <Link href="/dashboard/leads/new">
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Lead
            </Button>
          </Link>
        </div>
      </div>

      <Card>
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex flex-wrap gap-4 items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="gap-2">
              <Filter className="w-4 h-4" /> Filter
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Doctor / Clinic</th>
                <th className="px-6 py-4 font-semibold">City / Specialty</th>
                <th className="px-6 py-4 font-semibold">Score</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {filteredLeads.map((lead: any) => (
                <tr key={lead._id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium">{lead.doctorName}</div>
                    <div className="text-sm text-gray-500">{lead.clinicName}</div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div>{lead.city}</div>
                    <div className="text-gray-500">{lead.specialty}</div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={lead.scoreBadge.toLowerCase() as any}>
                      {lead.scoreBadge} ({lead.score})
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm px-2 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/dashboard/leads/${lead._id}`}>
                        <Button variant="ghost" size="sm">View Details</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredLeads.length === 0 && (
             <div className="p-8 text-center text-gray-500">
                No leads found.
             </div>
          )}
        </div>
      </Card>
    </div>
  )
}
