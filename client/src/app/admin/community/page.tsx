'use client';

import React, { useState, useEffect } from 'react';
import { Globe, Bell, MessageCircle, Save, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { apiFetch } from '@/lib/api';

export default function AdminCommunityPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    _id: '',
    title: 'Join Our Community',
    description: 'Get event updates, music nights, cafe meetups, and exclusive announcements.',
    whatsappLink: '',
    buttonText: 'Join WhatsApp Community',
    bannerImage: '',
    enabled: true,
    autoPopup: true,
    popupDelay: 5000,
  });

  useEffect(() => {
    const fetchSettings = async () => {
    try {
      const data = await apiFetch('/community');
      if (data && data.length > 0) {
        setSettings(data[0]);
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
      toast.error("Failed to load community settings.");
    } finally {
      setLoading(false);
    }
  };
  fetchSettings();
}, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      if (settings._id) {
        await apiFetch(`/community/${settings._id}`, {
          method: 'PATCH',
          body: JSON.stringify(settings),
        });
      } else {
        const newData = await apiFetch('/community', {
          method: 'POST',
          body: JSON.stringify(settings),
        });
        setSettings(newData);
      }
      toast.success("Community settings updated successfully!");
    } catch (error) {
      toast.error("Failed to save settings.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="animate-spin text-brand-gold" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Toaster position="top-center" richColors />
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black tracking-tighter uppercase">COMMUNITY <span className="text-brand-gold">SETTINGS</span></h1>
            <p className="text-white/40 mt-2">Manage your WhatsApp community presence and user interactions.</p>
          </div>
          <Button
            onClick={handleSave}
            disabled={saving}
            className="bg-brand-gold hover:bg-white text-white hover:text-black font-bold h-14 px-8 rounded-xl shadow-lg shadow-brand-gold/20 transition-all duration-300"
          >
            {saving ? <Loader2 className="animate-spin mr-2" /> : <Save className="mr-2" />}
            Save Changes
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* General Visibility */}
          <Card className="bg-zinc-900 border-white/5 overflow-hidden">
            <CardHeader className="border-b border-white/5 bg-white/5">
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="text-brand-gold" size={20} />
                Visibility Control
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="space-y-1">
                  <Label className="text-white font-bold">Enable Community Features</Label>
                  <p className="text-xs text-white/40">Toggle overall visibility on the website.</p>
                </div>
                <Switch
                  checked={settings.enabled}
                  onCheckedChange={(val) => setSettings({...settings, enabled: val})}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="space-y-1">
                  <Label className="text-white font-bold">Auto-Popup Modal</Label>
                  <p className="text-xs text-white/40">Show the join community modal automatically.</p>
                </div>
                <Switch
                  checked={settings.autoPopup}
                  onCheckedChange={(val) => setSettings({...settings, autoPopup: val})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Timing & Delay */}
          <Card className="bg-zinc-900 border-white/5 overflow-hidden">
            <CardHeader className="border-b border-white/5 bg-white/5">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="text-brand-gold" size={20} />
                Interaction Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-2">
                <Label>Popup Delay (Milliseconds)</Label>
                <Input
                  type="number"
                  value={settings.popupDelay}
                  onChange={(e) => setSettings({...settings, popupDelay: parseInt(e.target.value)})}
                  className="bg-black/50 border-white/10"
                />
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">5000ms = 5 seconds</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Settings */}
        <Card className="bg-zinc-900 border-white/5 overflow-hidden">
          <CardHeader className="border-b border-white/5 bg-white/5">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageCircle className="text-brand-gold" size={20} />
              Community Content
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Community Title</Label>
                <Input
                  value={settings.title}
                  onChange={(e) => setSettings({...settings, title: e.target.value})}
                  className="bg-black/50 border-white/10"
                />
              </div>
              <div className="space-y-2">
                <Label>Button Text</Label>
                <Input
                  value={settings.buttonText}
                  onChange={(e) => setSettings({...settings, buttonText: e.target.value})}
                  className="bg-black/50 border-white/10"
                />
              </div>
              <div className="space-y-2">
                <Label>WhatsApp Invite Link</Label>
                <Input
                  value={settings.whatsappLink}
                  onChange={(e) => setSettings({...settings, whatsappLink: e.target.value})}
                  placeholder="https://chat.whatsapp.com/..."
                  className="bg-black/50 border-white/10"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={settings.description}
                  onChange={(e) => setSettings({...settings, description: e.target.value})}
                  rows={4}
                  className="bg-black/50 border-white/10"
                />
              </div>
              <div className="space-y-2">
                <Label>Banner Image URL</Label>
                <div className="flex gap-4">
                  <Input
                    value={settings.bannerImage}
                    onChange={(e) => setSettings({...settings, bannerImage: e.target.value})}
                    placeholder="https://res.cloudinary.com/..."
                    className="bg-black/50 border-white/10"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preview Section */}
        <div className="pt-8 opacity-40 hover:opacity-100 transition-opacity">
           <h3 className="text-center text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-8 underline underline-offset-8">Live Preview Hint</h3>
           <div className="bg-zinc-900/50 p-8 rounded-[32px] border border-white/5 flex items-center justify-center italic text-white/20">
              Check website frontend to see live changes.
           </div>
        </div>
      </div>
    </div>
  );
}
