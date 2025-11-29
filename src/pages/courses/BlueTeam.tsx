import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users } from "lucide-react";

const BlueTeam = () => {
  const modules = [
    { title: "Defensive Security Fundamentals", topics: ["Defense-in-depth", "Security frameworks", "Threat modeling", "Risk assessment", "Security architecture"] },
    { title: "Security Operations Center", topics: ["SOC structure", "SOC processes", "Shift operations", "Escalation procedures", "Metrics and KPIs"] },
    { title: "SIEM Management", topics: ["SIEM deployment", "Log collection", "Correlation rules", "Use case development", "Splunk", "ELK", "QRadar"] },
    { title: "Threat Hunting", topics: ["Hunting methodologies", "Hypothesis-driven hunting", "IOC hunting", "Behavioral analysis", "Hunting tools"] },
    { title: "Incident Response", topics: ["IR framework", "Preparation", "Detection", "Containment", "Eradication", "Recovery", "Lessons learned"] },
    { title: "Malware Defense", topics: ["Endpoint protection", "EDR solutions", "Antivirus management", "Application whitelisting", "Sandboxing"] },
    { title: "Network Defense", topics: ["Network monitoring", "IDS/IPS", "Network segmentation", "Firewall management", "DDoS mitigation"] },
    { title: "Vulnerability Management", topics: ["Vulnerability scanning", "Patch management", "Risk prioritization", "Compliance scanning", "Remediation tracking"] },
    { title: "Identity and Access", topics: ["IAM best practices", "Privileged access management", "MFA deployment", "Access reviews", "Identity governance"] },
    { title: "Security Automation", topics: ["SOAR platforms", "Playbook creation", "Automated response", "Security orchestration", "API integration"] },
    { title: "Cloud Security Operations", topics: ["Cloud monitoring", "CSPM", "Cloud SIEM", "Container security", "Serverless monitoring"] },
    { title: "Metrics and Reporting", topics: ["Security metrics", "Dashboard creation", "Executive reporting", "Compliance reporting", "Continuous improvement"] }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-success to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Blue Team Defense</h1>
            <p className="text-xl mb-6 opacity-90">SOC operations, SIEM management, and incident response strategies</p>
            <div className="flex flex-wrap gap-4 mb-6 opacity-90">
              <div className="flex items-center gap-2"><Clock size={20} /><span>12 Weeks</span></div>
              <div className="flex items-center gap-2"><Award size={20} /><span>Intermediate</span></div>
              <div className="flex items-center gap-2"><Users size={20} /><span>950+ Students</span></div>
            </div>
            <Button asChild size="lg" className="bg-white text-success hover:bg-white/90">
              <Link to="/contact?course=blue-team">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-6">Course Overview</h2>
          <p className="text-muted-foreground">Master defensive security operations and become an expert in detecting, responding to, and preventing cyber threats. Learn to operate a SOC, manage SIEM platforms, hunt for threats, and lead incident response activities. Perfect for aspiring SOC analysts and incident responders.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8">Course Modules</h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div key={index} className="bg-light-section p-6 rounded-lg border-l-4 border-success">
                <h3 className="font-heading text-lg font-semibold mb-3">Module {index + 1}: {module.title}</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-success">•</span><span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-success text-success-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Become a Blue Team Expert</h2>
          <Button asChild size="lg" className="bg-white text-success hover:bg-white/90">
            <Link to="/contact?course=blue-team">Enroll Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlueTeam;
