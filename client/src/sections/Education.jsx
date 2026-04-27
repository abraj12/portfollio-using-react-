import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science & Engineering",
    duration: "2025 – Present",
    score: "CGPA: 9.21",
  },
  {
    institution: "CBSE Mohali",
    degree: "Higher Secondary (12th)",
    duration: "Completed",
    score: "73.8%",
  },
  {
    institution: "CBSE Mohali",
    degree: "Matriculation (10th)",
    duration: "Completed",
    score: "91%",
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        <div className="h-[1px] w-48 bg-white/20"></div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 flex flex-col items-start hover:border-primary/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
            <p className="text-slate-400 font-medium mb-1">{edu.institution}</p>
            <div className="mt-auto pt-4 flex justify-between items-center w-full">
              <span className="text-sm text-slate-500 bg-white/5 px-2 py-1 rounded">{edu.duration}</span>
              <span className="text-sm font-bold text-secondary">{edu.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
