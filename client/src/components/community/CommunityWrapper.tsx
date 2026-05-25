'use client';

import React, { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api';
import { FloatingWhatsAppButton } from '@/components/community/FloatingWhatsAppButton';
import { CommunityPopupModal } from '@/components/community/CommunityPopupModal';
import { usePathname } from 'next/navigation';

export function CommunityWrapper() {
  const [settings, setSettings] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const data = await apiFetch('/community');
      if (data && data.length > 0 && data[0].enabled) {
        setSettings(data[0]);
      }
    } catch (error) {
      console.error('Error fetching community settings:', error);
    }
  };

  // Don't show community features in admin panel
  if (!settings || pathname?.startsWith('/admin')) return null;

  return (
    <>
      <FloatingWhatsAppButton whatsappLink={settings.whatsappLink} />
      {settings.autoPopup && (
        <CommunityPopupModal
          title={settings.title}
          description={settings.description}
          whatsappLink={settings.whatsappLink}
          delay={settings.popupDelay}
        />
      )}
    </>
  );
}
