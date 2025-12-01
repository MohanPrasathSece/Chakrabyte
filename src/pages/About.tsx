import { Shield, Users, Target, Award, CheckCircle, BookOpen, GraduationCap, Briefcase, TrendingUp, Globe, Brain, Zap, Building, UserCheck, Monitor, ChevronRight, ArrowRight, Star, Clock, MapPin, Cloud, Search } from "lucide-react";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="About Chakrabyte Security"
        subtitle="Premier Cybersecurity Training Provider | Industry-Recognized Excellence Since 2020"
        icon={Shield}
      />

      {/* Company Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Leading Cybersecurity <span className="text-purple-600">Education Excellence</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Chakrabyte Security stands at the forefront of cybersecurity education, delivering world-class training programs that bridge the gap between academic knowledge and industry demands. Since our inception, we have trained over 5,000 professionals who now secure critical infrastructure across the globe.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group cursor-pointer">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-purple-600 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-purple-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                      <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Industry-Aligned Curriculum</h4>
                      <p className="text-gray-600">Developed in collaboration with cybersecurity experts from Fortune 500 companies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group cursor-pointer">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-purple-600 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-purple-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                      <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Practical-First Approach</h4>
                      <p className="text-gray-600">95% hands-on training with real-world scenarios and live environments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group cursor-pointer">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-purple-600 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-purple-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                      <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Lifetime Career Support</h4>
                      <p className="text-gray-600">Continuous mentorship and placement assistance throughout your career journey</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 group-hover:shadow-3xl group-hover:scale-105 transition-all duration-300">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center group">
                      <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">5000+</div>
                      <div className="text-sm text-gray-600 font-medium group-hover:text-purple-600 transition-colors duration-300">Professionals Trained</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                      <div className="text-sm text-gray-600 font-medium group-hover:text-purple-600 transition-colors duration-300">Success Rate</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                      <div className="text-sm text-gray-600 font-medium group-hover:text-purple-600 transition-colors duration-300">Expert Instructors</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                      <div className="text-sm text-gray-600 font-medium group-hover:text-purple-600 transition-colors duration-300">Lab Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-700 group-hover:scale-110 transition-all duration-300">
                  <Target className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                  To democratize cybersecurity education by providing accessible, practical, and industry-relevant training that empowers individuals and organizations to defend against evolving digital threats.
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Excellence in Education</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
                  <Globe className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                  To become the global benchmark for cybersecurity training excellence, creating a world where every organization has access to skilled cybersecurity professionals capable of protecting digital assets.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Global Impact</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Areas of <span className="text-purple-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs covering all critical domains of cybersecurity
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Offensive Security",
                description: "Ethical hacking, penetration testing, and vulnerability assessment",
                icon: Target,
                level: "Advanced"
              },
              {
                title: "Defensive Security",
                description: "Security operations, incident response, and threat hunting",
                icon: Shield,
                level: "Intermediate"
              },
              {
                title: "Cloud Security",
                description: "AWS, Azure, and Google Cloud security best practices",
                icon: Cloud,
                level: "Advanced"
              },
              {
                title: "Compliance & Risk",
                description: "ISO standards, regulatory compliance, and risk management",
                icon: Award,
                level: "Professional"
              },
              {
                title: "Digital Forensics",
                description: "Investigation techniques and evidence preservation",
                icon: Search,
                level: "Specialized"
              },
              {
                title: "Security Architecture",
                description: "Design and implementation of secure systems",
                icon: Building,
                level: "Expert"
              }
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 p-6 group hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                    <area.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    {area.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Training <span className="text-purple-600">Methodology</span>
              </h2>
              <p className="text-xl text-gray-600">
                A systematic approach to building cybersecurity expertise
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200"></div>
              
              {[
                {
                  title: "Foundation Building",
                  description: "Strong theoretical understanding of cybersecurity principles and concepts",
                  position: "left",
                  icon: BookOpen
                },
                {
                  title: "Practical Application",
                  description: "Hands-on experience with real-world tools and scenarios in our virtual labs",
                  position: "right",
                  icon: Monitor
                },
                {
                  title: "Advanced Techniques",
                  description: "Master complex security operations and incident response procedures",
                  position: "left",
                  icon: Brain
                },
                {
                  title: "Certification & Career",
                  description: "Industry-recognized certifications and job placement assistance",
                  position: "right",
                  icon: Award
                }
              ].map((step, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${step.position === 'left' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${step.position === 'right' ? 'text-right' : ''}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 group hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div className={`flex items-center gap-3 mb-3 ${step.position === 'right' ? 'justify-end' : ''}`}>
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-700 group-hover:scale-110 transition-all duration-300">
                          <step.icon className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white group-hover:bg-purple-700 group-hover:scale-125 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by <span className="text-purple-200">Industry Leaders</span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Partnerships with leading organizations to deliver world-class cybersecurity training
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <Building className="w-10 h-10 text-purple-300 mb-4 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Fortune 500 Companies</h3>
              <p className="text-purple-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                Regular training programs for enterprise security teams across technology, finance, and healthcare sectors
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <GraduationCap className="w-10 h-10 text-purple-300 mb-4 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Educational Institutions</h3>
              <p className="text-purple-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                Partnership with universities and colleges to integrate practical cybersecurity into academic curricula
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <Globe className="w-10 h-10 text-purple-300 mb-4 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Government Agencies</h3>
              <p className="text-purple-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                Certified training provider for government cybersecurity workforce development programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Advance Your <span className="text-purple-600">Cybersecurity Career?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of professionals who have transformed their careers with our expert-led training programs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 text-white hover:bg-purple-700 font-semibold px-8"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8"
              >
                <Link to="/courses">Explore Programs</Link>
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
