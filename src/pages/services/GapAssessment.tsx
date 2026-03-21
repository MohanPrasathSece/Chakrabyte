import { Link } from "react-router-dom";
import { ArrowLeft, Target, Shield, CheckCircle, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const GapAssessment = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="Gap Assessment"
        subtitle="Comprehensive security gap analysis to identify vulnerabilities in your infrastructure"
        icon={Target}
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
                  Identify Security Gaps Before They Become Breaches
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our comprehensive Gap Assessment service helps organizations identify vulnerabilities,
                  security weaknesses, and compliance gaps in their current security posture. We provide
                  detailed analysis and actionable recommendations to strengthen your cybersecurity defenses.
                </p>
              </div>

              {/* What We Assess */}
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-gray-900">
                  What We Assess
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Network Security</h4>
                      <p className="text-gray-600">Firewall configurations, network segmentation, and access controls</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Application Security</h4>
                      <p className="text-gray-600">Code review, vulnerability scanning, and security testing</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Access Management</h4>
                      <p className="text-gray-600">User permissions, authentication, and authorization controls</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Compliance</h4>
                      <p className="text-gray-600">Regulatory compliance and industry standards adherence</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-gray-900">
                  Our Assessment Process
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Discovery & Scoping</h4>
                      <p className="text-gray-600">Understanding your infrastructure, business requirements, and security objectives</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Assessment & Analysis</h4>
                      <p className="text-gray-600">Comprehensive evaluation of security controls, policies, and procedures</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Reporting & Recommendations</h4>
                      <p className="text-gray-600">Detailed gap analysis report with prioritized remediation recommendations</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Remediation Support</h4>
                      <p className="text-gray-600">Guidance and support for implementing security improvements</p>
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
                    <span className="text-gray-700">Comprehensive security analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Industry-standard frameworks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Actionable recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Compliance mapping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Risk prioritization</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white">
                <h3 className="font-heading text-xl font-bold mb-4">
                  Ready to Secure Your Infrastructure?
                </h3>
                <p className="text-purple-100 mb-6">
                  Get a comprehensive security gap assessment to identify and address vulnerabilities before they impact your business.
                </p>
                <Button asChild size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-bold h-14 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none">
                  <Link to="/contact">Schedule Assessment</Link>
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

export default GapAssessment;
