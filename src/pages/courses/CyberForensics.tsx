import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, BookOpen, CheckCircle, ChevronRight, Search, FileSearch, Shield, HardDrive } from "lucide-react";
import forensicsImg from "@/assets/course-forensics.jpg";

const CyberForensics = () => {
  const modules = [
    { title: "Digital Forensics Fundamentals", topics: ["Forensic process", "Evidence handling", "Chain of custody", "Legal requirements", "Forensic tools overview"] },
    { title: "Computer Forensics", topics: ["File systems analysis", "Windows forensics", "Linux forensics", "Registry analysis", "Event log analysis", "Deleted file recovery"] },
    { title: "Mobile Device Forensics", topics: ["Android forensics", "iOS forensics", "Mobile app analysis", "SIM card forensics", "Mobile backup analysis"] },
    { title: "Network Forensics", topics: ["Packet analysis", "Network traffic reconstruction", "Protocol analysis", "Log correlation", "Intrusion detection"] },
    { title: "Email Forensics", topics: ["Email header analysis", "Email server logs", "Email recovery", "Phishing investigation", "Email authentication"] },
    { title: "Malware Forensics", topics: ["Malware identification", "Static analysis", "Dynamic analysis", "Memory forensics", "Rootkit detection"] },
    { title: "Memory Forensics", topics: ["RAM acquisition", "Memory dump analysis", "Volatility framework", "Process analysis", "Malware memory analysis"] },
    { title: "Cloud Forensics", topics: ["Cloud evidence collection", "AWS forensics", "Azure forensics", "SaaS forensics", "Cloud log analysis"] },
    { title: "Incident Response", topics: ["IR procedures", "Evidence collection", "Timeline analysis", "Root cause analysis", "Report writing"] },
    { title: "Legal and Ethical Issues", topics: ["Cyber laws", "Evidence admissibility", "Expert testimony", "Privacy laws", "Ethical guidelines"] }
  ];

  const benefits = [
    {
      icon: Search,
      title: "Evidence Analysis",
      description: "Learn to collect, preserve, and analyze digital evidence for legal proceedings."
    },
    {
      icon: FileSearch,
      title: "Incident Investigation",
      description: "Master the skills to investigate data breaches and security incidents."
    },
    {
      icon: HardDrive,
      title: "Data Recovery",
      description: "Techniques to recover deleted, encrypted, or damaged data from various devices."
    },
    {
      icon: Shield,
      title: "Legal Expertise",
      description: "Understand the legal aspects of cybercrime and expert witness testimony."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Custom Hero Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(76, 29, 149, 0.95), rgba(6, 182, 212, 0.9)), url(${forensicsImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/30 text-white">
              <Search className="w-4 h-4" />
              <span className="text-sm font-medium">Forensic Investigator Certification</span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Cyber Forensics & <br /><span className="text-cyan-200">Investigation</span>
            </h1>

            <p className="text-xl text-cyan-100 mb-8 max-w-2xl leading-relaxed font-light">
              Master digital forensics techniques to investigate cybercrimes, analyze evidence, and handle security incidents professionally.
            </p>

            <div className="flex flex-wrap gap-6 text-white mb-10">
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Clock className="text-cyan-300" size={24} />
                <div>
                  <p className="text-xs text-cyan-200 uppercase tracking-wider font-semibold">Duration</p>
                  <p className="font-bold text-lg">8 Weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <BookOpen className="text-cyan-300" size={24} />
                <div>
                  <p className="text-xs text-cyan-200 uppercase tracking-wider font-semibold">Modules</p>
                  <p className="font-bold text-lg">10 Specialized</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Users className="text-cyan-300" size={24} />
                <div>
                  <p className="text-xs text-cyan-200 uppercase tracking-wider font-semibold">Students</p>
                  <p className="font-bold text-lg">800+ Trained</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl hover:-translate-y-1 transition-all">
                <Link to="/contact?course=cyber-forensics">Enroll Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-6 text-lg hover:-translate-y-1 transition-all">
                <Link to="/contact">Download Syllabus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Learn Cyber Forensics?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Become a crucial asset in solving cybercrimes and corporate investigations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-cyan-50 rounded-2xl border border-cyan-100 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-cyan-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
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
                  Learn to investigate cybercrimes, collect digital evidence, and analyze security incidents. This course covers computer forensics, mobile forensics, network forensics, and incident response procedures used by law enforcement and corporate security teams.
                </p>
                <p>
                  Gain hands-on experience with industry-standard forensic tools and learn to present findings in court-admissible formats. Perfect for aspiring forensic investigators, incident responders, and security analysts.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Autopsy", "Volatility", "Wireshark", "FTK Imager", "EnCase", "Cellebrite"].map((tool, index) => (
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
                  "Forensic investigation methodologies",
                  "Evidence collection and preservation",
                  "File system and disk analysis",
                  "Mobile device investigation",
                  "Network traffic analysis",
                  "Memory forensics techniques",
                  "Malware forensic analysis"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-cyan-500 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules - Sideways Scrolling */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Course Curriculum</h2>
              <p className="text-gray-600">Swipe to explore all {modules.length} specialized modules</p>
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
                className="min-w-[300px] md:min-w-[350px] bg-cyan-50 rounded-2xl border border-cyan-100 p-6 shadow-sm hover:shadow-xl hover:border-cyan-500/30 transition-all duration-300 snap-center flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full">
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
                      <span className="text-cyan-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0"></span>
                      <span className="line-clamp-1">{topic}</span>
                    </li>
                  ))}
                  {module.topics.length > 4 && (
                    <li className="text-xs text-cyan-600 font-medium pt-2">
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
            Start Your Investigation Career
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
            Join the ranks of elite forensic investigators
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-6 text-lg shadow-lg">
            <Link to="/contact?course=cyber-forensics">Enroll Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CyberForensics;
