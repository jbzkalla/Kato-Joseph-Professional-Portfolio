
export const GalleryStats = () => {
  return (
    <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
      <div className="animate-fade-in">
        <div className="text-3xl font-bold text-portfolio-accent mb-2">50+</div>
        <div className="text-gray-400">Projects Completed</div>
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="text-3xl font-bold text-portfolio-accent mb-2">25+</div>
        <div className="text-gray-400">Happy Clients</div>
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="text-3xl font-bold text-portfolio-accent mb-2">3+</div>
        <div className="text-gray-400">Years Experience</div>
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="text-3xl font-bold text-portfolio-accent mb-2">100%</div>
        <div className="text-gray-400">Client Satisfaction</div>
      </div>
    </div>
  );
};
