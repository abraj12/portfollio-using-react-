import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: "Smart E-Commerce Platform",
    description: "A full online shopping platform featuring JWT Authentication, Cart/Wishlist functionality, Payment Integration, and an Admin Dashboard. Deployed using AWS and Docker.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "AWS", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "DevOps Automation Pipeline",
    description: "An automated workflow utilizing Jenkins CI/CD, GitHub Actions, and Docker Containerization to streamline deployments and monitoring.",
    tech: ["Jenkins", "GitHub Actions", "Docker", "Linux"],
    github: "#",
    live: "#",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
        <div className="h-[1px] w-48 bg-white/20"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="glass-card p-8 h-full flex flex-col justify-between relative transform transition duration-500 hover:-translate-y-2">
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                      <FaGithub size={22} />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-sm font-medium text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
