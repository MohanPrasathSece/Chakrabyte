import { Laptop, Shield, Wrench, HardDrive, CheckCircle, Cpu, Battery, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const DeviceSecurity = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="Device Security & Repairs"
        subtitle="Professional laptop repairs, upgrades, and security hardening services"
        icon={Laptop}
      />

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Complete Care for Your <span className="text-primary">Digital Devices</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Chakrabyte Security, we understand that your laptop is more than just a device—it's your workspace, your classroom, and your connection to the world. That's why we offer comprehensive repair and security services to keep your systems running smoothly and securely.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you need a screen replacement, an SSD upgrade for better speed, or professional malware removal, our certified technicians are here to help with quick turnaround times and guaranteed quality.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link to="/contact">Book a Repair</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=600&fit=crop&q=80"
                alt="Laptop Repair Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of hardware and software services for all major laptop brands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Hardware Repairs */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Hardware Repairs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Screen Replacement</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Keyboard & Trackpad Fix</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Hinge & Body Repair</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Charging Port Replacement</span>
                </li>
              </ul>
            </div>

            {/* Performance Upgrades */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <HardDrive className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Performance Upgrades</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>SSD Installation & Upgrade</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>RAM Expansion</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Thermal Paste Application</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Fan Cleaning & Service</span>
                </li>
              </ul>
            </div>

            {/* Security Services */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Security Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Virus & Malware Removal</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>OS Hardening & Optimization</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Data Recovery Services</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span>Antivirus Installation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Our Repair Service?</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cpu className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Expert Technicians</h4>
                  <p className="text-gray-600 text-sm">Our team consists of certified hardware engineers with years of experience.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Battery className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Genuine Parts</h4>
                  <p className="text-gray-600 text-sm">We use only original and high-quality replacement components for all repairs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Wifi className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Quick Turnaround</h4>
                  <p className="text-gray-600 text-sm">Most minor repairs are completed within 24 hours to get you back online fast.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Data Privacy</h4>
                  <p className="text-gray-600 text-sm">We follow strict data privacy protocols to ensure your personal information stays safe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Need a Quick Repair?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light">
            Visit our center or book a pickup service today
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-6 text-lg"
          >
            <Link to="/contact">
              Book Service Now
            </Link>
          </Button>
        </div>
      </section>

      <StickyFooterAndActions />
    </div>
  );
};

export default DeviceSecurity;
