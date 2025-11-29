import { Building2, CheckCircle, Users, Target, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";

const CorporateTraining = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="Corporate Cybersecurity Training"
        subtitle="Empower your workforce to be your strongest line of defense"
        icon={Building2}
      />

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Secure Your Organization from the <span className="text-primary">Inside Out</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Human error remains the leading cause of cybersecurity breaches. Our corporate training programs are designed to transform your employees from potential security risks into vigilant defenders of your organization's digital assets.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We offer customized training solutions ranging from general security awareness for all staff to advanced technical training for your IT and security teams.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">Request Proposal</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80"
                alt="Corporate Training Session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-20 bg-light-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Training Modules</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum covering all aspects of organizational security
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Security Awareness</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Phishing Recognition</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Password Hygiene</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Social Engineering</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Technical Training</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Network Security</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Secure Coding</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Incident Response</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Compliance Training</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>GDPR & Data Privacy</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>ISO 27001 Basics</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Industry Regulations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Train Your Team Today
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
            Get a customized training plan for your organization
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-6 text-lg"
          >
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CorporateTraining;
