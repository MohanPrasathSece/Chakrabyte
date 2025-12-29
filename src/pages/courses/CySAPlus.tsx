import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, BookOpen, CheckCircle, ChevronRight, Shield, Target, Zap } from "lucide-react";
import courseImage from "@/assets/course/CYSA+.png";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const CySAPlus = () => {
  const modules = [
    {
      title: "Introduction to CompTIA CySA+",
      topics: ["CySA+ certification overview", "Job roles and responsibilities", "Threat intelligence fundamentals", "Security operations center basics", "Incident response framework"]
    },
    {
      title: "Threat and Vulnerability Management",
      topics: ["Vulnerability scanning tools", "Risk assessment methodologies", "Threat hunting techniques", "Security metrics and KPIs", "Vulnerability management lifecycle"]
    },
    {
      title: "Security Operations and Monitoring",
      topics: ["SIEM implementation", "Log analysis techniques", "Network monitoring", "Endpoint security monitoring", "Security alert triage"]
    },
    {
      title: "Incident Response",
      topics: ["Incident response procedures", "Containment strategies", "Evidence collection", "Post-incident analysis", "Recovery planning"]
    },
    {
      title: "Compliance and Assessment",
      topics: ["Regulatory frameworks", "Security controls assessment", "Audit procedures", "Risk management frameworks", "Security policy development"]
    },
    {
      title: "Security Architecture and Toolsets",
      topics: ["Security tools deployment", "Network security architecture", "Cloud security monitoring", "Threat intelligence platforms", "Automation and orchestration"]
    }
  ];

  const outcomes = [
    "Master threat detection and response techniques",
    "Implement effective security monitoring strategies",
    "Conduct comprehensive vulnerability assessments",
    "Develop incident response procedures",
    "Prepare for CompTIA CySA+ certification"
  ];

  const certification = {
    title: "CompTIA CySA+",
    description: "CompTIA Cybersecurity Analyst+ certification validates skills in threat detection, analysis, and response",
    duration: "4 hours",
    questions: "85 questions",
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
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Beginner Level</span>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-float">
                CySA+ Certification
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Course focussed on individuals on who have basic understanding in cyber security and want to get hands on few concepts and upskill from their current security concepts understanding.
              </p>

              <div className="flex flex-wrap gap-6 text-white/80 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">8 Weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">900+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Beginner Friendly</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700 font-bold px-8 h-14 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none">
                  <Link to="/contact?course=cysa-plus">
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
                alt="CySA+ Course"
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your CySA+ Journey?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of professionals who have advanced their careers with our comprehensive training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700 font-bold px-8 h-14 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none">
                <Link to="/contact?course=cysa-plus">
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

export default CySAPlus;
