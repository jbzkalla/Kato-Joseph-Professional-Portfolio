
interface GalleryFilterProps {
  categories: string[];
  categoryLabels: { [key: string]: string };
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const GalleryFilter = ({ 
  categories, 
  categoryLabels, 
  selectedCategory, 
  onCategoryChange 
}: GalleryFilterProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-portfolio-accent text-white'
                : 'bg-portfolio-dark text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>
    </div>
  );
};
