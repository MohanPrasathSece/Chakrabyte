import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, CheckCircle, Quote, ChevronRight, Target, MessageCircle, Phone, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroImage from "@/assets/hero-image.jpg";
import ethicalHackingImg from "@/assets/course-ethical-hacking.jpg";
import socAnalystImg from "@/assets/course-soc-analyst.jpg";
import forensicsImg from "@/assets/course-forensics.jpg";

// Add CSS for continuous scrolling animation
const style = document.createElement('style');
style.textContent = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-scroll {
    animation: scroll 30s linear infinite;
  }
  
  .animate-scroll:hover {
    animation-play-state: paused;
  }
`;
document.head.appendChild(style);

const Home = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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

              {/* Buttons - Modern Premium Design */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  asChild
                  className="relative bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 font-bold px-8 sm:px-10 py-5 sm:py-4 text-lg shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-purple-500/30 group overflow-hidden h-14 sm:h-auto"
                >
                  <Link to="/contact">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started Today
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>

                <Button
                  asChild
                  className="relative bg-white/10 backdrop-blur-md text-white hover:bg-white/20 font-bold px-8 sm:px-10 py-5 sm:py-4 text-lg shadow-2xl hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-white/30 group overflow-hidden h-14 sm:h-auto"
                >
                  <Link to="/courses">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Explore Courses
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
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
      <section className="py-12 bg-gradient-to-br from-purple-50 to-purple-100 border-b border-purple-200/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-lg hover:bg-white transition-all border border-purple-200/50">
              <div className="text-4xl font-bold text-primary mb-2 flex">
                <AnimatedCounter to={2500} />+
              </div>
              <div className="text-sm font-medium text-purple-700 uppercase tracking-wide">Students Trained</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-lg hover:bg-white transition-all border border-purple-200/50">
              <div className="text-4xl font-bold text-primary mb-2 flex">
                <AnimatedCounter to={10} />+
              </div>
              <div className="text-sm font-medium text-purple-700 uppercase tracking-wide">Expert Courses</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-lg hover:bg-white transition-all border border-purple-200/50">
              <div className="text-4xl font-bold text-primary mb-2 flex">
                <AnimatedCounter to={100} />%
              </div>
              <div className="text-sm font-medium text-purple-700 uppercase tracking-wide">Practical Labs</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-lg hover:bg-white transition-all border border-purple-200/50">
              <div className="text-4xl font-bold text-primary mb-2 flex">
                <AnimatedCounter to={4.9} duration={1.5} />
              </div>
              <div className="text-sm font-medium text-purple-700 uppercase tracking-wide">Student Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
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
                className="group flex items-start gap-4 p-6 bg-gradient-to-br from-white to-purple-50/50 rounded-xl border border-purple-100/50 hover:border-purple-300/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-purple-600/10 group-hover:from-primary/20 group-hover:to-purple-600/20 flex items-center justify-center transition-colors border border-purple-200/50">
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

      {/* Authorized Training Partners Section */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Authorized <span className="text-purple-600">Training Partners</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with leading organizations to deliver globally recognized certifications and training programs
            </p>
          </div>

          {/* Scrolling Brand Logos */}
          <div className="relative">
            <div className="flex overflow-hidden">
              {/* First set of logos */}
              <div className="flex animate-scroll">
                {[
                  { name: "Coursera", logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=240&h=120&fit=crop&bg=white" },
                  { name: "Udemy", logo: "https://images.unsplash.com/photo-1557829029-5da6f3e4c2b6?w=240&h=120&fit=crop&bg=white" },
                  { name: "edX", logo: "https://images.unsplash.com/photo-1573164713714-d95e437ab0d6?w=240&h=120&fit=crop&bg=white" },
                  { name: "Khan Academy", logo: "https://images.unsplash.com/photo-1558804112-8de2214812c4?w=240&h=120&fit=crop&bg=white" },
                  { name: "LinkedIn Learning", logo: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=240&h=120&fit=crop&bg=white" },
                  { name: "Pluralsight", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=240&h=120&fit=crop&bg=white" },
                  { name: "Skillshare", logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=240&h=120&fit=crop&bg=white" },
                  { name: "Udacity", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=240&h=120&fit=crop&bg=white" },
                  { name: "FutureLearn", logo: "https://images.unsplash.com/photo-1558494949-ef010cbcc31c?w=240&h=120&fit=crop&bg=white" },
                  { name: "Codecademy", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=240&h=120&fit=crop&bg=white" },
                  { name: "MasterClass", logo: "https://images.unsplash.com/photo-1633265486074-08a646ba2c7e?w=240&h=120&fit=crop&bg=white" },
                  { name: "Domestika", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=240&h=120&fit=crop&bg=white" },
                  { name: "CreativeLive", logo: "https://images.unsplash.com/photo-1559028012-c72e70b79c5e?w=240&h=120&fit=crop&bg=white" },
                  { name: "Treehouse", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=240&h=120&fit=crop&bg=white" },
                  { name: "DataCamp", logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=240&h=120&fit=crop&bg=white" },
                  { name: "HubSpot Academy", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=240&h=120&fit=crop&bg=white" },
                  { name: "Google Digital Garage", logo: "https://images.unsplash.com/photo-1558494949-ef010cbcc31c?w=240&h=120&fit=crop&bg=white" },
                  { name: "Microsoft Learn", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=240&h=120&fit=crop&bg=white" },
                  { name: "IBM Skills", logo: "https://images.unsplash.com/photo-1633265486074-08a646ba2c7e?w=240&h=120&fit=crop&bg=white" },
                  { name: "Cisco Networking Academy", logo: "https://images.unsplash.com/photo-1558804112-8de2214812c4?w=240&h=120&fit=crop&bg=white" }
                ].map((partner, index) => (
                  <div key={index} className="flex-shrink-0 mx-8">
                    <div className="w-48 h-24 md:w-56 md:h-28 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2 hover:shadow-md transition-shadow">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless scrolling */}
              <div className="flex animate-scroll">
                {[
                  { name: "Coursera", logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=240&h=120&fit=crop&bg=white" },
                  { name: "Udemy", logo: "https://images.unsplash.com/photo-1557829029-5da6f3e4c2b6?w=240&h=120&fit=crop&bg=white" },
                  { name: "edX", logo: "https://images.unsplash.com/photo-1573164713714-d95e437ab0d6?w=240&h=120&fit=crop&bg=white" },
                  { name: "Khan Academy", logo: "https://images.unsplash.com/photo-1558804112-8de2214812c4?w=240&h=120&fit=crop&bg=white" },
                  { name: "LinkedIn Learning", logo: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=240&h=120&fit=crop&bg=white" },
                  { name: "Pluralsight", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=240&h=120&fit=crop&bg=white" },
                  { name: "Skillshare", logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=240&h=120&fit=crop&bg=white" },
                  { name: "Udacity", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=240&h=120&fit=crop&bg=white" },
                  { name: "FutureLearn", logo: "https://images.unsplash.com/photo-1558494949-ef010cbcc31c?w=240&h=120&fit=crop&bg=white" },
                  { name: "Codecademy", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=240&h=120&fit=crop&bg=white" },
                  { name: "MasterClass", logo: "https://images.unsplash.com/photo-1633265486074-08a646ba2c7e?w=240&h=120&fit=crop&bg=white" },
                  { name: "Domestika", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=240&h=120&fit=crop&bg=white" },
                  { name: "CreativeLive", logo: "https://images.unsplash.com/photo-1559028012-c72e70b79c5e?w=240&h=120&fit=crop&bg=white" },
                  { name: "Treehouse", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=240&h=120&fit=crop&bg=white" },
                  { name: "DataCamp", logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=240&h=120&fit=crop&bg=white" },
                  { name: "HubSpot Academy", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=240&h=120&fit=crop&bg=white" },
                  { name: "Google Digital Garage", logo: "https://images.unsplash.com/photo-1558494949-ef010cbcc31c?w=240&h=120&fit=crop&bg=white" },
                  { name: "Microsoft Learn", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=240&h=120&fit=crop&bg=white" },
                  { name: "IBM Skills", logo: "https://images.unsplash.com/photo-1633265486074-08a646ba2c7e?w=240&h=120&fit=crop&bg=white" },
                  { name: "Cisco Networking Academy", logo: "https://images.unsplash.com/photo-1558804112-8de2214812c4?w=240&h=120&fit=crop&bg=white" }
                ].map((partner, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8">
                    <div className="w-48 h-24 md:w-56 md:h-28 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2 hover:shadow-md transition-shadow">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-sm text-gray-600">Global Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Industry Recognition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
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
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 font-bold px-12 py-5 text-lg shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-purple-500/30 group overflow-hidden"
            >
              <Link to="/courses">
                <span className="relative z-10 flex items-center gap-2">
                  Explore All Courses
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - Detailed Cards */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 - Corporate Training */}
            <div className="group">
              <div className="bg-white p-8 rounded-2xl border border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                  <Users className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Training</h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Customized security awareness and technical training programs designed to elevate your organization's cybersecurity posture and protect against evolving threats.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    Security Awareness Programs
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    Technical Skill Development
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    Custom Curriculum Design
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-purple-100">
                  <Link to="/services/corporate-training" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 - College Workshops */}
            <div className="group">
              <div className="bg-white p-8 rounded-2xl border border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                  <Award className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">College Workshops</h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Interactive cybersecurity workshops and training programs tailored for educational institutions, helping students build practical skills and career readiness.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    Hands-on Lab Sessions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    Career Guidance Programs
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    Certification Preparation
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-purple-100">
                  <Link to="/services/college-workshops" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 - Device Security */}
            <div className="group">
              <div className="bg-white p-8 rounded-2xl border border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                  <Shield className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Device Security & Repairs</h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Professional laptop and device repair services, malware removal, and comprehensive security hardening to protect your digital assets and ensure optimal performance.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    Virus & Malware Removal
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    Hardware Repair Services
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    Security Audit & Hardening
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-purple-100">
                  <Link to="/services/device-security" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Industry <span className="text-purple-600">Recognized</span> Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certifications are recognized by leading organizations and validate your expertise in cybersecurity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Certificate 1 */}
            <div className="group text-center">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-200 hover:border-purple-400">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Ethical Hacking</h3>
                <p className="text-sm text-gray-600">CEH Certification</p>
                <div className="mt-3 text-xs text-purple-600 font-medium">Industry Standard</div>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="group text-center">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-200 hover:border-purple-400">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">SOC Analyst</h3>
                <p className="text-sm text-gray-600">SOC Professional</p>
                <div className="mt-3 text-xs text-purple-600 font-medium">High Demand</div>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="group text-center">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-200 hover:border-purple-400">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Penetration Testing</h3>
                <p className="text-sm text-gray-600">PenTest+</p>
                <div className="mt-3 text-xs text-purple-600 font-medium">Advanced Level</div>
              </div>
            </div>

            {/* Certificate 4 */}
            <div className="group text-center">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-200 hover:border-purple-400">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Cyber Forensics</h3>
                <p className="text-sm text-gray-600">CHFI Certification</p>
                <div className="mt-3 text-xs text-purple-600 font-medium">Specialized</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-medium">500+ Certifications Awarded</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Leaders Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          {/* Image Grid - Real Images (Larger) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
            <div className="relative w-full h-full max-w-6xl mx-auto">
              {/* Top Row */}
              <div className="absolute top-8 left-[20%] w-28 h-28 rounded-lg shadow-md transform -rotate-6 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Professional" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 left-[35%] w-32 h-32 rounded-xl shadow-lg transform rotate-3 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" alt="Professional" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-10 right-[25%] w-28 h-28 rounded-full shadow-md transform rotate-12 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Professional" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-0 right-[30%] w-36 h-36 rounded-lg shadow-lg transform -rotate-3 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Professional" className="w-full h-full object-cover" />
              </div>
              
              {/* Middle Row */}
              <div className="absolute top-1/3 left-[10%] w-36 h-36 rounded-xl shadow-lg transform rotate-5 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="Professional" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 left-[33%] w-28 h-28 rounded-full shadow-md transform -rotate-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face" alt="Professional" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/3 right-[15%] w-32 h-32 rounded-lg shadow-md transform -rotate-10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=150&h=150&fit=crop&crop=face" alt="Professional" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 right-[5%] w-36 h-36 rounded-xl shadow-lg transform rotate-7 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Professional" className="w-full h-full object-cover" />
              </div>
              
              {/* Bottom Row */}
              <div className="absolute bottom-8 left-[25%] w-32 h-32 rounded-lg shadow-md transform rotate-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" alt="Professional" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-[40%] w-28 h-28 rounded-full shadow-lg transform -rotate-5 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Professional" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-10 right-[20%] w-36 h-36 rounded-xl shadow-lg transform rotate-8 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Professional" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-[35%] w-28 h-28 rounded-lg shadow-md transform -rotate-6 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="Professional" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Central Content */}
          <div className="text-center relative z-20 max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">Testimonials</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted by leaders from<br />various industries
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Learn why professionals trust our solutions to complete their customer journeys.
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4 text-base rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Link to="/contact">
                Get Started Today
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked <span className="text-purple-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our cybersecurity courses and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(0)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">What are the prerequisites for your cybersecurity courses?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 0 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 0 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Most of our beginner courses require only basic computer skills. For advanced courses, we recommend having some IT background or completing our foundational courses first.
                  </p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(1)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Do you provide job placement assistance?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 1 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 1 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Yes, we offer comprehensive career support including resume building, interview preparation, and connections with our network of hiring partners in the cybersecurity industry.
                  </p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(2)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Are your certifications industry-recognized?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 2 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 2 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Absolutely! Our certifications are recognized by leading organizations and align with industry standards like CEH, CompTIA Security+, and other globally recognized cybersecurity certifications.
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(3)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">What is the duration of your courses?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 3 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 3 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Course durations vary from 8 weeks for foundational courses to 12 weeks for advanced programs. We also offer flexible weekend batches and self-paced learning options.
                  </p>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(4)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Do you offer corporate training programs?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 4 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 4 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Yes, we provide customized corporate training programs tailored to your organization's specific needs. Our trainers can conduct sessions at your premises or online.
                  </p>
                </div>
              </div>

              {/* FAQ 6 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(5)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">What payment options are available?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 5 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 5 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    We offer flexible payment options including one-time payment, EMI options, and installment plans. We also accept major credit cards, debit cards, and online banking transfers.
                  </p>
                </div>
              </div>

              {/* FAQ 7 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(6)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Do you provide course materials and recordings?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 6 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 6 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Yes, all students get access to comprehensive course materials, lab guides, and session recordings. These resources are available for lifetime access even after course completion.
                  </p>
                </div>
              </div>

              {/* FAQ 8 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(7)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Can I attend classes from outside India?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 7 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 7 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Absolutely! Our online courses are accessible globally. We have students from various countries attending live sessions and accessing our learning platform from anywhere in the world.
                  </p>
                </div>
              </div>

              {/* FAQ 9 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(8)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">What kind of lab access do students get?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 8 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 8 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Students get 24/7 access to our virtual lab environment with real-world scenarios, tools, and vulnerabilities. This includes access to penetration testing labs, SIEM platforms, and cloud environments.
                  </p>
                </div>
              </div>

              {/* FAQ 10 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(9)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Do you offer refunds if I'm not satisfied?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 9 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 9 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    We offer a 7-day money-back guarantee for most courses. If you're not satisfied within the first week, you can request a full refund. Certain specialized courses may have different policies.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 text-purple-600 font-medium">
                <span>Still have questions?</span>
                <Link to="/contact" className="underline hover:no-underline">
                  Contact our support team
                </Link>
              </div>
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
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

        {/* Call Button - Purple */}
        <a
          href="tel:+919876543210"
          className="w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Sticky Footer - Hidden on Mobile */}
      <footer className="hidden md:block fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-gray-800/50 shadow-lg z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-xs">
            {/* Left Side - Brand and Essential Links */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="text-white font-bold">CHAKRABYTE</span>
              </div>
              <div className="flex items-center gap-4 border-l border-gray-700 pl-4">
                <Link to="/courses" className="text-white hover:text-purple-300 transition-colors">Courses</Link>
                <Link to="/services" className="text-white hover:text-purple-300 transition-colors">Services</Link>
                <Link to="/contact" className="text-white hover:text-purple-300 transition-colors">Contact</Link>
              </div>
            </div>

            {/* Right Side - Quick Contact */}
            <div className="flex items-center gap-4 text-white">
              <a href="tel:+919876543210" className="hover:text-purple-300 transition-colors flex items-center gap-1">
                <Phone className="w-3 h-3 text-purple-400" />
                +91 98765 43210
              </a>
              <a href="mailto:info@chakrabyte.com" className="hover:text-purple-300 transition-colors flex items-center gap-1">
                <Mail className="w-3 h-3 text-purple-400" />
                info@chakrabyte.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
