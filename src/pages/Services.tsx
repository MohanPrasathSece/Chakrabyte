import { Building2, Target, Shield, Award, Users, Search, CheckCircle, Wrench, HardDrive, Laptop, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import PageBanner from "@/components/PageBanner";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const Services = () => {
  const services = [
    {
      title: "Gap Assessment",
      description: "Comprehensive security gap analysis to identify vulnerabilities in your infrastructure",
      icon: Target,
      link: "/services/gap-assessment",
    },
    {
      title: "Corporate Training",
      description: "Customized security training programs for enterprise teams and organizations",
      icon: Users,
      link: "/services/corporate-training",
    },
    {
      title: "VAPT Services",
      description: "Vulnerability Assessment and Penetration Testing to secure your applications",
      icon: Shield,
      link: "/services/vapt",
    },
    {
      title: "Security Consulting",
      description: "Expert security consulting to strengthen your cybersecurity posture",
      icon: Award,
      link: "/services/security-consulting",
    },
    {
      title: "Career Consulting",
      description: "Professional career guidance and consulting for cybersecurity professionals",
      icon: Search,
      link: "/services/career-consulting",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive cybersecurity solutions tailored to your organization's needs"
        icon={Shield}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your Security?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
            Contact us today to discuss how we can help protect your organization
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-10 py-6 text-lg"
          >
            <Link to="/contact">
              Request a Consultation
            </Link>
          </Button>
        </div>
      </section>

      <StickyFooterAndActions />
    </div>
  );
};

export default Services;
