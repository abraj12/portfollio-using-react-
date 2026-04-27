import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Send } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center relative pt-20">
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-float" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium tracking-wide mb-4"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold text-white mb-4"
        >
          Anjali Kumari.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-bold text-slate-400 mb-6"
        >
          I build <span className="text-gradient">modern web apps.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          I'm a Full Stack Developer & DevOps Enthusiast currently pursuing B.Tech CSE. 
          I specialize in building premium, scalable, and highly performant digital experiences.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="flex items-center gap-2 px-8 py-4 rounded-full glass font-medium hover:bg-white/10 transition-all hover:-translate-y-1">
            Hire Me <Send size={18} />
          </a>
          <a href="/Anjali_resume.pdf" download className="flex items-center gap-2 px-8 py-4 rounded-full glass text-secondary border-secondary/30 font-medium hover:bg-secondary/10 transition-all hover:-translate-y-1">
            Resume <Download size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hidden sm:flex"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
