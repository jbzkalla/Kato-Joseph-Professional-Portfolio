import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);
  const categories = ['all', 'business-cards', 'logos', 'banners', 'book-launch', 'invitation-cards', 'posters', 'certificates', 'websites', 'mobile-apps'];
  const categoryLabels: {
    [key: string]: string;
  } = {
    'all': 'All',
    'business-cards': 'Business Cards',
    'logos': 'Logos',
    'banners': 'Banners',
    'book-launch': 'Book Launch',
    'invitation-cards': 'Invitation Cards',
    'posters': 'Posters',
    'certificates': 'Certificates',
    'websites': 'Websites',
    'mobile-apps': 'Mobile Apps'
  };
  const galleryImages = [
  // Business Cards
  {
    id: 1,
    src: '/lovable-uploads/ce493c79-73af-47f2-99e4-590e498be5a7.png',
    alt: 'Patrick Ivan Business Card',
    category: 'business-cards'
  }, {
    id: 2,
    src: '/lovable-uploads/a7e7d457-d8db-480f-8c14-c05d161f3ddd.png',
    alt: 'School Business Card',
    category: 'business-cards'
  }, {
    id: 3,
    src: '/lovable-uploads/90c80ac5-ae79-42ed-a917-57fdf6450f86.png',
    alt: 'PIM Business Card',
    category: 'business-cards'
  }, {
    id: 4,
    src: '/lovable-uploads/b12340e5-da3b-4ebd-a7e7-982c5de58fa9.png',
    alt: 'Kato Joseph Business Card',
    category: 'business-cards'
  }, {
    id: 5,
    src: '/lovable-uploads/557974e7-661a-470d-b684-8688ab9b0327.png',
    alt: 'JB Kalla Business Card',
    category: 'business-cards'
  },
  // Logos
  {
    id: 6,
    src: '/lovable-uploads/7693995a-6223-4c38-8af5-d2f3f5689397.png',
    alt: 'Satisfaction Cafe Logo',
    category: 'logos'
  }, {
    id: 7,
    src: '/lovable-uploads/cea2dd6c-8599-45ec-945b-6f6a2eef245d.png',
    alt: 'Cake Bond Uganda Logo',
    category: 'logos'
  }, {
    id: 8,
    src: '/lovable-uploads/b5fa3637-e1d2-43be-90d2-748557521856.png',
    alt: 'Cake Bond Uganda Alternative Logo',
    category: 'logos'
  },
  // Banners
  {
    id: 9,
    src: '/lovable-uploads/f80eb4c4-3eef-4dfc-82f9-37c0bcf679d0.png',
    alt: 'Cake Bond Uganda Promotional Banner',
    category: 'banners'
  }, {
    id: 10,
    src: '/lovable-uploads/25ac77c0-36b0-4188-8480-9c780d13c102.png',
    alt: 'Huawei ICT Competition Banner',
    category: 'banners'
  }, {
    id: 11,
    src: '/lovable-uploads/7942da34-8b6f-404f-b329-728a26028334.png',
    alt: 'MS Electronics Shop Banner',
    category: 'banners'
  }, {
    id: 12,
    src: '/lovable-uploads/d0a660f5-88b9-4c57-b7d6-55eb331b3f3b.png',
    alt: 'St. John Paul II School Banner',
    category: 'banners'
  }, {
    id: 13,
    src: '/lovable-uploads/68cdb8aa-52b7-47d5-8b30-62576dfb64f7.png',
    alt: 'Ian Tours & Travel Banner',
    category: 'banners'
  },
  // Book Launch
  {
    id: 14,
    src: '/lovable-uploads/685d026e-8277-48e8-8980-b6e5e950e52b.png',
    alt: 'The Silent Noise Book Launch',
    category: 'book-launch'
  }, {
    id: 15,
    src: '/lovable-uploads/60c69c1d-6912-4a4d-9e89-b524e4385d93.png',
    alt: 'Book Launch Alternative Design',
    category: 'book-launch'
  },
  // Certificates - Old ones
  {
    id: 16,
    src: '/lovable-uploads/7017a58f-e776-4d98-8c41-59d6a510e84d.png',
    alt: 'Thank You Certificate',
    category: 'certificates'
  }, {
    id: 17,
    src: '/lovable-uploads/6f29736f-e6b8-4b23-9241-f522706e3ba6.png',
    alt: 'Staff Appreciation Certificate',
    category: 'certificates'
  },
  // New Certificates
  {
    id: 29,
    src: '/lovable-uploads/ada74a55-335c-40ec-b2cc-8f4caa49f628.png',
    alt: 'St. John Paul II Achievement Certificate',
    category: 'certificates'
  }, {
    id: 30,
    src: '/lovable-uploads/4958178e-8616-454a-bd1d-103bc83bc3ba.png',
    alt: 'St. John Paul II Appreciation Certificate',
    category: 'certificates'
  }, {
    id: 31,
    src: '/lovable-uploads/a6212e8a-a64d-4beb-a706-c48b29f3d669.png',
    alt: 'Certificate of Appreciation',
    category: 'certificates'
  }, {
    id: 32,
    src: '/lovable-uploads/c3920c91-e9ad-401b-bd81-1b76e0a3e687.png',
    alt: 'St. John Paul II Certificate of Appreciation',
    category: 'certificates'
  }, {
    id: 33,
    src: '/lovable-uploads/02b177ad-4c78-4757-8574-577392d79caf.png',
    alt: 'St. John Paul II Appreciation Certificate Design',
    category: 'certificates'
  }, {
    id: 34,
    src: '/lovable-uploads/5d580ca8-2bd8-4307-9923-55dd73909c64.png',
    alt: 'Modern Certificate of Appreciation',
    category: 'certificates'
  }, {
    id: 35,
    src: '/lovable-uploads/b2c3ab85-e3e9-46c8-a10c-1ed2f69fbe90.png',
    alt: 'Website Design Appreciation Certificate',
    category: 'certificates'
  }, {
    id: 36,
    src: '/lovable-uploads/1cc75935-c1f7-4d13-8672-6f080a1e3a87.png',
    alt: 'Uganda Martyrs University Certificate',
    category: 'certificates'
  }, {
    id: 37,
    src: '/lovable-uploads/9975044d-294e-4ece-8f6b-c8304311ccd0.png',
    alt: 'University Certificate Design',
    category: 'certificates'
  },
  // Invitation Cards
  {
    id: 18,
    src: '/lovable-uploads/b59d36ca-1454-4248-ba5c-f74c7f9d4d2b.png',
    alt: 'Chris Weds Carol Invitation',
    category: 'invitation-cards'
  }, {
    id: 19,
    src: '/lovable-uploads/9ab5a303-58bf-4e50-83fb-331871848867.png',
    alt: 'Wedding Invitation Card',
    category: 'invitation-cards'
  },
  // Posters
  {
    id: 20,
    src: '/lovable-uploads/5647956a-7d8e-4987-8435-421005a84f8e.png',
    alt: 'Vote Charles Campaign Poster',
    category: 'posters'
  }, {
    id: 21,
    src: '/lovable-uploads/8a0b0f09-65ab-4749-bc22-dcec9ba05d27.png',
    alt: 'School Registration Poster',
    category: 'posters'
  }, {
    id: 22,
    src: '/lovable-uploads/cdd814d5-4eae-45da-8ec3-b8b5ba439957.png',
    alt: 'School Exam Success Poster',
    category: 'posters'
  },
  // Websites
  {
    id: 23,
    src: '/lovable-uploads/07553fc5-25ba-4c4a-9e63-335806120257.png',
    alt: 'Birth Haven Web Design',
    category: 'websites'
  }, {
    id: 24,
    src: '/lovable-uploads/a0e9ac93-e433-4847-a753-fd090b008c0a.png',
    alt: 'St. John Paul II VTC Website',
    category: 'websites'
  }, {
    id: 25,
    src: '/lovable-uploads/4ca9a346-5960-4332-a3b2-14a74b1bbe35.png',
    alt: 'Services Overview',
    category: 'websites'
  }, {
    id: 26,
    src: '/lovable-uploads/decf5641-21a3-40d6-b24f-77adbc24d824.png',
    alt: 'Contact Section',
    category: 'websites'
  },
  // Mobile Apps
  {
    id: 27,
    src: '/lovable-uploads/1a31f820-5e46-4388-9749-1e6a97b1e482.png',
    alt: 'Zuula Lost & Found App',
    category: 'mobile-apps'
  }, {
    id: 28,
    src: '/lovable-uploads/b4c6c328-cdf8-406f-9d28-beb77b05d8b5.png',
    alt: 'UMU Room Booking App',
    category: 'mobile-apps'
  }];
  const filteredImages = selectedCategory === 'all' ? galleryImages : galleryImages.filter(image => image.category === selectedCategory);
  return <div className="min-h-screen bg-portfolio-darker">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My <span className="text-portfolio-accent">Gallery</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                A visual journey through my work, experiences, and creative process. 
                Each image tells a story of dedication and passion.
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category ? 'bg-portfolio-accent text-white' : 'bg-portfolio-dark text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
                    {categoryLabels[category]}
                  </button>)}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => <div key={image.id} className="group cursor-pointer animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }} onClick={() => setSelectedImage(image.src)}>
                  <div className="relative overflow-hidden rounded-lg bg-portfolio-dark">
                    <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <i className='bx bx-search-alt text-3xl mb-2'></i>
                        <p className="text-sm font-medium">{image.alt}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-portfolio-accent text-white px-3 py-1 rounded-full text-xs font-medium uppercase">
                        {categoryLabels[image.category] || image.category}
                      </span>
                    </div>
                  </div>
                </div>)}
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
                <div className="text-3xl font-bold text-portfolio-accent mb-2">25+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="text-3xl font-bold text-portfolio-accent mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="animate-fade-in" style={{
              animationDelay: '0.3s'
            }}>
                <div className="text-3xl font-bold text-portfolio-accent mb-2">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <img src={selectedImage} alt="Gallery Image" className="max-w-full max-h-full object-contain rounded-lg" />
            <button className="absolute top-4 right-4 text-white text-2xl hover:text-portfolio-accent transition-colors duration-300" onClick={() => setSelectedImage(null)}>
              <i className='bx bx-x'></i>
            </button>
          </div>
        </div>}

      <Footer />
    </div>;
};
export default Gallery;