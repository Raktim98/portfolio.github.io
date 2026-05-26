import React from 'react';
import { ExternalLink } from 'lucide-react';
import advancedDictionary from '../assets/advancedDictionary.png';
import passwordGenerator from '../assets/passwordGenerator.jpeg';
import weatherApp from '../assets/weatherApp.png';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

const ProjectsPage: React.FC = () => (
  <div className="min-h-screen bg-gray-900 py-12 pt-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-200">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {([
          {
            title: 'Advanced Dictionary App',
            description: 'A web-based dictionary with word meanings, pronunciation, and voice support.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://your-link.com',
            image: advancedDictionary ,
            
            
          },
          {
            title: 'Password Generator',
            description: 'Generates secure passwords with options for length, symbols, numbers, etc.',
            tags: ['JavaScript', 'HTML', 'CSS'],
            link: 'https://your-link.com',
            image: passwordGenerator ,
                       
            
          },
          {
            title: 'Weather App',
            description: 'Shows real-time weather for any city using OpenWeatherMap API.',
            tags: ['JavaScript', 'Tailwind CSS', 'API'],
            link: 'https://your-link.com',
            image: weatherApp ,
            
            
           
          },
        ] as Project[]).map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-200">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-purple-400 hover:underline mt-auto flex items-center gap-1">
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsPage;