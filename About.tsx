import { Code2, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-100 rounded-lg">
                <Code2 className="text-slate-900" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Frontend Development
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Specializing in building responsive and user-friendly web interfaces using
                  modern technologies like HTML5, CSS3, JavaScript, and Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-100 rounded-lg">
                <Sparkles className="text-slate-900" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Continuous Learning
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Currently pursuing B.Tech in Computer Science and Engineering with a focus on
                  Data Structures, Algorithms, and expanding my full-stack development skills.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 rounded-2xl">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I'm a passionate developer who loves transforming ideas into elegant, functional
              web applications. My journey in web development began with a curiosity about how
              websites work, and has evolved into a dedicated pursuit of creating exceptional
              user experiences.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              With strong problem-solving skills and collaborative mindset, I'm eager to
              contribute to innovative projects and grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
