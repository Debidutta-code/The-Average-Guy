"use client"

import { Suspense } from "react"
import { useEffect, useState, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { Search, Plus, Download, ChevronLeft, ChevronRight, FilterX, MessageCircle, Phone, Globe, ExternalLink, Star, PhoneOff } from "lucide-react"
import Link from "next/link"
import api from "@/utils/api"
import { Badge } from "@/components/ui/Badge"

function LeadsList() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [data, setData] = useState({ leads: [], total: 0, page: 1, pages: 1 })
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState(searchParams.get("search") || "")
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Leads Management</h1>
          <p className="text-gray-500">Manage doctor leads and clinic pipeline</p>
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
            placeholder="Search by doctor or city..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-1 focus:ring-blue-500"
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

            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-gray-400 p-2 hover:text-red-500">
                <FilterX className="w-4 h-4" />
            </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50/50 dark:bg-gray-800/50 text-[10px] uppercase text-gray-500 font-black tracking-widest border-b border-gray-100 dark:border-gray-800">
                    <tr>
                        <th className="px-6 py-4">Doctor / Clinic</th>
                        <th className="px-6 py-4">City</th>
                        <th className="px-6 py-4">Rating</th>
                        <th className="px-6 py-4 text-center">Contact</th>
                        <th className="px-6 py-4 text-center">Score</th>
                        <th className="px-6 py-4 text-center">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                    {loading ? (
                        [...Array(6)].map((_, i) => (
                            <tr key={i} className="animate-pulse">
                                <td colSpan={7} className="px-6 py-8">
                                    <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-3/4 mx-auto" />
                                </td>
                            </tr>
                        ))
                    ) : data.leads.map((lead: any) => (
                        <tr key={lead._id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group">
                            <td className="px-6 py-4">
                                <div className="font-bold text-sm text-gray-900 dark:text-gray-100">{lead.doctorName}</div>
                                <div className="text-xs text-gray-500 truncate max-w-[200px]">{lead.clinicName || lead.businessType}</div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                                {lead.city}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-1 text-sm font-bold text-yellow-500">
                                    <Star className="w-3.5 h-3.5 fill-current" />
                                    {lead.rating}
                                </div>
                                <div className="text-[10px] text-gray-400 font-medium">{lead.reviewCount} reviews</div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                {lead.hasPhone ? (
                                    <div className="flex justify-center gap-2">
                                        <button
                                            onClick={() => window.location.href=`tel:${lead.mobileNumber || lead.phone}`}
                                            className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                                        >
                                            <Phone className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => {
                                                const text = `Hi Dr. ${lead.doctorName}, I noticed your clinic in ${lead.city}...`;
                                                window.open(`https://wa.me/${lead.mobileNumber || lead.phone}?text=${encodeURIComponent(text)}`, '_blank');
                                            }}
                                            className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                                        >
                                            <MessageCircle className="w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <span className="text-xs text-red-400 font-medium inline-flex items-center gap-1">
                                        <PhoneOff className="w-3 h-3" /> N/A
                                    </span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-center">
                                <Badge variant={lead.scoreBadge.toLowerCase() as any}>{lead.scoreBadge}</Badge>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <span className="text-[10px] font-black uppercase bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-400">
                                    {lead.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end gap-2">
                                    {lead.website && (
                                        <button onClick={() => window.open(lead.website, '_blank')} className="p-2 text-gray-400 hover:text-blue-600">
                                            <Globe className="w-4 h-4" />
                                        </button>
                                    )}
                                    <Link href={`/lead/${lead._id}`}>
                                        <Button variant="outline" size="sm" className="font-bold text-xs h-8 px-3">
                                            Profile
                                        </Button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {(!loading && data.leads.length === 0) && (
            <div className="text-center py-20 bg-gray-50/30">
                <p className="text-gray-500 font-medium">No leads found matching your criteria.</p>
            </div>
        )}
      </div>

      {/* Pagination */}
      {data.pages > 1 && (
          <div className="flex items-center justify-between pt-6">
              <p className="text-xs text-gray-500 font-medium">
                  Showing <span className="text-gray-900 font-bold">{data.leads.length}</span> of <span className="text-gray-900 font-bold">{data.total}</span> leads
              </p>
              <div className="flex gap-2">
                  <Button
                      variant="outline"
                      size="sm"
                      disabled={page === 1}
                      onClick={() => setPage(p => p - 1)}
                      className="h-8"
                  >
                      <ChevronLeft className="w-4 h-4 mr-1" /> Previous
                  </Button>
                  <div className="flex gap-1">
                      {[...Array(Math.min(5, data.pages))].map((_, i) => (
                          <Button
                              key={i}
                              variant={page === i + 1 ? 'primary' : 'outline'}
                              size="sm"
                              className="w-8 h-8 font-bold"
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
                      className="h-8"
                  >
                      Next <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
              </div>
          </div>
      )}
    </div>
  )
}

export default function LeadsPage() {
    return (
        <Suspense fallback={<div className="p-8 text-center animate-pulse">Loading leads view...</div>}>
            <LeadsList />
        </Suspense>
    )
}
