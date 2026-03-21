import { Shield, CheckCircle, Target, Users, Award, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const VAPT = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="VAPT Services"
        subtitle="Vulnerability Assessment and Penetration Testing to secure your applications"
        icon={Shield}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="font-heading text-3xl font-bold mb-4 text-gray-900">
                  Identify Vulnerabilities Before Attackers Do
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our comprehensive VAPT (Vulnerability Assessment and Penetration Testing) services
                  help organizations identify and fix security weaknesses in their web applications,
                  networks, and cloud infrastructure before malicious actors can exploit them.
                </p>
              </div>

              {/* Testing Types */}
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-gray-900">
                  Our Testing Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Web Application Testing</h4>
                      <p className="text-gray-600">OWASP Top 10, business logic flaws, and custom application vulnerabilities</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Network Penetration Testing</h4>
                      <p className="text-gray-600">Internal and external network security assessment</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Social Engineering</h4>
                      <p className="text-gray-600">Phishing simulations and employee security awareness testing</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cloud Security Testing</h4>
                      <p className="text-gray-600">AWS, Azure, and Google Cloud platform security assessment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-gray-900">
                  Our Testing Methodology
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Reconnaissance</h4>
                      <p className="text-gray-600">Information gathering and attack surface analysis</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Vulnerability Identification</h4>
                      <p className="text-gray-600">Systematic scanning and manual testing for security weaknesses</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Exploitation</h4>
                      <p className="text-gray-600">Controlled exploitation to demonstrate impact and risk</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Reporting & Remediation</h4>
                      <p className="text-gray-600">Detailed findings report with prioritized remediation recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Service Features */}
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Comprehensive testing methodology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Industry-standard tools and techniques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Detailed vulnerability reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Risk-based prioritization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Remediation guidance</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white">
                <h3 className="font-heading text-xl font-bold mb-4">
                  Secure Your Applications Today
                </h3>
                <p className="text-purple-100 mb-6">
                  Don't wait for a breach. Identify and fix vulnerabilities before attackers exploit them.
                </p>
                <Button asChild size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-bold h-14 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none">
                  <Link to="/contact">Schedule VAPT</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyFooterAndActions />
    </div>
  );
};

export default VAPT;
