import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, BookOpen, Target, Shield, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";
import courseImage from "@/assets/course/CBSecPro.png";

const SecurityPro = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Advanced</span>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-float">
                CB Sec. Pro
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Course designed for experienced professional ready to take there next step decoding the path to your career. Includes Security Analyst & IR, Domain Specialisation, Leadership Seminar.
              </p>

              <div className="flex flex-wrap gap-6 text-white/80 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">16 Weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">200+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Advanced Level</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700 font-bold px-8 h-14 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none">
                  <Link to="/contact?course=security-pro">
                    Enroll Now
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold px-8 h-14 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95">
                  <Link to="/contact">
                    Download Syllabus
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src={courseImage}
                alt="Security Pro Course"
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20"
              />
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
                className={`rounded-full px-6 h-10 capitalize ${activeTab === tab
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
                    Security Pro is the ultimate advanced cybersecurity course designed for experienced professionals ready to elevate their careers to expert level. This comprehensive program covers advanced security architecture, threat intelligence, incident response leadership, and strategic security management. You'll master the skills needed to lead security teams and design enterprise-grade security solutions.
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
                        "Advanced security architecture and design",
                        "Enterprise threat intelligence and analysis",
                        "Strategic incident response and recovery",
                        "Security governance and risk management",
                        "Advanced penetration testing techniques",
                        "Cloud security architecture and compliance",
                        "Security operations center management",
                        "Leadership and security team management"
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
                        "Chief Information Security Officer (CISO)",
                        "Security Architect",
                        "Security Director",
                        "Principal Security Engineer",
                        "Security Consultant",
                        "Threat Intelligence Analyst",
                        "Security Operations Manager",
                        "Enterprise Security Engineer"
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
                      week: "Week 1-4",
                      title: "Advanced Security Architecture",
                      topics: [
                        "Enterprise security design principles",
                        "Zero Trust architecture implementation",
                        "Advanced network security design",
                        "Cloud security architecture patterns",
                        "Security frameworks and standards"
                      ]
                    },
                    {
                      week: "Week 5-8",
                      title: "Threat Intelligence and Advanced Defense",
                      topics: [
                        "Advanced threat hunting techniques",
                        "Threat intelligence platforms and tools",
                        "Malware analysis and reverse engineering",
                        "Advanced persistent threat detection",
                        "Security automation and orchestration"
                      ]
                    },
                    {
                      week: "Week 9-12",
                      title: "Security Leadership and Management",
                      topics: [
                        "Security program development",
                        "Budget management and resource allocation",
                        "Security team leadership and mentoring",
                        "Executive communication and reporting",
                        "Security metrics and KPI development"
                      ]
                    },
                    {
                      week: "Week 13-16",
                      title: "Strategic Security and Capstone Project",
                      topics: [
                        "Business continuity and disaster recovery",
                        "Security governance and compliance",
                        "Advanced penetration testing leadership",
                        "Capstone security architecture project",
                        "Final assessment and certification prep"
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
                  <h3 className="font-heading text-xl font-semibold mb-4 text-purple-900">
                    Security Pro Certification
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Course Completion</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li><strong>Duration:</strong> 16 weeks</li>
                          <li><strong>Format:</strong> Online + Advanced labs</li>
                          <li><strong>Assessment:</strong> Capstone project + Final exam</li>
                          <li><strong>Certificate:</strong> Security Pro Expert Certification</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Professional Recognition</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Industry-recognized expert credential</li>
                          <li>• Leadership certification endorsement</li>
                          <li>• Advanced security architecture badge</li>
                          <li>• Executive-level security validation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Why Choose Security Pro?</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Expert Level",
                        description: "Designed for experienced professionals seeking mastery"
                      },
                      {
                        title: "Leadership Focus",
                        description: "Develop the skills to lead security teams and programs"
                      },
                      {
                        title: "Career Acceleration",
                        description: "Fast-track to CISO and senior security positions"
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
                          <p className="font-medium">5+ years cybersecurity experience</p>
                          <p className="text-sm text-gray-600">Proven track record in security roles</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Advanced security certifications</p>
                          <p className="text-sm text-gray-600">CISSP, CISM, or equivalent recommended</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Leadership experience</p>
                          <p className="text-sm text-gray-600">Team leadership or management experience</p>
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
                          <p className="font-medium">Advanced computer setup</p>
                          <p className="text-sm text-gray-600">High-performance system for complex labs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Enterprise lab environment</p>
                          <p className="text-sm text-gray-600">Access to advanced security tools and platforms</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Significant time commitment</p>
                          <p className="text-sm text-gray-600">25-30 hours per week recommended</p>
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
                      question: "Is this course suitable for security managers?",
                      answer: "Absolutely! Security Pro is specifically designed for experienced security professionals and managers looking to advance to executive-level positions like CISO or Security Director."
                    },
                    {
                      question: "What makes this different from other advanced courses?",
                      answer: "Security Pro focuses on leadership, strategy, and architecture rather than just technical skills. You'll learn to design security programs, lead teams, and communicate with executives."
                    },
                    {
                      question: "Will this help me get a CISO position?",
                      answer: "Yes! Security Pro provides the exact skills and knowledge needed for CISO roles, including security program development, budget management, and executive communication."
                    },
                    {
                      question: "How practical is the capstone project?",
                      answer: "The capstone project is a comprehensive real-world security architecture challenge where you'll design and implement security solutions for a complex enterprise environment."
                    },
                    {
                      question: "What kind of salary can I expect after this course?",
                      answer: "Security Pro graduates typically qualify for senior roles with salaries ranging from $150,000 to $250,000+ depending on location and organization size."
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
                Ready to Become a Security Professional Leader?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join the elite security professionals leading enterprise cybersecurity programs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700 font-bold px-8 h-14 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none">
                  <Link to="/contact?course=security-pro">
                    Enroll Now
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-bold px-8 h-14 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95">
                  <Link to="/contact">Talk to an Advisor</Link>
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

export default SecurityPro;
