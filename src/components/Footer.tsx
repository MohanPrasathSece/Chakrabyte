import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/BCLogo.png";

const Footer = () => {
  const courses = [
    { name: "Security+", path: "/courses/security-plus" },
    { name: "Ethical Hacking", path: "/courses/ethical-hacking" },
    { name: "CySA+", path: "/courses/cysa-plus" },
    { name: "Cloud Security", path: "/courses/cloud-security" },
    { name: "Penetration Testing", path: "/courses/penetration-testing" },
    { name: "CB Sec. Plus", path: "/courses/cb-sec-plus" },
    { name: "IAM - CyberArk", path: "/courses/iam-cyberark" },
    { name: "CB Sec. Pro", path: "/courses/cb-sec-pro" },
    { name: "Azure Sentinel", path: "/courses/azure-sentinel" },
    { name: "Microsoft Defender", path: "/courses/microsoft-defender" },
  ];

  const services = [
    { name: "Corporate Training", path: "/services/corporate-training" },
    { name: "College Workshops", path: "/services/college-workshops" },
    { name: "Device Security", path: "/services/device-security" },
    { name: "VAPT Services", path: "/services/vapt" },
    { name: "Consultation", path: "/services/consultation" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="chakrabyte security" className="h-10 w-10" />
              <span className="font-heading text-lg font-bold tracking-[0.2em] uppercase">
                CHAKRABYTE
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Professional cybersecurity training for students, colleges, and corporates. Building secure digital futures.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/109433547/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-white">Top Courses</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.path}>
                  <Link
                    to={course.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="text-primary mt-1" />
                <a
                  href="mailto:info@chakrabyte.com"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  info@chakrabyte.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="text-primary mt-1" />
                <a
                  href="tel:+911234567890"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-1" />
                <span className="text-sm text-gray-400">
                  Cyber Hub, Tech Park, Bangalore, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center pb-8">
          <p className="text-sm text-gray-400 mb-4">
            © {new Date().getFullYear()} chakrabyte security. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
