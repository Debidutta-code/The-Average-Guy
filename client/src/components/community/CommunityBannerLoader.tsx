'use client';

import React, { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api';
import { CommunityBanner } from '@/components/community/CommunityBanner';

export function CommunityBannerLoader() {
  const [settings, setSettings] = useState<any>(null);

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
      console.error('Error fetching community banner settings:', error);
    }
  };

  if (!settings) return null;

  return (
    <CommunityBanner
      title={settings.title}
      description={settings.description}
      whatsappLink={settings.whatsappLink}
      buttonText={settings.buttonText}
      bannerImage={settings.bannerImage}
    />
  );
}
