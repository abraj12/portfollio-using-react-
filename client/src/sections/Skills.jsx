import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    items: ["C++", "Java", "Python", "JavaScript", "SQL", "C"]
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "React.js"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "MVC Architecture"]
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "Firebase"]
  },
  {
    category: "DevOps & Cloud",
    items: ["Git", "GitHub", "Docker", "Linux", "AWS", "CI/CD", "Jenkins", "GitHub Actions", "Kubernetes Basics", "Nginx"]
  },
  {
    category: "Tools",
    items: ["VS Code", "Postman", "Figma"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Arsenal</h2>
        <div className="h-[1px] w-48 bg-white/20"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillsData.map((skillGroup, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="glass-card p-6 group hover:border-primary/50 transition-colors"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
