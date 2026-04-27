import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  "Cloud Computing – NPTEL",
  "Full Stack Development Training",
  "Generative AI Tools – Infosys",
  "DevOps Fundamentals (Planned)",
  "AWS Cloud Practitioner (Planned)"
];

const achievements = [
  "Maintained a CGPA above 9.0",
  "Active and passionate learner",
  "Dedicated coding enthusiast",
  "Continuously fostering a growth mindset"
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
            <div className="h-[1px] w-24 bg-white/20"></div>
          </div>
          <div className="glass-card p-8">
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Award className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-slate-300 text-lg">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white">Achievements</h2>
            <div className="h-[1px] w-24 bg-white/20"></div>
          </div>
          <div className="glass-card p-8">
            <ul className="space-y-4">
              {achievements.map((ach, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span className="text-slate-300 text-lg">{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
