'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  Calendar,
  Coffee,
  Image as ImageIcon,
  MessageSquare,
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarLinks = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Events', href: '/admin/events', icon: Calendar },
  { name: 'Menu Items', href: '/admin/menu', icon: Coffee },
  { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
  { name: 'Reservations', href: '/admin/reservations', icon: MessageSquare },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token && !pathname.includes('/admin/login')) {
      router.push('/admin/login');
    } else {
      setIsReady(true);
    }
  }, [pathname, router]);

  if (!isReady && !pathname.includes('/admin/login')) return null;
  if (pathname.includes('/admin/login')) return <>{children}</>;

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-brand-ivory flex text-foreground font-sans">
      {/* Sidebar */}
      <aside className="w-72 border-r border-black/5 bg-white flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-10">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.4em] font-bold text-foreground/30 uppercase leading-none mb-1">The</span>
            <span className="text-xl font-serif font-semibold tracking-tight text-foreground leading-none">
              Monarch <span className="italic text-brand-gold">Admin</span>
            </span>
          </div>
        </div>

        <nav className="flex-grow px-6 space-y-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-500 group",
                  isActive
                    ? "bg-foreground text-background shadow-lg shadow-black/10"
                    : "text-foreground/40 hover:bg-black/5 hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-4">
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[11px] font-bold uppercase tracking-widest">{link.name}</span>
                </div>
                {isActive && <ChevronRight size={14} />}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-black/5">
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 px-5 py-4 w-full rounded-xl text-foreground/40 hover:bg-red-500/5 hover:text-red-500 transition-all duration-300"
          >
            <LogOut size={18} />
            <span className="text-[11px] font-bold uppercase tracking-widest">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow overflow-auto p-12 bg-white/40 backdrop-blur-3xl">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
