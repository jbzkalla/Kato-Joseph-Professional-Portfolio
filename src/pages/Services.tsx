
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: 'bx-robot',
      title: 'Robotics Development',
      description: 'Design and development of robotic systems, automation solutions, and IoT devices for various industrial and commercial applications.',
    },
    {
      icon: 'bx-code-alt',
      title: 'Software Development',
      description: 'Custom software solutions, desktop applications, and system integrations tailored to meet your specific business requirements.',
    },
    {
      icon: 'bx-globe',
      title: 'Website Development',
      description: 'Modern, responsive websites with clean code, SEO optimization, and user-friendly interfaces that drive results.',
    },
    {
      icon: 'bx-brain',
      title: 'Artificial Intelligence Solutions',
      description: 'AI-powered applications, machine learning models, and intelligent automation systems to transform your business processes.',
    },
    {
      icon: 'bx-data',
      title: 'Database Management',
      description: 'Database design, optimization, migration, and maintenance services ensuring data integrity and optimal performance.',
    },
    {
      icon: 'bx-bulb',
      title: 'Innovation Consulting',
      description: 'Strategic technology consulting to help businesses adopt emerging technologies and innovative solutions for competitive advantage.',
    },
    {
      icon: 'bx-chalkboard',
      title: 'Technical Training',
      description: 'Comprehensive training programs in programming, web development, AI, and emerging technologies for individuals and teams.',
    },
    {
      icon: 'bx-palette',
      title: 'Graphics Designing',
      description: 'Creative visual solutions including logos, branding materials, and digital graphics for marketing and promotional needs.',
    },
    {
      icon: 'bx-mobile-alt',
      title: 'Mobile Application',
      description: 'Native and cross-platform mobile applications with intuitive user interfaces and robust backend integrations.',
    },
  ];

  return (
    <div className="min-h-screen bg-portfolio-darker">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My <span className="text-portfolio-accent">Services</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                I offer a comprehensive range of services to help bring your ideas to life. 
                From cutting-edge AI solutions to robust web development, I'm here to deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-portfolio-dark p-8 rounded-lg hover:bg-portfolio-dark/80 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-portfolio-accent text-4xl mb-6">
                    <i className={`bx ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-portfolio-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-300 mb-8">
                Ready to start your project? Let's discuss how I can help you achieve your goals.
              </p>
              <a href="/contact" className="btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
