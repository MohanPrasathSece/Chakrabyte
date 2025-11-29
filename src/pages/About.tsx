import { Award, Target, Users, Shield, CheckCircle, Linkedin, Twitter } from "lucide-react";
import StatsSection from "@/components/StatsSection";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Excellence in Security",
      description: "We maintain the highest standards in cybersecurity training and services",
    },
    {
      icon: Users,
      title: "Student-Centric Approach",
      description: "Every learner receives personalized attention and career guidance",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Our certifications are recognized by leading organizations worldwide",
    },
    {
      icon: Target,
      title: "Practical Focus",
      description: "Hands-on labs and real-world scenarios prepare you for actual challenges",
    },
  ];

  const founders = [
    {
      name: "Adnan",
      role: "Co-Founder & Lead Instructor",
      bio: "10+ years of experience in Penetration Testing and Security Auditing. Trained 2000+ students globally.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Sarah Jenkins",
      role: "Co-Founder & Operations Head",
      bio: "Former CISO with expertise in GRC and Corporate Security Strategy. Passionate about education.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="About Chakrabyte Security"
        subtitle="Empowering the next generation of cybersecurity professionals"
        icon={Shield}
      />

      {/* Intro Section with Image */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Building a Safer <span className="text-primary">Digital Future</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Chakrabyte Security is a premier cybersecurity training provider dedicated to empowering the next generation of security professionals.
                </p>
                <p>
                  Founded by industry veterans with over 15 years of combined experience, we've trained thousands
                  of students, professionals, and organizations in cutting-edge security practices.
                </p>
                <p>
                  Our mission is to bridge the cybersecurity skills gap by providing world-class training that combines theoretical
                  knowledge with practical, hands-on experience.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2500+</div>
                  <div className="text-sm text-gray-600 mt-1">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-600 mt-1">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <div className="text-sm text-gray-600 mt-1">Rating</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=800&fit=crop&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Side by Side */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Purpose & Direction
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Guided by a clear mission and inspired by an ambitious vision
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-2xl shadow-lg">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-purple-100 leading-relaxed">
                    To empower individuals and organizations with the knowledge and skills needed to protect against
                    evolving cyber threats. We strive to make cybersecurity education accessible to everyone, from
                    beginners to advanced professionals.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-lg">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-blue-100 leading-relaxed">
                    To become the most trusted cybersecurity training provider globally, recognized for producing
                    skilled professionals who make a real difference in securing our digital world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Grid Layout */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Founders
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Led by industry experts committed to excellence in cybersecurity education
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {founders.map((founder, index) => (
                <div key={index} className="group">
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Name overlay on image */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-heading text-2xl font-bold mb-1">{founder.name}</h3>
                        <p className="text-purple-200 font-medium">{founder.role}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                      <p className="text-gray-600 mb-4 leading-relaxed">{founder.bio}</p>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors shadow-sm"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors shadow-sm"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-purple-700 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl mb-10 opacity-90 font-light leading-relaxed">
              Be part of a network of cybersecurity professionals making the digital world safer.
              Start your journey with us today.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-bold px-12 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <Link to="/contact">
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
