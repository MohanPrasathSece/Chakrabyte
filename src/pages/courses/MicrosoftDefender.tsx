import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, BookOpen, CheckCircle, ChevronRight, Shield, Target, Zap, Cloud } from "lucide-react";
import courseImage from "@/assets/course/MSDefender.png";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const MicrosoftDefender = () => {
  const modules = [
    {
      title: "Microsoft Defender for Endpoint",
      topics: ["Endpoint protection overview", "Deployment and configuration", "Threat and vulnerability management", "Attack surface reduction", "Endpoint detection and response"]
    },
    {
      title: "Microsoft Defender for Office 365",
      topics: ["Email security protection", "Anti-phishing and anti-spam", "Safe attachments and links", "Threat investigation", "Email threat policies"]
    },
    {
      title: "Microsoft Defender for Cloud",
      topics: ["Cloud security posture management", "Cloud workload protection", "Container security", "Server security", "Security recommendations"]
    },
    {
      title: "Microsoft Defender for Identity",
      topics: ["Active Directory protection", "Identity-based attacks", "Kerberos authentication", "Privileged access management", "Lateral movement detection"]
    },
    {
      title: "Microsoft 365 Defender Portal",
      topics: ["Unified security interface", "Incident correlation", "Advanced hunting", "Threat analytics", "Security score and recommendations"]
    },
    {
      title: "Threat Intelligence and Hunting",
      topics: ["Microsoft Threat Protection", "Advanced hunting queries", "Custom detection rules", "Threat intelligence feeds", "Security automation"]
    },
    {
      title: "Incident Response and Automation",
      topics: ["Incident management workflows", "Automated investigation and response", "Playbook creation", "Remediation procedures", "Post-incident analysis"]
    }
  ];

  const outcomes = [
    "Master Microsoft Defender suite of products",
    "Implement comprehensive endpoint and cloud protection",
    "Develop advanced threat detection capabilities",
    "Create automated security response workflows",
    "Integrate with Microsoft 365 security ecosystem"
  ];

  const certification = {
    title: "Microsoft Certified: Security Operations Analyst",
    description: "This certification validates skills in using Microsoft Defender suite and Microsoft 365 security products.",
    duration: "120 minutes",
    questions: "40-60 questions",
    passingScore: "700/1000"
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
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Advanced Level</span>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-float">
                Microsoft Defender
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Master Microsoft's comprehensive security suite covering endpoint, cloud, identity,
                and productivity protection. Learn advanced threat detection and response.
              </p>

              <div className="flex flex-wrap gap-6 text-white/80 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">12 Weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">600+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Microsoft Certified</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-14 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none">
                  <Link to="/contact?course=microsoft-defender" className="flex items-center gap-2">
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
                alt="Microsoft Defender Course"
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
                  Certification Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Exam Title:</span>
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
                <div key={index} className="bg-card rounded-xl p-6 border hover:rounded-full transition-shadow">
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
              Master Microsoft Security Solutions
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Become an expert in Microsoft's comprehensive security ecosystem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-14 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none">
                <Link to="/contact?course=microsoft-defender">
                  Get Started Today
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

export default MicrosoftDefender;
