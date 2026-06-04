"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Search, Calendar, User, Info } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Explore", href: "/companions", icon: Search },
  { label: "Bookings", href: "/dashboard", icon: Calendar },
  { label: "Safety", href: "/safety", icon: Info },
  { label: "Profile", href: "/profile", icon: User },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tighter text-amber-500 uppercase">Lumina</span>
          <span className="text-xl font-light tracking-widest uppercase">Companions</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-500",
                pathname === item.href ? "text-amber-500" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/dashboard" className="text-sm font-medium hover:text-amber-500 transition-colors">
            Sign In
          </Link>
          <button className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-600 transition-all">
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t bg-background/95 backdrop-blur-lg md:hidden">
      <div className="flex h-16 items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center space-y-1 transition-colors",
                isActive ? "text-amber-500" : "text-muted-foreground"
              )}
            >
              <Icon size={20} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
