'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Clayton Mo
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Innovator • Startup Founder • Inventor
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-2 border border-blue-500 rounded-md text-lg hover:bg-blue-500/10 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-blue-500 rounded-md text-lg hover:bg-blue-600 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 