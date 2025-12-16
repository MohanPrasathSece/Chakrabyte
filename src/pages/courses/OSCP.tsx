import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, BookOpen, Target, Shield, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";
import ethicalHackingImg from "@/assets/course-ethical-hacking.jpg";

const OSCP = () => {
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
                    Ethical Hacking
                  </span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  OSCP
                </h1>

                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  Offensive Security Certified Professional - Master penetration testing with hands-on practical exam and real-world scenarios.
                </p>

                <div className="flex flex-wrap gap-6 text-white/80 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">20 Weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">200+ Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span className="font-medium">Certification Prep</span>
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
                    src={ethicalHackingImg}
                    alt="OSCP Course"
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
                    The Offensive Security Certified Professional (OSCP) is the gold standard in penetration testing certifications. This course teaches students how to attack, exploit, and compromise systems in a hands-on environment. Unlike other certifications, OSCP requires students to prove their skills in a 24-hour practical exam.
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
                        "Advanced penetration testing methodology",
                        "Buffer overflow exploitation techniques",
                        "Web application exploitation",
                        "Privilege escalation methods",
                        "Active Directory attacks",
                        "Custom exploit development",
                        "Post-exploitation techniques",
                        "Report writing and documentation"
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
                        "Senior Penetration Tester",
                        "Security Consultant",
                        "Red Team Lead",
                        "Offensive Security Engineer",
                        "Vulnerability Researcher",
                        "Security Architect",
                        "Cybersecurity Manager",
                        "Principal Security Engineer"
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
                      title: "Penetration Testing Fundamentals",
                      topics: [
                        "Penetration testing methodology and planning",
                        "Information gathering and reconnaissance",
                        "Vulnerability assessment techniques",
                        "Exploitation basics and concepts",
                        "Lab environment setup and tools"
                      ]
                    },
                    {
                      week: "Week 5-10", 
                      title: "Exploitation Techniques",
                      topics: [
                        "Buffer overflow exploitation",
                        "Web application attacks (SQLi, XSS, CSRF)",
                        "File inclusion and upload vulnerabilities",
                        "Authentication bypass techniques",
                        "Network protocol exploitation"
                      ]
                    },
                    {
                      week: "Week 11-16",
                      title: "Advanced Attacks and Post-Exploitation",
                      topics: [
                        "Active Directory enumeration and attacks",
                        "Privilege escalation (Windows & Linux)",
                        "Pass-the-hash and credential theft",
                        "Lateral movement techniques",
                        "Persistence mechanisms"
                      ]
                    },
                    {
                      week: "Week 17-20",
                      title: "Exam Preparation and Practice",
                      topics: [
                        "24-hour exam simulation",
                        "Time management strategies",
                        "Report writing and documentation",
                        "Advanced lab exercises",
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
                  <h3 className="font-heading text-xl font-semibold mb-4 text-purple-900">
                    Offensive Security Certified Professional (OSCP)
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Exam Details</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li><strong>Exam Format:</strong> 24-hour practical exam</li>
                          <li><strong>Lab Environment:</strong> Virtual network with multiple targets</li>
                          <li><strong>Requirements:</strong> Compromise multiple systems and gain administrative access</li>
                          <li><strong>Documentation:</strong> Detailed penetration test report required</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Exam Structure</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• 23 hours and 45 minutes of lab time</li>
                          <li>• Multiple target systems of varying difficulty</li>
                          <li>• Points-based scoring system</li>
                          <li>• Minimum 70 points required to pass</li>
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
                        title: "Gold Standard",
                        description: "OSCP is widely regarded as the most respected penetration testing certification"
                      },
                      {
                        title: "Practical Skills",
                        description: "Hands-on exam proves real-world penetration testing abilities"
                      },
                      {
                        title: "Career Accelerator",
                        description: "OSCP holders command premium salaries and top security positions"
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
                          <p className="font-medium">Strong networking knowledge</p>
                          <p className="text-sm text-gray-600">TCP/IP, protocols, and network security</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Linux command line proficiency</p>
                          <p className="text-sm text-gray-600">Comfortable with Bash and basic scripting</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Basic programming knowledge</p>
                          <p className="text-sm text-gray-600">Understanding of programming concepts</p>
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
                          <p className="font-medium">High-performance computer</p>
                          <p className="text-sm text-gray-600">16GB+ RAM, SSD, dedicated GPU recommended</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Virtualization software</p>
                          <p className="text-sm text-gray-600">VMware or VirtualBox for lab environment</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Extensive time commitment</p>
                          <p className="text-sm text-gray-600">30-40 hours per week recommended</p>
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
                      question: "How difficult is the OSCP exam?",
                      answer: "OSCP is considered extremely challenging with a pass rate of around 50%. The 24-hour format tests both technical skills and mental endurance. It requires significant preparation and dedication."
                    },
                    {
                      question: "Do I need prior pentesting experience?",
                      answer: "While not strictly required, having some penetration testing experience or prior certifications like CEH is highly recommended. The course assumes strong technical foundations."
                    },
                    {
                      question: "What programming skills are needed?",
                      answer: "Basic Python or Bash scripting is essential for automation and exploit development. Understanding of memory concepts and assembly language is helpful for buffer overflow exploitation."
                    },
                    {
                      question: "Can I work full-time while taking this course?",
                      answer: "Due to the intensive nature and time requirements (30-40 hours/week), most students find it challenging to work full-time. Consider taking leave or reducing work hours during the course."
                    },
                    {
                      question: "What's the OSCP exam format?",
                      answer: "The exam is a 24-hour practical test where you must compromise multiple systems in a virtual network, document your findings, and submit a professional penetration test report within the time limit."
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
                Ready for the Ultimate Challenge?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join the elite group of OSCP certified penetration testers worldwide
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

export default OSCP;
