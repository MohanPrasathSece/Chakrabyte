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
        subtitle="Bridging the gap between theoretical knowledge and real-world cybersecurity skills"
        icon={Shield}
      />

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Building a Safer <span className="text-primary">Digital Future</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Chakrabyte Security is a premier cybersecurity training provider dedicated to empowering the next generation of security professionals.
              Founded by industry veterans with over 15 years of combined experience, we've trained thousands
              of students, professionals, and organizations in cutting-edge security practices.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to bridge the cybersecurity skills gap by providing world-class training that combines theoretical
              knowledge with practical, hands-on experience. We believe that cybersecurity education should be accessible,
              engaging, and directly applicable to real-world scenarios.
            </p>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Mission & Vision */}
      <section className="py-20 bg-light-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals and organizations with the knowledge and skills needed to protect against
                evolving cyber threats. We strive to make cybersecurity education accessible to everyone, from
                beginners to advanced professionals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted cybersecurity training provider globally, recognized for producing
                skilled professionals who make a real difference in securing our digital world. We envision a
                future where every organization has access to quality cybersecurity talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section - Requested */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Meet Our Founders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Led by industry experts committed to excellence in cybersecurity education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-white border border-border hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                </div>
                <div className="p-8 relative">
                  <h3 className="font-heading text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium mb-4">{founder.role}</p>
                  <p className="text-gray-600 mb-6">{founder.bio}</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-light-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-5 p-6 bg-white rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <value.icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold mb-2 text-gray-900">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
            Be part of a network of cybersecurity professionals making the digital world safer
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-6 text-lg"
          >
            <Link to="/contact">
              Get Started Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
