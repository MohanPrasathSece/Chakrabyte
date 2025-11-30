import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, CheckCircle, Target, Shield, Phone, Mail } from "lucide-react";

const BlueTeam = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Advanced Hero Banner */}
      <section className="relative py-24 md:py-28 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                Defensive Security Certification
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Blue Team <span className="text-purple-200">Operations</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl">
                Master defensive security, threat detection, and incident response to protect organizational assets effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <Clock className="w-8 h-8 mx-auto mb-3 text-purple-200" />
                <div className="text-2xl font-bold mb-1">12 Weeks</div>
                <div className="text-sm opacity-80">Duration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <Award className="w-8 h-8 mx-auto mb-3 text-purple-200" />
                <div className="text-2xl font-bold mb-1">14 Specialized</div>
                <div className="text-sm opacity-80">Modules</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <Users className="w-8 h-8 mx-auto mb-3 text-purple-200" />
                <div className="text-2xl font-bold mb-1">850+ Trained</div>
                <div className="text-sm opacity-80">Students</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-blue-900 font-semibold px-8 h-14 text-lg shadow-xl hover:shadow-2xl transition-all">
                <Link to="/contact?course=blue-team">Enroll Now →</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 h-14 text-lg transition-all">
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Course Overview</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Master defensive security operations and incident response. Learn to detect, prevent, and respond to cyber threats
              using industry-standard tools, methodologies, and defensive strategies to protect organizational assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What You'll Learn */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-gray-900">What You'll Learn</h3>
              <ul className="space-y-3">
                {[
                  "Security monitoring and SIEM tools",
                  "Threat detection and hunting",
                  "Incident response procedures",
                  "Log analysis and correlation",
                  "Security automation and orchestration",
                  "Defensive security strategies"
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
                  "SOC analysts and operators",
                  "Security operations professionals",
                  "Incident responders",
                  "System and network administrators",
                  "Security engineers",
                  "Anyone interested in defensive security"
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
            Join hundreds of students and become a blue team expert
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 h-12">
            <Link to="/contact?course=blue-team">Enroll Now</Link>
          </Button>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-24 right-6 flex flex-col gap-3 z-40">
        {/* WhatsApp Button */}
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

        {/* Call Button - Purple */}
        <a
          href="tel:+919876543210"
          className="w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Sticky Footer - Hidden on Mobile */}
      <footer className="hidden md:block fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-gray-800/50 shadow-lg z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-xs">
            {/* Left Side - Brand and Essential Links */}
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

            {/* Right Side - Quick Contact */}
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

export default BlueTeam;
