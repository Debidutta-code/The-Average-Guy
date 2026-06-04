"use client"

import { useEffect, useState } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/Card"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import api from "@/utils/api"
import { useAuth } from "@/context/AuthContext"

export default function AnalyticsPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user } = useAuth()
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await api.get('/leads/stats')
        setData(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchAnalytics()
  }, [])

  if (loading) return <div>Loading analytics...</div>

  const statusData = data?.statusCounts?.map((s: any) => ({ name: s._id, value: s.count })) || []
  const scoreData = [
    { name: 'Hot', value: data?.hotLeads || 0, color: '#ef4444' },
    { name: 'Warm', value: data?.warmLeads || 0, color: '#f97316' },
    { name: 'Cold', value: data?.coldLeads || 0, color: '#3b82f6' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <p className="text-gray-500">Performance and lead distribution insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader title="Lead Scoring Distribution" />
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={scoreData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {scoreData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 text-sm">
                {scoreData.map(s => (
                    <div key={s.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                        <span>{s.name} ({s.value})</span>
                    </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Conversion Funnel" />
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statusData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
          <CardHeader title="Top Lead Sources" />
          <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <SourceCard label="Google Maps" value="65%" count={Math.round((data?.totalLeads || 0) * 0.65)} />
                  <SourceCard label="Practo" value="20%" count={Math.round((data?.totalLeads || 0) * 0.20)} />
                  <SourceCard label="Manual" value="15%" count={Math.round((data?.totalLeads || 0) * 0.15)} />
              </div>
          </CardContent>
      </Card>
    </div>
  )
}

function SourceCard({ label, value, count }: any) {
    return (
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 mb-1">{label}</p>
            <div className="flex items-end gap-2">
                <span className="text-2xl font-bold">{value}</span>
                <span className="text-sm text-gray-400 pb-1">{count} leads</span>
            </div>
            <div className="mt-4 w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: value }} />
            </div>
        </div>
    )
}
