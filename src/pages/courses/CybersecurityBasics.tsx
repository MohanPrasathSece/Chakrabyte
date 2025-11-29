import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users } from "lucide-react";

const CybersecurityBasics = () => {
  const modules = [
    { title: "Introduction to Cybersecurity", topics: ["What is cybersecurity", "Threat landscape", "Types of attacks", "Cybersecurity careers", "Industry overview"] },
    { title: "Information Security Basics", topics: ["CIA triad", "Security principles", "Data classification", "Security policies", "Compliance basics"] },
    { title: "Network Fundamentals", topics: ["OSI model", "TCP/IP", "Common protocols", "Network devices", "IP addressing"] },
    { title: "Common Cyber Threats", topics: ["Malware", "Phishing", "Ransomware", "Social engineering", "DDoS attacks", "Insider threats"] },
    { title: "Password Security", topics: ["Password best practices", "Password managers", "Multi-factor authentication", "Biometrics", "SSO"] },
    { title: "Email Security", topics: ["Phishing recognition", "Email encryption", "Spam filtering", "Safe email practices", "Business email compromise"] },
    { title: "Web Browsing Safety", topics: ["HTTPS vs HTTP", "Browser security", "Cookie management", "Safe download practices", "VPN usage"] },
    { title: "Mobile Security", topics: ["Mobile threats", "App permissions", "Mobile encryption", "Lost device protection", "Mobile payment security"] },
    { title: "Social Media Security", topics: ["Privacy settings", "Information sharing", "Social engineering awareness", "Account security", "Fake profiles"] },
    { title: "Personal Data Protection", topics: ["Data privacy", "GDPR basics", "Identity theft prevention", "Secure file sharing", "Cloud storage security"] }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Cybersecurity for Beginners</h1>
            <p className="text-xl mb-6 opacity-90">Fundamental cybersecurity awareness and basic security concepts</p>
            <div className="flex flex-wrap gap-4 mb-6 opacity-90">
              <div className="flex items-center gap-2"><Clock size={20} /><span>6 Weeks</span></div>
              <div className="flex items-center gap-2"><Award size={20} /><span>Beginner</span></div>
              <div className="flex items-center gap-2"><Users size={20} /><span>2000+ Students</span></div>
            </div>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact?course=cybersecurity-basics">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-6">Course Overview</h2>
          <p className="text-muted-foreground">Start your cybersecurity journey with this comprehensive beginner course. Learn essential security concepts, common threats, and practical skills to protect yourself and your organization online. No technical background required – perfect for students, professionals, and anyone interested in cybersecurity.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8">Course Modules</h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div key={index} className="bg-light-section p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="font-heading text-lg font-semibold mb-3">Module {index + 1}: {module.title}</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-secondary">•</span><span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Start Your Cybersecurity Journey</h2>
          <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
            <Link to="/contact?course=cybersecurity-basics">Enroll Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityBasics;
