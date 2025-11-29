import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, CheckCircle } from "lucide-react";

const WebAppSecurity = () => {
  const modules = [
    { title: "Web Application Fundamentals", topics: ["HTTP protocol", "Web technologies", "Client-server architecture", "Web frameworks", "Browser security"] },
    { title: "OWASP Top 10", topics: ["Injection attacks", "Broken authentication", "Sensitive data exposure", "XXE", "Broken access control", "Security misconfiguration", "XSS", "Insecure deserialization", "Known vulnerabilities", "Insufficient logging"] },
    { title: "SQL Injection", topics: ["SQL injection types", "Union-based injection", "Blind SQL injection", "Time-based injection", "SQLMap", "Prevention techniques"] },
    { title: "Cross-Site Scripting (XSS)", topics: ["Reflected XSS", "Stored XSS", "DOM-based XSS", "XSS exploitation", "Content Security Policy", "XSS prevention"] },
    { title: "Authentication & Session Management", topics: ["Authentication mechanisms", "Session handling", "Cookie security", "JWT tokens", "OAuth 2.0", "Multi-factor authentication"] },
    { title: "API Security", topics: ["REST API security", "GraphQL security", "API authentication", "Rate limiting", "Input validation", "API security testing"] },
    { title: "File Upload Vulnerabilities", topics: ["File upload attacks", "File type validation", "Path traversal", "Remote code execution", "Secure file handling"] },
    { title: "Command Injection", topics: ["OS command injection", "Code injection", "LDAP injection", "XML injection", "Template injection"] },
    { title: "Business Logic Flaws", topics: ["Price manipulation", "Race conditions", "Workflow bypasses", "Testing methodologies", "Real-world examples"] },
    { title: "Secure Development", topics: ["Secure coding practices", "Input validation", "Output encoding", "Security testing", "SSDLC", "DevSecOps"] }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-accent to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Web Application Security</h1>
            <p className="text-xl mb-6 opacity-90">Master OWASP Top 10, API security, and secure coding practices</p>
            <div className="flex flex-wrap gap-4 mb-6 opacity-90">
              <div className="flex items-center gap-2"><Clock size={20} /><span>10 Weeks</span></div>
              <div className="flex items-center gap-2"><Award size={20} /><span>Certification</span></div>
              <div className="flex items-center gap-2"><Users size={20} /><span>1100+ Students</span></div>
            </div>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact?course=web-app-security">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-6">Course Overview</h2>
          <p className="text-muted-foreground">Become an expert in web application security testing and secure development. Learn to identify and exploit vulnerabilities in web applications and APIs, with focus on OWASP Top 10 and real-world attack scenarios.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8">Course Modules</h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div key={index} className="bg-light-section p-6 rounded-lg">
                <h3 className="font-heading text-lg font-semibold mb-3">Module {index + 1}: {module.title}</h3>
                <ul className="space-y-1">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-accent">•</span><span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Master Web Application Security</h2>
          <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90">
            <Link to="/contact?course=web-app-security">Enroll Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebAppSecurity;
