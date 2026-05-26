import React, { useRef, useEffect } from 'react';
import { User, ArrowRight, Download } from 'lucide-react';
import webglFluid from 'webgl-fluid';

interface HomePageProps {
  scrollToSection: (sectionId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ scrollToSection }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      webglFluid(canvasRef.current, {
        IMPress: 0.8,
      } as any);
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-xl">
            ✨ Creative Frontend & Full Stack Developer
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
              Building <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Modern</span><br />
              Digital Experiences
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
              I design and develop clean, responsive, and interactive web applications with modern technologies and beautiful user experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold flex items-center gap-2 shadow-2xl hover:scale-105 transition-all"
            >
              View Projects
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-[2rem] blur-3xl opacity-30 animate-pulse" />

            <div className="relative w-[320px] h-[380px] rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-2xl p-8 flex flex-col items-center justify-center shadow-2xl">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center shadow-xl mb-8">
                <User size={60} className="text-white" />
              </div>

              <h2 className="text-3xl font-bold text-white">Raktim Sarma</h2>
              <p className="text-gray-300 mt-2">Full Stack Developer</p>

              <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                  <h3 className="text-2xl font-bold text-fuchsia-400">10+</h3>
                  <p className="text-xs text-gray-400 mt-1">Projects</p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                  <h3 className="text-2xl font-bold text-cyan-400">5+</h3>
                  <p className="text-xs text-gray-400 mt-1">Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
