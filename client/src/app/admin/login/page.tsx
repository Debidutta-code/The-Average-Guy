'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('admin_token', data.token);
        toast.success("Welcome back, Admin!");
        router.push('/admin/dashboard');
      } else {
        toast.error(data.message || "Invalid credentials.");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Failed to connect to server.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-ivory flex items-center justify-center p-6 noise-overlay">
      <Toaster position="top-center" richColors />
      <Card className="w-full max-w-md bg-white border-foreground/5 text-foreground shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-serif font-bold tracking-tight uppercase">
            ADMIN <span className="text-brand-gold italic">PORTAL</span>
          </CardTitle>
          <CardDescription className="text-foreground/40 italic">
            Secure access for The Monarch Mug management.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@monarchmug.com"
                className="bg-brand-ivory border-foreground/10"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-brand-ivory border-foreground/10"
                required
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-foreground text-background hover:bg-brand-gold font-bold h-12 transition-all">
              {loading ? "Authenticating..." : "Login to Dashboard"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
