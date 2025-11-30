import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, BookOpen, CheckCircle, ChevronRight, Shield, Target, Zap, Search, FileSearch, HardDrive, Phone, Mail } from "lucide-react";
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
          backgroundImage: `linear-gradient(135deg, rgba(76, 29, 149, 0.95), rgba(109, 40, 217, 0.9)), url(${forensicsImg})`,
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
              Cyber Forensics & <br /><span className="text-purple-200">Investigation</span>
            </h1>

            <p className="text-xl text-purple-100 mb-8 max-w-2xl leading-relaxed font-light">
              Master digital forensics techniques to investigate cybercrimes, analyze evidence, and handle security incidents professionally.
            </p>

            <div className="flex flex-wrap gap-6 text-white mb-10">
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Clock className="text-purple-200" size={24} />
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Duration</p>
                  <p className="font-bold text-lg">8 Weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <BookOpen className="text-purple-200" size={24} />
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Modules</p>
                  <p className="font-bold text-lg">10 Specialized</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Users className="text-purple-200" size={24} />
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Students</p>
                  <p className="font-bold text-lg">800+ Trained</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="relative bg-white text-purple-600 hover:bg-gray-100 font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-gray-500/25 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-purple-300/50 group overflow-hidden">
                <Link to="/contact?course=cyber-forensics">
                  <span className="relative z-10 flex items-center gap-2">
                    Enroll Now
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* Course Overview Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Course Stats */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">8 Weeks</h3>
              <p className="text-gray-600">Duration</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">Intermediate</h3>
              <p className="text-gray-600">Skill Level</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">800+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">What You'll Learn</h3>
                <ul className="space-y-3">
                  {[
                    "Digital evidence collection",
                    "Forensic analysis techniques",
                    "Incident response procedures",
                    "Malware analysis basics",
                    "Chain of custody handling"
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
                    "Hands-on forensic labs",
                    "Real case studies",
                    "Expert investigators",
                    "Legal procedures",
                    "Industry tools"
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

      {/* Detailed Course Information */}
      <section className="py-24 md:py-28 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Comprehensive Course Details</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our Cyber Forensics program
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Learning Outcomes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Target size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">Learning Outcomes</h3>
              <ul className="space-y-3">
                {[
                  "Conduct digital forensic investigations",
                  "Collect and preserve digital evidence",
                  "Analyze malware and security incidents",
                  "Write forensic investigation reports",
                  "Use industry-standard forensics tools",
                  "Prepare for CHFI and GIAC certifications"
                ].map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Users size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">Who Should Take This Course</h3>
              <ul className="space-y-3">
                {[
                  "IT professionals interested in forensics",
                  "Law enforcement personnel",
                  "Security auditors and investigators",
                  "Legal professionals handling digital evidence",
                  "Compliance officers",
                  "Anyone interested in digital investigation"
                ].map((audience, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Award size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">Career Opportunities</h3>
              <ul className="space-y-3">
                {[
                  "Digital Forensics Analyst - $70K-$120K",
                  "Security Investigator - $65K-$115K",
                  "Malware Analyst - $80K-$130K",
                  "Incident Response Analyst - $75K-$125K",
                  "Forensics Consultant - $85K-$140K",
                  "Law Enforcement Tech Specialist - $60K-$110K"
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
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 text-white">
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
                  "Basic understanding of computer systems",
                  "Knowledge of operating systems (Windows/Linux)",
                  "Familiarity with networking concepts",
                  "Attention to detail and analytical mindset",
                  "No prior forensics experience required"
                ].map((prereq, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-cyan-600" size={14} />
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
            Start Your Investigation Career
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
            Join the ranks of elite forensic investigators
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 h-12">
            <Link to="/contact?course=cyber-forensics">
              Enroll Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-24 right-6 flex flex-col gap-3 z-40">
        <a
          href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20your%20cybersecurity%20courses"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
        <a
          href="tel:+919876543210"
          className="w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Sticky Footer */}
      <footer className="hidden md:block fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-gray-800/50 shadow-lg z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-xs">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="text-white font-bold">CHAKRABYTE</span>
              </div>
              <div className="flex items-center gap-4 border-l border-gray-700 pl-4">
                <Link to="/courses" className="text-white hover:text-purple-300 transition-colors">Courses</Link>
                <Link to="/services" className="text-white hover:text-purple-300 transition-colors">Services</Link>
                <Link to="/contact" className="text-white hover:text-purple-300 transition-colors">Contact</Link>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <a href="tel:+919876543210" className="hover:text-purple-300 transition-colors flex items-center gap-1">
                <Phone className="w-3 h-3 text-purple-400" />
                +91 98765 43210
              </a>
              <a href="mailto:info@chakrabyte.com" className="hover:text-purple-300 transition-colors flex items-center gap-1">
                <Mail className="w-3 h-3 text-purple-400" />
                info@chakrabyte.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CyberForensics;
