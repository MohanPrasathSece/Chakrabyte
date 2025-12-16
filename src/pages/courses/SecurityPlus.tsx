import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, BookOpen, CheckCircle, ChevronRight, Shield, Target, Zap } from "lucide-react";
import socAnalystImg from "@/assets/course-soc-analyst.jpg";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const SecurityPlus = () => {
  const modules = [
    {
      title: "Network Security Fundamentals",
      topics: ["Network concepts and protocols", "OSI model review", "TCP/IP suite", "Network segmentation", "Virtual private networks"]
    },
    {
      title: "Threats, Attacks, and Vulnerabilities",
      topics: ["Malware types and characteristics", "Social engineering techniques", "Physical security threats", "Attack vectors and surfaces", "Vulnerability assessment"]
    },
    {
      title: "Architecture and Design",
      topics: ["Security frameworks", "Network security architecture", "Cloud security models", "Virtualization security", "Secure network design"]
    },
    {
      title: "Implementation",
      topics: ["Identity and access management", "Security tools and technologies", "Wireless security", "Mobile device security", "IoT security considerations"]
    },
    {
      title: "Operations and Incident Response",
      topics: ["Incident response procedures", "Business continuity", "Disaster recovery", "Digital forensics basics", "Security monitoring"]
    },
    {
      title: "Governance, Risk, and Compliance",
      topics: ["Risk management processes", "Security policies and procedures", "Compliance frameworks", "Ethical considerations", "Security awareness training"]
    }
  ];

  const outcomes = [
    "Master comprehensive security concepts and practices",
    "Implement robust network security measures",
    "Identify and mitigate various cyber threats",
    "Develop security policies and procedures",
    "Prepare for CompTIA Security+ certification"
  ];

  const certification = {
    title: "CompTIA Security+",
    description: "CompTIA Security+ is the first security certification IT professionals should earn. It establishes the core knowledge required of any cybersecurity role.",
    duration: "90 minutes",
    questions: "90 questions",
    passingScore: "750/900"
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Beginner</span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-float">
              Security+
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Fundamental course for freshers or individuals looking establish a foundation for a career in cybersecurity and want to get core knowledge and understanding required to handle basic infosec job roles.
            </p>

            <div className="flex flex-wrap gap-6 text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">8 Weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">1200+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="font-medium">Beginner Friendly</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 font-semibold px-8 py-3 shadow-lg">
                <span className="text-white">Enroll Now</span>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-950 bg-white/10 backdrop-blur-sm font-semibold px-8 py-3">
                <span className="text-white">Download Syllabus</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-light-section/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
              Course Overview
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Security+ is the perfect starting point for anyone looking to build a career in cybersecurity. This comprehensive beginner course covers the fundamental knowledge and core understanding required to handle basic information security job roles. You'll learn essential security concepts, risk management, network security, and much more.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-xl p-6 border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  What You'll Learn
                </h3>
                <ul className="space-y-3">
                  {[
                    "Fundamental security concepts and principles",
                    "Network security and protocols",
                    "Threats, attacks, and vulnerabilities",
                    "Risk management and mitigation strategies",
                    "Identity and access management",
                    "Security assessment and testing",
                    "Security operations and monitoring",
                    "Cryptography and data protection"
                  ].map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Career Opportunities
                </h3>
                <ul className="space-y-3">
                  {[
                    "Security Analyst",
                    "Systems Administrator",
                    "Network Administrator",
                    "Security Consultant",
                    "IT Support Specialist",
                    "Junior Security Engineer",
                    "Information Security Officer",
                    "Cybersecurity Technician"
                  ].map((job, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{job}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              Course Modules
            </h2>

            <div className="space-y-6">
              {modules.map((module, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-primary" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Start Your Security Career Today
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Security+ is the foundational certification for any cybersecurity professional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 font-semibold px-8 py-3 shadow-lg">
                <span className="text-white">Get Started Today</span>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-950 bg-white/10 backdrop-blur-sm font-semibold px-8 py-3">
                <span className="text-white">View All Courses</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <StickyFooterAndActions />
    </div>
  );
};

export default SecurityPlus;
