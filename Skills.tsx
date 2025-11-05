import { Code, Database, Terminal, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    },
    {
      icon: Terminal,
      title: 'Programming',
      skills: ['Python', 'C', 'C++'],
    },
    {
      icon: Database,
      title: 'Data Structures',
      skills: ['Arrays', 'Linked Lists', 'Trees', 'Basic Algorithms'],
    },
    {
      icon: Wrench,
      title: 'Tools & Soft Skills',
      skills: ['Git', 'VS Code', 'Problem-Solving', 'Adaptability'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Icon className="text-slate-900" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-slate-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
