import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Engineering',
      institution: 'Government Engineering College, Siwan',
      location: 'Bihar',
      duration: '2022 - 2026',
      grade: 'CGPA: 6.90 (Current, 5th Semester)',
    },
    {
      degree: 'Higher Secondary (XII)',
      institution: 'G.P.G. College, Itwan Haspura',
      location: 'Bihar',
      duration: '2020 - 2022',
      grade: 'Percentage: 73%',
    },
    {
      degree: 'Secondary (X)',
      institution: 'Deochand Singh High School, Dindir',
      location: 'Bihar',
      duration: '2019',
      grade: 'Percentage: 71.8%',
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <GraduationCap className="text-slate-900" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                      {edu.field && (
                        <p className="text-slate-700 font-medium">{edu.field}</p>
                      )}
                    </div>
                    <span className="text-slate-600 font-medium">{edu.duration}</span>
                  </div>
                  <p className="text-slate-600">
                    {edu.institution}, {edu.location}
                  </p>
                  <p className="text-slate-700 font-medium mt-2">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
