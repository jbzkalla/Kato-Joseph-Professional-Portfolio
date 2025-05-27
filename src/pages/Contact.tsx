
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:katoj589@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened",
        description: "Your email client should open with the message pre-filled. Please send the email to complete your inquiry.",
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-portfolio-darker">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact <span className="text-portfolio-accent">With Me</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Ready to start your next project? Let's discuss how we can work together 
                to bring your ideas to life.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="animate-fade-in">
                <div className="mb-8">
                  <img
                    src="/lovable-uploads/3241f200-64da-4dba-b1f0-7f1bdba89465.png"
                    alt="Kato Joseph Bwanika"
                    className="w-64 h-64 object-cover rounded-lg mb-6"
                  />
                  <h2 className="text-2xl font-bold text-white mb-2">
                    KATO JOSEPH BWANIKA
                  </h2>
                  <p className="text-gray-400 mb-6">Chief Operating Officer</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    I am available for freelance work. Connect with me via and call in to my account.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <i className='bx bx-phone text-portfolio-accent text-xl'></i>
                      <span className="text-gray-300">Phone: +256 708 419 371</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className='bx bx-envelope text-portfolio-accent text-xl'></i>
                      <span className="text-gray-300">Email: katoj589@gmail.com</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-gray-400 text-sm font-medium mb-4">FIND WITH ME</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/katojoseph"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <i className='bx bxl-facebook text-2xl'></i>
                      </a>
                      <a
                        href="https://www.instagram.com/jbz.kalla.98?igsh=MXAyczc0d3lpdDZ1aQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <i className='bx bxl-instagram text-2xl'></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/katojoseph"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <i className='bx bxl-linkedin text-2xl'></i>
                      </a>
                      <a
                        href="https://www.youtube.com/@katojoseph"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <i className='bx bxl-youtube text-2xl'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-slide-in">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-portfolio-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-portfolio-accent focus:outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-400 text-sm font-medium mb-2">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-portfolio-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-portfolio-accent focus:outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-portfolio-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-portfolio-accent focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-400 text-sm font-medium mb-2">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-portfolio-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-portfolio-accent focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-2">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-portfolio-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-portfolio-accent focus:outline-none transition-colors duration-300 resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-portfolio-accent hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors duration-300 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
