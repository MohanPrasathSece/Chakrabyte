import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, BookOpen, Target, Shield, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";
import socAnalystImg from "@/assets/course-soc-analyst.jpg";

const ComptiaCASPPlus = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/courses" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                    Advanced
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    Cybersecurity Analyst
                  </span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  CompTIA CASP+
                </h1>

                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  Advanced cybersecurity skills for enterprise security, risk management, and research & analysis.
                </p>

                <div className="flex flex-wrap gap-6 text-white/80 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">14 Weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">300+ Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span className="font-medium">Certification Prep</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 font-semibold">
                    Download Brochure
                  </Button>
                </div>
              </div>

              <div className="w-full md:w-96">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={socAnalystImg}
                    alt="CompTIA CASP+ Course"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Tabs */}
      <section className="py-8 bg-gray-50 sticky top-16 z-30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {["overview", "curriculum", "certification", "requirements", "faq"].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                size="sm"
                className={`rounded-full px-6 h-10 capitalize ${
                  activeTab === tab
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "hover:bg-purple-50 text-gray-700 hover:text-purple-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-3xl font-bold mb-4">Course Overview</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    CompTIA Advanced Security Practitioner (CASP+) is the master-level cybersecurity certification for advanced practitioners. This course covers enterprise security, risk management, research and analysis, and the integration of computing, communications, and business disciplines.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-600" />
                      What You'll Learn
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Enterprise security architecture",
                        "Risk management and compliance",
                        "Security research and analysis",
                        "Cryptographic techniques and protocols",
                        "Enterprise security operations",
                        "Integration of security disciplines",
                        "Security policies and procedures",
                        "Business continuity and disaster recovery"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-purple-600" />
                      Career Opportunities
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Security Architect",
                        "Chief Information Security Officer (CISO)",
                        "Security Engineer",
                        "IT Security Manager",
                        "Security Consultant",
                        "Penetration Tester",
                        "Cybersecurity Analyst",
                        "Risk Manager"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "curriculum" && (
              <div className="space-y-8">
                <h2 className="font-heading text-3xl font-bold mb-6">Course Curriculum</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      week: "Week 1-3",
                      title: "Enterprise Security Architecture",
                      topics: [
                        "Security architecture frameworks",
                        "Enterprise security design principles",
                        "Secure network architecture",
                        "Cloud security architecture",
                        "Identity and access management design"
                      ]
                    },
                    {
                      week: "Week 4-6", 
                      title: "Risk Management and Compliance",
                      topics: [
                        "Risk assessment methodologies",
                        "Compliance frameworks and regulations",
                        "Business impact analysis",
                        "Security policies and procedures",
                        "Governance, risk, and compliance (GRC)"
                      ]
                    },
                    {
                      week: "Week 7-10",
                      title: "Security Research and Analysis",
                      topics: [
                        "Security research methodologies",
                        "Threat intelligence analysis",
                        "Vulnerability assessment techniques",
                        "Security tool evaluation",
                        "Emerging technology security"
                      ]
                    },
                    {
                      week: "Week 11-14",
                      title: "Enterprise Security Operations",
                      topics: [
                        "Security operations center (SOC) management",
                        "Incident response and forensics",
                        "Security automation and orchestration",
                        "Business continuity planning",
                        "Final exam preparation and review"
                      ]
                    }
                  ].map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-heading text-xl font-semibold mb-3 text-purple-600">
                        {module.week}: {module.title}
                      </h3>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-3">
                            <Play className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "certification" && (
              <div className="space-y-8">
                <h2 className="font-heading text-3xl font-bold mb-6">Certification Details</h2>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="font-heading text-xl font-semibold mb-4 text-purple-800">
                    CompTIA Advanced Security Practitioner+ (CAS-004)
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Exam Details</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li><strong>Exam Code:</strong> CAS-004</li>
                          <li><strong>Questions:</strong> 90 maximum</li>
                          <li><strong>Duration:</strong> 165 minutes</li>
                          <li><strong>Pass Score:</strong> No lower than 750 on each domain</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Testing Options</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Online testing (Pearson VUE)</li>
                          <li>• In-person testing centers</li>
                          <li>• Flexible scheduling</li>
                          <li>• Immediate results</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Why Get Certified?</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Master Level",
                        description: "CASP+ is the highest-level CompTIA certification for cybersecurity practitioners"
                      },
                      {
                        title: "Enterprise Focus",
                        description: "Designed for security architects and senior security professionals"
                      },
                      {
                        title: "DoD Approved",
                        description: "Meets ISO 17024 standard and approved by U.S. Department of Defense"
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                        <Award className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                        <h4 className="font-semibold mb-2">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "requirements" && (
              <div className="space-y-8">
                <h2 className="font-heading text-3xl font-bold mb-6">Course Requirements</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-4">Prerequisites</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">10+ years IT experience</p>
                          <p className="text-sm text-gray-600">With at least 5 years in cybersecurity</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Security+ or CySA+ recommended</p>
                          <p className="text-sm text-gray-600">Strong foundation in security concepts</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Network+ recommended</p>
                          <p className="text-sm text-gray-600">Advanced networking knowledge</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-4">Technical Requirements</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Computer with internet access</p>
                          <p className="text-sm text-gray-600">For online classes and advanced labs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Enterprise lab environment</p>
                          <p className="text-sm text-gray-600">For complex security architecture exercises</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Extensive time commitment</p>
                          <p className="text-sm text-gray-600">30-35 hours per week recommended</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "faq" && (
              <div className="space-y-8">
                <h2 className="font-heading text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  {[
                    {
                      question: "Is CASP+ harder than CISSP?",
                      answer: "CASP+ is more technical and hands-on than CISSP, which focuses more on security management and policy. CASP+ requires practical skills in security architecture and operations."
                    },
                    {
                      question: "What jobs can I get with CASP+?",
                      answer: "CASP+ qualifies you for senior-level positions like Security Architect, CISO, Security Engineer, and IT Security Manager. It's designed for experienced security professionals."
                    },
                    {
                      question: "Do I need other certifications first?",
                      answer: "While not required, it's highly recommended to have Security+, CySA+, or equivalent experience. CASP+ assumes strong foundational knowledge and practical experience."
                    },
                    {
                      question: "How long does it take to prepare for CASP+?",
                      answer: "Most experienced professionals need 3-6 months of dedicated study. The course is 14 weeks but additional self-study may be needed depending on your background."
                    },
                    {
                      question: "Is CASP+ worth it for career advancement?",
                      answer: "Absolutely! CASP+ holders command premium salaries and are qualified for senior security positions. It's respected by government agencies and enterprise organizations."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3 text-purple-600">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready to Master Enterprise Security?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join the elite security architects designing and protecting enterprise systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 font-semibold">
                  Talk to an Advisor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyFooterAndActions />
    </div>
  );
};

export default ComptiaCASPPlus;
