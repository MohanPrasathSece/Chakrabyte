import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, CheckCircle, Quote, ChevronRight, Star } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroImage from "@/assets/hero-image.jpg";
import ethicalHackingImg from "@/assets/course-ethical-hacking.jpg";
import socAnalystImg from "@/assets/course-soc-analyst.jpg";
import forensicsImg from "@/assets/course-forensics.jpg";

const Home = () => {
  const features = [
    "Industry-certified trainers with 10+ years experience",
    "Hands-on labs with real-world scenarios",
    "Flexible learning: Online live, at your college, or at your office",
    "Job placement assistance and career guidance",
    "Customized corporate and college programs",
    "Latest tools and technologies",
  ];

  const featuredCourses = [
    {
      title: "Ethical Hacking & Penetration Testing",
      description: "Master the art of ethical hacking with comprehensive penetration testing techniques",
      duration: "12 Weeks",
      level: "Intermediate",
      students: "1500+",
      image: ethicalHackingImg,
      link: "/courses/ethical-hacking",
    },
    {
      title: "SOC Analyst Training",
      description: "Become a certified SOC analyst and protect organizations from cyber threats",
      duration: "10 Weeks",
      level: "Beginner to Advanced",
      students: "1200+",
      image: socAnalystImg,
      link: "/courses/soc-analyst",
    },
    {
      title: "Cyber Forensics & Investigation",
      description: "Learn digital forensics and incident response techniques",
      duration: "8 Weeks",
      level: "Intermediate",
      students: "800+",
      image: forensicsImg,
      link: "/courses/cyber-forensics",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Security Analyst",
      company: "Tech Mahindra",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
      quote: "The practical labs and real attack simulations matched what I see daily in my job. I moved from desktop support to security analyst within months."
    },
    {
      name: "Priya Sharma",
      role: "SOC Analyst",
      company: "Infosys",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
      quote: "The trainers shared playbooks, sample alerts and incident reports. It felt like on-the-job training rather than a normal class."
    },
    {
      name: "Amit Patel",
      role: "Web Application Pentester",
      company: "Freelance",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
      quote: "I joined from a remote town and attended completely online. The projects from chakrabyte security helped me build a strong GitHub portfolio."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="min-h-screen bg-primary text-white flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Column: Content */}
            <div className="text-left space-y-8">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
                <Shield className="w-4 h-4 text-purple-200" />
                <span>Trusted by 2,500+ Students</span>
              </div>

              {/* Headings */}
              <div className="space-y-4">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Master Cybersecurity <br />
                  <span className="text-purple-200">With Industry Experts</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light">
                  Launch your career with hands-on training, real-world projects, and recognized certifications. Available online and offline.
                </p>
              </div>

              {/* Buttons - Compact Premium Design */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <Button
                  asChild
                  className="bg-gradient-to-r from-white to-gray-50 text-purple-600 hover:from-gray-50 hover:to-white font-semibold px-8 py-3 text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 rounded-xl border-2 border-purple-200/50 relative overflow-hidden group"
                >
                  <Link to="/courses">
                    <span className="relative z-10">Explore Courses</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>

                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 text-white hover:from-purple-700 hover:via-purple-800 hover:to-indigo-900 font-semibold px-8 py-3 text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 rounded-xl border-2 border-purple-400/30 relative overflow-hidden group"
                >
                  <Link to="/contact">
                    <span className="relative z-10">Book a Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Job Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Certified Trainers</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Composition */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Cyber Defense</h3>
                      <p className="text-xs opacity-75">Professional Certification</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-bold">
                    Active Batch
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-purple-300 to-white rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Course Progress</span>
                    <span className="font-bold">75%</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-black/20 rounded-lg p-4">
                      <p className="text-2xl font-bold">24/7</p>
                      <p className="text-xs opacity-70">Lab Access</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4">
                      <p className="text-2xl font-bold">50+</p>
                      <p className="text-xs opacity-70">Tools Covered</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section - Animated */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-purple-50 rounded-2xl hover:shadow-md transition-all">
              <div className="text-4xl font-bold text-primary mb-2 flex">
                <AnimatedCounter to={2500} />+
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Students Trained</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-purple-50 rounded-2xl hover:shadow-md transition-all">
              <div className="text-4xl font-bold text-primary mb-2 flex">
                <AnimatedCounter to={10} />+
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Expert Courses</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-purple-50 rounded-2xl hover:shadow-md transition-all">
              <div className="text-4xl font-bold text-primary mb-2 flex">
                <AnimatedCounter to={100} />%
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Practical Labs</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-purple-50 rounded-2xl hover:shadow-md transition-all">
              <div className="text-4xl font-bold text-primary mb-2 flex">
                <AnimatedCounter to={4.9} duration={1.5} />
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Student Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-light-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose <span className="text-primary">chakrabyte security?</span>
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive cybersecurity training with real-world applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 bg-white rounded-xl border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <CheckCircle className="text-primary group-hover:scale-110 transition-transform" size={24} />
                </div>
                <p className="text-base leading-relaxed text-gray-700 font-medium pt-2">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Courses</span>
            </h2>
            <p className="text-lg text-gray-600">
              Industry-recognized certification programs designed by cybersecurity experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 font-semibold px-10 py-6"
            >
              <Link to="/courses">
                View All Courses
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Improved Hover Effects */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Services
            </h2>
            <p className="text-lg text-purple-100 opacity-90">
              Comprehensive cybersecurity solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Link to="/services/corporate-training">
              <div className="group h-full bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors relative z-10">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">Corporate Training</h3>
                <p className="text-purple-100 mb-6 flex-grow relative z-10">
                  Customized security awareness and technical training for your organization
                </p>
                <div className="flex items-center text-white/70 group-hover:text-white font-medium transition-colors mt-auto relative z-10">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Service 2 */}
            <Link to="/services/college-workshops">
              <div className="group h-full bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors relative z-10">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">College Workshops</h3>
                <p className="text-purple-100 mb-6 flex-grow relative z-10">
                  Interactive cybersecurity workshops and training programs for educational institutions
                </p>
                <div className="flex items-center text-white/70 group-hover:text-white font-medium transition-colors mt-auto relative z-10">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Service 3 */}
            <Link to="/services/device-security">
              <div className="group h-full bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors relative z-10">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">Device Security & Repairs</h3>
                <p className="text-purple-100 mb-6 flex-grow relative z-10">
                  Professional laptop and device repair services, malware removal, and security hardening
                </p>
                <div className="flex items-center text-white/70 group-hover:text-white font-medium transition-colors mt-auto relative z-10">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Premium Design */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Students Say</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Real stories from cybersecurity professionals who transformed their careers
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/15 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/20">
                    
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <p className="text-gray-200 text-lg leading-relaxed mb-8 flex-grow italic group-hover:text-white transition-colors duration-300">
                        "{testimonial.quote}"
                      </p>

                      {/* Bottom Section */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Status Indicator */}
                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white/10"></div>
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors duration-300">
                              {testimonial.name}
                            </h4>
                            <p className="text-purple-300 font-medium text-sm group-hover:text-purple-200 transition-colors duration-300">
                              {testimonial.role}
                            </p>
                            <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} size={14} className="text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                            ))}
                          </div>
                          <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10K+</div>
              <div className="text-sm text-gray-400">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-gray-400">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">4.9</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-24 right-6 flex flex-col gap-3 z-40">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20your%20cybersecurity%20courses"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

        {/* Call Button */}
        <a
          href="tel:+919876543210"
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          aria-label="Call us"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>

      {/* Sticky Footer - Hidden on Mobile */}
      <footer className="hidden md:block fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-lg z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-xs">
            {/* Left Side - Navigation Links */}
            <div className="flex items-center gap-4">
              <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Contact</Link>
              <Link to="/courses" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">View Courses</Link>
            </div>

            {/* Right Side - Contact Information */}
            <div className="flex items-center gap-4 text-gray-600">
              <a href="tel:+919876543210" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 98765 43210
              </a>
              <a href="mailto:info@chakrabyte.com" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@chakrabyte.com
              </a>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Chennai, Tamil Nadu
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
