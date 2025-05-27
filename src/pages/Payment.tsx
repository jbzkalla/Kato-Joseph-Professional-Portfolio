
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <div className="min-h-screen bg-portfolio-darker">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hire <span className="text-portfolio-accent">Me</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Ready to work together? Choose a service package that fits your needs 
                and let's bring your vision to life.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic Package */}
              <div className="bg-portfolio-dark rounded-lg p-8 text-center animate-fade-in">
                <div className="text-portfolio-accent text-4xl mb-6">
                  <i className='bx bx-package'></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Basic Package</h3>
                <div className="text-3xl font-bold text-portfolio-accent mb-2">UGX 100k</div>
                <p className="text-gray-400 text-sm mb-6">One-time payment</p>
                <ul className="text-left text-gray-300 mb-8 space-y-2">
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    Website Design
                  </li>
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    Responsive Layout
                  </li>
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    Basic SEO Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    1 Month Support
                  </li>
                </ul>
                <Link to="/payment-process?package=basic" className="w-full btn-secondary block text-center">
                  Choose Basic
                </Link>
              </div>

              {/* Professional Package */}
              <div className="bg-portfolio-dark rounded-lg p-8 text-center animate-fade-in border-2 border-portfolio-accent relative" style={{ animationDelay: '0.1s' }}>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-portfolio-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
                <div className="text-portfolio-accent text-4xl mb-6">
                  <i className='bx bx-crown'></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Professional Package</h3>
                <div className="text-3xl font-bold text-portfolio-accent mb-2">UGX 300k</div>
                <p className="text-gray-400 text-sm mb-6">One-time payment</p>
                <ul className="text-left text-gray-300 mb-8 space-y-2">
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    Full Website Development
                  </li>
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    Mobile App Design
                  </li>
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    Advanced SEO
                  </li>
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    3 Months Support
                  </li>
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    Logo Design
                  </li>
                </ul>
                <Link to="/payment-process?package=professional" className="w-full btn-primary block text-center">
                  Choose Professional
                </Link>
              </div>

              {/* Enterprise Package */}
              <div className="bg-portfolio-dark rounded-lg p-8 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-portfolio-accent text-4xl mb-6">
                  <i className='bx bx-diamond'></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Package</h3>
                <div className="text-3xl font-bold text-portfolio-accent mb-2">UGX 500k</div>
                <p className="text-gray-400 text-sm mb-6">One-time payment</p>
                <ul className="text-left text-gray-300 mb-8 space-y-2">
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    Complete Digital Solution
                  </li>
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    E-commerce Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    Custom Features
                  </li>
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    6 Months Support
                  </li>
                  <li className="flex items-center gap-2">
                    <i className='bx bx-check text-portfolio-accent'></i>
                    Brand Identity Package
                  </li>
                </ul>
                <Link to="/payment-process?package=enterprise" className="w-full btn-secondary block text-center">
                  Choose Enterprise
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-16 text-center">
              <div className="bg-portfolio-dark rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Need a Custom Solution?
                </h3>
                <p className="text-gray-300 mb-6">
                  Every project is unique. Let's discuss your specific requirements 
                  and create a custom package that fits your needs and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+256708419371"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <i className='bx bx-phone'></i>
                    Call: +256 708 419 371
                  </a>
                  <a
                    href="mailto:katoj589@gmail.com"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <i className='bx bx-envelope'></i>
                    Email: katoj589@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
