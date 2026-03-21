import { Link } from "react-router-dom";
import { ArrowLeft, Search, Award, CheckCircle, Clock, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const CareerConsulting = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="Career Consulting"
        subtitle="Professional career guidance and consulting for cybersecurity professionals"
        icon={Search}
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
                  Navigate Your Cybersecurity Career with Expert Guidance
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our career consulting services help cybersecurity professionals at all levels navigate their
                  career paths, from entry-level positions to executive roles. We provide personalized guidance
                  based on your skills, experience, and career aspirations in the dynamic cybersecurity field.
                </p>
              </div>

              {/* Consulting Services */}
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-gray-900">
                  Our Career Services
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Career Path Planning</h4>
                      <p className="text-gray-600">Strategic career roadmap based on your skills and industry demand</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Skill Assessment</h4>
                      <p className="text-gray-600">Evaluate your current skills and identify areas for improvement</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Interview Preparation</h4>
                      <p className="text-gray-600">Mock interviews and preparation for cybersecurity roles</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Resume Building</h4>
                      <p className="text-gray-600">Professional resume and LinkedIn profile optimization</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-gray-900">
                  Our Career Development Process
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Initial Assessment</h4>
                      <p className="text-gray-600">Comprehensive evaluation of your skills, experience, and career goals</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Career Planning</h4>
                      <p className="text-gray-600">Develop a personalized career roadmap with actionable steps</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Skill Development</h4>
                      <p className="text-gray-600">Identify and acquire the skills needed for your target roles</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Job Placement Support</h4>
                      <p className="text-gray-600">Assistance with job search, applications, and interview preparation</p>
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
                  Career Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Personalized guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Industry insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Skill development plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Interview coaching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Career advancement</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white">
                <h3 className="font-heading text-xl font-bold mb-4">
                  Advance Your Cybersecurity Career
                </h3>
                <p className="text-purple-100 mb-6">
                  Get expert career guidance to achieve your professional goals in cybersecurity.
                </p>
                <Button asChild size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-bold h-14 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none">
                  <Link to="/contact">Schedule Career Session</Link>
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

export default CareerConsulting;
