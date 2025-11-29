import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, CheckCircle, Target, Shield, Zap } from "lucide-react";

const WebAppSecurity = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Web Application Security</h1>
            <p className="text-xl mb-6 opacity-90">Master OWASP Top 10, API security, and secure coding practices</p>
            <div className="flex flex-wrap gap-4 mb-6 opacity-90">
              <div className="flex items-center gap-2"><Clock size={20} /><span>10 Weeks</span></div>
              <div className="flex items-center gap-2"><Award size={20} /><span>Certification</span></div>
              <div className="flex items-center gap-2"><Users size={20} /><span>1100+ Students</span></div>
            </div>
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-white/90">
              <Link to="/contact?course=web-app-security">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Course Information */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Comprehensive Course Details</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our Web Application Security program
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Learning Outcomes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Target size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">Learning Outcomes</h3>
              <ul className="space-y-3">
                {[
                  "Master OWASP Top 10 vulnerabilities",
                  "Perform web application penetration testing",
                  "Implement secure coding practices",
                  "Test and secure REST APIs",
                  "Use industry-standard security tools",
                  "Prepare for CEH and GWAPT certifications"
                ].map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Users size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">Who Should Take This Course</h3>
              <ul className="space-y-3">
                {[
                  "Web developers wanting security skills",
                  "QA testers interested in security testing",
                  "IT security professionals",
                  "Full-stack developers",
                  "DevOps engineers",
                  "Anyone building web applications"
                ].map((audience, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Award size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">Career Opportunities</h3>
              <ul className="space-y-3">
                {[
                  "Web App Penetration Tester - $70K-$130K",
                  "Application Security Engineer - $85K-$145K",
                  "Security Analyst - $65K-$120K",
                  "DevSecOps Engineer - $90K-$150K",
                  "API Security Specialist - $80K-$140K",
                  "Security Consultant - $75K-$135K"
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
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white">
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
                  "Basic understanding of web technologies",
                  "Knowledge of HTML, CSS, JavaScript",
                  "Familiarity with web frameworks",
                  "Basic programming knowledge",
                  "No prior security experience required"
                ].map((prereq, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-orange-600" size={14} />
                    </div>
                    <span className="text-gray-700 text-sm">{prereq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-4">Master Web Application Security</h2>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-white/90">
            <Link to="/contact?course=web-app-security">Enroll Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebAppSecurity;
