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
  ChevronRight,
  Bell,
  Search,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarLinks = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Reservations', href: '/admin/reservations', icon: MessageSquare },
  { name: 'Menu Management', href: '/admin/menu', icon: Coffee },
  { name: 'Event Calendar', href: '/admin/events', icon: Calendar },
  { name: 'Gallery Media', href: '/admin/gallery', icon: ImageIcon },
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
    <div className="min-h-screen bg-[#05162D] flex text-white font-sans selection:bg-brand-gold/30">
      {/* Sidebar - Mediterranean Navy */}
      <aside className="w-72 border-r border-white/5 bg-[#030D1B] flex flex-col sticky top-0 h-screen z-50">
        <div className="p-10">
          <Link href="/admin/dashboard" className="group">
            <div className="text-2xl font-serif font-light tracking-widest text-white group-hover:text-brand-blue transition-colors">
              OOPRE <span className="text-brand-gold font-bold">ADMIN</span>
            </div>
            <div className="w-12 h-[1px] bg-brand-gold/30 mt-2 group-hover:w-full transition-all duration-500" />
          </Link>
        </div>

        <nav className="flex-grow px-6 space-y-2 mt-4">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center justify-between px-5 py-4 rounded-sm transition-all duration-300 group",
                  isActive
                    ? "bg-brand-blue text-white shadow-[0_0_20px_rgba(0,91,161,0.2)]"
                    : "text-white/40 hover:bg-white/5 hover:text-white"
                )}
              >
                <div className="flex items-center gap-4">
                  <Icon size={20} className={cn(isActive ? "text-brand-gold" : "group-hover:text-brand-gold transition-colors")} />
                  <span className="text-sm font-medium tracking-wide uppercase">{link.name}</span>
                </div>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-6">
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 px-5 py-4 w-full rounded-sm text-white/40 hover:bg-brand-orange/10 hover:text-brand-orange transition-all border border-transparent hover:border-brand-orange/20"
          >
            <LogOut size={20} />
            <span className="text-sm font-bold uppercase tracking-wider">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-24 border-b border-white/5 flex items-center justify-between px-12 bg-[#05162D]/50 backdrop-blur-xl sticky top-0 z-40">
           <div className="flex items-center gap-6 bg-white/5 px-6 py-3 rounded-sm border border-white/5 w-96 group focus-within:border-brand-blue/50 transition-all">
              <Search size={18} className="text-white/30 group-focus-within:text-brand-blue" />
              <input
                type="text"
                placeholder="Search analytics, bookings..."
                className="bg-transparent border-none outline-none text-sm w-full font-light"
              />
           </div>

           <div className="flex items-center gap-8">
              <div className="relative cursor-pointer hover:text-brand-gold transition-colors">
                 <Bell size={20} />
                 <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-orange rounded-full" />
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="text-right">
                    <p className="text-sm font-bold text-white uppercase tracking-tighter">Oopre Manager</p>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Administrator</p>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <User size={20} className="text-brand-gold group-hover:text-white" />
                 </div>
              </div>
           </div>
        </header>

        <main className="p-12 animate-in fade-in duration-700">
           {children}
        </main>
      </div>
    </div>
  );
}
