import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
        <div className="h-[1px] w-48 bg-white/20"></div>
      </motion.div>

      <div className="relative max-w-3xl mx-auto pl-4 md:pl-0">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full"></div>

        {/* Experience Item */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 group"
        >
          {/* Icon */}
          <div className="absolute left-4 md:left-[50%] w-10 h-10 rounded-full bg-surface border-2 border-primary text-primary flex items-center justify-center -translate-x-1/2 z-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <Briefcase size={18} />
          </div>

          <div className="w-full md:w-[45%] pl-12 md:pl-0 md:pr-12 md:text-right mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white">Full Stack Developer Intern</h3>
            <p className="text-primary font-medium">Tech Startup / Product Company</p>
            <span className="inline-block mt-1 text-sm px-3 py-1 rounded-full bg-white/5 text-slate-400">Future Goal - 2026</span>
          </div>

          <div className="w-full md:w-[45%] pl-12 md:pl-12">
            <div className="glass-card p-6">
              <ul className="space-y-3 text-slate-400">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Building scalable web applications using the MERN stack.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Designing and creating robust RESTful APIs.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Implementing Docker containerization and deployments.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Collaborating in Agile team environments for rapid delivery.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Debugging, testing, and performance optimization.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
