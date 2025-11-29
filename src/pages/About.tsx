import { Shield, Users, Target, Award, CheckCircle, Linkedin, Twitter, Zap, Globe, Brain } from "lucide-react";
import StatsSection from "@/components/StatsSection";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
`;
document.head.appendChild(style);

const About = () => {
  const achievements = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Training professionals across 15+ countries with localized content and support",
      metric: "15+ Countries"
    },
    {
      icon: Brain,
      title: "Expert-Led Training",
      description: "Learn from industry veterans with 10+ years of real-world cybersecurity experience",
      metric: "10+ Years Average Experience"
    },
    {
      icon: Zap,
      title: "Rapid Skill Development",
      description: "Practical, hands-on training that gets you job-ready in weeks, not months",
      metric: "8-12 Week Programs"
    }
  ];

  const teamMembers = [
    {
      name: "Adnan",
      role: "Lead Cybersecurity Instructor",
      expertise: "Penetration Testing & Security Auditing",
      achievements: "Trained 2000+ students, 15+ years experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Sarah Jenkins",
      role: "Operations & Career Development",
      expertise: "Security Strategy & GRC Frameworks",
      achievements: "Former CISO, Career mentor for 500+ professionals",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80"
    }
  ];

  const learningApproach = [
    {
      title: "Real-World Scenarios",
      description: "Practice on live systems and actual threat simulations used by security teams worldwide",
      icon: Target
    },
    {
      title: "Industry Tools & Techniques",
      description: "Master the same tools and methodologies used by Fortune 500 security teams",
      icon: Shield
    },
    {
      title: "Career-Focused Curriculum",
      description: "Every module designed to match current job market requirements and employer expectations",
      icon: Users
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="About Chakrabyte Security"
        subtitle="Building the next generation of cybersecurity professionals through practical, industry-relevant training"
        icon={Shield}
      />

      {/* Our Approach - Practical Focus */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-purple-600">Practical Approach</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We bridge the gap between theoretical knowledge and real-world application through hands-on training that prepares you for actual cybersecurity challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {learningApproach.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements - Metrics Focus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Makes Us <span className="text-purple-600">Different</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real metrics that demonstrate our commitment to excellence and student success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-2xl text-white h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                        <achievement.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-3">{achievement.title}</h3>
                      <p className="text-purple-100 leading-relaxed mb-4">{achievement.description}</p>
                      <div className="inline-block px-4 py-2 bg-white/20 rounded-full">
                        <span className="font-semibold">{achievement.metric}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team - Practical Focus */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Learn From <span className="text-purple-600">Industry Experts</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our instructors bring real-world experience from leading security teams and Fortune 500 companies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-80 bg-gradient-to-br from-purple-100 to-purple-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-heading text-2xl font-bold mb-2">{member.name}</h3>
                        <p className="text-purple-200 font-medium mb-2">{member.role}</p>
                        <p className="text-purple-100 text-sm">{member.expertise}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                        <p className="text-gray-600">{member.achievements}</p>
                      </div>
                      
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Trusted by <span className="text-purple-600">Industry Leaders</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with leading technology companies and certification bodies to deliver cutting-edge cybersecurity training
            </p>
          </div>

          {/* Scrolling Brand Logos */}
          <div className="relative">
            <div className="flex overflow-hidden">
              {/* First set of logos */}
              <div className="flex animate-scroll">
                {[
                  { name: "Harvard Online", logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=240&h=120&fit=crop&bg=white" },
                  { name: "MIT OpenCourseWare", logo: "https://images.unsplash.com/photo-1573164713714-d95e437ab0d6?w=240&h=120&fit=crop&bg=white" },
                  { name: "Stanford Online", logo: "https://images.unsplash.com/photo-1557829029-5da6f3e4c2b6?w=240&h=120&fit=crop&bg=white" },
                  { name: "Yale Online", logo: "https://images.unsplash.com/photo-1558804112-8de2214812c4?w=240&h=120&fit=crop&bg=white" },
                  { name: "Princeton Online", logo: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=240&h=120&fit=crop&bg=white" },
                  { name: "Columbia Online", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=240&h=120&fit=crop&bg=white" },
                  { name: "Berkeley Online", logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=240&h=120&fit=crop&bg=white" },
                  { name: "Oxford Online", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=240&h=120&fit=crop&bg=white" },
                  { name: "Cambridge Online", logo: "https://images.unsplash.com/photo-1558494949-ef010cbcc31c?w=240&h=120&fit=crop&bg=white" },
                  { name: "Imperial College", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=240&h=120&fit=crop&bg=white" },
                  { name: "ETH Zurich", logo: "https://images.unsplash.com/photo-1633265486074-08a646ba2c7e?w=240&h=120&fit=crop&bg=white" },
                  { name: "NYU Online", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=240&h=120&fit=crop&bg=white" },
                  { name: "UCL London", logo: "https://images.unsplash.com/photo-1559028012-c72e70b79c5e?w=240&h=120&fit=crop&bg=white" },
                  { name: "University of Toronto", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=240&h=120&fit=crop&bg=white" },
                  { name: "Melbourne University", logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=240&h=120&fit=crop&bg=white" }
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
                  { name: "Harvard Online", logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=240&h=120&fit=crop&bg=white" },
                  { name: "MIT OpenCourseWare", logo: "https://images.unsplash.com/photo-1573164713714-d95e437ab0d6?w=240&h=120&fit=crop&bg=white" },
                  { name: "Stanford Online", logo: "https://images.unsplash.com/photo-1557829029-5da6f3e4c2b6?w=240&h=120&fit=crop&bg=white" },
                  { name: "Yale Online", logo: "https://images.unsplash.com/photo-1558804112-8de2214812c4?w=240&h=120&fit=crop&bg=white" },
                  { name: "Princeton Online", logo: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=240&h=120&fit=crop&bg=white" },
                  { name: "Columbia Online", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=240&h=120&fit=crop&bg=white" },
                  { name: "Berkeley Online", logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=240&h=120&fit=crop&bg=white" },
                  { name: "Oxford Online", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=240&h=120&fit=crop&bg=white" },
                  { name: "Cambridge Online", logo: "https://images.unsplash.com/photo-1558494949-ef010cbcc31c?w=240&h=120&fit=crop&bg=white" },
                  { name: "Imperial College", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=240&h=120&fit=crop&bg=white" },
                  { name: "ETH Zurich", logo: "https://images.unsplash.com/photo-1633265486074-08a646ba2c7e?w=240&h=120&fit=crop&bg=white" },
                  { name: "NYU Online", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=240&h=120&fit=crop&bg=white" },
                  { name: "UCL London", logo: "https://images.unsplash.com/photo-1559028012-c72e70b79c5e?w=240&h=120&fit=crop&bg=white" },
                  { name: "University of Toronto", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=240&h=120&fit=crop&bg=white" },
                  { name: "Melbourne University", logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=240&h=120&fit=crop&bg=white" }
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

          {/* Partnership Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Tech Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8+</div>
              <div className="text-sm text-gray-600">Cloud Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">Enterprise Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Industry Integration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment - Action-Oriented */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Commitment to <span className="text-purple-600">Your Success</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We don't just teach cybersecurity – we build careers. Our commitment extends beyond the classroom with lifetime support, continuous learning resources, and a growing network of cybersecurity professionals.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Lifetime Support</h3>
                <p className="text-gray-600 text-sm">Get help whenever you need it, even after course completion</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Community Access</h3>
                <p className="text-gray-600 text-sm">Join our network of 2500+ cybersecurity professionals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Career Guidance</h3>
                <p className="text-gray-600 text-sm">Personalized mentorship and job placement assistance</p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-purple-600 text-white hover:bg-purple-700 font-bold px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <Link to="/contact">
                Start Your Cybersecurity Journey
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
