import { Link } from "react-router-dom";
import { Shield, Phone, Mail } from "lucide-react";

/**
 * Reusable component for sticky footer and floating action buttons
 * Add this component to any page to include:
 * - Floating WhatsApp button
 * - Floating Call button
 * - Sticky footer with quick links and contact info
 */
const StickyFooterAndActions = () => {
    return (
        <>
            {/* Floating Action Buttons */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20your%20cybersecurity%20courses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
                    aria-label="Contact on WhatsApp"
                >
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                </a>

                {/* Call Button - Purple */}
                <a
                    href="tel:+919876543210"
                    className="w-14 h-14 md:w-16 md:h-16 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
                    aria-label="Call us"
                >
                    <Phone className="w-6 h-6 md:w-7 md:h-7" />
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
                                <Link to="/courses" className="text-white hover:text-purple-300 transition-colors">
                                    Courses
                                </Link>
                                <Link to="/services" className="text-white hover:text-purple-300 transition-colors">
                                    Services
                                </Link>
                                <Link to="/contact" className="text-white hover:text-purple-300 transition-colors">
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Right Side - Quick Contact */}
                        <div className="flex items-center gap-4 text-white">
                            <a
                                href="tel:+919876543210"
                                className="hover:text-purple-300 transition-colors flex items-center gap-1"
                            >
                                <Phone className="w-3 h-3 text-purple-400" />
                                +91 98765 43210
                            </a>
                            <a
                                href="mailto:info@chakrabyte.com"
                                className="hover:text-purple-300 transition-colors flex items-center gap-1"
                            >
                                <Mail className="w-3 h-3 text-purple-400" />
                                info@chakrabyte.com
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default StickyFooterAndActions;
