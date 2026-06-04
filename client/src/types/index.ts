export type Companion = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  personality: string;
  images: string[];
  mainImage: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  age: number;
  height: string;
  measurements: string;
  nationality: string;
  languages: string[];
  services: string[];
  rates: {
    hourly: number;
    twoHours: number;
    overnight: number;
    weekend: number;
  };
  experienceYears: number;
  cities: string[];
  incall: boolean;
  outcall: boolean;
  bodyType: string;
  ethnicity: string;
};

export type Booking = {
  id: string;
  companionId: string;
  companionName: string;
  date: string;
  duration: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  price: number;
  services: string[];
};
