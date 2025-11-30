import { Building2, GraduationCap, Laptop, ShieldCheck, FileSearch, CheckCircle, Wrench, HardDrive } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import PageBanner from "@/components/PageBanner";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const Services = () => {
  const services = [
    {
      title: "Corporate Cybersecurity Training",
      description: "Customized security awareness programs and technical training for organizations of all sizes",
      icon: Building2,
      link: "/services/corporate-training",
    },
    {
      title: "College / Institution Workshops",
      description: "Interactive cybersecurity workshops and certification programs for educational institutions",
      icon: GraduationCap,
      link: "/services/college-workshops",
    },
    {
      title: "Device Security & Repairs",
      description: "Professional laptop repair, malware removal, SSD upgrades, and security hardening services",
      icon: Laptop,
      link: "/services/device-security",
    },
    {
      title: "VAPT Services",
      description: "Professional Vulnerability Assessment and Penetration Testing for web, network, and cloud",
      icon: ShieldCheck,
      link: "/services/vapt",
    },
    {
      title: "Cybersecurity Consultation",
      description: "Expert consultation on security strategy, risk assessment, and compliance requirements",
      icon: FileSearch,
      link: "/services/consultation",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive cybersecurity solutions tailored to your organization's needs"
        icon={ShieldCheck}
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

      <section className="py-16 bg-light-section">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Detailed Service Offerings
          </h2>

          <div className="space-y-20">
            {/* Device Security & Repairs - Highlighted as requested */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-2xl shadow-sm border border-border">
              <div className="order-2 md:order-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Laptop className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">Device Security & Repairs</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We provide comprehensive laptop and device services to ensure your hardware is running smoothly and securely.
                  From physical repairs to advanced security hardening, our experts handle it all.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary flex items-center gap-2">
                      <Wrench size={18} /> Hardware Services
                    </h4>
                    <ul className="space-y-2">
                      {["Laptop Screen Replacement", "Keyboard & Trackpad Repair", "Battery Replacement", "Motherboard Repair"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={14} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary flex items-center gap-2">
                      <HardDrive size={18} /> System Services
                    </h4>
                    <ul className="space-y-2">
                      {["SSD/RAM Upgrades", "OS Installation & Fixing", "Malware/Virus Removal", "Data Recovery"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={14} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link to="/services/device-security">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-base">Book a Repair Service</Button>
                </Link>
              </div>
              <div className="order-1 md:order-2 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h4 className="font-heading font-bold text-lg mb-6">Why Choose Our Repair Services?</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary font-bold">1</div>
                    <div>
                      <h5 className="font-semibold mb-1">Certified Technicians</h5>
                      <p className="text-sm text-gray-500">Expert engineers with years of hardware experience</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary font-bold">2</div>
                    <div>
                      <h5 className="font-semibold mb-1">Genuine Parts</h5>
                      <p className="text-sm text-gray-500">We use only original and high-quality replacement parts</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary font-bold">3</div>
                    <div>
                      <h5 className="font-semibold mb-1">Data Privacy</h5>
                      <p className="text-sm text-gray-500">Your data security is our top priority during repairs</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary font-bold">4</div>
                    <div>
                      <h5 className="font-semibold mb-1">Quick Turnaround</h5>
                      <p className="text-sm text-gray-500">Same-day service available for minor issues</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Training */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">Corporate Cybersecurity Training</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transform your workforce into your strongest security defense. Our corporate training programs are customized to address your organization's specific security challenges and compliance requirements.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Security awareness for all employees", "Technical training for IT teams", "Phishing simulation exercises", "Custom training modules", "Compliance-focused programs", "Quarterly refresher sessions"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services/corporate-training">
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-2 text-base">Learn More</Button>
                </Link>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                <h4 className="font-heading font-semibold mb-6 text-lg">Training Packages</h4>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gray-50 border-l-4 border-primary">
                    <h5 className="font-bold text-gray-900">Basic Package</h5>
                    <p className="text-sm text-gray-600">Security awareness for 50-100 employees</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50 border-l-4 border-purple-500">
                    <h5 className="font-bold text-gray-900">Professional Package</h5>
                    <p className="text-sm text-gray-600">Comprehensive training + phishing simulation</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50 border-l-4 border-purple-700">
                    <h5 className="font-bold text-gray-900">Enterprise Package</h5>
                    <p className="text-sm text-gray-600">Full program with ongoing support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* College Workshops */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-white p-8 rounded-2xl shadow-sm border border-border">
                <h4 className="font-heading font-semibold mb-6 text-lg">Workshop Formats</h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Short Workshop (1-2 days)</h5>
                      <p className="text-sm text-gray-600">Quick introduction and awareness</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-700 font-bold">2</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Standard Workshop (3-5 days)</h5>
                      <p className="text-sm text-gray-600">In-depth training with hands-on labs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-900 font-bold">3</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">Extended Program (1-2 weeks)</h5>
                      <p className="text-sm text-gray-600">Complete certification course</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">College & Institution Workshops</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Bring cutting-edge cybersecurity education to your campus. Our interactive workshops engage students with hands-on exercises, real-world scenarios, and industry insights that complement their academic learning.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Hands-on practical training", "Industry-recognized certificates", "Career guidance sessions", "Capture The Flag competitions", "Latest security tools", "Placement assistance"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services/college-workshops">
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-2 text-base">Explore Workshops</Button>
                </Link>
              </div>
            </div>
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
