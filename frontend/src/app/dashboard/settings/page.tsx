"use client"

import { Card, CardHeader, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { useAuth } from "@/context/AuthContext"
import { User, Bell, Shield, Globe } from "lucide-react"

export default function SettingsPage() {
  const { user } = useAuth()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500">Manage your account and system preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
            <SettingsNav />
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader title="Profile Settings" subtitle="Update your personal information" />
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input defaultValue={user?.name} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <input defaultValue={user?.email} disabled className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-900 dark:border-gray-800 text-gray-500" />
                    </div>
                </div>
                <Button>Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="System Preferences" subtitle="Configure lead generation defaults" />
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                    <div>
                        <p className="font-medium">Lead Auto-Scoring</p>
                        <p className="text-sm text-gray-500">Automatically calculate scores upon import</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                    <div>
                        <p className="font-medium">Duplicate Detection</p>
                        <p className="text-sm text-gray-500">Prevent importing the same mobile number twice</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function SettingsNav() {
    const items = [
        { name: 'General', icon: User, active: true },
        { name: 'Notifications', icon: Bell },
        { name: 'Security', icon: Shield },
        { name: 'Integration', icon: Globe },
    ]
    return (
        <nav className="space-y-1">
            {items.map(item => (
                <button
                    key={item.name}
                    className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg ${item.active ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800'}`}
                >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                </button>
            ))}
        </nav>
    )
}
