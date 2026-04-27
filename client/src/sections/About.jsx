import React from 'react';
import { motion } from 'framer-motion';
import anjaliImg from '../assets/anjali.png';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
        <div className="h-[1px] w-48 bg-white/20"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-slate-400 text-lg leading-relaxed"
        >
          <p>
            Hello! My name is <span className="text-primary font-medium">Anjali Kumari</span>. 
            I am a B.Tech Computer Science and Engineering student at <span className="text-white font-medium">Lovely Professional University</span>, maintaining a CGPA of <span className="text-secondary font-medium">9.21</span>.
          </p>
          <p>
            My passion lies in building scalable web applications and exploring the intricate world of DevOps and cloud systems. I enjoy bridging the gap between engineering and design—combining my technical knowledge with a keen eye for aesthetics to create premium digital experiences.
          </p>
          <p>
            I pride myself on my strong communication skills, leadership abilities, and adaptability in fast-paced environments. I am a continuous learner with a growth mindset, always eager to tackle new challenges and learn cutting-edge technologies.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <div className="glass-card p-2 relative h-[400px] w-full max-w-[400px] mx-auto rounded-2xl overflow-hidden flex items-center justify-center border-white/20">
            <img 
              src={anjaliImg} 
              alt="Anjali Kumari" 
              className="w-full h-full object-cover rounded-xl transition-all duration-500 hover:scale-[1.02]" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
