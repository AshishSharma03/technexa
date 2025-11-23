import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp, BarChart } from 'lucide-react';
import useCountUp from '@/hooks/useCountUp';

const StatCard = ({ icon: Icon, value, label }) => {
  const ref = useRef(null);
  const endValue = parseInt(value.replace('+', '').replace('%', ''));
  const count = useCountUp(ref, endValue);
  const suffix = value.includes('+') ? '+' : value.includes('%') ? '%' : '';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 text-center"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
        <Icon className="text-cyan-400" size={24} />
      </div>
      <div className="text-3xl font-bold text-white mb-2">{count}{suffix}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </motion.div>
  );
};

const ProjectChart = () => {
    const data = [
        { name: 'Cloud', value: 35 },
        { name: 'Dev', value: 40 },
        { name: 'Security', value: 15 },
        { name: 'Data', value: 10 },
    ];

    return (
        <motion.div 
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-500/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="flex items-center gap-3 mb-6">
                <BarChart className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Project Distribution</h3>
            </div>
            <div className="space-y-4">
                {data.map((item, index) => (
                    <div key={item.name} className="flex items-center gap-4">
                        <span className="text-gray-400 w-20">{item.name}</span>
                        <div className="w-full bg-slate-700 rounded-full h-4">
                             <motion.div
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-4 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.value}%`}}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                            />
                        </div>
                        <span className="text-white font-semibold">{item.value}%</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};


const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Target, value: '1000+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Technexra
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At Technexra, we are passionate about leveraging technology to solve complex business challenges. With over 15 years of industry experience, we've established ourselves as a trusted partner for organizations seeking digital transformation.
            </p>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Our team of expert consultants and developers work collaboratively to deliver innovative solutions that drive measurable results. We combine deep technical expertise with strategic business insight to help our clients stay ahead in an ever-evolving digital landscape.
            </p>

            <div className="my-8">
               <ProjectChart />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <span className="text-cyan-400 font-semibold">Innovation First</span>
              </div>
              <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <span className="text-blue-400 font-semibold">Client-Centric</span>
              </div>
              <div className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <span className="text-cyan-400 font-semibold">Results Driven</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
