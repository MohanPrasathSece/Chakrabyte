import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, CheckCircle, Quote, ChevronRight, Target, MessageCircle, Phone, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialSection from "@/components/TestimonialSection";
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
if (!document.head.contains(style)) {
  document.head.appendChild(style);
}

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

        <div className="container mx-auto px-4 pt-24 sm:pt-20 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Column: Content */}
            <div className="text-left space-y-8">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 text-sm font-medium animate-pulse">
                <Shield className="w-4 h-4 text-green-300" />
                <span className="text-green-100">🚀 Become SOC Ready in 90 Days</span>
              </div>

              {/* Headings */}
              <div className="space-y-4">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Master Cybersecurity <br />
                  <span className="text-purple-200">From Zero to Hero</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light">
                  <span className="font-semibold text-white">Transform your career in just 90 days.</span> Get hands-on training, real-world projects, and industry-recognized certifications. Join 2,500+ successful cybersecurity professionals.
                </p>
              </div>

              {/* Buttons - Modern Premium Design */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  asChild
                  className="relative bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 font-bold px-3 sm:px-4 py-2 sm:py-3 text-base shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-purple-500/30 group overflow-hidden h-10 sm:h-auto"
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
                  className="relative bg-white/10 backdrop-blur-md text-white hover:bg-white/20 font-bold px-3 sm:px-4 py-2 sm:py-3 text-base shadow-2xl hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-white/30 group overflow-hidden h-10 sm:h-auto"
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
              <div className="absolute -top-20 -right-10 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-20 -left-10 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 border border-purple-300 text-sm font-semibold text-purple-700 mb-4">
              💼 100% Job-Ready Training
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose <span className="text-primary">Chakrabyte Security?</span>
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive cybersecurity training with real-world applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group flex items-start gap-4 p-6 bg-gradient-to-br from-white to-purple-50/50 rounded-xl border border-purple-100/50 hover:border-purple-300/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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

      
      {/* Featured Courses Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white overflow-x-hidden">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-300 text-sm font-semibold text-purple-700 mb-4">
              ⚡ Launch Your Career in 8-12 Weeks
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Courses</span>
            </h2>
            <p className="text-lg text-gray-600">
              Industry-recognized certification programs designed by cybersecurity experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 overflow-x-hidden">
            {featuredCourses.map((course, index) => (
              <div key={index}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 font-bold px-6 py-3 text-base shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-purple-500/30 group overflow-hidden"
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
      <section className="py-20 bg-gradient-to-br from-purple-800 to-purple-900 overflow-x-hidden">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
              Our <span className="text-purple-200">Services</span>
            </h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto overflow-x-hidden">
            {/* Service 1 - Corporate Training */}
            <div className="group">
              <div className="bg-purple-700/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/30 hover:border-purple-300/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                  <Users className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">Corporate Training</h3>

                <p className="text-purple-100 leading-relaxed mb-6">
                  Customized security awareness and technical training programs designed to elevate your organization's cybersecurity posture and protect against evolving threats.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-purple-100">
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-3"></div>
                    Security Awareness Programs
                  </div>
                  <div className="flex items-center text-sm text-purple-100">
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-3"></div>
                    Technical Skill Development
                  </div>
                  <div className="flex items-center text-sm text-purple-100">
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-3"></div>
                    Custom Curriculum Design
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-purple-600/50">
                  <Link to="/services/corporate-training" className="inline-flex items-center text-white font-semibold hover:text-purple-200 transition-colors">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 - College Workshops */}
            <div className="group">
              <div className="bg-purple-700/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/30 hover:border-purple-300/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                  <Award className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">College Workshops</h3>

                <p className="text-purple-100 leading-relaxed mb-6">
                  Interactive cybersecurity workshops and training programs tailored for educational institutions, helping students build practical skills and career readiness.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-purple-100">
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-3"></div>
                    Hands-on Lab Sessions
                  </div>
                  <div className="flex items-center text-sm text-purple-100">
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-3"></div>
                    Career Guidance Programs
                  </div>
                  <div className="flex items-center text-sm text-purple-100">
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-3"></div>
                    Certification Preparation
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-purple-600/50">
                  <Link to="/services/college-workshops" className="inline-flex items-center text-white font-semibold hover:text-purple-200 transition-colors">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 - Device Security */}
            <div className="group">
              <div className="bg-purple-700/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/30 hover:border-purple-300/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                  <Shield className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">Device Security & Repairs</h3>

                <p className="text-purple-100 leading-relaxed mb-6">
                  Professional laptop and device repair services, malware removal, and comprehensive security hardening to protect your digital assets and ensure optimal performance.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-purple-100">
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-3"></div>
                    Virus & Malware Removal
                  </div>
                  <div className="flex items-center text-sm text-purple-100">
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-3"></div>
                    Hardware Repair Services
                  </div>
                  <div className="flex items-center text-sm text-purple-100">
                    <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mr-3"></div>
                    Security Audit & Hardening
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-purple-600/50">
                  <Link to="/services/device-security" className="inline-flex items-center text-white font-semibold hover:text-purple-200 transition-colors">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Leaders Section - Exact Reference Layout */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto relative min-h-[600px]">
            {/* All images positioned absolutely to match reference */}

            {/* LEFT COLUMN - 4 images */}
            {/* Image 1 - Top left (man with glasses) */}
            <div className="absolute left-8 top-0 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=140&h=140&fit=crop"
                alt="Professional"
                className="rounded-2xl shadow-lg w-32 h-32 object-cover"
              />
            </div>

            {/* Image 2 - Left, slightly lower (man in suit) */}
            <div className="absolute left-44 top-12 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&h=160&fit=crop"
                alt="Professional"
                className="rounded-2xl shadow-lg w-36 h-36 object-cover"
              />
            </div>

            {/* Image 3 - Left middle (man smiling) */}
            <div className="absolute left-16 top-48 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=180&h=180&fit=crop"
                alt="Professional"
                className="rounded-2xl shadow-lg w-40 h-40 object-cover"
              />
            </div>

            {/* TOP CENTER - 4 images in a row */}
            {/* Image 5 - Top center left (man with glasses) */}
            <div className="absolute left-1/2 -translate-x-48 top-4 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=170&h=170&fit=crop"
                alt="Professional"
                className="rounded-2xl shadow-lg w-38 h-38 object-cover"
              />
            </div>

            {/* Image 6 - Top center middle (man in blue shirt) */}
            <div className="absolute left-1/2 -translate-x-16 top-0 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=180&h=180&fit=crop"
                alt="Professional"
                className="rounded-2xl shadow-lg w-40 h-40 object-cover"
              />
            </div>

            {/* Image 7 - Top center (man in dark suit) */}
            <div className="absolute left-1/2 translate-x-16 top-8 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=160&h=160&fit=crop"
                alt="Professional"
                className="rounded-2xl shadow-lg w-36 h-36 object-cover"
              />
            </div>

            {/* RIGHT COLUMN - 4 images */}
            {/* Image 9 - Top right (woman at desk) */}
            <div className="absolute right-48 top-16 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=170&h=170&fit=crop"
                alt="Professional"
                className="rounded-2xl shadow-lg w-38 h-38 object-cover"
              />
            </div>

            {/* Image 10 - Right, slightly lower (man smiling) */}
            <div className="absolute right-8 top-8 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=180&h=180&fit=crop"
                alt="Professional"
                className="rounded-2xl shadow-lg w-40 h-40 object-cover"
              />
            </div>

            {/* Image 11 - Right middle (woman in business attire) */}
            <div className="absolute right-16 top-52 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=180&h=180&fit=crop"
                alt="Professional"
                className="rounded-2xl shadow-lg w-40 h-40 object-cover"
              />
            </div>



            {/* CENTER CONTENT */}
            <div className="relative z-10 text-center py-40 px-4">
              <div className="inline-block px-4 py-2 bg-purple-600 rounded-full mb-6">
                <span className="text-sm font-semibold text-white">Testimonials</span>
              </div>

              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900">
                Trusted by leaders<br />
                <span className="text-purple-600">from various industries</span>
              </h2>

              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                Learn why professionals trust our solutions to<br />
                complete their customer journeys.
              </p>

              <Button
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-3 text-sm rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Link to="/contact">
                  Read Success Stories →
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 max-w-4xl mx-auto">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-200/50">
              <div className="text-3xl font-bold text-purple-600 mb-1">20+</div>
              <div className="text-sm font-medium text-gray-700">Global Partners</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-200/50">
              <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
              <div className="text-sm font-medium text-gray-700">Certifications</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-200/50">
              <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-sm font-medium text-gray-700">Industry Recognition</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-200/50">
              <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-sm font-medium text-gray-700">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-purple-800 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
              Industry <span className="text-purple-200">Recognized</span> Certifications
            </h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
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

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* FAQ 1 */}
                <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-200/20 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 group">
                  <button
                    onClick={() => toggleFaq(0)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors group-hover:bg-purple-100/50"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">What are the prerequisites for your cybersecurity courses?</span>
                    <ChevronRight className={expandedFaq === 0 ? "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-180 group-hover:text-purple-600" : "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-90 group-hover:text-purple-600"} />
                  </button>
                  <div className={expandedFaq === 0 ? "px-6 transition-all duration-300 py-4 opacity-100" : "px-6 transition-all duration-300 max-h-0 opacity-0 overflow-hidden"}>
                    <p className="text-gray-600">
                      Most of our beginner courses require only basic computer skills. For advanced courses, we recommend having some IT background or completing our foundational courses first.
                    </p>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-200/20 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 group">
                  <button
                    onClick={() => toggleFaq(2)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors group-hover:bg-purple-100/50"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Are your certifications industry-recognized?</span>
                    <ChevronRight className={expandedFaq === 2 ? "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-180 group-hover:text-purple-600" : "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-90 group-hover:text-purple-600"} />
                  </button>
                  <div className={expandedFaq === 2 ? "px-6 transition-all duration-300 py-4 opacity-100" : "px-6 transition-all duration-300 max-h-0 opacity-0 overflow-hidden"}>
                    <p className="text-gray-600">
                      Absolutely! Our certifications are recognized by leading organizations and align with industry standards like CEH, CompTIA Security+, and other globally recognized cybersecurity certifications.
                    </p>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-200/20 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 group">
                  <button
                    onClick={() => toggleFaq(4)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors group-hover:bg-purple-100/50"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Do you offer corporate training programs?</span>
                    <ChevronRight className={expandedFaq === 4 ? "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-180 group-hover:text-purple-600" : "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-90 group-hover:text-purple-600"} />
                  </button>
                  <div className={expandedFaq === 4 ? "px-6 transition-all duration-300 py-4 opacity-100" : "px-6 transition-all duration-300 max-h-0 opacity-0 overflow-hidden"}>
                    <p className="text-gray-600">
                      Yes, we provide customized corporate training programs tailored to your organization's specific needs. Our trainers can conduct sessions at your premises or online.
                    </p>
                  </div>
                </div>

                {/* FAQ 7 */}
                <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-200/20 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 group">
                  <button
                    onClick={() => toggleFaq(6)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors group-hover:bg-purple-100/50"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Do you provide course materials and recordings?</span>
                    <ChevronRight className={expandedFaq === 6 ? "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-180 group-hover:text-purple-600" : "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-90 group-hover:text-purple-600"} />
                  </button>
                  <div className={expandedFaq === 6 ? "px-6 transition-all duration-300 py-4 opacity-100" : "px-6 transition-all duration-300 max-h-0 opacity-0 overflow-hidden"}>
                    <p className="text-gray-600">
                      Yes, all students get access to comprehensive course materials, lab guides, and session recordings. These resources are available for lifetime access even after course completion.
                    </p>
                  </div>
                </div>

                {/* FAQ 9 */}
                <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-200/20 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 group">
                  <button
                    onClick={() => toggleFaq(8)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors group-hover:bg-purple-100/50"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">What kind of lab access do students get?</span>
                    <ChevronRight className={expandedFaq === 8 ? "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-180 group-hover:text-purple-600" : "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-90 group-hover:text-purple-600"} />
                  </button>
                  <div className={expandedFaq === 8 ? "px-6 transition-all duration-300 py-4 opacity-100" : "px-6 transition-all duration-300 max-h-0 opacity-0 overflow-hidden"}>
                    <p className="text-gray-600">
                      Students get 24/7 access to our virtual lab environment with real-world scenarios, tools, and vulnerabilities. This includes access to penetration testing labs, SIEM platforms, and cloud environments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* FAQ 2 */}
                <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-200/20 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 group">
                  <button
                    onClick={() => toggleFaq(1)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors group-hover:bg-purple-100/50"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Do you provide job placement assistance?</span>
                    <ChevronRight className={expandedFaq === 1 ? "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-180 group-hover:text-purple-600" : "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-90 group-hover:text-purple-600"} />
                  </button>
                  <div className={expandedFaq === 1 ? "px-6 transition-all duration-300 py-4 opacity-100" : "px-6 transition-all duration-300 max-h-0 opacity-0 overflow-hidden"}>
                    <p className="text-gray-600">
                      Yes, we offer comprehensive career support including resume building, interview preparation, and connections with our network of hiring partners in the cybersecurity industry.
                    </p>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-200/20 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 group">
                  <button
                    onClick={() => toggleFaq(3)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors group-hover:bg-purple-100/50"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">What is the duration of your courses?</span>
                    <ChevronRight className={expandedFaq === 3 ? "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-180 group-hover:text-purple-600" : "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-90 group-hover:text-purple-600"} />
                  </button>
                  <div className={expandedFaq === 3 ? "px-6 transition-all duration-300 py-4 opacity-100" : "px-6 transition-all duration-300 max-h-0 opacity-0 overflow-hidden"}>
                    <p className="text-gray-600">
                      Course durations vary from 8 weeks for foundational courses to 12 weeks for advanced programs. We also offer flexible weekend batches and self-paced learning options.
                    </p>
                  </div>
                </div>

                {/* FAQ 6 */}
                <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-200/20 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 group">
                  <button
                    onClick={() => toggleFaq(5)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors group-hover:bg-purple-100/50"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">What payment options are available?</span>
                    <ChevronRight className={expandedFaq === 5 ? "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-180 group-hover:text-purple-600" : "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-90 group-hover:text-purple-600"} />
                  </button>
                  <div className={expandedFaq === 5 ? "px-6 transition-all duration-300 py-4 opacity-100" : "px-6 transition-all duration-300 max-h-0 opacity-0 overflow-hidden"}>
                    <p className="text-gray-600">
                      We offer flexible payment options including one-time payment, EMI options, and installment plans. We also accept major credit cards, debit cards, and online banking transfers.
                    </p>
                  </div>
                </div>

                {/* FAQ 8 */}
                <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-200/20 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 group">
                  <button
                    onClick={() => toggleFaq(7)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors group-hover:bg-purple-100/50"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Can I attend classes from outside India?</span>
                    <ChevronRight className={expandedFaq === 7 ? "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-180 group-hover:text-purple-600" : "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-90 group-hover:text-purple-600"} />
                  </button>
                  <div className={expandedFaq === 7 ? "px-6 transition-all duration-300 py-4 opacity-100" : "px-6 transition-all duration-300 max-h-0 opacity-0 overflow-hidden"}>
                    <p className="text-gray-600">
                      Absolutely! Our online courses are accessible globally. We have students from various countries attending live sessions and accessing our learning platform from anywhere in the world.
                    </p>
                  </div>
                </div>

                {/* FAQ 10 */}
                <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-200/20 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 group">
                  <button
                    onClick={() => toggleFaq(9)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors group-hover:bg-purple-100/50"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Do you offer refunds if I'm not satisfied?</span>
                    <ChevronRight className={expandedFaq === 9 ? "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-180 group-hover:text-purple-600" : "w-5 h-5 text-purple-400 transition-transform duration-300 rotate-90 group-hover:text-purple-600"} />
                  </button>
                  <div className={expandedFaq === 9 ? "px-6 transition-all duration-300 py-4 opacity-100" : "px-6 transition-all duration-300 max-h-0 opacity-0 overflow-hidden"}>
                    <p className="text-gray-600">
                      We offer a 7-day money-back guarantee for most courses. If you're not satisfied within the first week, you can request a full refund. Certain specialized courses may have different policies.
                    </p>
                  </div>
                </div>
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
      </section>
    </div>
  );
};

export default Home;
