import React, { useState } from 'react';
import { Home, User, Code, Briefcase, Mail, Menu, X } from 'lucide-react';


import NavButton from './components/NavButton';

import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-fuchsia-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]" />
      </div>

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 shadow-2xl">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold tracking-wide bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Raktim Sarma
            </button>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2">
                <NavButton id="home" icon={Home} label="Home" isActive={activeSection === 'home'} onClick={() => scrollToSection('home')} />
                <NavButton id="skills" icon={Code} label="Skills" isActive={activeSection === 'skills'} onClick={() => scrollToSection('skills')} />
                <NavButton id="projects" icon={Briefcase} label="Projects" isActive={activeSection === 'projects'} onClick={() => scrollToSection('projects')} />
                <NavButton id="about" icon={User} label="About" isActive={activeSection === 'about'} onClick={() => scrollToSection('about')} />
                <NavButton id="contact" icon={Mail} label="Contact" isActive={activeSection === 'contact'} onClick={() => scrollToSection('contact')} />
              </div>

              

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-white/10 border border-white/10"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden flex flex-col gap-2 pt-4">
              <NavButton id="home" icon={Home} label="Home" isActive={activeSection === 'home'} onClick={() => scrollToSection('home')} />
              <NavButton id="skills" icon={Code} label="Skills" isActive={activeSection === 'skills'} onClick={() => scrollToSection('skills')} />
              <NavButton id="projects" icon={Briefcase} label="Projects" isActive={activeSection === 'projects'} onClick={() => scrollToSection('projects')} />
              <NavButton id="about" icon={User} label="About" isActive={activeSection === 'about'} onClick={() => scrollToSection('about')} />
              <NavButton id="contact" icon={Mail} label="Contact" isActive={activeSection === 'contact'} onClick={() => scrollToSection('contact')} />
            </div>
          )}
        </div>
      </nav>

      <main>
        <section id="home"><HomePage scrollToSection={scrollToSection} /></section>
        <section id="skills"><SkillsPage /></section>
        <section id="projects"><ProjectsPage /></section>
        <section id="about"><AboutPage /></section>
        <section id="contact"><ContactPage /></section>
      </main>
    </div>
  );
};

export default Portfolio;
