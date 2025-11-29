import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, CheckCircle } from "lucide-react";

const NetworkSecurity = () => {
  const modules = [
    { title: "Network Security Fundamentals", topics: ["OSI model", "TCP/IP protocol suite", "Network devices", "Security principles", "Threat landscape"] },
    { title: "Firewalls and IDS/IPS", topics: ["Firewall types", "Firewall rules", "IDS vs IPS", "Snort", "Suricata", "Alert management"] },
    { title: "VPN Technologies", topics: ["VPN protocols", "IPsec", "SSL/TLS VPN", "Site-to-site VPN", "Remote access VPN", "VPN security"] },
    { title: "Network Access Control", topics: ["802.1X authentication", "NAC solutions", "RADIUS/TACACS+", "Port security", "MAC filtering"] },
    { title: "Wireless Security", topics: ["Wi-Fi security protocols", "WPA3", "Enterprise Wi-Fi", "Wireless attacks", "Secure configuration"] },
    { title: "Network Monitoring", topics: ["Traffic analysis", "NetFlow", "SNMP", "Syslog", "Network baselines", "Anomaly detection"] },
    { title: "Secure Network Design", topics: ["Defense in depth", "Network segmentation", "DMZ design", "Zero trust architecture", "Micro-segmentation"] },
    { title: "DDoS Protection", topics: ["DDoS types", "Mitigation techniques", "Rate limiting", "BGP protection", "CDN services"] },
    { title: "Network Vulnerability Assessment", topics: ["Scanning techniques", "Vulnerability prioritization", "Patch management", "Configuration audits"] },
    { title: "Incident Response", topics: ["Network forensics", "Log analysis", "Incident containment", "Recovery procedures", "Post-incident review"] }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Network Security</h1>
            <p className="text-xl mb-6 opacity-90">Protect networks with firewalls, IDS/IPS, VPNs, and advanced security controls</p>
            <div className="flex flex-wrap gap-4 mb-6 opacity-90">
              <div className="flex items-center gap-2"><Clock size={20} /><span>8 Weeks</span></div>
              <div className="flex items-center gap-2"><Award size={20} /><span>Certification</span></div>
              <div className="flex items-center gap-2"><Users size={20} /><span>900+ Students</span></div>
            </div>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact?course=network-security">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-6">Course Overview</h2>
          <p className="text-muted-foreground mb-4">Master network security technologies and best practices to protect organizational infrastructure from cyber threats. Learn to design, implement, and manage secure networks using firewalls, VPNs, IDS/IPS systems, and other security controls.</p>
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
                      <span className="text-primary">•</span><span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Secure Your Network Infrastructure</h2>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact?course=network-security">Enroll Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NetworkSecurity;
