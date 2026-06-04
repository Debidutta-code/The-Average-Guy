"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/Card"
import { Users, Flame, Sun, Snowflake, TrendingUp } from "lucide-react"
import api from "@/utils/api"
import { cn } from "@/utils/cn"

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get('/leads/stats')
        setStats(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  if (loading) return <div>Loading dashboard...</div>

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
        <p className="text-gray-500 dark:text-gray-400">Track your lead generation progress</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Leads" value={stats?.totalLeads || 0} icon={Users} color="blue" />
        <StatCard title="Hot Leads" value={stats?.hotLeads || 0} icon={Flame} color="red" />
        <StatCard title="Warm Leads" value={stats?.warmLeads || 0} icon={Sun} color="orange" />
        <StatCard title="Cold Leads" value={stats?.coldLeads || 0} icon={Snowflake} color="gray" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <Card>
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
               <h3 className="font-semibold">Conversion Status</h3>
            </div>
            <CardContent>
               <div className="space-y-4 py-2">
                  {stats?.statusCounts?.map((s: any) => (
                     <div key={s._id} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{s._id}</span>
                        <div className="flex items-center gap-3">
                           <div className="w-48 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                              <div
                                 className="h-full bg-blue-600"
                                 style={{ width: `${(s.count / (stats.totalLeads || 1)) * 100}%` }}
                              />
                           </div>
                           <span className="text-sm font-medium w-8 text-right">{s.count}</span>
                        </div>
                     </div>
                  ))}
               </div>
            </CardContent>
         </Card>

         <Card className="flex flex-col justify-center items-center p-8 text-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none">
            <TrendingUp className="w-12 h-12 mb-4 opacity-80" />
            <h3 className="text-xl font-bold mb-2">Grow Your Pipeline</h3>
            <p className="text-blue-100 mb-6">You have {stats?.hotLeads} hot leads waiting for outreach. Start your WhatsApp campaign now.</p>
            <button className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
               Start Outreach
            </button>
         </Card>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon: Icon, color }: any) {
  const colors: any = {
    blue: "text-blue-600 bg-blue-50 dark:bg-blue-900/20",
    red: "text-red-600 bg-red-50 dark:bg-red-900/20",
    orange: "text-orange-600 bg-orange-50 dark:bg-orange-900/20",
    gray: "text-gray-600 bg-gray-50 dark:bg-gray-900/20",
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
            <h4 className="text-2xl font-bold mt-1">{value}</h4>
          </div>
          <div className={cn("p-3 rounded-lg", colors[color])}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
