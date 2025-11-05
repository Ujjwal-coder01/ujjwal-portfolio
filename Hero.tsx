import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
            Ujjwal Kumar
          </h1>
          <p className="text-2xl sm:text-3xl text-slate-600 mb-8">
            Frontend Developer & Computer Science Student
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-8">
            <MapPin size={20} />
            <span>Patna, Bihar, India</span>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Dedicated Frontend Developer pursuing B.Tech in Computer Science and Engineering.
            Skilled in modern web technologies with a passion for creating innovative web solutions.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:rajujjwal18@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200"
            >
              <Mail size={20} />
              Get in Touch
            </a>
            <a
              href="https://github.com/ujjwal-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors duration-200"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ujjwal-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
