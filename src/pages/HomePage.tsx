import React, { useRef, useEffect } from 'react';
import { User, Download } from 'lucide-react';
import webglFluid from 'webgl-fluid';

interface HomePageProps {
  scrollToSection: (sectionId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ scrollToSection }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const timeoutId = setTimeout(() => {
        webglFluid(canvasRef.current!, {
          IMPRESS: 0.8,
          DENSITY_DISSIPATION: 0.98,
          VELOCITY_DISSIPATION: 0.99,
          PRESSURE: 0.8,
          PRESSURE_ITERATIONS: 20,
          CURL: 30,
          SPLAT_RADIUS: 0.005,
          SPLAT_FORCE: 6000,
          SHADING: true,
          COLORFUL: true,
          COLOR_UPDATE_SPEED: 10,
          PAUSED: false,
          BACK_COLOR: { r: 0, g: 0, b: 0 },
          TRANSPARENT: true,
        });
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="relative group">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-2xl transition-all duration-300 group-hover:shadow-[0_0_20px_5px_rgba(192,132,252,0.5)]">
            <User size={64} className="text-white" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-200 mb-2">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient">XYZ </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I’m a passionate frontend developer focused on building responsive and interactive web applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="px-4 py-2 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium">
              Front End Developer
            </span>
            <span className="px-4 py-2 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium">
              Problem Solver
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 hover:cursor-pointer"
          >
            Get In Touch
          </button>
          <button className="border border-purple-500 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-900/50 transition-colors flex items-center gap-2 hover:cursor-pointer">
            <Download size={20} />
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;