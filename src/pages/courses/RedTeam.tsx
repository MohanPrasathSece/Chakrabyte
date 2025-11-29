import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, CheckCircle, Target, Shield } from "lucide-react";

const RedTeam = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="py-24 md:py-28 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Red Team Operations</h1>
            <p className="text-xl mb-8 opacity-90">Advanced adversary simulation and offensive security techniques</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 opacity-90">
              <div className="flex items-center gap-2"><Clock size={20} /><span>14 Weeks</span></div>
              <div className="flex items-center gap-2"><Award size={20} /><span>Advanced Level</span></div>
              <div className="flex items-center gap-2"><Users size={20} /><span>500+ Students</span></div>
            </div>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 h-12">
              <Link to="/contact?course=red-team">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Course Overview</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Master advanced offensive security techniques used by professional red teams. Learn to simulate sophisticated adversaries,
              evade detection, and assess organizational security through realistic attack scenarios and operations.
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
                  "Advanced penetration testing techniques",
                  "Command and control (C2) frameworks",
                  "Privilege escalation and lateral movement",
                  "Evasion and anti-forensics",
                  "Social engineering and physical security",
                  "Red team operations and planning"
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
                  "Experienced penetration testers",
                  "Security consultants and auditors",
                  "Advanced security professionals",
                  "Offensive security specialists",
                  "Security team leaders",
                  "Anyone pursuing red team career"
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
            Join hundreds of students and become a red team expert
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 h-12">
            <Link to="/contact?course=red-team">Enroll Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RedTeam;
