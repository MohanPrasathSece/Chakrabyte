import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, BookOpen, CheckCircle, ChevronRight, Shield, Target, Zap } from "lucide-react";
import ethicalHackingImg from "@/assets/course-ethical-hacking.jpg";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

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
              <Button asChild size="lg" className="relative bg-white text-purple-700 hover:bg-gray-100 font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-gray-500/25 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-purple-300/50 group overflow-hidden">
                <Link to="/contact?course=ethical-hacking">
                  Enroll Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="relative bg-transparent backdrop-blur-md text-white hover:bg-white/10 font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-white/50 group overflow-hidden">
                <Link to="/contact">
                  Download Syllabus
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Course Stats */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">12 Weeks</h3>
              <p className="text-gray-600">Duration</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">Advanced</h3>
              <p className="text-gray-600">Skill Level</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">2500+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">What You'll Learn</h3>
                <ul className="space-y-3">
                  {[
                    "Ethical hacking methodologies",
                    "Penetration testing techniques",
                    "Vulnerability assessment",
                    "Network security testing",
                    "Web application security"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Advanced lab environments",
                    "Real-world penetration testing",
                    "Industry-certified instructors",
                    "Job placement assistance",
                    "Cutting-edge tools"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Requested */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-purple-900">Why Take This Course?</h2>
            <p className="text-purple-700 max-w-2xl mx-auto">
              Unlock your potential with industry-leading training designed for your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-purple-50 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <benefit.icon size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-purple-900">{benefit.title}</h3>
                <p className="text-purple-700 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6 text-purple-900">Course Overview</h2>
              <div className="space-y-6 text-purple-700 leading-relaxed">
                <p>
                  This comprehensive Ethical Hacking and Penetration Testing course is designed to provide you with in-depth knowledge and hands-on experience in identifying, exploiting, and securing vulnerabilities in computer systems and networks.
                </p>
                <p>
                  Throughout this 12-week intensive program, you'll gain practical experience with industry-standard tools and techniques used by professional penetration testers worldwide. Our expert instructors will guide you through real-world scenarios and teach you how to think like an attacker to better defend against threats.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {tools.slice(0, 8).map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-white border border-purple-300 rounded-full text-xs font-medium text-purple-700">
                      {tool}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-medium">+7 more</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-200">
              <h3 className="font-heading text-xl font-bold mb-6 text-purple-900">What You Will Learn</h3>
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
                    <CheckCircle className="text-purple-600 flex-shrink-0" size={18} />
                    <span className="text-purple-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Course Information */}
      <section className="py-24 md:py-28 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Comprehensive Course Details</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our Ethical Hacking program
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Learning Outcomes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Target size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">Learning Outcomes</h3>
              <ul className="space-y-3">
                {[
                  "Conduct full penetration testing assessments",
                  "Identify and exploit vulnerabilities in systems",
                  "Master industry-standard hacking tools",
                  "Write professional security reports",
                  "Implement security best practices",
                  "Prepare for CEH and OSCP certifications"
                ].map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Users size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">Who Should Take This Course</h3>
              <ul className="space-y-3">
                {[
                  "IT professionals seeking security specialization",
                  "Network administrators wanting security skills",
                  "Security analysts aiming for advancement",
                  "Computer science students",
                  "System administrators",
                  "Anyone interested in cybersecurity career"
                ].map((audience, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Award size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">Career Opportunities</h3>
              <ul className="space-y-3">
                {[
                  "Penetration Tester - $85K-$150K",
                  "Security Analyst - $75K-$130K",
                  "Security Consultant - $90K-$160K",
                  "Ethical Hacker - $80K-$140K",
                  "Security Auditor - $70K-$120K",
                  "Security Engineer - $95K-$155K"
                ].map((career, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {/* Course Format */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-6">Course Format</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-medium">Training Mode</span>
                  <span>Online Live + Classroom</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-medium">Class Duration</span>
                  <span>2 hours/day, 5 days/week</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-medium">Lab Access</span>
                  <span>24/7 for 6 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Certificate</span>
                  <span>Industry Recognized</span>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <h3 className="font-heading text-2xl font-bold mb-6 text-gray-900">Prerequisites</h3>
              <div className="space-y-3">
                {[
                  "Basic understanding of computer networks",
                  "Familiarity with operating systems (Windows/Linux)",
                  "Knowledge of TCP/IP protocols",
                  "Problem-solving mindset",
                  "No prior hacking experience required"
                ].map((prereq, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-purple-600" size={14} />
                    </div>
                    <span className="text-gray-700 text-sm">{prereq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-purple-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
            Join 1500+ students who have transformed their careers with this course
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 h-12">
            <Link to="/contact?course=ethical-hacking">
              Enroll Now
            </Link>
          </Button>
        </div>
      </section>

      <StickyFooterAndActions />
    </div>
  );
};

export default EthicalHacking;
