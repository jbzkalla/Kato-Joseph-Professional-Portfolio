
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const featuredProjects = [
    {
      id: 'business-cards',
      title: 'Business Cards',
      image: '/lovable-uploads/ce493c79-73af-47f2-99e4-590e498be5a7.png',
      description: 'Professional business card designs for various industries.',
      category: 'business-cards'
    },
    {
      id: 'logos',
      title: 'Logo Designs',
      image: '/lovable-uploads/7693995a-6223-4c38-8af5-d2f3f5689397.png',
      description: 'Creative and memorable logo designs for brands.',
      category: 'logos'
    },
    {
      id: 'certificates',
      title: 'Client Certificates',
      image: '/lovable-uploads/7017a58f-e776-4d98-8c41-59d6a510e84d.png',
      description: 'Professional certificate designs for achievements.',
      category: 'client-certificates'
    },
  ];

  return (
    <div className="min-h-screen bg-portfolio-darker">
      <Header />
      
      {/* Hero Section */}
      <main className="pt-20">
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-portfolio-accent">KATO JOSEPH</span><br />
                <span className="text-white">BWANIKA</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm a passionate Computer Science student and aspiring tech professional with hands-on experience in full-stack development and emerging technologies. Proficient in JavaScript, Python, and PHP with a strong foundation in both frontend design and backend systems development. My technical toolkit includes database management with MySQL, mobile application development with Firebase integration, and machine learning concepts through specialized AI coursework. With a portfolio spanning web development projects, mobile applications, and user-centered design solutions, I bring both technical expertise and creative problem-solving skills to every project. Currently seeking opportunities to contribute to innovative tech teams while expanding my knowledge in frontend development, backend systems, mobile applications, and UI/UX design.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/resume" className="btn-primary">
                  View Resume
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/katojoseph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <i className='bx bxl-linkedin text-2xl'></i>
                </a>
                <a
                  href="https://twitter.com/katojoseph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <i className='bx bxl-twitter text-2xl'></i>
                </a>
                <a
                  href="https://wa.me/256708419371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <i className='bx bxl-whatsapp text-2xl'></i>
                </a>
              </div>
            </div>
            <div className="animate-slide-in">
              <div className="relative">
                <img
                  src="/lovable-uploads/3241f200-64da-4dba-b1f0-7f1bdba89465.png"
                  alt="Kato Joseph Bwanika"
                  className="w-80 h-80 object-cover rounded-full mx-auto border-4 border-portfolio-accent shadow-2xl"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-portfolio-accent rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-portfolio-pink rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CV/Experience Section */}
        <section className="bg-portfolio-dark py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                My Experience
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                With over 3 years of professional experience in web development, 
                creative design, and project management, I bring innovative solutions 
                to every project.
              </p>
            </div>
            <div className="text-center">
              <a
                href="/cv-kato-joseph-bwanika.pdf"
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                <i className='bx bx-download'></i>
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Here are some of my featured work categories that showcase my skills in 
                creative design and professional development.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-card group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-portfolio-accent text-white px-3 py-1 rounded-full text-sm font-medium uppercase">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        to={`/gallery?category=${project.category}`}
                        className="bg-portfolio-accent text-white px-6 py-3 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        View Category
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/portfolio" className="btn-primary">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
