import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, BookOpen, CheckCircle, ChevronRight, Shield, Target, Zap, Cloud } from "lucide-react";
import forensicsImg from "@/assets/course-forensics.jpg";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const AzureSentinel = () => {
  const modules = [
    {
      title: "Azure Sentinel Fundamentals",
      topics: ["Introduction to Azure Sentinel", "SIEM concepts and architecture", "Azure security ecosystem", "Licensing and deployment", "Workspace configuration"]
    },
    {
      title: "Data Connectors and Collection",
      topics: ["Native data connectors", "Custom data connectors", "Log sources and formats", "CEF and Syslog configuration", "API-based data collection", "Data retention policies"]
    },
    {
      title: "Analytics and Detection Rules",
      topics: ["Built-in analytics rules", "Custom analytics rules", "Threat hunting queries", "Kusto Query Language (KQL)", "Machine learning insights", "Fusion correlation"]
    },
    {
      title: "Threat Intelligence Integration",
      topics: ["Threat intelligence platforms", "TI indicators and feeds", "Microsoft Threat Protection", "Custom threat intelligence", "IOC management", "Threat analytics"]
    },
    {
      title: "Incident Management and Response",
      topics: ["Incident creation and management", "Automation playbooks", "SOAR integration", "Case management", "Response orchestration", "Remediation workflows"]
    },
    {
      title: "Advanced Monitoring and Hunting",
      topics: ["Advanced hunting techniques", "Custom dashboards and workbooks", "Azure Monitor integration", "Microsoft 365 security center", "Entity behavior analytics", "Anomaly detection"]
    },
    {
      title: "Automation and Orchestration",
      topics: ["Logic Apps integration", "Power Automate workflows", "Custom automation scripts", "Third-party tool integration", "Alert triage automation", "Response automation"]
    }
  ];

  const outcomes = [
    "Master Azure Sentinel SIEM operations",
    "Implement comprehensive security monitoring",
    "Develop advanced threat detection capabilities",
    "Create automated incident response workflows",
    "Integrate with Microsoft security ecosystem"
  ];

  const certification = {
    title: "Microsoft Certified: Security Operations Analyst",
    description: "This certification validates skills in using Microsoft Sentinel, Microsoft Defender for Cloud, and Microsoft 365 Defender.",
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
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Cloud className="w-4 h-4" />
              <span className="text-sm font-medium">Advanced Level</span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-float">
              Azure Sentinel
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Master Microsoft's cloud-native SIEM and security orchestration platform. 
              Learn advanced threat detection, incident response, and security automation.
            </p>

            <div className="flex flex-wrap gap-6 text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">12 Weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">Advanced</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="font-medium">Microsoft Certified</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 font-semibold">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 font-semibold">
                Download Syllabus
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
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Master Cloud Security Operations
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Become an expert in Microsoft's leading cloud security platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 font-semibold">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 font-semibold">
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

export default AzureSentinel;
