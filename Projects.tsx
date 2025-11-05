import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Salesforce Clone',
      description:
        "Developing a responsive clone of Salesforce's UI, focusing on replicating core dashboard functionalities with dynamic components and cross-browser compatibility.",
      technologies: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/ujjwal-kumar/salesforce-clone',
      status: 'In Progress',
      highlights: [
        'Responsive UI design',
        'Dynamic data tables and forms',
        'Cross-browser compatibility',
        'Efficient styling with Tailwind CSS',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
        </div>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {project.status}
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Highlights:</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-slate-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white text-slate-700 text-sm font-medium rounded-lg border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
