import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
  const features = [
    'Handpicked Beans',
    'Artisan Brewing',
    'Cozy Ambience',
    'Fresh Daily Roasts',
  ];

  return (
    <section id="about" className="py-24 md:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
                alt="Our Cafe"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
            </div>

            {/* Gold Accent Box */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold -z-10 rounded-3xl hidden md:block"></div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8 leading-tight">
              A Legacy of <span className="italic">Perfect Brews</span>
            </h2>
            <p className="text-secondary text-lg md:text-xl leading-relaxed mb-10 font-inter">
              Coffee Monk began with a simple idea: serve exceptional coffee in an atmosphere that inspires meaningful conversations. Every bean we roast and every cup we pour is a testament to our dedication to the craft.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-lg font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 text-gold font-bold uppercase tracking-widest text-sm flex items-center gap-4 group"
            >
              Learn More
              <span className="w-12 h-[1px] bg-gold group-hover:w-16 transition-all duration-300"></span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
