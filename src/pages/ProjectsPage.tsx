import React from 'react';
import { ExternalLink } from 'lucide-react';
import advancedDictionary from '../assets/advancedDictionary.png';
import weatherApp from '../assets/weatherApp.png';
import textSummarizer from '../assets/textSummarizer.png';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
  emoji?: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    title: 'Advanced Dictionary App',
    description: 'Built an Advanced Dictionary Web Application that allows users to search word meanings, phonetics, synonyms, and pronunciation in real time using a dictionary API. The project includes modern features such as voice search, audio pronunciation, dark mode, and responsive UI design. Focused on interactive frontend development and API handling using JavaScript',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://your-link.com',
    image: advancedDictionary,
    accentColor: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Weather App',
    description: 'Developed a responsive Weather Application that provides real-time weather information for any city using a weather API. The application displays temperature, humidity, wind speed, and weather conditions with a clean and modern user interface. Implemented dynamic API integration, error handling, and responsive design to ensure smooth user experience across devices',
    tags: ['JavaScript', 'Tailwind CSS', 'API'],
    link: 'https://your-link.com',
    image: weatherApp,
    accentColor: 'from-sky-500 to-cyan-400',
  },
  {
    title: 'Text Summarization using Deep Learning',
    description:
      'Developed an AI-powered Text Summarization system using Deep Learning techniques to generate concise and meaningful summaries from large text documents. The project utilizes transformer-based models such as BART, T5, and PEGASUS for abstractive summarization. Integrated a Flask-based web interface for user interaction and visualized model performance using accuracy comparison charts',
    tags: ['Python', 'TensorFlow', 'NLP', 'Seq2Seq', 'Attention'],
    link: 'https://your-link.com',
    image : textSummarizer,
    accentColor: 'from-emerald-500 to-teal-400',
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <div className="group relative bg-gray-800/60 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-500/70 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
    {/* Top accent line */}
    <div className={`h-0.5 w-full bg-gradient-to-r ${project.accentColor}`} />

    {/* Image or Emoji placeholder */}
    {project.image ? (
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 to-transparent" />
      </div>
    ) : (
      <div className={`w-full h-44 bg-gradient-to-br ${project.accentColor} opacity-10 flex items-center justify-center`}>
        <span className="text-7xl opacity-80">{project.emoji}</span>
      </div>
    )}

    {/* Content */}
    <div className="p-5 flex flex-col flex-grow gap-3">
      <h3 className="text-lg font-semibold text-gray-100 leading-snug group-hover:text-white transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed flex-grow">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2.5 py-0.5 bg-gray-700/70 border border-gray-600/50 text-gray-300 rounded-full text-xs font-medium tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-1 inline-flex items-center gap-1.5 text-sm font-medium bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
      >
        View Project <ExternalLink size={14} className="text-gray-400 group-hover:text-gray-200 transition-colors" />
      </a>
    </div>
  </div>
);

const ProjectsPage: React.FC = () => (
  <div className="min-h-screen bg-gray-900 py-12 pt-20">
    <div className="max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-100 mb-3">My Projects</h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          A collection of things I've built — from front-end tools to deep learning models.
        </p>
        <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsPage;
