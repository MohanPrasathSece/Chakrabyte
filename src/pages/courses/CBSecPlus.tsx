import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users, BookOpen, CheckCircle, ChevronRight, Shield, Target, Zap } from "lucide-react";
import courseImage from "@/assets/course/CBSecPlus.png";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const CBSecPlus = () => {
    const modules = [
        {
            title: "Security Analyst Fundamentals",
            topics: ["Security analyst role and responsibilities", "Security operations center (SOC) overview", "Incident detection and response basics", "Security monitoring tools", "Threat intelligence fundamentals"]
        },
        {
            title: "Tool-Based Learning - SIEM",
            topics: ["SIEM platform overview", "Log collection and analysis", "Creating security alerts and rules", "Dashboard creation and customization", "Use case development"]
        },
        {
            title: "Tool-Based Learning - EDR/XDR",
            topics: ["Endpoint detection and response", "Threat hunting on endpoints", "Malware analysis basics", "Incident investigation", "Response and remediation"]
        },
        {
            title: "Network Security Analysis",
            topics: ["Network traffic analysis", "Packet capture and analysis", "Network anomaly detection", "IDS/IPS configuration", "Network security monitoring"]
        },
        {
            title: "Vulnerability Management",
            topics: ["Vulnerability scanning tools", "Risk assessment and prioritization", "Patch management", "Vulnerability remediation", "Compliance scanning"]
        },
        {
            title: "Incident Response Procedures",
            topics: ["Incident response lifecycle", "Evidence collection and preservation", "Incident documentation", "Communication protocols", "Post-incident analysis"]
        },
        {
            title: "Security Operations",
            topics: ["Security operations best practices", "Shift handover procedures", "Escalation procedures", "Ticketing systems", "Metrics and reporting"]
        },
        {
            title: "Role-Specific Knowledge",
            topics: ["Security analyst career paths", "Industry certifications", "Professional development", "Resume building", "Interview preparation"]
        }
    ];

    const outcomes = [
        "Master security analyst tools and technologies",
        "Develop hands-on SIEM and EDR skills",
        "Implement effective security monitoring",
        "Conduct thorough incident investigations",
        "Build a strong foundation for security analyst roles"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                                <Shield className="w-4 h-4" />
                                <span className="text-sm font-medium">Intermediate</span>
                            </div>

                            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-float">
                                CB Sec. Plus
                            </h1>

                            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                                Course designed for Starting your career in Cybersecurity. Includes Security Analyst Training, Tool based learning & role specific knowledge.
                            </p>

                            <div className="flex flex-wrap gap-6 text-white/80 mb-8">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    <span className="font-medium">12 Weeks</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5" />
                                    <span className="font-medium">500+ Students</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="w-5 h-5" />
                                    <span className="font-medium">Intermediate Level</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-gradient-to-r from-purple-50 to-white text-purple-900 hover:from-purple-100 hover:to-white font-semibold px-8 h-12 border-2 border-purple-200 shadow-lg">
                                    <Link to="/contact?course=cb-sec-plus">Enroll Now</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-950 bg-white/10 backdrop-blur-sm font-semibold">
                                    <Link to="/contact">Download Syllabus</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <img
                                src={courseImage}
                                alt="CB Sec Plus Course"
                                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section className="py-16 bg-light-section/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
                            Course Overview
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                            CB Sec. Plus is a comprehensive intermediate course designed specifically for individuals starting their career in cybersecurity. This hands-on program focuses on practical security analyst training, tool-based learning, and role-specific knowledge that employers are looking for. You'll gain real-world experience with industry-standard security tools and learn the essential skills needed to succeed as a security analyst.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-card rounded-xl p-6 border">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-primary" />
                                    What You'll Learn
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Security analyst fundamentals and best practices",
                                        "SIEM platforms and log analysis",
                                        "Endpoint detection and response (EDR/XDR)",
                                        "Network traffic analysis and monitoring",
                                        "Vulnerability management and scanning",
                                        "Incident response procedures",
                                        "Security operations workflows",
                                        "Career development and job readiness"
                                    ].map((outcome, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-card rounded-xl p-6 border">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-primary" />
                                    Career Opportunities
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Security Analyst (SOC Analyst)",
                                        "Cyber Security Analyst",
                                        "Incident Response Analyst",
                                        "Threat Detection Analyst",
                                        "Security Operations Analyst",
                                        "Junior Security Engineer",
                                        "Security Monitoring Specialist",
                                        "Cyber Defense Analyst"
                                    ].map((job, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">{job}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Modules */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
                            Course Modules
                        </h2>

                        <div className="space-y-6">
                            {modules.map((module, index) => (
                                <div key={index} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
                                            <div className="grid sm:grid-cols-2 gap-2">
                                                {module.topics.map((topic, topicIndex) => (
                                                    <div key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <ChevronRight className="w-4 h-4 text-primary" />
                                                        {topic}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 bg-purple-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
                            Why Choose CB Sec. Plus?
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Shield,
                                    title: "Hands-On Training",
                                    description: "Practical experience with real security tools and platforms used in the industry"
                                },
                                {
                                    icon: Target,
                                    title: "Job-Ready Skills",
                                    description: "Learn the exact skills and knowledge employers are looking for in security analysts"
                                },
                                {
                                    icon: Zap,
                                    title: "Career Support",
                                    description: "Resume building, interview preparation, and job placement assistance included"
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                            Start Your Security Analyst Career Today
                        </h2>
                        <p className="text-lg mb-8 opacity-90">
                            Join 500+ students who have launched their cybersecurity careers with CB Sec. Plus
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-gradient-to-r from-purple-50 to-white text-purple-900 hover:from-purple-100 hover:to-white font-semibold px-8 h-12 border-2 border-purple-200 shadow-lg">
                                <Link to="/contact?course=cb-sec-plus">Get Started Today</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-950 bg-white/10 backdrop-blur-sm font-semibold">
                                <Link to="/courses">View All Courses</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <StickyFooterAndActions />
        </div>
    );
};

export default CBSecPlus;
