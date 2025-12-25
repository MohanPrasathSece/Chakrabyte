import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Clock, Search, Filter } from "lucide-react";
import securityPlusImg from "@/assets/course/Security+.png";
import ethicalHackingImg from "@/assets/course/CEH.png";
import cysaPlusImg from "@/assets/course/CYSA+.png";
import cloudSecurityImg from "@/assets/course/CloudSecurity.png";
import penetrationTestingImg from "@/assets/course/PT.png";
import cbSecPlusImg from "@/assets/course/CBSecPlus.png";
import cbSecProImg from "@/assets/course/CBSecPro.png";
import azureSentinelImg from "@/assets/course/AzureSentinel.png";
import msDefenderImg from "@/assets/course/MSDefender.png";
import iamImg from "@/assets/course/IAm.png";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedStudents, setSelectedStudents] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilter, setShowFilter] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);

  // Scroll to results when filters change
  useEffect(() => {
    // Only scroll if we are not at the top already and a filter was actually changed
    // We exclude searchTerm to avoid scrolling while typing
    if (coursesRef.current) {
      const offset = coursesRef.current.offsetTop - 100;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  }, [selectedCategory, selectedLevel, selectedDuration, selectedStudents, sortBy]);

  const isFiltered = searchTerm !== "" ||
    selectedCategory !== "All" ||
    selectedLevel !== "All" ||
    selectedDuration !== "all" ||
    selectedStudents !== "all";

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedLevel("All");
    setSelectedDuration("all");
    setSelectedStudents("all");
    setSortBy("popular");
  };

  const courses = [
    // BEGINNER COURSES
    {
      title: "Security+",
      description: "Fundamental course for freshers or individuals looking establish a foundation for a career in cybersecurity and want to get core knowledge and understanding required to handle basic infosec job roles",
      duration: "8 Weeks",
      level: "Beginner",
      category: "Beginner",
      students: "1200+",
      image: securityPlusImg,
      link: "/courses/security-plus",
    },
    {
      title: "Ethical Hacking",
      description: "An introductory course for beginners that teaches the foundational knowledge of cybersecurity, helps understand attacker's mindset. Includes basic training on tools, exploits, vulnerabilities and ethical boundaries.",
      duration: "6 Weeks",
      level: "Beginner",
      category: "Beginner",
      students: "800+",
      image: ethicalHackingImg,
      link: "/courses/ethical-hacking",
    },
    // INTERMEDIATE COURSES
    {
      title: "CySA+",
      description: "Course focussed on security analysts on who have basic understanding and experience in cyber security and want to get hands on few concepts and upskill from their current security concepts understanding.",
      duration: "10 Weeks",
      level: "Intermediate",
      category: "Intermediate",
      students: "600+",
      image: cysaPlusImg,
      link: "/courses/cysa-plus",
    },
    {
      title: "Cloud Security",
      description: "Course for security professionals who want to learn about securing data within the cloud environment. The course covers architectures, security best practices and unique challenges and situations in different cloud environment.",
      duration: "8 Weeks",
      level: "Intermediate",
      category: "Intermediate",
      students: "700+",
      image: cloudSecurityImg,
      link: "/courses/cloud-security",
    },
    {
      title: "Penetration Testing",
      description: "Hands-on, practical training for individuals who want to develop the real-world skills to systematically test and exploit networks, applications, and systems, mimicking a real cyberattack.",
      duration: "14 Weeks",
      level: "Intermediate",
      category: "Intermediate",
      students: "400+",
      image: penetrationTestingImg,
      link: "/courses/penetration-testing",
    },
    {
      title: "CB Sec. Plus",
      description: "Course designed for Starting your career in Cybersecurity. Includes Security Analyst Training, Tool based learning & role specific knowledge.",
      duration: "12 Weeks",
      level: "Intermediate",
      category: "Intermediate",
      students: "500+",
      image: cbSecPlusImg,
      link: "/courses/cb-sec-plus",
    },
    {
      title: "IAM - CyberArk",
      description: "Focuses on advanced operational skills, troubleshooting, integration, and maintenance of the Privileged Access Security (PAS) solution components like CyberARK.",
      duration: "10 Weeks",
      level: "Intermediate",
      category: "Intermediate",
      students: "300+",
      image: iamImg,
      link: "/courses/iam-cyberark",
    },
    // ADVANCED COURSES
    {
      title: "CB Sec. Pro",
      description: "Course designed for experienced professional ready to take there next step decoding the path to your career. Includes Security Analyst & IR, Domain Specialisation, Leadership Seminar.",
      duration: "16 Weeks",
      level: "Advanced",
      category: "Advanced",
      students: "200+",
      image: cbSecProImg,
      link: "/courses/cb-sec-pro",
    },
    {
      title: "Azure Sentinel",
      description: "A specialized course in Azure Sentinel for seasoned security analysts looking to master using this cloud-native SIEM platform to Ingest data, hunt threats, create playbooks, use cases and automate responses in Azure.",
      duration: "12 Weeks",
      level: "Advanced",
      category: "Advanced",
      students: "350+",
      image: azureSentinelImg,
      link: "/courses/azure-sentinel",
    },
    {
      title: "Microsoft Defender",
      description: "Course for professionals interested in learning hands-on skills to deploy and manage the full suite of Microsoft Defender's centralized protection across endpoints, identity, and email.",
      duration: "10 Weeks",
      level: "Advanced",
      category: "Advanced",
      students: "400+",
      image: msDefenderImg,
      link: "/courses/microsoft-defender",
    },
  ];

  const filterOptions = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredAndSortedCourses = courses
    .filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
      const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;

      // Duration filter
      const durationNum = parseInt(course.duration);
      let matchesDuration = selectedDuration === "all";
      if (selectedDuration === "short") matchesDuration = durationNum <= 8;
      else if (selectedDuration === "medium") matchesDuration = durationNum > 8 && durationNum <= 12;
      else if (selectedDuration === "long") matchesDuration = durationNum > 12;

      // Students filter
      const studentsNum = parseInt(course.students.replace(/\D/g, ''));
      let matchesStudents = selectedStudents === "all";
      if (selectedStudents === "small") matchesStudents = studentsNum <= 500;
      else if (selectedStudents === "medium") matchesStudents = studentsNum > 500 && studentsNum <= 1000;
      else if (selectedStudents === "large") matchesStudents = studentsNum > 1000;

      return matchesSearch && matchesCategory && matchesLevel && matchesDuration && matchesStudents;
    })
    .sort((a, b) => {
      if (sortBy === "popular") {
        const aStudents = parseInt(a.students.replace(/\D/g, ''));
        const bStudents = parseInt(b.students.replace(/\D/g, ''));
        return bStudents - aStudents;
      } else if (sortBy === "newest") {
        return 0; // Could add date logic if available
      } else if (sortBy === "duration") {
        const aDuration = parseInt(a.duration);
        const bDuration = parseInt(b.duration);
        return aDuration - bDuration;
      } else if (sortBy === "level") {
        const levelOrder = { "Beginner": 1, "Intermediate": 2, "Advanced": 3 };
        return levelOrder[a.level] - levelOrder[b.level];
      }
      return 0;
    });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">10 Industry-Ready Courses</span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-float">
              Our Cybersecurity Courses
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose from comprehensive courses designed to transform you into a cybersecurity professional.
              Available online, offline, and on-site at your college or organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">8,000+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Industry Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Flexible Schedule</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-3 md:py-4 bg-gray-50 backdrop-blur sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-1.5 md:py-2 border border-gray-300 rounded-lg bg-white w-56 md:w-64 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 px-4 h-10 text-sm border-purple-300 text-purple-600 hover:bg-purple-50"
                onClick={() => setShowFilter(!showFilter)}
              >
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              {isFiltered && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-600 hover:bg-red-50 px-2 h-10 text-sm"
                  onClick={resetFilters}
                >
                  Clear All
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              {filterOptions.map((option) => (
                <Button
                  key={`category-${option}`}
                  variant={selectedCategory === option ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-full px-4 h-9 ${selectedCategory === option
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "hover:bg-purple-50 text-gray-700 hover:text-purple-600"
                    }`}
                  onClick={() => setSelectedCategory(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          {/* Additional Filter Options (shown when filter is clicked) */}
          {showFilter && (
            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                  >
                    <option value="all">All Durations</option>
                    <option value="short">Short (&le;8 weeks)</option>
                    <option value="medium">Medium (9-12 weeks)</option>
                    <option value="long">Long (&gt;12 weeks)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Students</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={selectedStudents}
                    onChange={(e) => setSelectedStudents(e.target.value)}
                  >
                    <option value="all">All Sizes</option>
                    <option value="small">Small (0-500)</option>
                    <option value="medium">Medium (501-1000)</option>
                    <option value="large">Large (1000+)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="duration">Duration</option>
                    <option value="level">Level</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16" ref={coursesRef}>
        <div className="container mx-auto px-4">
          {/* Results count */}
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg">
              Showing {filteredAndSortedCourses.length} of {courses.length} courses
            </p>
          </div>

          {filteredAndSortedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredAndSortedCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedLevel("All");
                  setSelectedDuration("all");
                  setSelectedStudents("all");
                  setSortBy("popular");
                }}
                className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Not Sure Which Course to Choose?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Our career counselors can help you select the perfect course based on your goals and experience level
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700 font-semibold">
                  <Link to="/contact">Talk to an Advisor</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-purple-600 hover:bg-white hover:text-purple-700 font-semibold">
                  <Link to="/contact">Download Brochure</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyFooterAndActions />
    </div>
  );
};

export default Courses;
