import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, CheckCircle, Target, Shield, BookOpen, ChevronRight } from "lucide-react";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const CloudSecurity = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Cloud Protection",
      description: "Master advanced cloud security techniques for AWS, Azure, and Google Cloud platforms"
    },
    {
      icon: Target,
      title: "Hands-On Labs",
      description: "Practice with real cloud environments and security scenarios"
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Prepare for cloud security certifications from major providers"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from cloud security professionals with real-world experience"
    }
  ];

  const modules = [
    {
      title: "Cloud Security Fundamentals",
      topics: ["Cloud computing basics", "Shared responsibility model", "Cloud threat landscape", "Compliance frameworks", "Security best practices"]
    },
    {
      title: "AWS Security",
      topics: ["IAM policies", "VPC configuration", "Security groups", "CloudTrail logging", "GuardDuty monitoring"]
    },
    {
      title: "Azure Security",
      topics: ["Azure AD", "Network security groups", "Security Center", "Key Vault", "Azure Sentinel"]
    },
    {
      title: "Data Protection",
      topics: ["Encryption at rest", "Encryption in transit", "Key management", "Data classification", "Privacy controls"]
    },
    {
      title: "Identity Management",
      topics: ["Single sign-on", "Multi-factor authentication", "Role-based access", "Directory services", "Federation"]
    },
    {
      title: "Compliance & Governance",
      topics: ["GDPR compliance", "HIPAA requirements", "PCI DSS", "SOC reports", "Audit trails"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Custom Hero Section for Course */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(76, 29, 149, 0.95), rgba(124, 58, 237, 0.9)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/30 text-white">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Cloud Security Certification</span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Cloud Security & <br />Infrastructure Protection
            </h1>

            <p className="text-xl text-purple-100 mb-8 max-w-2xl leading-relaxed font-light">
              Master cloud security for AWS, Azure, and Google Cloud platforms with comprehensive hands-on training.
            </p>

            <div className="flex flex-wrap gap-6 text-white mb-10">
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Clock className="text-purple-300" size={24} />
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Duration</p>
                  <p className="font-bold text-lg">10 Weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Award className="text-purple-300" size={24} />
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Level</p>
                  <p className="font-bold text-lg">Intermediate</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Users className="text-purple-300" size={24} />
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Students</p>
                  <p className="font-bold text-lg">1200+</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="relative bg-white text-purple-700 hover:bg-gray-100 font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-gray-500/25 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-purple-300/50 group overflow-hidden">
                <Link to="/contact?course=cloud-security">
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
              <h3 className="font-bold text-2xl text-gray-900 mb-2">10 Weeks</h3>
              <p className="text-gray-600">Duration</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">Intermediate</h3>
              <p className="text-gray-600">Skill Level</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">1200+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">What You'll Learn</h3>
                <ul className="space-y-3">
                  {[
                    "AWS and Azure security fundamentals",
                    "Identity and Access Management (IAM)",
                    "Cloud network security and VPC design",
                    "Data encryption and key management",
                    "Compliance and governance frameworks"
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
                    "Real cloud environments",
                    "Multi-platform training",
                    "Industry certifications",
                    "Expert instructors",
                    "Hands-on projects"
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Take This Course?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master cloud security with comprehensive training for modern cloud platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-purple-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <benefit.icon size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Course Modules</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum covering all aspects of cloud security
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {modules.map((module, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-bold mb-3 text-gray-900">{module.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gray-900">What You'll Learn</h2>
              <ul className="space-y-3">
                {[
                  "AWS and Azure security fundamentals",
                  "Identity and Access Management (IAM)",
                  "Cloud network security and VPC design",
                  "Data encryption and key management",
                  "Compliance frameworks and governance",
                  "Cloud monitoring and incident response"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Should Enroll */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">Who Should Enroll</h3>
              <ul className="space-y-3">
                {[
                  "Cloud engineers and architects",
                  "Security professionals moving to cloud",
                  "DevOps and Site Reliability Engineers",
                  "System administrators",
                  "IT managers and decision makers",
                  "Anyone working with cloud platforms"
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of students and become a cloud security expert
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 h-12">
            <Link to="/contact?course=cloud-security">Enroll Now</Link>
          </Button>
        </div>
      </section>

      <StickyFooterAndActions />
    </div>
  );
};

export default CloudSecurity;
