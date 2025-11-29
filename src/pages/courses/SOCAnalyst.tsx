import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, BookOpen, CheckCircle, ChevronRight, Shield, Target, Zap, Activity } from "lucide-react";
import socAnalystImg from "@/assets/course-soc-analyst.jpg";

const SOCAnalyst = () => {
  const modules = [
    { title: "Introduction to Security Operations", topics: ["SOC fundamentals", "SOC roles and responsibilities", "Security operations framework", "Incident response lifecycle"] },
    { title: "Network Security Monitoring", topics: ["Network traffic analysis", "IDS/IPS technologies", "Network security tools", "Log analysis", "Traffic baselines"] },
    { title: "SIEM Fundamentals", topics: ["SIEM architecture", "Log collection", "Event correlation", "Splunk basics", "ELK Stack", "QRadar overview"] },
    { title: "Threat Intelligence", topics: ["Cyber threat landscape", "Threat actors", "IOC identification", "Threat feeds", "MITRE ATT&CK", "Diamond Model"] },
    { title: "Incident Detection", topics: ["Alert triage", "Alert correlation", "False positive handling", "Detection engineering", "Behavioral analytics"] },
    { title: "Incident Response", topics: ["IR procedures", "Evidence collection", "Containment strategies", "Eradication", "Recovery", "Lessons learned"] },
    { title: "Malware Analysis Basics", topics: ["Static analysis", "Dynamic analysis", "Sandbox environments", "Indicators of compromise", "Malware families"] },
    { title: "Endpoint Security", topics: ["EDR solutions", "Antivirus vs EDR", "Endpoint monitoring", "Host-based IDS", "Application whitelisting"] },
    { title: "Security Automation", topics: ["SOAR platforms", "Playbook creation", "Automated response", "Orchestration", "Security APIs"] },
    { title: "Cloud Security Monitoring", topics: ["AWS CloudTrail", "Azure Monitor", "Cloud SIEM", "Cloud-native threats", "Container security"] }
  ];

  const benefits = [
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Learn to monitor and analyze security events in real-time using enterprise-grade SIEM tools."
    },
    {
      icon: Shield,
      title: "Incident Response",
      description: "Master the art of detecting, containing, and eradicating cyber threats effectively."
    },
    {
      icon: Target,
      title: "Threat Hunting",
      description: "Proactively search for hidden threats and indicators of compromise in networks."
    },
    {
      icon: Zap,
      title: "High Demand Role",
      description: "SOC Analysts are in high demand with excellent career progression opportunities."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Custom Hero Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(76, 29, 149, 0.95), rgba(37, 99, 235, 0.9)), url(${socAnalystImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/30 text-white">
              <Activity className="w-4 h-4" />
              <span className="text-sm font-medium">Blue Team Certification</span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              SOC Analyst Training <br /><span className="text-blue-200">(Level 1 & 2)</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed font-light">
              Master security operations, threat detection, and incident response. Become the first line of defense in a modern Security Operations Center.
            </p>

            <div className="flex flex-wrap gap-6 text-white mb-10">
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Clock className="text-blue-300" size={24} />
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Duration</p>
                  <p className="font-bold text-lg">10 Weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <BookOpen className="text-blue-300" size={24} />
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Modules</p>
                  <p className="font-bold text-lg">10 Specialized</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Users className="text-blue-300" size={24} />
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Students</p>
                  <p className="font-bold text-lg">1200+ Trained</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="relative bg-gradient-to-r from-white to-gray-50 text-blue-600 hover:from-gray-50 hover:to-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-gray-500/25 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-blue-300/50 group overflow-hidden">
                <Link to="/contact?course=soc-analyst">
                  <span className="relative z-10 flex items-center gap-2">
                    Enroll Now
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="relative bg-transparent backdrop-blur-md text-white hover:bg-white/10 font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-white/50 group overflow-hidden">
                <Link to="/contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Download Syllabus
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Become a SOC Analyst?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Gain the skills needed to defend organizations against sophisticated cyber attacks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
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
                  Become a skilled SOC Analyst with comprehensive training covering both Level 1 and Level 2 responsibilities. Learn to detect, analyze, and respond to security incidents using industry-standard SIEM tools and methodologies.
                </p>
                <p>
                  This course provides hands-on experience with real-world scenarios, teaching you how to monitor networks, investigate security alerts, and coordinate incident response activities. You'll master tools like Splunk, ELK Stack, and various EDR solutions.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Splunk", "ELK Stack", "Wireshark", "Snort", "TheHive", "Cortex XSOAR"].map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="font-heading text-xl font-bold mb-6">What You Will Learn</h3>
              <div className="grid gap-4">
                {[
                  "SIEM architecture and management",
                  "Log analysis and correlation",
                  "Threat intelligence integration",
                  "Incident response procedures",
                  "Malware analysis fundamentals",
                  "Endpoint detection and response",
                  "Security automation (SOAR)"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Course Information */}
      <section className="py-24 md:py-28 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Comprehensive Course Details</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our SOC Analyst program
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Learning Outcomes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Target size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">Learning Outcomes</h3>
              <ul className="space-y-3">
                {[
                  "Monitor security events in real-time",
                  "Analyze and triage security alerts",
                  "Use SIEM tools effectively",
                  "Conduct incident response procedures",
                  "Perform threat hunting activities",
                  "Prepare for CompTIA Security+ and CISSP"
                ].map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Users size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">Who Should Take This Course</h3>
              <ul className="space-y-3">
                {[
                  "IT support staff transitioning to security",
                  "Network administrators interested in security",
                  "Recent graduates in IT/computer science",
                  "Security guards wanting technical skills",
                  "IT professionals seeking SOC roles",
                  "Anyone interested in cybersecurity monitoring"
                ].map((audience, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Award size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">Career Opportunities</h3>
              <ul className="space-y-3">
                {[
                  "SOC Analyst - $60K-$110K",
                  "Security Analyst - $65K-$120K",
                  "Incident Responder - $70K-$125K",
                  "Threat Hunter - $75K-$130K",
                  "Security Engineer - $80K-$140K",
                  "SOC Manager - $90K-$150K"
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
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
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
                  "Basic IT knowledge and troubleshooting skills",
                  "Understanding of computer networks fundamentals",
                  "Familiarity with Windows/Linux operating systems",
                  "Analytical thinking and problem-solving skills",
                  "No prior security experience required"
                ].map((prereq, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-blue-600" size={14} />
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
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Launch Your SOC Career
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
            Join the ranks of elite security analysts protecting global organizations
          </p>
          <Button asChild size="lg" className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 font-bold px-12 py-5 text-lg shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-blue-500/30 group overflow-hidden">
            <Link to="/contact?course=soc-analyst">
              <span className="relative z-10 flex items-center gap-2">
                Enroll Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SOCAnalyst;
