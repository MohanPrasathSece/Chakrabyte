import { GraduationCap, CheckCircle, Users, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const CollegeWorkshops = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="College & Institution Workshops"
        subtitle="Bridging the gap between academic learning and industry requirements"
        icon={GraduationCap}
      />

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Empower Your Students with <span className="text-primary">Real-World Skills</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our college workshops are designed to complement academic curriculum with practical, hands-on cybersecurity training. We bring industry experts to your campus to deliver intensive, engaging sessions that prepare students for successful careers.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From 1-day awareness seminars to week-long bootcamps, we offer flexible formats to suit your institution's schedule and requirements.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-14 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none">
                  <Link to="/contact">Schedule a Workshop</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80"
                alt="College Workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="py-20 bg-light-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why Host Our Workshops?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Benefits for students and institutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Practical Learning</h3>
              <p className="text-gray-600 text-sm mb-4">
                Students get hands-on experience with industry-standard tools and techniques used by professionals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Certifications</h3>
              <p className="text-gray-600 text-sm mb-4">
                Participants receive recognized certificates that add significant value to their resumes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Career Guidance</h3>
              <p className="text-gray-600 text-sm mb-4">
                Sessions include career counseling and insights into the cybersecurity job market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Bring Cybersecurity to Your Campus
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
            Partner with us to train the next generation of cyber defenders
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold px-10 h-14 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none"
          >
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>

      <StickyFooterAndActions />
    </div>
  );
};

export default CollegeWorkshops;
