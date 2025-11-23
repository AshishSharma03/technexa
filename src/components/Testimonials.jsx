import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechVision Inc',
      image: 'Professional woman in business attire smiling confidently',
      content: 'Technexra transformed our entire IT infrastructure. Their cloud migration strategy saved us 40% in operational costs while improving system performance dramatically.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, DataFlow Solutions',
      image: 'Asian businessman in modern office setting',
      content: 'The custom software solution developed by Technexra exceeded our expectations. Their team\'s expertise and dedication to quality is unmatched in the industry.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of IT, GlobalRetail Corp',
      image: 'Hispanic professional woman in corporate environment',
      content: 'Working with Technexra has been a game-changer for our digital transformation journey. Their strategic consulting helped us stay ahead of the competition.',
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: 'E-Commerce Platform Modernization',
      client: 'RetailMax',
      result: '300% increase in transaction speed',
      description: 'Complete platform overhaul resulting in improved user experience and significant revenue growth.'
    },
    {
      title: 'Enterprise Cloud Migration',
      client: 'FinanceHub',
      result: '60% reduction in infrastructure costs',
      description: 'Seamless migration to cloud infrastructure with zero downtime and enhanced security.'
    },
    {
      title: 'AI-Powered Analytics Solution',
      client: 'DataInsights Pro',
      result: '5x faster data processing',
      description: 'Custom analytics platform leveraging machine learning for predictive business intelligence.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from our satisfied clients and explore our proven track record of delivering exceptional results
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 relative hover:-translate-y-2"
            >
              <Quote className="absolute top-6 right-6 text-cyan-500/20" size={48} />
              
              <div className="flex items-center gap-4 mb-6">
                <img class="w-16 h-16 rounded-full object-cover border-2 border-cyan-500/30" alt={testimonial.name} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Featured Case Studies</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(6, 182, 212, 0.1)' }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="text-cyan-400 font-semibold text-sm mb-2">{study.client}</div>
              <h4 className="text-xl font-bold text-white mb-4">{study.title}</h4>
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-lg mb-4 inline-block">
                <span className="text-cyan-400 font-semibold">{study.result}</span>
              </div>
              <p className="text-gray-400">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
