import { Shield, Users, Target, Award, CheckCircle, Linkedin, Twitter, Zap, Globe, Brain } from "lucide-react";
import StatsSection from "@/components/StatsSection";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      <section
        className="py-20 bg-gradient-to-br from-purple-50 to-white"
      >
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
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
                >
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
      <section
        className="py-20 bg-white"
      >
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
                <div
                  key={index}
                  className="relative group transition-all duration-600"
                >
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
      <section
        className="py-20 bg-gradient-to-br from-purple-50 to-white"
      >
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
                <div
                  key={index}
                  className="group transition-all duration-600"
                >
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

      {/* Partners, Certifications & Recognition Section */}
      <section
        className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-purple-600">Credentials & Support</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partnering with global leaders in cybersecurity to deliver world-class training and certifications
            </p>
          </div>

          {/* Scrolling Images - Partners */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Global Partners</h3>
            <div className="relative">
              <div className="flex overflow-hidden">
                <div className="flex animate-scroll">
                  {[
                    { name: "Cybersecurity Partner 1", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop" },
                    { name: "Tech Alliance Partner", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop" },
                    { name: "Security Solutions Partner", image: "https://images.unsplash.com/photo-1558494949-ef010cbcc31c?w=300&h=200&fit=crop" },
                    { name: "Cloud Security Partner", image: "https://images.unsplash.com/photo-1573164713714-d95e437ab0d6?w=300&h=200&fit=crop" },
                    { name: "Enterprise Partner", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop" },
                    { name: "Global Tech Partner", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop" }
                  ].map((partner, index) => (
                    <div key={index} className="flex-shrink-0 mx-4">
                      <div className="w-64 h-40 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ))}
                  {/* Duplicate for seamless scroll */}
                  {[
                    { name: "Cybersecurity Partner 1", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop" },
                    { name: "Tech Alliance Partner", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop" },
                    { name: "Security Solutions Partner", image: "https://images.unsplash.com/photo-1558494949-ef010cbcc31c?w=300&h=200&fit=crop" },
                    { name: "Cloud Security Partner", image: "https://images.unsplash.com/photo-1573164713714-d95e437ab0d6?w=300&h=200&fit=crop" },
                    { name: "Enterprise Partner", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop" },
                    { name: "Global Tech Partner", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop" }
                  ].map((partner, index) => (
                    <div key={`dup-${index}`} className="flex-shrink-0 mx-4">
                      <div className="w-64 h-40 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Images - Certifications */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Industry Certifications</h3>
            <div className="relative">
              <div className="flex overflow-hidden">
                <div className="flex animate-scroll-reverse">
                  {[
                    { name: "CEH Certification", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop" },
                    { name: "CISSP Certification", image: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?w=300&h=200&fit=crop" },
                    { name: "CompTIA Security+", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop" },
                    { name: "OSCP Certification", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop" },
                    { name: "CISM Certification", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop" },
                    { name: "ISO 27001", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop" }
                  ].map((cert, index) => (
                    <div key={index} className="flex-shrink-0 mx-4">
                      <div className="w-64 h-40 bg-white rounded-lg shadow-md border border-purple-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ))}
                  {/* Duplicate for seamless scroll */}
                  {[
                    { name: "CEH Certification", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop" },
                    { name: "CISSP Certification", image: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?w=300&h=200&fit=crop" },
                    { name: "CompTIA Security+", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop" },
                    { name: "OSCP Certification", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop" },
                    { name: "CISM Certification", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop" },
                    { name: "ISO 27001", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop" }
                  ].map((cert, index) => (
                    <div key={`dup-${index}`} className="flex-shrink-0 mx-4">
                      <div className="w-64 h-40 bg-white rounded-lg shadow-md border border-purple-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Images - Recognition & Support */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Recognition & Support</h3>
            <div className="relative">
              <div className="flex overflow-hidden">
                <div className="flex animate-scroll">
                  {[
                    { name: "Industry Award", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop" },
                    { name: "24/7 Support Center", image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=300&h=200&fit=crop" },
                    { name: "Excellence Recognition", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop" },
                    { name: "Global Support Network", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop" },
                    { name: "Industry Leadership", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=200&fit=crop" },
                    { name: "Customer Support", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop" }
                  ].map((item, index) => (
                    <div key={index} className="flex-shrink-0 mx-4">
                      <div className="w-64 h-40 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ))}
                  {/* Duplicate for seamless scroll */}
                  {[
                    { name: "Industry Award", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop" },
                    { name: "24/7 Support Center", image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=300&h=200&fit=crop" },
                    { name: "Excellence Recognition", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop" },
                    { name: "Global Support Network", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop" },
                    { name: "Industry Leadership", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=200&fit=crop" },
                    { name: "Customer Support", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop" }
                  ].map((item, index) => (
                    <div key={`dup-${index}`} className="flex-shrink-0 mx-4">
                      <div className="w-64 h-40 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Updated Stats */}
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

      {/* Our Commitment - Action-Oriented */}
      <section
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="transition-all duration-800 delay-200">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Commitment to <span className="text-purple-600">Your Success</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We don't just teach cybersecurity – we build careers. Our commitment extends beyond the classroom with lifetime support, continuous learning resources, and a growing network of cybersecurity professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {Array.from({ length: 3 }, (_, index) => (
                <div className="text-center transition-all duration-600" style={{ transitionDelay: `${300 + index * 100}ms` }}>
                  {index === 0 && (
                    <div>
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Lifetime Support</h3>
                      <p className="text-gray-600 text-sm">Get help whenever you need it, even after course completion</p>
                    </div>
                  )}
                  {index === 1 && (
                    <div>
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Community Access</h3>
                      <p className="text-gray-600 text-sm">Join our network of 2500+ cybersecurity professionals</p>
                    </div>
                  )}
                  {index === 2 && (
                    <div>
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Career Guidance</h3>
                      <p className="text-gray-600 text-sm">Personalized mentorship and job placement assistance</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="transition-all duration-800 delay-600">
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
        </div>
      </section>

      <StickyFooterAndActions />
    </div>
  );
};

export default About;
