"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import api from "@/utils/api"

export default function NewLeadPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    doctorName: "",
    clinicName: "",
    phone: "",
    email: "",
    city: "",
    specialty: "Dermatologist",
    website: "",
    rating: 0,
    hasInstagram: false,
    source: "Manual"
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/leads', formData)
      router.push('/dashboard/leads')
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (name === 'rating' ? parseFloat(value) : value)
    }))
  }

  return (
    <div className="space-y-6">
      <Link href="/dashboard/leads" className="flex items-center text-sm text-gray-500 hover:text-gray-900">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Leads
      </Link>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader title="Add New Lead" subtitle="Enter doctor details to calculate lead score" />
          <CardContent>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Doctor Name*</label>
                <input name="doctorName" value={formData.doctorName} onChange={handleChange} required className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Clinic Name</label>
                <input name="clinicName" value={formData.clinicName} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Specialty</label>
                <select name="specialty" value={formData.specialty} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
                   <option>Dermatologist</option>
                   <option>Dentist</option>
                   <option>IVF Clinic</option>
                   <option>General Physician</option>
                   <option>Others</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Google Rating</label>
                <input name="rating" type="number" step="0.1" value={formData.rating} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Website URL (If any)</label>
                <input name="website" value={formData.website} onChange={handleChange} placeholder="https://..." className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="hasInstagram" checked={formData.hasInstagram} onChange={handleChange} className="w-4 h-4" />
                <label className="text-sm font-medium">Has Instagram Profile?</label>
              </div>
              <div className="md:col-span-2 pt-4">
                <Button type="submit" className="w-full">Create Lead & Calculate Score</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
