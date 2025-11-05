import { Award, ExternalLink } from 'lucide-react';

export default function Certification() {
  const certifications = [
    {
      title: 'Accenture Nordics Software Engineering Virtual Experience',
      platform: 'Forage',
      date: '13 June 2025',
      description: 'Successfully completed a simulation on software development best practices.',
      link: '#',
    },
  ];

  return (
    <section id="certification" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
        </div>
        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <Award className="text-slate-900" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{cert.title}</h3>
                    <span className="text-slate-600 font-medium">{cert.date}</span>
                  </div>
                  <p className="text-slate-700 font-medium mb-2">Platform: {cert.platform}</p>
                  <p className="text-slate-600 mb-4">{cert.description}</p>
                  <a
                    href={cert.link}
                    className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-700 font-medium transition-colors duration-200"
                  >
                    Check out the simulation
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
