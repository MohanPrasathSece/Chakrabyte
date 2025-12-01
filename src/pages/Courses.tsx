import { Link } from "react-router-dom";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Clock, Search, Filter } from "lucide-react";
import ethicalHackingImg from "@/assets/course-ethical-hacking.jpg";
import socAnalystImg from "@/assets/course-soc-analyst.jpg";
import forensicsImg from "@/assets/course-forensics.jpg";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const Courses = () => {
  const courses = [
    {
      title: "CySA+",
      description: "Course focussed on individuals on who have basic understanding in cyber security and want to get hands on few concepts and upskill from their current security concepts understanding.",
      duration: "8 Weeks",
      level: "Beginner",
      students: "800+",
      image: ethicalHackingImg,
      link: "/courses/cySA-plus",
    },
    {
      title: "Security+",
      description: "Comprehensive security certification covering essential skills for network security and risk management",
      duration: "10 Weeks",
      level: "Beginner",
      students: "1200+",
      image: socAnalystImg,
      link: "/courses/security-plus",
    },
    {
      title: "Cloud Security",
      description: "Secure cloud infrastructure and applications on AWS and Azure platforms",
      duration: "12 Weeks",
      level: "Intermediate",
      students: "700+",
      image: forensicsImg,
      link: "/courses/cloud-security",
    },
    {
      title: "Azure Sentinel",
      description: "Master Microsoft's cloud-native SIEM and security orchestration platform",
      duration: "12 Weeks",
      level: "Advanced",
      students: "500+",
      image: ethicalHackingImg,
      link: "/courses/azure-sentinel",
    },
    {
      title: "Microsoft Defender",
      description: "Master Microsoft's comprehensive security suite covering endpoint, cloud, and identity protection",
      duration: "12 Weeks",
      level: "Advanced",
      students: "450+",
      image: socAnalystImg,
      link: "/courses/microsoft-defender",
    },
    {
      title: "Ethical Hacking",
      description: "Master ethical hacking, penetration testing, and vulnerability assessment techniques",
      duration: "12 Weeks",
      level: "Intermediate",
      students: "1500+",
      image: forensicsImg,
      link: "/courses/ethical-hacking",
    },
    {
      title: "Penetration Testing",
      description: "Advanced penetration testing course covering comprehensive methodologies and exploitation techniques",
      duration: "14 Weeks",
      level: "Advanced",
      students: "400+",
      image: ethicalHackingImg,
      link: "/courses/penetration-testing",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">7 Industry-Ready Courses</span>
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
                  <span className="font-medium">7,000+ Students</span>
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
      <section className="py-3 md:py-4 bg-light-section/80 backdrop-blur sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="pl-10 pr-4 py-1.5 md:py-2 border rounded-lg bg-background w-56 md:w-64 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
              <Button variant="outline" size="sm" className="gap-2 px-4 h-10 text-sm">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
            <div className="flex gap-2 text-sm">
              <Button variant="ghost" size="sm" className="rounded-full px-4 h-9">All Levels</Button>
              <Button variant="ghost" size="sm" className="rounded-full px-4 h-9">Beginner</Button>
              <Button variant="ghost" size="sm" className="rounded-full px-4 h-9">Intermediate</Button>
              <Button variant="ghost" size="sm" className="rounded-full px-4 h-9">Advanced</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid - Updated to max 3 columns */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
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
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">Talk to an Advisor</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
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
