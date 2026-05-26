import React from 'react';

const AboutPage: React.FC = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 pt-20">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-200">About Me</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-200">My Journey</h3>
                        <p className="text-gray-400 leading-relaxed">
                            I'm a passionate computer science student with a deep fascination for technology and its potential to solve real-world problems. My journey began in high school when I first discovered programming, and since then, I've been on an exciting path of continuous learning and growth.
                        </p>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-200">What Drives Me</h3>
                        <p className="text-gray-400 leading-relaxed">
                            I believe in the power of technology to make a positive impact on society. Whether it's developing efficient algorithms, creating user-friendly applications, or exploring the frontiers of artificial intelligence, I'm always eager to tackle new challenges and push the boundaries of what's possible.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-200">Current Focus</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                Full-stack web development with React and Node.js
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                Machine learning and AI applications
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                                Cloud computing
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-200">Beyond Coding</h3>
                        <p className="text-gray-400 leading-relaxed">
                            When I'm not coding, you can find me playing chess, hiking in nature, or experimenting with new recipes. I believe that diverse experiences and interests contribute to better problem-solving skills and creativity in programming.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-12 bg-gray-800 rounded-xl p-8 shadow-lg text-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-200">Fun Facts About Me</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-purple-900/50 rounded-lg">
                        <h4 className="font-medium text-purple-300 mb-2"> 🧐 Hobbies & Interests</h4>
                        <p className="text-sm text-purple-400">Listening to music to relax and stay creative.

                                      Watching movies, especially inspirational and story-based films</p>
                    </div>
                    <div className="p-4 bg-green-900/50 rounded-lg">
                        <h4 className="font-medium text-green-300 mb-2">☕ Productivity</h4>
                        <p className="text-sm text-green-400">Powered by coffee and fueled by curiosity for learning new technologies</p>
                    </div>
                    <div className="p-4 bg-indigo-900/50 rounded-lg">
                        <h4 className="font-medium text-indigo-300 mb-2">🎯 Goals</h4>
                        <p className="text-sm text-indigo-400">Aspiring to work in cutting-edge tech companies and contribute to innovative solutions</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutPage;