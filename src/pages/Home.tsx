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

      {/* Testimonials Section - Modern Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Our <span className="text-purple-600">Students Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from real students who transformed their careers with our cybersecurity training
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 relative overflow-hidden group"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-purple-200 opacity-50">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-purple-100">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-purple-600 font-medium">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="text-purple-500 fill-purple-500" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed italic group-hover:text-purple-900 transition-colors">
                    "{testimonial.quote}"
                  </p>

                  {/* Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Fixed Button Text */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Award className="w-16 h-16 mx-auto mb-4 opacity-80" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Cybersecurity Journey?
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Join our community of 2,500+ learners and take the first step towards a rewarding career in cybersecurity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <Link to="/courses">Browse All Courses</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-10 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-12 border-t border-white/10 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-sm opacity-80">Expert Courses</div>
              </div>
              <div className="hidden md:block h-12 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-80">Support Available</div>
              </div>
            </div>
            <p className="text-sm opacity-75 mt-12">Contact us to learn more about our programs</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
