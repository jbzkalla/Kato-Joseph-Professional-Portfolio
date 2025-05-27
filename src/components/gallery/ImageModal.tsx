
interface ImageModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

export const ImageModal = ({ selectedImage, onClose }: ImageModalProps) => {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full">
        <img
          src={selectedImage}
          alt="Gallery Image"
          className="max-w-full max-h-full object-contain rounded-lg"
        />
        <button
          className="absolute top-4 right-4 text-white text-2xl hover:text-portfolio-accent transition-colors duration-300"
          onClick={onClose}
        >
          <i className='bx bx-x'></i>
        </button>
      </div>
    </div>
  );
};
