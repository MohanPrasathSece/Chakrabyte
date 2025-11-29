import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, ChevronDown, BookOpen, Briefcase } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Keep header always visible on mobile (disable scroll hiding)
  useEffect(() => {
    // Disabled scroll hiding for better mobile UX
    // Header will remain sticky at all times
  }, []);

  // Timeout refs for dropdown delays
  let coursesTimeout: NodeJS.Timeout;
  let servicesTimeout: NodeJS.Timeout;

  const handleCoursesMouseEnter = () => {
    clearTimeout(coursesTimeout);
    setCoursesDropdownOpen(true);
  };

  const handleCoursesMouseLeave = () => {
    coursesTimeout = setTimeout(() => {
      setCoursesDropdownOpen(false);
    }, 100);
  };

  const handleServicesMouseEnter = () => {
    clearTimeout(servicesTimeout);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeout = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 100);
  };

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const courses = [
    { name: "Ethical Hacking", path: "/courses/ethical-hacking" },
    { name: "SOC Analyst", path: "/courses/soc-analyst" },
    { name: "Cyber Forensics", path: "/courses/cyber-forensics" },
    { name: "Network Security", path: "/courses/network-security" },
    { name: "Web App Security", path: "/courses/web-app-security" },
    { name: "Cloud Security", path: "/courses/cloud-security" },
    { name: "Malware Analysis", path: "/courses/malware-analysis" },
    { name: "Red Team", path: "/courses/red-team" },
    { name: "Blue Team", path: "/courses/blue-team" },
    { name: "Cybersecurity Basics", path: "/courses/cybersecurity-basics" },
  ];

  const services = [
    { name: "Corporate Training", path: "/services/corporate-training" },
    { name: "Device Security", path: "/services/device-security" },
    { name: "College Workshops", path: "/services/college-workshops" },
    { name: "VAPT Services", path: "/services/vapt" },
    { name: "Consultation", path: "/services/consultation" },
  ];

  const handleNavigation = (path: string) => {
    // Navigate to the path
    navigate(path);
    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Close mobile menu and search only, keep dropdowns open for desktop
    setIsMenuOpen(false);
    setSearchOpen(false);
  };

  const isActivePath = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation("/")}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="chakrabyte security" className="h-10 w-10 lg:h-10 lg:w-10 md:h-9 md:w-9 sm:h-8 sm:w-8" />
            <span className="font-heading text-lg font-bold tracking-[0.2em] uppercase lg:text-lg md:text-base sm:text-sm">
              CHAKRABYTE
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-colors ${
                  isActivePath(item.path)
                    ? "text-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Courses Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                onMouseEnter={handleCoursesMouseEnter}
                onMouseLeave={handleCoursesMouseLeave}
              >
                <BookOpen className="h-4 w-4" />
                <span>Courses</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              {coursesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={handleCoursesMouseEnter}
                  onMouseLeave={handleCoursesMouseLeave}
                >
                  <button
                    onClick={() => {
                      handleNavigation("/courses");
                      setCoursesDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-900 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    All Courses
                  </button>
                  <div className="border-t border-gray-200/50 my-1"></div>
                  {courses.map((course) => (
                    <button
                      key={course.path}
                      onClick={() => {
                        handleNavigation(course.path);
                        setCoursesDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                    >
                      {course.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <Briefcase className="h-4 w-4" />
                <span>Services</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <button
                    onClick={() => {
                      handleNavigation("/services");
                      setServicesDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-900 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    All Services
                  </button>
                  <div className="border-t border-gray-200/50 my-1"></div>
                  {services.map((service) => (
                    <button
                      key={service.path}
                      onClick={() => {
                        handleNavigation(service.path);
                        setServicesDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 lg:space-x-3 md:space-x-2 sm:space-x-1">
            {/* Search Button */}
            <button
              className="p-1.5 lg:p-2 text-gray-600 hover:text-purple-600 transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search className="h-4 w-4 lg:h-5 lg:w-5" />
            </button>

            {/* Get Started Button */}
            <button 
              onClick={() => handleNavigation("/contact")}
              className="hidden sm:block px-3 py-1.5 lg:px-4 lg:py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm lg:text-sm"
            >
              Get Started
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-1.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-4 sm:w-4" />
              ) : (
                <Menu className="h-5 w-5 sm:h-4 sm:w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 border-t border-gray-200/50">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                autoFocus
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <span className="text-xs text-gray-400">Press ESC to close</span>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation - Compact Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-lg z-50">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`text-sm font-medium transition-colors text-left py-2 px-3 rounded-md ${
                      isActivePath(item.path)
                        ? "text-purple-600 bg-purple-50"
                        : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* Mobile Courses Dropdown - Click to Open */}
                <div>
                  <button
                    onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                    className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors py-2 px-3 rounded-md"
                  >
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Courses
                    </div>
                    <ChevronDown className={`h-3 w-3 transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileCoursesOpen && (
                    <div className="pl-6 pt-1 pb-2 space-y-1 bg-gray-50/50 rounded-md mx-2">
                      <button
                        onClick={() => {
                          handleNavigation("/courses");
                          setMobileCoursesOpen(false);
                        }}
                        className="block text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors py-1.5 px-3 rounded w-full text-left"
                      >
                        All Courses
                      </button>
                      {courses.slice(0, 5).map((course) => (
                        <button
                          key={course.path}
                          onClick={() => {
                            handleNavigation(course.path);
                            setMobileCoursesOpen(false);
                          }}
                          className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1.5 px-3 rounded w-full text-left"
                        >
                          {course.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Services Dropdown - Click to Open */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors py-2 px-3 rounded-md"
                  >
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Services
                    </div>
                    <ChevronDown className={`h-3 w-3 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-6 pt-1 pb-2 space-y-1 bg-gray-50/50 rounded-md mx-2">
                      <button
                        onClick={() => {
                          handleNavigation("/services");
                          setMobileServicesOpen(false);
                        }}
                        className="block text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors py-1.5 px-3 rounded w-full text-left"
                      >
                        All Services
                      </button>
                      {services.map((service) => (
                        <button
                          key={service.path}
                          onClick={() => {
                            handleNavigation(service.path);
                            setMobileServicesOpen(false);
                          }}
                          className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1.5 px-3 rounded w-full text-left"
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Get Started Button */}
                <div className="pt-2 border-t border-gray-200/50 mt-2">
                  <button 
                    onClick={() => handleNavigation("/contact")}
                    className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm"
                  >
                    Get Started
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
