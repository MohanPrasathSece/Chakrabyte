import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, BookOpen, Target, Shield, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";
import foundationImg from "@/assets/course-ethical-hacking.jpg";

const ComptiaNetworkPlus = () => {
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
                    Beginner
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    Foundation Programs
                  </span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  CompTIA Network+
                </h1>

                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  Master networking concepts, infrastructure, network operations, security, and troubleshooting skills.
                </p>

                <div className="flex flex-wrap gap-6 text-white/80 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">6 Weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">600+ Students</span>
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
                    src={foundationImg}
                    alt="CompTIA Network+ Course"
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
                    CompTIA Network+ validates the essential knowledge and skills needed to design, configure, manage, and troubleshoot wired and wireless networks. This course covers network technologies, installation and configuration, media and topologies, management, and security.
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
                        "Network concepts and protocols",
                        "Network infrastructure and installation",
                        "Network operations and monitoring",
                        "Network security fundamentals",
                        "Troubleshooting network issues",
                        "Cloud networking concepts",
                        "Virtualization and network storage",
                        "Wireless network configuration"
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
                        "Network Administrator",
                        "Network Engineer",
                        "Systems Administrator",
                        "IT Infrastructure Specialist",
                        "Network Operations Center (NOC) Technician",
                        "Network Support Specialist",
                        "Junior Network Architect",
                        "Telecommunications Specialist"
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
                      week: "Week 1-2",
                      title: "Network Concepts and Infrastructure",
                      topics: [
                        "OSI and TCP/IP models",
                        "Network protocols and ports",
                        "IP addressing and subnetting",
                        "Network devices and hardware",
                        "Cabling and topologies"
                      ]
                    },
                    {
                      week: "Week 3-4", 
                      title: "Network Operations and Security",
                      topics: [
                        "Network monitoring and management",
                        "Network troubleshooting tools",
                        "Network security concepts",
                        "Firewalls and access control",
                        "Wireless network security"
                      ]
                    },
                    {
                      week: "Week 5",
                      title: "Advanced Networking",
                      topics: [
                        "Cloud networking concepts",
                        "Virtualization technologies",
                        "Network storage solutions",
                        "Disaster recovery and business continuity",
                        "Network automation"
                      ]
                    },
                    {
                      week: "Week 6",
                      title: "Exam Preparation and Practice",
                      topics: [
                        "Practice exams and simulations",
                        "Hands-on lab exercises",
                        "Real-world troubleshooting scenarios",
                        "Final exam review and preparation"
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
                    CompTIA Network+ (N10-008)
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Exam Details</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li><strong>Exam Code:</strong> N10-008</li>
                          <li><strong>Questions:</strong> 90 maximum</li>
                          <li><strong>Duration:</strong> 90 minutes</li>
                          <li><strong>Pass Score:</strong> 720 (on a scale of 1000)</li>
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
                        title: "Industry Standard",
                        description: "Network+ is globally recognized as the foundational network certification"
                      },
                      {
                        title: "Career Advancement",
                        description: "Opens doors to network administration and engineering roles"
                      },
                      {
                        title: "Vendor Neutral",
                        description: "Skills apply to any network environment regardless of vendor"
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
                          <p className="font-medium">CompTIA IT Fundamentals+ recommended</p>
                          <p className="text-sm text-gray-600">Or equivalent basic IT knowledge</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Basic computer skills</p>
                          <p className="text-sm text-gray-600">Familiarity with operating systems and internet</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Technical aptitude</p>
                          <p className="text-sm text-gray-600">Interest in how networks work</p>
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
                          <p className="text-sm text-gray-600">For online classes and lab simulations</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Virtual lab access</p>
                          <p className="text-sm text-gray-600">For hands-on networking exercises</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Dedicated study time</p>
                          <p className="text-sm text-gray-600">15-20 hours per week recommended</p>
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
                      question: "Do I need prior networking experience?",
                      answer: "While prior experience is helpful, the course is designed to teach networking from the ground up. Having completed IT Fundamentals+ is beneficial but not required."
                    },
                    {
                      question: "What's the difference between Network+ and CCNA?",
                      answer: "Network+ is vendor-neutral and covers foundational networking concepts, while CCNA is Cisco-specific and more advanced. Network+ is often considered a prerequisite for CCNA."
                    },
                    {
                      question: "How much hands-on lab time is included?",
                      answer: "The course includes extensive virtual labs where you'll configure routers, switches, and network services. Approximately 40% of the course is hands-on practice."
                    },
                    {
                      question: "Is this certification worth it for cloud careers?",
                      answer: "Absolutely! Network+ provides the essential networking foundation needed for cloud computing roles and is often a prerequisite for cloud certifications."
                    },
                    {
                      question: "What's the job market like for Network+ certified professionals?",
                      answer: "Network+ certified professionals are in high demand across all industries. The certification is often required for government and enterprise network positions."
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
                Ready to Master Networking?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join the network professionals who keep the digital world connected
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

export default ComptiaNetworkPlus;
