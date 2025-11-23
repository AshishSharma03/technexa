import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Cloud, Code, Database, Lock, Smartphone, Zap } from 'lucide-react';

const ServiceCard = ({ service }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

    const handleMouseMove = e => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-transparent"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="text-cyan-400" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        {service.description}
                    </p>
                </div>
                
                 <img class="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10" alt={`${service.title} illustration`} src="https://images.unsplash.com/photo-1468716819264-c6088257636e" />

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>
        </motion.div>
    );
};


const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.',
      imageAlt: 'Abstract cloud computing network'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.',
      imageAlt: 'Lines of code on a dark screen'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and business intelligence solutions.',
      imageAlt: 'Digital data visualization dashboard'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
      imageAlt: 'Digital padlock icon symbolizing security'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      imageAlt: 'Smartphone with app interface'
    },
    {
      icon: Zap,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to align IT initiatives with your business goals and drive innovation.',
      imageAlt: 'Business professionals collaborating around a digital interface'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions designed to accelerate your digital transformation journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "800px" }}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
