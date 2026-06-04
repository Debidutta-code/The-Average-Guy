"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Calendar, Clock, MapPin, User, Settings, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  const upcomingBookings = [
    {
      id: "BK-8821",
      companion: "Elena",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      date: "Nov 24, 2024",
      time: "20:00",
      duration: "2 Hours",
      status: "Confirmed",
      amount: 900,
    },
    {
      id: "BK-8845",
      companion: "Sienna",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200",
      date: "Dec 02, 2024",
      time: "19:00",
      duration: "Hourly",
      status: "Pending",
      amount: 600,
    }
  ];

  return (
    <div className="container px-4 py-12 pb-32">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-8">
          <div className="flex items-center gap-4 p-4 bg-accent/30 rounded-2xl border border-border/50">
            <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xl">
              JD
            </div>
            <div>
              <p className="font-bold">John Doe</p>
              <p className="text-xs text-muted-foreground italic">Elite Member</p>
            </div>
          </div>

          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-3 text-amber-500 bg-amber-500/10">
              <Calendar size={18} /> My Bookings
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-amber-500">
              <User size={18} /> Profile Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-amber-500">
              <Settings size={18} /> Preferences
            </Button>
            <div className="pt-4 mt-4 border-t border-border/50">
              <Button variant="ghost" className="w-full justify-start gap-3 text-red-400 hover:text-red-500 hover:bg-red-500/10">
                <LogOut size={18} /> Sign Out
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-8">
          <header>
            <h1 className="text-4xl font-playfair mb-2">My Bookings</h1>
            <p className="text-muted-foreground">Manage your upcoming and past reservations.</p>
          </header>

          <div className="grid grid-cols-1 gap-6">
            <h2 className="text-xl font-semibold">Upcoming Reservations</h2>
            {upcomingBookings.map((booking) => (
              <Card key={booking.id} className="overflow-hidden border-border/50 bg-accent/20">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-48 h-48 sm:h-auto">
                      <Image
                        src={booking.image}
                        alt={booking.companion}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">ID: {booking.id}</p>
                          <h3 className="text-2xl font-playfair">{booking.companion}</h3>
                        </div>
                        <Badge variant={booking.status === "Confirmed" ? "default" : "secondary"} className={booking.status === "Confirmed" ? "bg-green-500/20 text-green-500 hover:bg-green-500/20" : ""}>
                          {booking.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar size={16} className="text-amber-500" />
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock size={16} className="text-amber-500" />
                          <span>{booking.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin size={16} className="text-amber-500" />
                          <span>London</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-bold text-amber-500">{formatCurrency(booking.amount)}</span>
                        </div>
                      </div>

                      <div className="flex gap-4 mt-8">
                        <Button variant="outline" size="sm" className="rounded-lg">View Details</Button>
                        <Button variant="ghost" size="sm" className="rounded-lg text-muted-foreground hover:text-red-400">Cancel</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Discovery</h2>
            <Card className="border-dashed border-amber-500/30 bg-amber-500/5">
              <CardContent className="p-8 text-center space-y-4">
                <p className="text-muted-foreground italic">&quot;Ready for your next unforgettable experience?&quot;</p>
                <Button asChild variant="premium" className="rounded-full px-8">
                  <Link href="/companions">Browse New Profiles</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
