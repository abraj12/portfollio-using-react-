import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-surface/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gradient mb-2">Anjali Kumari</h2>
          <p className="text-slate-400 text-sm max-w-sm">
            Building scalable web applications, mastering DevOps, and exploring the future of cloud computing.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 text-slate-300 hover:text-primary transition-all">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 text-slate-300 hover:text-primary transition-all">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:anjali@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 text-slate-300 hover:text-primary transition-all">
            <Mail size={20} />
          </a>
        </div>

      </div>
      <div className="border-t border-white/5 py-6 text-center text-slate-500 text-sm">
        &copy; {currentYear} Anjali Kumari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
