import { motion } from 'framer-motion';
import { Leaf, Award, Clock, Sofa } from 'lucide-react';

const WhyChooseUs = () => {
  const cards = [
    {
      title: 'Premium Beans',
      description: 'Ethically sourced coffee beans from trusted farms.',
      icon: <Leaf className="w-8 h-8 text-gold" />,
    },
    {
      title: 'Expert Baristas',
      description: 'Crafted by passionate coffee professionals.',
      icon: <Award className="w-8 h-8 text-gold" />,
    },
    {
      title: 'Fresh Every Day',
      description: 'Freshly roasted and brewed daily.',
      icon: <Clock className="w-8 h-8 text-gold" />,
    },
    {
      title: 'Relaxing Atmosphere',
      description: 'Designed for comfort, work and conversations.',
      icon: <Sofa className="w-8 h-8 text-gold" />,
    },
  ];

  return (
    <section id="why-us" className="py-24 md:py-40 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-4 block"
          >
            Excellence in Every Cup
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-playfair font-bold"
          >
            Why Choose Coffee Monk
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass glass-hover p-10 rounded-3xl group"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4 group-hover:text-gold transition-colors">
                {card.title}
              </h3>
              <p className="text-secondary leading-relaxed font-inter">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
