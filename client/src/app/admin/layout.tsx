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
    let mounted = true;
    const checkAuth = () => {
      const token = localStorage.getItem('admin_token');
      if (!token && !pathname.includes('/admin/login')) {
        router.push('/admin/login');
      } else if (mounted) {
        setIsReady(true);
      }
    };
    checkAuth();
    return () => { mounted = false; };
  }, [pathname, router]);

  if (!isReady && !pathname.includes('/admin/login')) return null;
  if (pathname.includes('/admin/login')) return <>{children}</>;

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-black flex text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-zinc-950 flex flex-col">
        <div className="p-8">
          <div className="text-xl font-black tracking-tighter">
            OOPRE <span className="text-[#D4AF37]">ADMIN</span>
          </div>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group",
                  isActive
                    ? "bg-brand-gold text-white"
                    : "text-white/40 hover:bg-white/5 hover:text-white"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} />
                  <span className="text-sm font-bold">{link.name}</span>
                </div>
                {isActive && <ChevronRight size={14} />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-white/40 hover:bg-red-500/10 hover:text-red-500 transition-all"
          >
            <LogOut size={18} />
            <span className="text-sm font-bold">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow overflow-auto p-12">
        {children}
      </main>
    </div>
  );
}
