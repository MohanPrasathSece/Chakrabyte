import { Link } from "react-router-dom";
import { ArrowLeft, Award, Shield, CheckCircle, Clock, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const SecurityConsulting = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="Security Consulting"
        subtitle="Expert security consulting to strengthen your cybersecurity posture"
        icon={Award}
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
                  Strategic Security Guidance for Your Organization
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our expert security consulting services provide strategic guidance to help organizations 
                  build robust cybersecurity programs. We work closely with your team to assess current 
                  security posture, identify risks, and develop comprehensive security strategies.
                </p>
              </div>

              {/* Consulting Areas */}
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-gray-900">
                  Our Consulting Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Security Strategy</h4>
                      <p className="text-gray-600">Develop comprehensive security strategies aligned with business objectives</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Risk Assessment</h4>
                      <p className="text-gray-600">Identify, assess, and prioritize security risks across your organization</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Compliance Management</h4>
                      <p className="text-gray-600">Navigate complex regulatory requirements and industry standards</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Security Architecture</h4>
                      <p className="text-gray-600">Design secure architectures and frameworks for your infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-gray-900">
                  Our Consulting Process
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Assessment & Analysis</h4>
                      <p className="text-gray-600">Comprehensive evaluation of your current security posture and business requirements</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Strategy Development</h4>
                      <p className="text-gray-600">Create tailored security strategies and roadmap aligned with your business goals</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Implementation Support</h4>
                      <p className="text-gray-600">Guide your team through security program implementation and improvement</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Continuous Improvement</h4>
                      <p className="text-gray-600">Ongoing support and optimization of your security program</p>
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
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Expert security guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Customized solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Regulatory compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Risk reduction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Long-term partnership</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white">
                <h3 className="font-heading text-xl font-bold mb-4">
                  Strengthen Your Security Posture
                </h3>
                <p className="text-purple-100 mb-6">
                  Get expert guidance to build a robust cybersecurity program that protects your organization.
                </p>
                <Button asChild size="lg" className="w-full bg-white text-purple-600 hover:bg-gray-100">
                  <Link to="/contact">Schedule Consultation</Link>
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

export default SecurityConsulting;
