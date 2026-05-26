import React from 'react';
import { Code } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

const SkillsPage: React.FC = () => (
  <div className="min-h-screen bg-gray-900 py-12 pt-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-200">Skills & Technologies</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-6 text-gray-200 flex items-center gap-2">
            <Code className="text-purple-400" size={24} />
            Programming Languages
          </h3>
          <div className="space-y-4">
            {([
              { name: 'Python', level: 90 },
              { name: 'JavaScript', level: 85 },
              { name: 'Java', level: 80 },
              { name: 'C++', level: 75 },
              { name: 'TypeScript', level: 70 }
            ] as Skill[]).map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full transition-all duration-1000 skill-progress-bar"
                    data-skill-level={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-6 text-gray-200">Web Technologies</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              'React', 'Node.js', 'Express', 'MongoDB',
              'PostgreSQL', 'HTML5', 'Tailwind CSS',
              'Next.js'
            ].map((tech, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3 text-center text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-purple-400 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-6 text-gray-200">Tools & Frameworks</h3>
          <div className="space-y-3">
            {[
              'Machine Learning (TensorFlow, PyTorch)',
              'Cloud Platforms (AWS, GCP)',
              'Docker',
            ].map((tool, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-300">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SkillsPage;