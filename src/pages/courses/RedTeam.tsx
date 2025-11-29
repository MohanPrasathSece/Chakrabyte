import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users } from "lucide-react";

const RedTeam = () => {
  const modules = [
    { title: "Red Team Fundamentals", topics: ["Red team vs pentest", "Attack lifecycle", "TTPs", "MITRE ATT&CK", "OpSec principles"] },
    { title: "Reconnaissance & OSINT", topics: ["Passive recon", "Active recon", "OSINT techniques", "Social media mining", "Domain intelligence"] },
    { title: "Initial Access", topics: ["Phishing campaigns", "Water hole attacks", "Drive-by downloads", "Supply chain attacks", "External exploitation"] },
    { title: "Command & Control", topics: ["C2 frameworks", "Cobalt Strike", "Empire", "Covenant", "Custom C2", "Traffic obfuscation"] },
    { title: "Privilege Escalation", topics: ["Windows privilege escalation", "Linux privilege escalation", "Kernel exploits", "Service misconfigurations"] },
    { title: "Lateral Movement", topics: ["Pass-the-hash", "Pass-the-ticket", "RDP hijacking", "PSExec", "WMI", "DCOM"] },
    { title: "Persistence", topics: ["Registry persistence", "Scheduled tasks", "Services", "WMI subscriptions", "Backdoors"] },
    { title: "Evasion Techniques", topics: ["AV evasion", "EDR bypass", "AMSI bypass", "Obfuscation", "Living off the land"] },
    { title: "Data Exfiltration", topics: ["Stealth exfiltration", "DNS tunneling", "Cloud storage", "Encrypted channels", "Data staging"] },
    { title: "Physical Security", topics: ["Physical penetration", "Badge cloning", "Lock picking", "Tailgating", "Dumpster diving"] },
    { title: "Social Engineering", topics: ["Pretexting", "Vishing", "Smishing", "USB drops", "Impersonation"] },
    { title: "Reporting", topics: ["Attack documentation", "Chain of compromise", "Risk assessment", "Remediation recommendations", "Executive reporting"] }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-destructive to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Red Team Operations</h1>
            <p className="text-xl mb-6 opacity-90">Advanced adversary simulation and offensive security techniques</p>
            <div className="flex flex-wrap gap-4 mb-6 opacity-90">
              <div className="flex items-center gap-2"><Clock size={20} /><span>14 Weeks</span></div>
              <div className="flex items-center gap-2"><Award size={20} /><span>Advanced Level</span></div>
              <div className="flex items-center gap-2"><Users size={20} /><span>500+ Students</span></div>
            </div>
            <Button asChild size="lg" className="bg-white text-destructive hover:bg-white/90">
              <Link to="/contact?course=red-team">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-6">Course Overview</h2>
          <p className="text-muted-foreground">Master advanced offensive security techniques used by professional red teams. Learn to simulate sophisticated adversaries, evade detection, and assess organizational security through realistic attack scenarios. This expert-level course covers the complete attack lifecycle from reconnaissance to exfiltration.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8">Course Modules</h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div key={index} className="bg-light-section p-6 rounded-lg border-l-4 border-destructive">
                <h3 className="font-heading text-lg font-semibold mb-3">Module {index + 1}: {module.title}</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-destructive">•</span><span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Join Elite Red Team Professionals</h2>
          <Button asChild size="lg" className="bg-white text-destructive hover:bg-white/90">
            <Link to="/contact?course=red-team">Enroll Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RedTeam;
