
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'development', name: 'Development' },
    { id: 'application', name: 'Applications' },
    { id: 'design', name: 'Design' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Birth Haven Web Design',
      category: 'development',
      image: '/lovable-uploads/07553fc5-25ba-4c4a-9e63-335806120257.png',
      description: 'Educational pregnancy support website with comprehensive resources.',
      likes: 600,
      link: 'https://birth-haven-web-design.lovable.app/'
    },
    {
      id: 2,
      title: 'St. John Paul II VTC Website',
      category: 'development',
      image: '/lovable-uploads/a0e9ac93-e433-4847-a753-fd090b008c0a.png',
      description: 'Official school website with modern design and functionality.',
      likes: 750,
      link: 'https://stjohnpaulvtc.com'
    },
    {
      id: 3,
      title: 'Zuula Lost & Found App',
      category: 'application',
      image: '/lovable-uploads/1a31f820-5e46-4388-9749-1e6a97b1e482.png',
      description: 'Mobile application for tracking lost and found items.',
      likes: 630,
      link: 'https://www.figma.com/proto/v5Cjwkdb2MIbQko25Es3N4/Lost---Found-App?node-id=2001-18&t=tTrjhiAbnkuEKlCg-1'
    },
    {
      id: 4,
      title: 'UMU Room Booking App',
      category: 'application',
      image: '/lovable-uploads/b4c6c328-cdf8-406f-9d28-beb77b05d8b5.png',
      description: 'University hostel room booking mobile application.',
      likes: 520,
      link: 'https://www.figma.com/proto/NM1N997ii9Hb7COEOj2ZzV'
    },
    {
      id: 5,
      title: 'Logo Collection',
      category: 'design',
      image: '/lovable-uploads/7693995a-6223-4c38-8af5-d2f3f5689397.png',
      description: 'Creative logo designs for various industries.',
      likes: 445,
      link: '/gallery?category=logos'
    },
  ];

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
      id: 'banners',
      title: 'Banner Designs',
      image: '/lovable-uploads/f80eb4c4-3eef-4dfc-82f9-37c0bcf679d0.png',
      description: 'Eye-catching banners for promotional campaigns.',
      category: 'banners'
    },
    {
      id: 'client-certificates',
      title: 'Client Certificates',
      image: '/lovable-uploads/7017a58f-e776-4d98-8c41-59d6a510e84d.png',
      description: 'Professional certificate designs for achievements.',
      category: 'client-certificates'
    },
    {
      id: 'invitation-cards',
      title: 'Invitation Cards',
      image: '/lovable-uploads/b59d36ca-1454-4248-ba5c-f74c7f9d4d2b.png',
      description: 'Beautiful invitation cards for special occasions.',
      category: 'invitation-cards'
    },
    {
      id: 'posters',
      title: 'Poster Designs',
      image: '/lovable-uploads/5647956a-7d8e-4987-8435-421005a84f8e.png',
      description: 'Compelling poster designs for various purposes.',
      category: 'posters'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-portfolio-darker">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My <span className="text-portfolio-accent">Portfolio</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Explore my collection of projects showcasing creativity, 
                technical expertise, and attention to detail.
              </p>
            </div>

            {/* Featured Projects from Gallery */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Featured <span className="text-portfolio-accent">Gallery</span>
              </h2>
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
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-portfolio-accent text-white'
                      : 'bg-portfolio-dark text-gray-300 hover:bg-portfolio-accent hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
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
                    <div className="absolute top-4 right-4 text-white">
                      <i className='bx bx-heart'></i> {project.likes}
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-portfolio-accent text-white px-6 py-3 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        View Project
                      </a>
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
