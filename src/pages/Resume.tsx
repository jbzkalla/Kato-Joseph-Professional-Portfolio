
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <span className="text-portfolio-accent text-sm font-semibold tracking-wider">
                  2003 - 2025
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Education Journey
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-portfolio-dark p-8 rounded-lg relative">
                  <div className="absolute left-0 top-8 w-1 h-16 bg-portfolio-accent rounded-full"></div>
                  <div className="ml-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          UGANDA MARTYRS UNIVERSITY-NKOZI
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Bachelor of Science in Computer Science (2023-2025)
                        </p>
                      </div>
                      <div className="text-portfolio-accent font-bold mt-2 sm:mt-0">
                        In Progress
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Currently pursuing a comprehensive Computer Science degree with focus on software development, 
                      networking, AI fundamentals, and system analysis. Active member of coding clubs and tech communities.
                    </p>
                  </div>
                </div>

                <div className="bg-portfolio-dark p-8 rounded-lg relative">
                  <div className="absolute left-0 top-8 w-1 h-16 bg-portfolio-accent rounded-full"></div>
                  <div className="ml-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          UGANDA MARTYRS UNIVERSITY-NKOZI
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Diploma in Computer Science & Information Technology (2021-2023)
                        </p>
                      </div>
                      <div className="text-portfolio-accent font-bold mt-2 sm:mt-0">
                        Completed
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Comprehensive diploma covering programming fundamentals, database management, 
                      web development, and IT infrastructure basics.
                    </p>
                  </div>
                </div>

                <div className="bg-portfolio-dark p-8 rounded-lg relative">
                  <div className="absolute left-0 top-8 w-1 h-16 bg-portfolio-accent rounded-full"></div>
                  <div className="ml-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          BLESSED SACRAMENT KIMAANYA
                        </h3>
                        <p className="text-gray-400 text-sm">
                          UACE Certificate (2017-2019) | UCE Certificate (2013-2017)
                        </p>
                      </div>
                      <div className="text-portfolio-accent font-bold mt-2 sm:mt-0">
                        Excellent
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Strong foundation in Mathematics, Physics, and Computer Studies. 
                      Developed early interest in technology and analytical thinking.
                    </p>
                  </div>
                </div>

                <div className="bg-portfolio-dark p-8 rounded-lg relative">
                  <div className="absolute left-0 top-8 w-1 h-16 bg-portfolio-accent rounded-full"></div>
                  <div className="ml-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          MASAKA PARENTS PRIMARY SCHOOL
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Primary Leaving Examination (2003-2013)
                        </p>
                      </div>
                      <div className="text-portfolio-accent font-bold mt-2 sm:mt-0">
                        Pass
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Solid foundation in core subjects with early exposure to basic computer literacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="animate-slide-in">
              <div className="mb-8">
                <span className="text-portfolio-accent text-sm font-semibold tracking-wider">
                  2024 - Present
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Certifications & Courses
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-portfolio-dark p-8 rounded-lg relative">
                  <div className="absolute left-0 top-8 w-1 h-16 bg-portfolio-accent rounded-full"></div>
                  <div className="ml-8">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Cisco Certified Network Fundamentals
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Cisco Systems (2024)
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      Comprehensive certification covering routing, switching, IP addressing, 
                      and basic firewall concepts with hands-on network troubleshooting experience.
                    </p>
                  </div>
                </div>

                <div className="bg-portfolio-dark p-8 rounded-lg relative">
                  <div className="absolute left-0 top-8 w-1 h-16 bg-portfolio-accent rounded-full"></div>
                  <div className="ml-8">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Introduction to Artificial Intelligence
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Short Course Certificate (2024)
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      Foundational understanding of AI concepts, machine learning basics, 
                      and practical applications in modern technology solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technical Expertise
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive technical skills spanning networking, development, and system administration
              </p>
            </div>

            {/* Technical Skills */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-portfolio-dark p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Networking & Infrastructure</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Cisco Routing & Switching</span>
                      <span className="text-portfolio-accent">90%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-portfolio-accent rounded-full w-[90%]"></div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">IP addressing, basic firewall concepts</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Network Troubleshooting</span>
                      <span className="text-portfolio-accent">85%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-portfolio-accent rounded-full w-[85%]"></div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">Network optimization & monitoring tools</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">NOC Operations</span>
                      <span className="text-portfolio-accent">75%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-portfolio-accent rounded-full w-[75%]"></div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">Basic network monitoring exposure</p>
                  </div>
                </div>
              </div>

              <div className="bg-portfolio-dark p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Programming & Development</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Python & Java</span>
                      <span className="text-portfolio-accent">88%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-portfolio-accent rounded-full w-[88%]"></div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">Object-oriented programming</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Web Development</span>
                      <span className="text-portfolio-accent">92%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-portfolio-accent rounded-full w-[92%]"></div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">HTML, CSS, JavaScript, PHP</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Database Management</span>
                      <span className="text-portfolio-accent">85%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-portfolio-accent rounded-full w-[85%]"></div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">MySQL, Firebase</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Mobile Development</span>
                      <span className="text-portfolio-accent">80%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-portfolio-accent rounded-full w-[80%]"></div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">Android development with Firebase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Soft Skills */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-portfolio-dark p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Tools & Platforms</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <i className='bx bxl-git text-portfolio-accent text-xl'></i>
                    <span className="text-white">Git Version Control</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className='bx bx-code-alt text-portfolio-accent text-xl'></i>
                    <span className="text-white">Visual Studio Code</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className='bx bxl-microsoft text-portfolio-accent text-xl'></i>
                    <span className="text-white">Microsoft Office Suite</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className='bx bxl-firebase text-portfolio-accent text-xl'></i>
                    <span className="text-white">Firebase Platform</span>
                  </div>
                </div>
              </div>

              <div className="bg-portfolio-dark p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Team Collaboration</span>
                      <span className="text-portfolio-accent">95%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-portfolio-accent rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Problem Solving</span>
                      <span className="text-portfolio-accent">92%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-portfolio-accent rounded-full w-[92%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Quick Learning</span>
                      <span className="text-portfolio-accent">90%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-portfolio-accent rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Adaptability</span>
                      <span className="text-portfolio-accent">88%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-portfolio-accent rounded-full w-[88%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Professional Experience
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Work experience and notable projects that demonstrate practical application of skills
              </p>
            </div>

            <div className="space-y-8">
              {/* Work Experience */}
              <div className="bg-portfolio-dark p-8 rounded-lg relative">
                <div className="absolute left-0 top-8 w-1 h-20 bg-portfolio-accent rounded-full"></div>
                <div className="ml-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Web Developer & IT Support
                      </h3>
                      <p className="text-gray-400 text-sm">
                        St. John Paul II Vocational & High School | 2024 - Present
                      </p>
                    </div>
                    <div className="text-portfolio-accent font-bold mt-2 lg:mt-0">
                      Current
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-400 leading-relaxed">
                      Responsible for maintaining and developing the school's official website while 
                      providing comprehensive IT support to staff and students.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>• Designed and maintain responsive school website with modern UX</li>
                      <li>• Provide technical support and troubleshooting for school IT infrastructure</li>
                      <li>• Implement SEO best practices to improve online visibility</li>
                      <li>• Train staff on digital tools and platforms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-portfolio-dark p-8 rounded-lg relative">
                <div className="absolute left-0 top-8 w-1 h-20 bg-portfolio-accent rounded-full"></div>
                <div className="ml-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Executive Team Lead - Sales & Marketing
                      </h3>
                      <p className="text-gray-400 text-sm">
                        HGZ Tech Group (Laptop Loans) - UMU Region | 2023 - 2024
                      </p>
                    </div>
                    <div className="text-portfolio-accent font-bold mt-2 lg:mt-0">
                      Leadership
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-400 leading-relaxed">
                      Led sales and marketing initiatives for laptop loan services targeting university students, 
                      combining technical knowledge with business acumen.
                    </p>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>• Managed regional sales team and marketing strategies</li>
                      <li>• Achieved 150% of quarterly sales targets</li>
                      <li>• Developed customer relationship management processes</li>
                      <li>• Provided technical product consultation to customers</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Project Experience */}
              <div className="bg-gradient-to-r from-portfolio-accent/10 to-red-600/10 p-8 rounded-lg border border-portfolio-accent/20">
                <h3 className="text-2xl font-bold text-white mb-6">Notable Projects</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-portfolio-darker/50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      <i className='bx bx-mobile-alt text-portfolio-accent mr-2'></i>
                      Hostel Booking Mobile App
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Android Development with Firebase Integration
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      Built a comprehensive hostel booking application featuring user authentication, 
                      real-time database storage, and intuitive booking interface using Firebase backend services.
                    </p>
                  </div>

                  <div className="bg-portfolio-darker/50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      <i className='bx bx-world text-portfolio-accent mr-2'></i>
                      School Website Development
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      Full-Stack Web Development Project
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      Designed and developed the official website for St. John Paul II Vocational & High School, 
                      ensuring responsive design and optimal user experience across all devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'engagement':
        return (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Community Engagement & Volunteering
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Active participation in tech communities and volunteer initiatives
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-portfolio-dark p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <i className='bx bx-code-alt text-portfolio-accent mr-3'></i>
                    UMUTIA - UMU Tech Innovators
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">Coding Club Member</p>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Active member of the university's premier tech innovation club, participating in 
                    coding competitions, hackathons, and collaborative development projects.
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• Participated in multiple hackathons and coding competitions</li>
                    <li>• Collaborated on open-source projects with fellow members</li>
                    <li>• Attended tech workshops and training sessions</li>
                    <li>• Mentored junior members in programming fundamentals</li>
                  </ul>
                </div>

                <div className="bg-portfolio-dark p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <i className='bx bx-chalkboard text-portfolio-accent mr-3'></i>
                    Volunteer Tutor
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">Peer Academic Support</p>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Provided voluntary tutoring services to fellow students in programming, 
                    database management, and development fundamentals.
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• Tutored 20+ students in programming concepts</li>
                    <li>• Conducted database management workshops</li>
                    <li>• Assisted with development project guidance</li>
                    <li>• Developed simplified learning materials</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-portfolio-dark p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <i className='bx bx-heart text-portfolio-accent mr-3'></i>
                    SAGE Program - Centenary Bank
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">Financial Service Volunteer (2023-2024)</p>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Supported financial service delivery to elderly beneficiaries at Centenary Bank's 
                    Kayabwe Branch, bridging technology gaps for senior citizens.
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• Assisted elderly customers with digital banking services</li>
                    <li>• Provided patient guidance on mobile money platforms</li>
                    <li>• Helped bridge the digital divide for senior citizens</li>
                    <li>• Improved customer service delivery processes</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-portfolio-accent/10 to-red-600/10 p-8 rounded-lg border border-portfolio-accent/20">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <i className='bx bx-award text-portfolio-accent mr-3'></i>
                    Recognition & Impact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                      <span className="text-gray-400">Outstanding Peer Tutor Award (2024)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                      <span className="text-gray-400">Hackathon Participant Certificate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                      <span className="text-gray-400">Community Service Recognition</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                      <span className="text-gray-400">Tech Innovation Club Leadership</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Collaboration */}
            <div className="bg-gradient-to-r from-portfolio-accent/10 to-red-600/10 p-8 rounded-lg border border-portfolio-accent/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm always open to new volunteer opportunities, tech community initiatives, 
                and collaborative projects that make a positive impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <i className='bx bx-message-dots'></i>
                  Get In Touch
                </a>
                <a
                  href="/cv-kato-joseph-bwanika.pdf"
                  download
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <i className='bx bx-download'></i>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-portfolio-darker">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-portfolio-accent text-sm font-semibold tracking-wider uppercase mb-4">
                EXPERIENCED DEVELOPER & IT PROFESSIONAL
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My Professional Resume
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive overview of my education, technical skills, professional experience, 
                and community engagement in technology and development
              </p>
            </div>

            {/* Resume Navigation */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
              <button
                onClick={() => setActiveTab('education')}
                className={`px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                  activeTab === 'education'
                    ? 'text-portfolio-accent border-b-2 border-portfolio-accent bg-portfolio-accent/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                  activeTab === 'skills'
                    ? 'text-portfolio-accent border-b-2 border-portfolio-accent bg-portfolio-accent/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Technical Skills
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                  activeTab === 'experience'
                    ? 'text-portfolio-accent border-b-2 border-portfolio-accent bg-portfolio-accent/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Experience & Projects
              </button>
              <button
                onClick={() => setActiveTab('engagement')}
                className={`px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                  activeTab === 'engagement'
                    ? 'text-portfolio-accent border-b-2 border-portfolio-accent bg-portfolio-accent/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Community & Volunteering
              </button>
            </div>

            {/* Resume Content */}
            <div className="mb-16">
              {renderTabContent()}
            </div>

            {/* Download CV Button */}
            <div className="text-center">
              <a
                href="/cv-kato-joseph-bwanika.pdf"
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                <i className='bx bx-download'></i>
                Download Full CV
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
