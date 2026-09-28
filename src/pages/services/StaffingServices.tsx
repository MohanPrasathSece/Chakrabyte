import { Link } from "react-router-dom";
import { ArrowLeft, UserCheck, Users, ShieldCheck, CheckCircle, Clock, Award, Briefcase, Search, Sparkles, Building2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const StaffingServices = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="Staffing Services"
        subtitle="Specialized Cybersecurity & IT Staffing Solutions – Connecting Elite Talent with Leading Organizations"
        icon={UserCheck}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div>
                <h2 className="font-heading text-3xl font-bold mb-4 text-gray-900">
                  Bridge the Talent Gap with Pre-Vetted Experts
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Finding certified, battle-tested talent is one of the biggest challenges enterprises face. Chakrabyte’s specialized Staffing Services connect your organization with top-tier technology, cloud, and IT infrastructure security professionals tailored to your precise operational needs.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Leveraging our proprietary training ecosystem and extensive network of vetted practitioners, we provide high-performing professionals ready to defend your perimeter, ensure compliance, and drive digital resilience from day one.
                </p>
                <div>
                  <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-sm">
                    <Link to="/contact">Contact Our Staffing Team</Link>
                  </Button>
                </div>
              </div>

              {/* Staffing Models */}
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-gray-900">
                  Our Staffing Models
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4 p-5 bg-purple-50/50 rounded-xl border border-purple-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Permanent Hiring</h4>
                      <p className="text-sm text-gray-600">Full-time cybersecurity professionals vetted for technical rigor, culture fit, and long-term organizational value.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 bg-purple-50/50 rounded-xl border border-purple-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Contract & Project Staffing</h4>
                      <p className="text-sm text-gray-600">Agile, on-demand domain specialists for specific audit cycles, VAPT projects, migrations, or surge requirements.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 bg-purple-50/50 rounded-xl border border-purple-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserPlus className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Contract-to-Hire</h4>
                      <p className="text-sm text-gray-600">Evaluate candidates on real deliverables before making a long-term permanent commitment.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 bg-purple-50/50 rounded-xl border border-purple-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Executive & Leadership Search</h4>
                      <p className="text-sm text-gray-600">Confidential search for CISOs, Heads of Information Security, SOC Managers, and Lead Architects.</p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Our Staffing Process */}
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-gray-900">
                  Our Rigorous 4-Step Screening Process
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirement Mapping & Scoping</h4>
                      <p className="text-gray-600">Deep dive into your tech stack, security tools, project timelines, and culture requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Hands-on Technical Assessment</h4>
                      <p className="text-gray-600">Candidates are rigorously evaluated by senior security practitioners through live scenario-based problem solving.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Curated Shortlist & Client Interviews</h4>
                      <p className="text-gray-600">We present only top-ranked candidates with detailed technical scorecards and domain proficiencies.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Onboarding & Ongoing Support</h4>
                      <p className="text-gray-600">Smooth onboarding, background verification check support, and post-placement check-ins to ensure 100% success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Key Benefits */}
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <h3 className="font-heading text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  Why Choose Chakrabyte?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">Practitioner-vetted talent pool</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">Zero ramp-up time for specialized roles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">Fast turnaround times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">Flexible deployment: Remote, On-site & Hybrid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">Certified in CEH, CompTIA, CISSP, OSCP & Cloud</span>
                  </li>
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white shadow-xl">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">
                  Hire Top Talent
                </h3>
                <p className="text-purple-100 text-sm mb-6 leading-relaxed">
                  Tell us about your staffing requirements and let us source the right professionals for your team.
                </p>
                <Button asChild size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-bold h-12 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none">
                  <Link to="/contact">Request Talent</Link>
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

export default StaffingServices;
