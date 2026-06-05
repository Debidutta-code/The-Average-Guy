"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Search, MapPin, Play, Loader2, CheckCircle, Copy, AlertTriangle, List, ArrowRight } from "lucide-react"
import api from "@/utils/api"
import Link from "next/link"

export default function ScraperPage() {
  const [formData, setFormData] = useState({ businessType: "Dermatologist", city: "", limit: 50 })
  const [status, setStatus] = useState<any>({ active: false, found: 0, inserted: 0, merged: 0, error: null })
  const [loading, setLoading] = useState(false)
  const pollingRef = useRef<NodeJS.Timeout | null>(null)

  const startScraping = async () => {
    if (!formData.city) return alert('Please enter a city');
    if (!confirm(`Start scraping for ${formData.businessType} in ${formData.city}?`)) return;

    try {
      setLoading(true)
      await api.post('/leads/scrape', formData)
      pollStatus()
    } catch (err) {
      console.error(err)
      alert('Failed to start scraper')
    } finally {
      setLoading(false)
    }
  }

  const pollStatus = async () => {
    try {
      const res = await api.get('/leads/scrape/status')
      setStatus(res.data)

      if (res.data.active) {
        pollingRef.current = setTimeout(pollStatus, 2000)
      } else {
        if (pollingRef.current) clearTimeout(pollingRef.current)
      }
    } catch (err) {
      console.error('Polling error:', err)
    }
  }

  useEffect(() => {
    pollStatus()
    return () => { if (pollingRef.current) clearTimeout(pollingRef.current) }
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Google Maps Scraper</h1>
        <p className="text-gray-500">Automated doctor lead generation and database enrichment</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Panel */}
        <Card className="lg:col-span-1 h-fit">
          <CardHeader title="Search Parameters" subtitle="Configure your scraping run" />
          <CardContent className="space-y-4">
            <div>
                <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Specialty / Category</label>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        className="w-full pl-10 p-2.5 border rounded-xl dark:bg-gray-800 dark:border-gray-700 outline-none focus:border-blue-600"
                        value={formData.businessType}
                        onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                        placeholder="e.g. Dentist"
                    />
                </div>
            </div>
            <div>
                <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Target City</label>
                <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        className="w-full pl-10 p-2.5 border rounded-xl dark:bg-gray-800 dark:border-gray-700 outline-none focus:border-blue-600"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        placeholder="e.g. Bhubaneswar"
                    />
                </div>
            </div>
            <div>
                <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Result Limit</label>
                <select
                    className="w-full p-2.5 border rounded-xl dark:bg-gray-800 dark:border-gray-700 outline-none"
                    value={formData.limit}
                    onChange={(e) => setFormData({...formData, limit: parseInt(e.target.value)})}
                >
                    {[20, 50, 100, 200, 500].map(v => <option key={v} value={v}>{v} Leads</option>)}
                </select>
            </div>
            <Button
                className="w-full py-6 gap-2"
                onClick={startScraping}
                disabled={status.active || loading}
            >
                {status.active ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5 fill-current" />}
                {status.active ? "Scraping in Progress..." : "Launch Scraper"}
            </Button>
          </CardContent>
        </Card>

        {/* Live Status */}
        <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatusCard
                    label="Leads Found"
                    value={status.found}
                    icon={<Search className="w-5 h-5" />}
                    color="blue"
                />
                <StatusCard
                    label="Inserted"
                    value={status.inserted}
                    icon={<CheckCircle className="w-5 h-5" />}
                    color="green"
                />
                <StatusCard
                    label="Merged / Dups"
                    value={status.merged}
                    icon={<Copy className="w-5 h-5" />}
                    color="orange"
                />
            </div>

            {status.error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 flex gap-3 items-center">
                    <AlertTriangle className="w-5 h-5" />
                    <p className="text-sm font-medium">{status.error}</p>
                </div>
            )}

            {!status.active && status.found > 0 && (
                <Card className="bg-blue-600 text-white border-none shadow-xl">
                    <CardContent className="p-8 flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-bold">Collection Complete</h3>
                            <p className="opacity-80">Processed {status.found} leads successfully.</p>
                        </div>
                        <Link href="/dashboard/leads">
                            <Button variant="secondary" className="gap-2">
                                View in CRM <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            )}

            <Card>
                <CardHeader title="System Status" subtitle="Live feed from the scraping engine" />
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800">
                            <span className="text-sm text-gray-500 font-medium">Engine Status</span>
                            <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${status.active ? 'bg-green-100 text-green-700 animate-pulse' : 'bg-gray-100 text-gray-500'}`}>
                                {status.active ? 'Active' : 'Idle'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800">
                            <span className="text-sm text-gray-500 font-medium">Auto-Insert</span>
                            <span className="text-xs font-bold text-blue-600">Enabled</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-800">
                            <span className="text-sm text-gray-500 font-medium">Deduplication</span>
                            <span className="text-xs font-bold text-green-600 font-mono">Strict Mode</span>
                        </div>
                    </div>

                    {status.results?.length > 0 && (
                        <div className="mt-8 space-y-4">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Real-time Feed</h4>
                            <div className="divide-y divide-gray-50 dark:divide-gray-800 border rounded-xl overflow-hidden bg-gray-50/50 dark:bg-gray-800/50">
                                {status.results.map((res: any, i: number) => (
                                    <div key={i} className="p-3 flex justify-between items-center text-sm">
                                        <div className="min-w-0 flex-1">
                                            <p className="font-bold truncate">{res.doctorName}</p>
                                            <p className="text-xs text-gray-500 truncate">{res.city} • {res.rating}★</p>
                                        </div>
                                        <Badge variant={res.status === 'New' ? 'hot' : 'warm'} className="ml-4 flex-shrink-0">
                                            {res.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}

function StatusCard({ label, value, icon, color }: any) {
    const colors: any = {
        blue: "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
        green: "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400",
        orange: "bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400"
    }
    return (
        <Card className="border-none shadow-sm">
            <CardContent className="p-6">
                <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${colors[color]}`}>
                        {icon}
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{label}</p>
                        <p className="text-3xl font-black">{value}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
