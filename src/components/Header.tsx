import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, ChevronDown, BookOpen, Briefcase } from "lucide-react";
import logo from "@/assets/header_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Keep header always visible on mobile (disable scroll hiding)
  useEffect(() => {
    // Disabled scroll hiding for better mobile UX
    // Header will remain sticky at all times
  }, []);

  // Handle ESC key to close search
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [searchOpen]);

  // Handle click outside to close search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node) && searchOpen) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen]);

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
  ];

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
    { name: "Gap Assessment", path: "/services/gap-assessment" },
    { name: "Corporate Training", path: "/services/corporate-training" },
    { name: "VAPT Services", path: "/services/vapt" },
    { name: "Security Consulting", path: "/services/security-consulting" },
    { name: "Career Consulting", path: "/services/career-consulting" },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
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
                className={`text-sm font-medium transition-colors ${isActivePath(item.path)
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
                className={`flex items-center space-x-1 text-sm font-medium transition-colors ${location.pathname.startsWith("/courses")
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
                  }`}
                onMouseEnter={handleCoursesMouseEnter}
                onMouseLeave={handleCoursesMouseLeave}
              >
                <BookOpen className="h-4 w-4" />
                <span>Courses</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              {coursesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
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
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${isActivePath(course.path)
                          ? "text-purple-600 bg-purple-50 font-medium"
                          : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                        }`}
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
                  className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
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
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${isActivePath(service.path)
                          ? "text-purple-600 bg-purple-50 font-medium"
                          : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                        }`}
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Link */}
            <button
              onClick={() => handleNavigation("/contact")}
              className={`text-sm font-medium transition-colors ${isActivePath("/contact")
                ? "text-purple-600"
                : "text-gray-700 hover:text-purple-600"
                }`}
            >
              Contact
            </button>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 lg:space-x-3 md:space-x-2 sm:space-x-1">
            {/* Search Button - Box Style with Label */}
            <button
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors border border-gray-200"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
              <span className="text-sm font-medium">Search</span>
            </button>

            {/* Mobile Search Icon Only */}
            <button
              className="lg:hidden p-1.5 text-gray-600 hover:text-purple-600 transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
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

        {/* Search Bar with Live Results */}
        {searchOpen && (
          <div ref={searchRef} className="py-4 border-t border-gray-200/50 bg-white">
            <div className="relative max-w-2xl mx-auto px-4">
              <div className="absolute inset-y-0 left-7 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search courses and services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-10 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSearchOpen(false);
                  }}
                  className="absolute inset-y-0 right-7 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Clear search and close"
                >
                  <X className="h-5 w-5" />
                </button>
              )}

              {/* Search Results Dropdown */}
              {searchQuery.trim() !== "" && (
                <div className="absolute top-full left-4 right-4 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
                  {(() => {
                    const query = searchQuery.toLowerCase();
                    const filteredCourses = courses.filter(course =>
                      course.name.toLowerCase().includes(query)
                    );
                    const filteredServices = services.filter(service =>
                      service.name.toLowerCase().includes(query)
                    );
                    const hasResults = filteredCourses.length > 0 || filteredServices.length > 0;

                    if (!hasResults) {
                      return (
                        <div className="p-8 text-center text-gray-500">
                          <Search className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                          <p className="font-medium">No results found</p>
                          <p className="text-sm mt-1">Try searching for different keywords</p>
                        </div>
                      );
                    }

                    return (
                      <div className="py-2">
                        {filteredCourses.length > 0 && (
                          <div className="mb-2">
                            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide bg-gray-50">
                              Courses ({filteredCourses.length})
                            </div>
                            {filteredCourses.map((course) => (
                              <button
                                key={course.path}
                                onClick={() => {
                                  handleNavigation(course.path);
                                  setSearchQuery("");
                                  setSearchOpen(false);
                                }}
                                className="w-full text-left px-4 py-3 hover:bg-purple-50 transition-colors flex items-center gap-3 group"
                              >
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                  <Search className="w-4 h-4 text-purple-600" />
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900">{course.name}</div>
                                  <div className="text-xs text-gray-500">Course</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}

                        {filteredServices.length > 0 && (
                          <div>
                            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide bg-gray-50">
                              Services ({filteredServices.length})
                            </div>
                            {filteredServices.map((service) => (
                              <button
                                key={service.path}
                                onClick={() => {
                                  handleNavigation(service.path);
                                  setSearchQuery("");
                                  setSearchOpen(false);
                                }}
                                className="w-full text-left px-4 py-3 hover:bg-purple-50 transition-colors flex items-center gap-3 group"
                              >
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                  <Search className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900">{service.name}</div>
                                  <div className="text-xs text-gray-500">Service</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation - Compact Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`text-sm font-medium transition-colors text-left py-2 px-3 rounded-md ${isActivePath(item.path)
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
                    className={`flex items-center justify-between w-full text-sm font-medium transition-colors py-2 px-3 rounded-md ${location.pathname.startsWith("/courses")
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                      }`}
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
                          className={`block text-sm transition-colors py-1.5 px-3 rounded w-full text-left ${isActivePath(course.path)
                              ? "text-purple-600 bg-purple-50 font-medium"
                              : "text-gray-600 hover:text-purple-600"
                            }`}
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
                      {services.slice(0, 5).map((service) => (
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

                {/* Contact Menu Item */}
                <button
                  onClick={() => handleNavigation("/contact")}
                  className={`text-sm font-medium transition-colors text-left py-2 px-3 rounded-md ${isActivePath("/contact")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                    }`}
                >
                  Contact
                </button>

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
