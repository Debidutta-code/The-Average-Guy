"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Search, Plus, Download, LayoutGrid, List, ChevronLeft, ChevronRight, PhoneOff, FilterX } from "lucide-react"
import Link from "next/link"
import api from "@/utils/api"
import { LeadCard } from "@/components/LeadCard"
import LeadDetailsModal from "@/components/LeadDetailsModal"
import { cn } from "@/utils/cn"

export default function LeadsPage() {
  const [data, setData] = useState({ leads: [], total: 0, page: 1, pages: 1 })
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [view, setView] = useState<'grid' | 'table'>('grid')
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [filters, setFilters] = useState({ city: "", specialty: "", status: "", hasPhone: "" })

  const fetchLeads = async () => {
    try {
      setLoading(true)
      const params: any = { page, limit: 12, ...filters }
      if (search) params.search = search
      const res = await api.get('/leads', { params })
      setData(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [page, filters])

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
        await api.put(`/leads/${id}`, { status });
        fetchLeads();
    } catch (err) {
        console.error(err);
    }
  }

  const clearFilters = () => {
    setFilters({ city: "", specialty: "", status: "", hasPhone: "" })
    setSearch("")
    setPage(1)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Leads CRM</h1>
          <p className="text-gray-500">Modern lead management and tracking</p>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard/leads/upload">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" /> Import XLSX
            </Button>
          </Link>
          <Link href="/dashboard/leads/new">
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Lead
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, city..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchLeads()}
          />
        </div>
        <div className="flex flex-wrap gap-2 items-center">
            <select
                className="text-sm border rounded-lg p-2 dark:bg-gray-800 dark:border-gray-700"
                value={filters.status}
                onChange={(e) => setFilters(f => ({ ...f, status: e.target.value }))}
            >
                <option value="">All Status</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Interested">Interested</option>
                <option value="Closed">Closed</option>
            </select>

            <select
                className="text-sm border rounded-lg p-2 dark:bg-gray-800 dark:border-gray-700"
                value={filters.scoreBadge}
                onChange={(e) => setFilters(f => ({ ...f, scoreBadge: e.target.value }))}
            >
                <option value="">All Scores</option>
                <option value="Hot">Hot</option>
                <option value="Warm">Warm</option>
                <option value="Cold">Cold</option>
            </select>

            <Button
                variant={filters.hasPhone === 'false' ? 'secondary' : 'outline'}
                size="sm"
                className="gap-2"
                onClick={() => setFilters(f => ({ ...f, hasPhone: f.hasPhone === 'false' ? '' : 'false' }))}
            >
                <PhoneOff className="w-4 h-4" /> No Contact
            </Button>

            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-gray-400">
                <FilterX className="w-4 h-4" />
            </Button>

            <div className="flex border rounded-lg overflow-hidden ml-2">
                <button
                    className={cn("p-2", view === 'grid' ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900")}
                    onClick={() => setView('grid')}
                >
                    <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                    className={cn("p-2", view === 'table' ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900")}
                    onClick={() => setView('table')}
                >
                    <List className="w-4 h-4" />
                </button>
            </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1,2,3,4,5,6,7,8].map(i => (
                <div key={i} className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl" />
            ))}
        </div>
      ) : (
        <>
            {view === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {data.leads.map((lead: any) => (
                        <LeadCard
                            key={lead._id}
                            lead={lead}
                            onClick={() => setSelectedLeadId(lead._id)}
                            onStatusUpdate={handleStatusUpdate}
                        />
                    ))}
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-gray-800/50 text-xs uppercase text-gray-500 font-bold">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">City</th>
                                <th className="px-6 py-4">Score</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {data.leads.map((lead: any) => (
                                <tr key={lead._id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 cursor-pointer" onClick={() => setSelectedLeadId(lead._id)}>
                                    <td className="px-6 py-4 font-medium">{lead.doctorName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{lead.city}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={lead.scoreBadge.toLowerCase() as any}>{lead.scoreBadge}</Badge>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm">{lead.status}</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="ghost" size="sm">Details</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {data.leads.length === 0 && (
                <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-800">
                    <p className="text-gray-500">No leads found matching your criteria.</p>
                </div>
            )}

            {/* Pagination */}
            {data.pages > 1 && (
                <div className="flex items-center justify-between pt-6">
                    <p className="text-sm text-gray-500">
                        Showing {data.leads.length} of {data.total} leads
                    </p>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={page === 1}
                            onClick={() => setPage(p => p - 1)}
                        >
                            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
                        </Button>
                        <div className="flex gap-1">
                            {[...Array(data.pages)].map((_, i) => (
                                <Button
                                    key={i}
                                    variant={page === i + 1 ? 'primary' : 'outline'}
                                    size="sm"
                                    className="w-8"
                                    onClick={() => setPage(i + 1)}
                                >
                                    {i + 1}
                                </Button>
                            ))}
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            disabled={page === data.pages}
                            onClick={() => setPage(p => p + 1)}
                        >
                            Next <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                </div>
            )}
        </>
      )}

      <LeadDetailsModal
        id={selectedLeadId || ""}
        isOpen={!!selectedLeadId}
        onClose={() => setSelectedLeadId(null)}
        onUpdate={fetchLeads}
      />
    </div>
  )
}
