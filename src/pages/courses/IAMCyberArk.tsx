import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, BookOpen, Target, Shield, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";
import iamImg from "@/assets/course/IAm.png";

const IAMCyberArk = () => {
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
                  IAM - CyberArk
                </h1>

                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  Intermediate course focused on Identity and Access Management using CyberArk for enterprise security.
                </p>

                <div className="flex flex-wrap gap-6 text-white/80 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">10 Weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">300+ Students</span>
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
                    src={iamImg}
                    alt="IAM - CyberArk Course"
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
                    Master Identity and Access Management (IAM) with CyberArk, the leading privileged access management solution. This intermediate course teaches you how to secure enterprise systems by managing privileged accounts, implementing least privilege principles, and protecting critical assets from unauthorized access.
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
                        "CyberArk Privileged Access Security fundamentals",
                        "Privileged account management and monitoring",
                        "Application access management",
                        "Session management and recording",
                        "Password vault and credential management",
                        "Risk-based security policies",
                        "Integration with enterprise systems",
                        "Compliance and audit reporting"
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
                        "Identity and Access Manager",
                        "Security Engineer",
                        "CyberArk Administrator",
                        "Privileged Access Manager",
                        "Security Analyst",
                        "Risk Management Specialist",
                        "Compliance Officer",
                        "IAM Consultant"
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
                      title: "CyberArk Fundamentals",
                      topics: [
                        "Introduction to privileged access security",
                        "CyberArk architecture and components",
                        "Core PVWA functionality",
                        "Digital Vault overview",
                        "Security best practices"
                      ]
                    },
                    {
                      week: "Week 3-4", 
                      title: "Privileged Account Management",
                      topics: [
                        "Onboarding privileged accounts",
                        "Password management and rotation",
                        "Account discovery and reconciliation",
                        "Credential verification",
                        "Account group management"
                      ]
                    },
                    {
                      week: "Week 5-7",
                      title: "Advanced CyberArk Features",
                      topics: [
                        "Application access management",
                        "Session management and recording",
                        "PTA and PTP integration",
                        "Conjur integration",
                        "API and automation"
                      ]
                    },
                    {
                      week: "Week 8-10",
                      title: "Enterprise Integration and Security",
                      topics: [
                        "SIEM integration",
                        "Compliance and reporting",
                        "Risk assessment and mitigation",
                        "Advanced troubleshooting",
                        "Final project and certification prep"
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
                    CyberArk Certification Path
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Course Completion</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li><strong>Duration:</strong> 10 weeks</li>
                          <li><strong>Format:</strong> Online + Hands-on labs</li>
                          <li><strong>Assessment:</strong> Lab exercises + Final project</li>
                          <li><strong>Certificate:</strong> Course completion certificate</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Professional Certification</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• CyberArk Certified Delivery Engineer</li>
                          <li>• CyberArk Certified Trustee</li>
                          <li>• CyberArk Certified Defender</li>
                          <li>• Industry-recognized credentials</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Why Learn CyberArk?</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Market Leader",
                        description: "CyberArk is the #1 privileged access management solution globally"
                      },
                      {
                        title: "High Demand",
                        description: "IAM professionals are among the highest-paid in cybersecurity"
                      },
                      {
                        title: "Enterprise Critical",
                        description: "Essential for protecting privileged accounts in organizations"
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
                          <p className="font-medium">Basic IT knowledge</p>
                          <p className="text-sm text-gray-600">Understanding of networking and security concepts</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Windows/Linux familiarity</p>
                          <p className="text-sm text-gray-600">Basic system administration skills</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Security fundamentals</p>
                          <p className="text-sm text-gray-600">Basic understanding of security principles</p>
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
                          <p className="text-sm text-gray-600">For online classes and lab access</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Virtual lab environment</p>
                          <p className="text-sm text-gray-600">For CyberArk hands-on exercises</p>
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
                      question: "Do I need prior CyberArk experience?",
                      answer: "No! This course is designed for intermediate learners with basic IT knowledge. We'll start with CyberArk fundamentals and build up to advanced concepts."
                    },
                    {
                      question: "What kind of jobs can I get with CyberArk skills?",
                      answer: "CyberArk skills qualify you for roles like Identity and Access Manager, Security Engineer, CyberArk Administrator, and Privileged Access Manager in enterprise organizations."
                    },
                    {
                      question: "Is this course hands-on?",
                      answer: "Yes! The course includes extensive lab exercises where you'll work with actual CyberArk environments, configure privileged access security, and implement real-world solutions."
                    },
                    {
                      question: "Will this prepare me for CyberArk certification?",
                      answer: "Absolutely! The course covers all topics needed for CyberArk certifications including Certified Delivery Engineer and Certified Trustee certifications."
                    },
                    {
                      question: "How is CyberArk used in real organizations?",
                      answer: "CyberArk is used by enterprises to secure privileged accounts, manage access to critical systems, and comply with security regulations. It's essential for modern security operations."
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
                Ready to Master Identity and Access Management?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join the security professionals protecting enterprise privileged access with CyberArk
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

export default IAMCyberArk;
