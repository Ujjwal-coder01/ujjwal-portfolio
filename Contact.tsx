import { Mail, Phone, MapPin, Github, Linkedin, Languages } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rajujjwal18@gmail.com',
      href: 'mailto:rajujjwal18@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7250446373',
      href: 'tel:+917250446373',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Patna, Bihar, India',
    },
    {
      icon: Languages,
      label: 'Languages',
      value: 'English, Hindi',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ujjwal-kumar',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ujjwal-kumar',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Icon className="text-slate-900" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">{info.label}</p>
                    <p className="text-slate-900">{info.value}</p>
                  </div>
                </div>
              );

              return info.href ? (
                <a key={index} href={info.href}>
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                    >
                      <Icon className="text-slate-900" size={20} />
                      <span className="text-slate-900 font-medium">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Let's Build Something Great</h3>
              <p className="text-slate-300">
                Whether you have a project in mind or just want to chat about web development,
                feel free to reach out!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-slate-600">
            © 2024 Ujjwal Kumar. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
