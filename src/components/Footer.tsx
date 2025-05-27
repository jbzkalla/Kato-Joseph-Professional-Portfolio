const Footer = () => {
  return <footer className="bg-portfolio-darker border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-gray-400 text-sm font-medium mb-4">FIND WITH ME</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/katojoseph" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className='bx bxl-facebook text-2xl'></i>
            </a>
            <a href="https://www.instagram.com/jbz.kalla.98?igsh=MXAyczc0d3lpdDZ1aQ==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className='bx bxl-instagram text-2xl'></i>
            </a>
            <a href="https://www.linkedin.com/in/katojoseph" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className='bx bxl-linkedin text-2xl'></i>
            </a>
            <a href="https://www.youtube.com/@katojoseph" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className='bx bxl-youtube text-2xl'></i>
            </a>
            <a href="https://twitter.com/katojoseph" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className='bx bxl-twitter text-2xl'></i>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm">
          <p>© 2025 Kato Joseph Bwanika. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;