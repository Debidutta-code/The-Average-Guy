"use client";

import { Search, MapPin, Calendar, DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchBar() {
  return (
    <div className="container px-4 -mt-16 relative z-20">
      <div className="bg-card border border-border/50 shadow-2xl rounded-2xl p-2 md:p-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 items-center">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-amber-500 transition-colors" size={18} />
          <Input
            placeholder="Search by name..."
            className="pl-10 border-none bg-accent/50 focus-visible:ring-0 h-12"
          />
        </div>

        <div className="relative group">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-amber-500 transition-colors" size={18} />
          <select className="w-full h-12 pl-10 pr-4 bg-accent/50 rounded-md text-sm appearance-none outline-none focus:ring-0">
            <option value="">All Cities</option>
            <option value="london">London</option>
            <option value="paris">Paris</option>
            <option value="dubai">Dubai</option>
            <option value="new-york">New York</option>
          </select>
        </div>

        <div className="relative group">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-amber-500 transition-colors" size={18} />
          <Input
            type="date"
            className="pl-10 border-none bg-accent/50 focus-visible:ring-0 h-12"
          />
        </div>

        <div className="relative group">
          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-amber-500 transition-colors" size={18} />
          <select className="w-full h-12 pl-10 pr-4 bg-accent/50 rounded-md text-sm appearance-none outline-none focus:ring-0">
            <option value="">Rate Range</option>
            <option value="under-500">Under $500</option>
            <option value="500-1000">$500 - $1,000</option>
            <option value="over-1000">Over $1,000</option>
          </select>
        </div>

        <Button variant="premium" className="h-12 w-full rounded-xl text-base font-semibold md:col-span-1">
          Search Now
        </Button>
      </div>
    </div>
  );
}
