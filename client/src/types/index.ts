export interface Reservation {
  _id: string;
  name: string;
  email?: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  artist: string;
  coverImage: string;
  status: 'upcoming' | 'completed';
}

export interface MenuItem {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVeg: boolean;
  isAvailable: boolean;
}
