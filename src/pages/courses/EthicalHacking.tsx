import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, BookOpen, CheckCircle, ChevronRight, Shield, Target, Zap } from "lucide-react";
import ethicalHackingImg from "@/assets/course-ethical-hacking.jpg";

const EthicalHacking = () => {
  const modules = [
    {
      title: "Introduction to Ethical Hacking",
      topics: ["What is ethical hacking", "Types of hackers", "Hacking methodologies", "Legal and ethical considerations", "Career paths in ethical hacking"]
    },
    {
      title: "Footprinting and Reconnaissance",
      topics: ["Active vs passive reconnaissance", "Search engines and tools", "WHOIS lookup", "DNS enumeration", "Social engineering techniques", "Email tracking", "Network footprinting"]
    },
    {
      title: "Scanning Networks",
      topics: ["Network scanning techniques", "Port scanning with Nmap", "Vulnerability scanning", "Banner grabbing", "OS fingerprinting", "IDS/IPS evasion techniques"]
    },
    {
      title: "Enumeration",
      topics: ["NetBIOS enumeration", "SNMP enumeration", "LDAP enumeration", "NTP enumeration", "SMTP enumeration", "DNS zone transfer", "IPsec enumeration"]
    },
    {
      title: "System Hacking",
      topics: ["Password cracking techniques", "Privilege escalation", "Steganography", "Covering tracks", "Rootkits", "Keyloggers", "Spyware"]
    },
    {
      title: "Malware Threats",
      topics: ["Trojan horses", "Viruses and worms", "Ransomware", "APT attacks", "Malware analysis basics", "Detection and prevention"]
    },
    {
      title: "Sniffing",
      topics: ["Packet sniffing techniques", "Wireshark fundamentals", "MAC flooding", "ARP poisoning", "DHCP starvation", "DNS poisoning", "SSL stripping"]
    },
    {
      title: "Social Engineering",
      topics: ["Social engineering tactics", "Phishing attacks", "Pretexting", "Baiting", "Tailgating", "Identity theft", "Insider threats"]
    },
    {
      title: "Denial-of-Service",
      topics: ["DoS and DDoS attacks", "SYN flood", "Ping of death", "Slowloris", "Application layer attacks", "Botnets", "DDoS mitigation"]
    },
    {
      title: "Session Hijacking",
      topics: ["Session hijacking types", "Session sniffing", "Cross-site scripting", "Session replay", "Man-in-the-middle", "Session fixation"]
    },
    {
      title: "Web Application Hacking",
      topics: ["OWASP Top 10", "SQL injection", "XSS attacks", "CSRF", "Command injection", "File upload vulnerabilities", "Authentication bypass"]
    },
    {
      title: "Wireless Network Hacking",
      topics: ["Wi-Fi encryption", "WEP/WPA/WPA2 cracking", "Evil twin attacks", "Rogue access points", "Bluetooth attacks", "Wireless sniffing"]
    },
    {
      title: "Mobile Platform Attacks",
      topics: ["Android security", "iOS security", "Mobile malware", "App reverse engineering", "Mobile pentesting", "BYOD security"]
    },
    {
      title: "Cloud Computing",
      topics: ["Cloud security fundamentals", "Cloud vulnerabilities", "Data breach scenarios", "Container security", "Serverless security"]
    },
    {
      title: "Cryptography",
      topics: ["Encryption fundamentals", "Symmetric vs asymmetric", "Hashing algorithms", "Digital signatures", "PKI", "SSL/TLS", "Cryptanalysis"]
    }
  ];

  const tools = [
    "Kali Linux", "Metasploit Framework", "Nmap", "Wireshark", "Burp Suite",
    "OWASP ZAP", "John the Ripper", "Hashcat", "Aircrack-ng", "Sqlmap",
    "Hydra", "Netcat", "Nikto", "Maltego", "Social-Engineer Toolkit"
  ];

  const benefits = [
    {
      icon: Target,
      title: "Job-Ready Skills",
      description: "Master the exact tools and techniques used by professional penetration testers in the industry."
    },
    {
      icon: Shield,
      title: "Real-World Scenarios",
      description: "Practice in our advanced labs simulating real corporate networks and attack vectors."
    },
    {
      icon: Award,
      title: "Certification Prep",
      description: "Comprehensive preparation for CEH, OSCP, and other leading industry certifications."
    },
    {
      icon: Zap,
      title: "Career Growth",
      description: "Ethical hackers are among the highest-paid professionals in the IT sector today."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Custom Hero Section for Course */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(76, 29, 149, 0.95), rgba(124, 58, 237, 0.9)), url(${ethicalHackingImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/30 text-white">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Top Rated Certification Course</span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ethical Hacking & <br />Penetration Testing
            </h1>

            <p className="text-xl text-purple-100 mb-8 max-w-2xl leading-relaxed font-light">
              Master the art of offensive security. Learn to think like a hacker to defend critical systems against sophisticated cyber threats.
            </p>

            <div className="flex flex-wrap gap-6 text-white mb-10">
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Clock className="text-purple-300" size={24} />
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Duration</p>
                  <p className="font-bold text-lg">12 Weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <BookOpen className="text-purple-300" size={24} />
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Modules</p>
                  <p className="font-bold text-lg">15 Comprehensive</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Users className="text-purple-300" size={24} />
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Students</p>
                  <p className="font-bold text-lg">1500+ Enrolled</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl hover:-translate-y-1 transition-all">
                <Link to="/contact?course=ethical-hacking">Enroll Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-6 text-lg hover:-translate-y-1 transition-all">
                <Link to="/contact">Download Syllabus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Requested */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Take This Course?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unlock your potential with industry-leading training designed for your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-purple-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <benefit.icon size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-light-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6 text-gray-900">Course Overview</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  This comprehensive Ethical Hacking and Penetration Testing course is designed to provide you with in-depth knowledge and hands-on experience in identifying, exploiting, and securing vulnerabilities in computer systems and networks.
                </p>
                <p>
                  Throughout this 12-week intensive program, you'll gain practical experience with industry-standard tools and techniques used by professional penetration testers worldwide. Our expert instructors will guide you through real-world scenarios and teach you how to think like an attacker to better defend against threats.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {tools.slice(0, 8).map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
                      {tool}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">+7 more</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="font-heading text-xl font-bold mb-6">What You Will Learn</h3>
              <div className="grid gap-4">
                {[
                  "Master ethical hacking methodologies",
                  "Perform network reconnaissance",
                  "Exploit system vulnerabilities",
                  "Web application security assessments",
                  "Wireless network security testing",
                  "Advanced social engineering attacks",
                  "Malware analysis basics"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules - Sideways Scrolling as Requested */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Course Curriculum</h2>
              <p className="text-gray-600">Swipe to explore all {modules.length} comprehensive modules</p>
            </div>
            <div className="hidden md:flex gap-2">
              <div className="p-2 rounded-full bg-gray-100 text-gray-400">
                <ChevronRight className="rotate-180" />
              </div>
              <div className="p-2 rounded-full bg-primary text-white animate-pulse">
                <ChevronRight />
              </div>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {modules.map((module, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[350px] bg-purple-50 rounded-2xl border border-purple-100 p-6 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 snap-center flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                    Module {index + 1}
                  </span>
                  <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-400">
                    <BookOpen size={14} />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold mb-4 text-gray-900 line-clamp-2 h-14">
                  {module.title}
                </h3>

                <ul className="space-y-3 flex-1">
                  {module.topics.slice(0, 4).map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="line-clamp-1">{topic}</span>
                    </li>
                  ))}
                  {module.topics.length > 4 && (
                    <li className="text-xs text-primary font-medium pt-2">
                      + {module.topics.length - 4} more topics
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
            Join 1500+ students who have transformed their careers with this course
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-6 text-lg shadow-lg">
            <Link to="/contact?course=ethical-hacking">Enroll Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EthicalHacking;
