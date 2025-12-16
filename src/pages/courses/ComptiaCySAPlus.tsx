import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, BookOpen, Target, Shield, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";
import socAnalystImg from "@/assets/course-soc-analyst.jpg";

const ComptiaCySAPlus = () => {
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
                    Intermediate
                  </span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  CySA+
                </h1>

                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  Course focussed on security analysts on who have basic understanding and experience in cyber security and want to get hands on few concepts and upskill from their current security concepts understanding.
                </p>

                <div className="flex flex-wrap gap-6 text-white/80 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">10 Weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">600+ Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span className="font-medium">Intermediate Level</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-purple-50 to-white text-purple-900 hover:from-purple-100 hover:to-white border-2 border-purple-200 font-semibold">
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-950 bg-white/10 backdrop-blur-sm font-semibold">
                    Download Brochure
                  </Button>
                </div>
              </div>

              <div className="w-full md:w-96">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={socAnalystImg}
                    alt="CompTIA CySA+ Course"
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
                    CompTIA Cybersecurity Analyst (CySA+) validates the skills needed to apply behavioral analytics to networks and devices to prevent, detect, and combat cybersecurity threats. This course covers threat and vulnerability management, software and systems security, security operations and monitoring, and incident response.
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
                        "Threat and vulnerability management",
                        "Software and systems security",
                        "Security operations and monitoring",
                        "Incident response and recovery",
                        "Security analytics and intelligence",
                        "Risk assessment and management",
                        "Security tool configuration",
                        "Compliance and assessment"
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
                        "Cybersecurity Analyst",
                        "Security Operations Center (SOC) Analyst",
                        "Threat Hunter",
                        "Incident Responder",
                        "Security Consultant",
                        "Information Security Analyst",
                        "Vulnerability Analyst",
                        "Security Engineer"
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
                      title: "Threat and Vulnerability Management",
                      topics: [
                        "Threat intelligence and analysis",
                        "Vulnerability scanning and assessment",
                        "Risk management frameworks",
                        "Threat modeling techniques",
                        "Security metrics and KPIs"
                      ]
                    },
                    {
                      week: "Week 3-4", 
                      title: "Software and Systems Security",
                      topics: [
                        "Secure software development",
                        "Application security testing",
                        "System hardening and configuration",
                        "Container and cloud security",
                        "DevSecOps practices"
                      ]
                    },
                    {
                      week: "Week 5-7",
                      title: "Security Operations and Monitoring",
                      topics: [
                        "SIEM implementation and management",
                        "Log analysis and correlation",
                        "Network traffic analysis",
                        "Endpoint security monitoring",
                        "Security automation and orchestration"
                      ]
                    },
                    {
                      week: "Week 8-10",
                      title: "Incident Response and Recovery",
                      topics: [
                        "Incident response frameworks",
                        "Digital forensics fundamentals",
                        "Malware analysis techniques",
                        "Business continuity planning",
                        "Final exam preparation and practice"
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
                    CompTIA Cybersecurity Analyst+ (CS0-003)
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Exam Details</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li><strong>Exam Code:</strong> CS0-003</li>
                          <li><strong>Questions:</strong> 85 maximum</li>
                          <li><strong>Duration:</strong> 165 minutes</li>
                          <li><strong>Pass Score:</strong> 750 (on a scale of 900)</li>
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
                        title: "Industry Demand",
                        description: "CySA+ meets the growing demand for cybersecurity analysts across all industries"
                      },
                      {
                        title: "Practical Skills",
                        description: "Focuses on real-world skills needed for SOC operations and threat hunting"
                      },
                      {
                        title: "Career Growth",
                        description: "Opens doors to advanced cybersecurity roles and higher salaries"
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
                          <p className="font-medium">CompTIA Security+ required</p>
                          <p className="text-sm text-gray-600">Or equivalent cybersecurity knowledge</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">3-4 years IT experience</p>
                          <p className="text-sm text-gray-600">With focus on information security</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Network+ recommended</p>
                          <p className="text-sm text-gray-600">For understanding network security concepts</p>
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
                          <p className="text-sm text-gray-600">For online classes and security labs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">SIEM and security tools access</p>
                          <p className="text-sm text-gray-600">For hands-on security operations practice</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Dedicated study time</p>
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
                      question: "What's the difference between Security+ and CySA+?",
                      answer: "Security+ focuses on foundational security knowledge, while CySA+ focuses on practical security analysis and operations skills. CySA+ is more hands-on and specialized for analyst roles."
                    },
                    {
                      question: "Is CySA+ worth it for SOC analysts?",
                      answer: "Absolutely! CySA+ is specifically designed for SOC analysts and covers the exact skills needed for security operations centers, including SIEM management, threat hunting, and incident response."
                    },
                    {
                      question: "How hard is the CySA+ exam?",
                      answer: "CySA+ is considered intermediate to advanced difficulty. The exam is performance-based and requires practical knowledge of security tools and techniques."
                    },
                    {
                      question: "What tools will I learn in this course?",
                      answer: "You'll work with SIEM platforms, vulnerability scanners, network analyzers, forensic tools, and security automation frameworks commonly used in enterprise environments."
                    },
                    {
                      question: "Can I get a job with just CySA+?",
                      answer: "Yes, CySA+ is highly valued by employers and can qualify you for cybersecurity analyst positions. Combined with experience, it's a powerful qualification for career advancement."
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
                Ready to Become a Cybersecurity Analyst?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join the security analysts defending organizations against cyber threats
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-50 to-white text-purple-900 hover:from-purple-100 hover:to-white border-2 border-purple-200 font-semibold">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-950 bg-white/10 backdrop-blur-sm font-semibold">
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

export default ComptiaCySAPlus;
