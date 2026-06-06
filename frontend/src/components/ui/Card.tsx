import { cn } from "@/utils/cn"

export function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm overflow-hidden", className)}>
      {children}
    </div>
  )
}

export function CardHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
    </div>
  )
}

export function CardContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("px-6 py-4", className)}>
      {children}
    </div>
  )
}
