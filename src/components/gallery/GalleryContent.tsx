
import { useState } from 'react';
import { GalleryFilter } from './GalleryFilter';
import { GalleryGrid } from './GalleryGrid';
import { ImageModal } from './ImageModal';
import { GalleryStats } from './GalleryStats';

export const GalleryContent = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'business-cards',
    'logos',
    'banners',
    'book-launch',
    'invitation-cards',
    'posters',
    'client-certificates',
    'my-certificates',
    'websites',
    'mobile-apps'
  ];

  const categoryLabels: { [key: string]: string } = {
    'all': 'All',
    'business-cards': 'Business Cards',
    'logos': 'Logos',
    'banners': 'Banners',
    'book-launch': 'Book Launch',
    'invitation-cards': 'Invitation Cards',
    'posters': 'Posters',
    'client-certificates': 'Client Certificates',
    'my-certificates': 'My Certificates',
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
    },
    {
      id: 2,
      src: '/lovable-uploads/a7e7d457-d8db-480f-8c14-c05d161f3ddd.png',
      alt: 'School Business Card',
      category: 'business-cards'
    },
    {
      id: 3,
      src: '/lovable-uploads/90c80ac5-ae79-42ed-a917-57fdf6450f86.png',
      alt: 'PIM Business Card',
      category: 'business-cards'
    },
    {
      id: 4,
      src: '/lovable-uploads/b12340e5-da3b-4ebd-a7e7-982c5de58fa9.png',
      alt: 'Kato Joseph Business Card',
      category: 'business-cards'
    },
    {
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
    },
    {
      id: 7,
      src: '/lovable-uploads/cea2dd6c-8599-45ec-945b-6f6a2eef245d.png',
      alt: 'Cake Bond Uganda Logo',
      category: 'logos'
    },
    {
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
    },
    {
      id: 10,
      src: '/lovable-uploads/25ac77c0-36b0-4188-8480-9c780d13c102.png',
      alt: 'Huawei ICT Competition Banner',
      category: 'banners'
    },
    {
      id: 11,
      src: '/lovable-uploads/7942da34-8b6f-404f-b329-728a26028334.png',
      alt: 'MS Electronics Shop Banner',
      category: 'banners'
    },
    {
      id: 12,
      src: '/lovable-uploads/d0a660f5-88b9-4c57-b7d6-55eb331b3f3b.png',
      alt: 'St. John Paul II School Banner',
      category: 'banners'
    },
    {
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
    },
    {
      id: 15,
      src: '/lovable-uploads/60c69c1d-6912-4a4d-9e89-b524e4385d93.png',
      alt: 'Book Launch Alternative Design',
      category: 'book-launch'
    },
    // Client Certificates
    {
      id: 16,
      src: '/lovable-uploads/7017a58f-e776-4d98-8c41-59d6a510e84d.png',
      alt: 'Thank You Certificate',
      category: 'client-certificates'
    },
    {
      id: 17,
      src: '/lovable-uploads/6f29736f-e6b8-4b23-9241-f522706e3ba6.png',
      alt: 'Staff Appreciation Certificate',
      category: 'client-certificates'
    },
    {
      id: 29,
      src: '/lovable-uploads/ada74a55-335c-40ec-b2cc-8f4caa49f628.png',
      alt: 'St. John Paul II Achievement Certificate',
      category: 'client-certificates'
    },
    {
      id: 30,
      src: '/lovable-uploads/4958178e-8616-454a-bd1d-103bc83bc3ba.png',
      alt: 'St. John Paul II Appreciation Certificate',
      category: 'client-certificates'
    },
    {
      id: 31,
      src: '/lovable-uploads/a6212e8a-a64d-4beb-a706-c48b29f3d669.png',
      alt: 'Certificate of Appreciation',
      category: 'client-certificates'
    },
    {
      id: 32,
      src: '/lovable-uploads/c3920c91-e9ad-401b-bd81-1b76e0a3e687.png',
      alt: 'St. John Paul II Certificate of Appreciation',
      category: 'client-certificates'
    },
    {
      id: 33,
      src: '/lovable-uploads/02b177ad-4c78-4757-8574-577392d79caf.png',
      alt: 'St. John Paul II Appreciation Certificate Design',
      category: 'client-certificates'
    },
    {
      id: 34,
      src: '/lovable-uploads/5d580ca8-2bd8-4307-9923-55dd73909c64.png',
      alt: 'Modern Certificate of Appreciation',
      category: 'client-certificates'
    },
    {
      id: 35,
      src: '/lovable-uploads/b2c3ab85-e3e9-46c8-a10c-1ed2f69fbe90.png',
      alt: 'Website Design Appreciation Certificate',
      category: 'client-certificates'
    },
    // My Certificates
    {
      id: 36,
      src: '/lovable-uploads/1cc75935-c1f7-4d13-8672-6f080a1e3a87.png',
      alt: 'Uganda Martyrs University Certificate',
      category: 'my-certificates'
    },
    {
      id: 37,
      src: '/lovable-uploads/9975044d-294e-4ece-8f6b-c8304311ccd0.png',
      alt: 'University Certificate Design',
      category: 'my-certificates'
    },
    // Invitation Cards
    {
      id: 18,
      src: '/lovable-uploads/b59d36ca-1454-4248-ba5c-f74c7f9d4d2b.png',
      alt: 'Chris Weds Carol Invitation',
      category: 'invitation-cards'
    },
    {
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
    },
    {
      id: 21,
      src: '/lovable-uploads/8a0b0f09-65ab-4749-bc22-dcec9ba05d27.png',
      alt: 'School Registration Poster',
      category: 'posters'
    },
    {
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
    },
    {
      id: 24,
      src: '/lovable-uploads/a0e9ac93-e433-4847-a753-fd090b008c0a.png',
      alt: 'St. John Paul II VTC Website',
      category: 'websites'
    },
    {
      id: 25,
      src: '/lovable-uploads/4ca9a346-5960-4332-a3b2-14a74b1bbe35.png',
      alt: 'Services Overview',
      category: 'websites'
    },
    {
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
    },
    {
      id: 28,
      src: '/lovable-uploads/b4c6c328-cdf8-406f-9d28-beb77b05d8b5.png',
      alt: 'UMU Room Booking App',
      category: 'mobile-apps'
    },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          My <span className="text-portfolio-accent">Gallery</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A visual journey through my work, experiences, and creative process. 
          Each image tells a story of dedication and passion.
        </p>
      </div>

      <GalleryFilter
        categories={categories}
        categoryLabels={categoryLabels}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <GalleryGrid
        images={filteredImages}
        categoryLabels={categoryLabels}
        onImageClick={setSelectedImage}
      />

      <GalleryStats />

      <ImageModal
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
};
