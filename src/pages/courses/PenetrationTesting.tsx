import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, BookOpen, CheckCircle, ChevronRight, Shield, Target, Zap, Bug } from "lucide-react";
import courseImage from "@/assets/course/PT.png";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const PenetrationTesting = () => {
  const modules = [
    {
      title: "Penetration Testing Fundamentals",
      topics: ["Penetration testing methodology", "Rules of engagement", "Legal and ethical considerations", "Scoping and planning", "Documentation standards"]
    },
    {
      title: "Reconnaissance and Information Gathering",
      topics: ["OSINT techniques", "Passive reconnaissance", "Active reconnaissance", "Social engineering reconnaissance", "Network mapping", "Service enumeration"]
    },
    {
      title: "Vulnerability Assessment",
      topics: ["Vulnerability scanning tools", "Manual vs automated testing", "CVSS scoring", "False positive analysis", "Risk assessment methodologies"]
    },
    {
      title: "Web Application Penetration Testing",
      topics: ["OWASP Top 10 vulnerabilities", "Injection attacks", "Broken authentication", "Sensitive data exposure", "XML attacks", "Business logic flaws"]
    },
    {
      title: "Network Penetration Testing",
      topics: ["Network protocol attacks", "Firewall evasion", "IDS/IPS bypass", "VPN penetration testing", "Wireless security testing", "Network segmentation testing"]
    },
    {
      title: "Advanced Exploitation Techniques",
      topics: ["Buffer overflow exploits", "Return-oriented programming", "Shellcode development", "Privilege escalation", "Lateral movement", "Persistence mechanisms"]
    },
    {
      title: "Post-Exploitation and Reporting",
      topics: ["Maintaining access", "Data exfiltration techniques", "Covering tracks", "Executive report writing", "Technical documentation", "Remediation recommendations"]
    }
  ];

  const outcomes = [
    "Master comprehensive penetration testing methodologies",
    "Conduct advanced vulnerability assessments",
    "Perform web and network penetration testing",
    "Develop detailed penetration testing reports",
    "Prepare for advanced penetration testing certifications"
  ];

  const certification = {
    title: "Various Certifications Available",
    description: "Prepares for certifications like OSCP, CEPT, CPT, and other advanced penetration testing credentials.",
    duration: "Varies by certification",
    questions: "Varies by certification",
    passingScore: "Varies by certification"
  };

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
                <Bug className="w-4 h-4" />
                <span className="text-sm font-medium">Advanced Level</span>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-float">
                Penetration Testing
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Advanced penetration testing course covering comprehensive methodologies,
                exploitation techniques, and professional reporting. Master the art of ethical hacking.
              </p>

              <div className="flex flex-wrap gap-6 text-white/80 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">14 Weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">800+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Advanced</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-14 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none">
                  <Link to="/contact?course=penetration-testing" className="flex items-center gap-2">
                    Enroll Now
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:text-white font-bold px-8 h-14 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95">
                  <Link to="/contact" className="flex items-center gap-2">
                    Download Syllabus
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src={courseImage}
                alt="Penetration Testing Course"
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20"
              />
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

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-xl p-6 border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  What You'll Learn
                </h3>
                <ul className="space-y-3">
                  {outcomes.map((outcome, index) => (
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
                  Certification Path
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Available Certs:</span>
                    <span className="font-medium">{certification.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{certification.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Questions:</span>
                    <span className="font-medium">{certification.questions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Passing Score:</span>
                    <span className="font-medium">{certification.passingScore}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    {certification.description}
                  </p>
                </div>
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
              Become an Expert Penetration Tester
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Master advanced penetration testing techniques and methodologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-14 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none">
                <Link to="/contact?course=penetration-testing" className="flex items-center gap-2">
                  Get Started Today
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-bold px-8 h-14 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95">
                <Link to="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <StickyFooterAndActions />
    </div>
  );
};

export default PenetrationTesting;
