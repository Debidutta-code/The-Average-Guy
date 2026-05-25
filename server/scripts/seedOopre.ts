import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/oopre';

const MenuItemSchema = new mongoose.Schema({
  title: String,
  price: Number,
  category: String,
  isVeg: Boolean,
  description: String,
  image: String,
});

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  image: String,
  category: String,
});

const SettingsSchema = new mongoose.Schema({
  businessName: String,
  tagline: String,
  address: String,
  phone: String,
  email: String,
  openingHours: String,
});

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);
const Event = mongoose.model('Event', EventSchema);
const Settings = mongoose.model('Settings', SettingsSchema);

const menuItems = [
  { title: 'Moussaka Classic', price: 540, category: 'greek', isVeg: false, description: 'Layers of eggplant, minced meat, and béchamel sauce.' },
  { title: 'Souvlaki Platter', price: 480, category: 'greek', isVeg: false, description: 'Grilled skewers served with pita, tzatziki, and Greek salad.' },
  { title: 'Spanakopita', price: 380, category: 'greek', isVeg: true, description: 'Spinach and feta cheese wrapped in flaky phyllo pastry.' },
  { title: 'Greek Salad', price: 320, category: 'greek', isVeg: true, description: 'Fresh tomatoes, cucumbers, olives, and premium feta.' },
  { title: 'Wood-Fired Pepperoni Pizza', price: 520, category: 'mains', isVeg: false, description: 'Hand-stretched dough with premium pepperoni.' },
  { title: 'Margherita Pizza', price: 420, category: 'mains', isVeg: true, description: 'Fresh basil, mozzarella, and san marzano tomatoes.' },
  { title: 'The Oopre Sour', price: 580, category: 'cocktails', isVeg: true, description: 'Bourbon, spiced honey, and aromatic bitters.' },
  { title: 'Mykonos Sunset', price: 550, category: 'cocktails', isVeg: true, description: 'Premium gin, elderflower, and fresh grapefruit.' },
];

const events = [
  { title: 'Neon Nights: DJ Bash', description: 'Energetic DJ night under the stars.', date: 'Every Friday, 9:00 PM', category: 'Nightlife' },
  { title: 'Sunset Acoustic Sessions', description: 'Soulful live music during sunset.', date: 'Every Sunday, 6:00 PM', category: 'Music' },
  { title: 'The Greek Feast', description: 'Special Mediterranean food festival.', date: 'June 15, 2026', category: 'Themed Night' },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    await MenuItem.deleteMany({});
    await MenuItem.insertMany(menuItems);
    console.log('Menu items seeded');

    await Event.deleteMany({});
    await Event.insertMany(events);
    console.log('Events seeded');

    await Settings.deleteMany({});
    await Settings.create({
      businessName: 'OOPRE Kitchen & Bar',
      tagline: 'Dine, Wine & Shine',
      address: '4th Floor, Rooftop, Patia / Chandrasekharpur area, Bhubaneswar',
      phone: '74400 26026 / 80930 02098',
      email: 'hello@oopre.in',
      openingHours: '12:00 PM – 12:00 AM (All Days)',
    });
    console.log('Settings seeded');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seed();
