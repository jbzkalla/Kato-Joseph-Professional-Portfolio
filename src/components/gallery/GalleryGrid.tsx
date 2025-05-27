
interface Image {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: Image[];
  categoryLabels: { [key: string]: string };
  onImageClick: (src: string) => void;
}

export const GalleryGrid = ({ images, categoryLabels, onImageClick }: GalleryGridProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="group cursor-pointer animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => onImageClick(image.src)}
        >
          <div className="relative overflow-hidden rounded-lg bg-portfolio-dark">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
              fetchPriority={index < 6 ? "high" : "auto"}
            />
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
        </div>
      ))}
    </div>
  );
};
