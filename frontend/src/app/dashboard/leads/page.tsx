"use client"

import { Suspense } from "react"
import { useEffect, useState, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { Search, Plus, Download, LayoutGrid, List, ChevronLeft, ChevronRight, FilterX } from "lucide-react"
import Link from "next/link"
import api from "@/utils/api"
import { LeadCard } from "@/components/LeadCard"
import { cn } from "@/utils/cn"

function LeadsList() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [data, setData] = useState({ leads: [], total: 0, page: 1, pages: 1 })
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [view, setView] = useState<'grid' | 'table'>('grid')
  const [page, setPage] = useState(parseInt(searchParams.get("page") || "1"))
  const [filters, setFilters] = useState({
    status: searchParams.get("status") || "",
    scoreBadge: searchParams.get("scoreBadge") || "",
    hasPhone: searchParams.get("hasPhone") || "",
  })

  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

  const updateURL = (newParams: any) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([key, value]) => {
        if (value) params.set(key, String(value));
        else params.delete(key);
    });
    router.replace(`?${params.toString()}`);
  }

  const fetchLeads = async (currentPage: number, currentFilters: any, currentSearch: string) => {
    try {
      setLoading(true)
      const params: any = { page: currentPage, limit: 12, ...currentFilters }
      if (currentSearch) params.search = currentSearch
      const res = await api.get('/leads', { params })
      setData(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => {
        updateURL({ search, page: 1 });
        fetchLeads(1, filters, search);
        setPage(1);
    }, 300);
    return () => { if(searchTimeout.current) clearTimeout(searchTimeout.current) };
  }, [search])

  useEffect(() => {
    const isFirstLoad = !loading && data.leads.length === 0;
    if(!isFirstLoad) {
        updateURL({ ...filters, page });
        fetchLeads(page, filters, search);
    }
  }, [page, filters])

  const clearFilters = () => {
    setFilters({ status: "", scoreBadge: "", hasPhone: "" })
    setSearch("")
    setPage(1)
    router.replace('/dashboard/leads');
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Leads Management</h1>
          <p className="text-gray-500">Click a card to view full CRM profile</p>
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
            placeholder="Search leads..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2 items-center">
            <select
                className="text-sm border rounded-lg p-2 dark:bg-gray-800 dark:border-gray-700 outline-none"
                value={filters.status}
                onChange={(e) => setFilters(f => ({ ...f, status: e.target.value }))}
            >
                <option value="">All Status</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Interested">Interested</option>
                <option value="Converted">Converted</option>
                <option value="Not Interested">Not Interested</option>
            </select>

            <select
                className="text-sm border rounded-lg p-2 dark:bg-gray-800 dark:border-gray-700 outline-none"
                value={filters.scoreBadge}
                onChange={(e) => setFilters(f => ({ ...f, scoreBadge: e.target.value }))}
            >
                <option value="">All Scores</option>
                <option value="Hot">Hot</option>
                <option value="Warm">Warm</option>
                <option value="Cold">Cold</option>
            </select>

            <select
                className="text-sm border rounded-lg p-2 dark:bg-gray-800 dark:border-gray-700 outline-none"
                value={filters.hasPhone}
                onChange={(e) => setFilters(f => ({ ...f, hasPhone: e.target.value }))}
            >
                <option value="">All Contact</option>
                <option value="true">Has Phone</option>
                <option value="false">No Phone</option>
            </select>

            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-gray-400 p-2">
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
                <div key={i} className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl" />
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
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {data.leads.map((lead: any) => (
                                <tr key={lead._id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 cursor-pointer" onClick={() => router.push(`/lead/${lead._id}`)}>
                                    <td className="px-6 py-4 font-bold">{lead.doctorName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{lead.city}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={lead.scoreBadge.toLowerCase() as any}>{lead.scoreBadge}</Badge>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Badge variant="default">{lead.status}</Badge>
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
    </div>
  )
}

export default function LeadsPage() {
    return (
        <Suspense fallback={<div>Loading leads...</div>}>
            <LeadsList />
        </Suspense>
    )
}
