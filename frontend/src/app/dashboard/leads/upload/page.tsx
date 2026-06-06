"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { ArrowLeft, Upload, Download, FileCheck, AlertCircle, PhoneOff, Copy } from "lucide-react"
import Link from "next/link"
import api from "@/utils/api"
import * as XLSX from 'xlsx'

export default function UploadXlsxPage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [summary, setSummary] = useState<any>(null)

  const downloadTemplate = () => {
    const headers = [
      ['googleMapLink', 'name', 'businessType', 'city', 'fullAddress', 'rating', 'reviewCount', 'mobileNumber', 'website', 'details']
    ];
    const ws = XLSX.utils.aoa_to_sheet(headers);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Leads Template");
    XLSX.writeFile(wb, "clinicflow_leads_template.xlsx");
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await api.post('/leads/upload-xlsx', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setSummary(res.data);
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Link href="/dashboard/leads" className="flex items-center text-sm text-gray-500 hover:text-gray-900">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to CRM
      </Link>

      <div>
        <h1 className="text-2xl font-bold">Import Leads</h1>
        <p className="text-gray-500">Upload XLSX files to bulk import doctor leads</p>
      </div>

      {!summary ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
                <CardHeader title="1. Download Template" subtitle="Use our standardized format for best results" />
                <CardContent className="space-y-4">
                    <p className="text-sm text-gray-500">
                        Ensure your XLSX includes columns like name, city, mobileNumber, and rating.
                    </p>
                    <Button variant="outline" className="w-full gap-2" onClick={downloadTemplate}>
                        <Download className="w-4 h-4" /> Download Empty XLSX Template
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader title="2. Upload File" subtitle="Supported format: .xlsx" />
                <CardContent className="space-y-4">
                    <div className="border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl p-8 text-center space-y-4">
                        <Upload className="w-10 h-10 text-gray-400 mx-auto" />
                        <div>
                            <input
                                type="file"
                                id="file-upload"
                                className="hidden"
                                accept=".xlsx"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="file-upload" className="cursor-pointer text-blue-600 hover:underline font-medium">
                                {file ? file.name : "Click to select file"}
                            </label>
                            <p className="text-xs text-gray-500 mt-1">Maximum file size: 10MB</p>
                        </div>
                    </div>
                    <Button
                        className="w-full"
                        disabled={!file || uploading}
                        onClick={handleUpload}
                    >
                        {uploading ? "Processing..." : "Start Import"}
                    </Button>
                </CardContent>
            </Card>
        </div>
      ) : (
        <Card className="bg-white dark:bg-gray-900 shadow-xl border-none">
            <CardContent className="p-8 space-y-8">
                <div className="text-center">
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileCheck className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold">Import Complete</h2>
                    <p className="text-gray-500">Processed {summary.processed} rows from your file</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SummaryCard
                        icon={<CheckCircle2 />}
                        label="New Leads Added"
                        value={summary.added}
                        color="green"
                    />
                    <SummaryCard
                        icon={<Copy className="w-5 h-5" />}
                        label="Duplicates Merged"
                        value={summary.merged}
                        color="orange"
                    />
                    <SummaryCard
                        icon={<PhoneOff className="w-5 h-5" />}
                        label="Missing Mobile"
                        value={summary.missingMobile}
                        color="gray"
                    />
                </div>

                <div className="pt-4 flex gap-3">
                    <Button className="flex-1" onClick={() => router.push('/dashboard/leads')}>
                        Go to CRM Dashboard
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={() => setSummary(null)}>
                        Import Another File
                    </Button>
                </div>
            </CardContent>
        </Card>
      )}
    </div>
  )
}

function CheckCircle2() {
    return <FileCheck className="w-5 h-5" />
}

function SummaryCard({ icon, label, value, color }: any) {
    const colors: any = {
        green: "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400",
        orange: "bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400",
        gray: "bg-gray-50 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400"
    }
    return (
        <div className={`p-6 rounded-2xl ${colors[color]} border border-transparent`}>
            <div className="flex items-center gap-3 mb-2">
                {icon}
                <span className="text-xs font-bold uppercase tracking-wider opacity-70">{label}</span>
            </div>
            <p className="text-3xl font-black">{value}</p>
        </div>
    )
}
