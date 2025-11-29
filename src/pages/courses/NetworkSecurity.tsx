import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Shield, Users, Target, BookOpen, Award, Clock, Globe, Zap, CheckCircle, ChevronRight } from 'lucide-react';

const NetworkSecurity = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Form switching functionality
  useEffect(() => {
    const handleFormSwitch = () => {
      const radioButtons = document.querySelectorAll('input[name="formType"]');
      const forms = {
        individual: document.getElementById('individual-form'),
        corporate: document.getElementById('corporate-form'),
        personal: document.getElementById('personal-form')
      };

      radioButtons.forEach(radio => {
        radio.addEventListener('change', (e) => {
          const target = e.target as HTMLInputElement;
          // Hide all forms
          Object.values(forms).forEach(form => {
            if (form) form.classList.add('hidden');
          });
          
          // Show selected form
          const selectedForm = forms[target.value];
          if (selectedForm) {
            selectedForm.classList.remove('hidden');
          }
        });
      });
    };

    // Add event listeners when component mounts
    handleFormSwitch();

    // Cleanup
    return () => {
      const radioButtons = document.querySelectorAll('input[name="formType"]');
      radioButtons.forEach(radio => {
        radio.removeEventListener('change', handleFormSwitch);
      });
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", formData);

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  const benefits = [
    {
      icon: Shield,
      title: "Network Defense",
      description: "Master advanced techniques to protect network infrastructure from sophisticated cyber attacks"
    },
    {
      icon: Target,
      title: "Hands-On Labs",
      description: "Practice with real network security tools and scenarios in our virtual lab environment"
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Prepare for globally recognized network security certifications"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from experienced network security professionals with real-world expertise"
    }
  ];

  const modules = [
    {
      title: "Network Security Fundamentals",
      topics: ["Network architecture basics", "Security principles", "Threat landscape", "Risk assessment", "Security policies"]
    },
    {
      title: "Firewall Technologies",
      topics: ["Firewall types and architectures", "Stateful inspection", "Proxy firewalls", "Next-gen firewalls", "Rule management"]
    },
    {
      title: "Intrusion Detection Systems",
      topics: ["IDS vs IPS", "Signature-based detection", "Anomaly detection", "Deployment strategies", "Tuning and maintenance"]
    },
    {
      title: "VPN and Secure Access",
      topics: ["VPN protocols", "IPsec configuration", "SSL/TLS VPNs", "Remote access security", "Zero trust architecture"]
    },
    {
      title: "Wireless Security",
      topics: ["WiFi security standards", "WPA3 implementation", "Wireless attacks", "Enterprise wireless", "Mobile device management"]
    },
    {
      title: "Network Monitoring",
      topics: ["SIEM solutions", "Log analysis", "Traffic analysis", "Incident response", "Forensic investigation"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Custom Hero Section for Course */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(76, 29, 149, 0.95), rgba(124, 58, 237, 0.9)), url('https://images.unsplash.com/photo-1558494949-ef010cbcc31c?w=1920&h=1080&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/30 text-white">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Network Security Certification</span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Network Security & <br />Infrastructure Protection
            </h1>

            <p className="text-xl text-purple-100 mb-8 max-w-2xl leading-relaxed font-light">
              Master network defense technologies and protect critical infrastructure from sophisticated cyber threats.
            </p>

            <div className="flex flex-wrap gap-6 text-white mb-10">
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Clock className="text-purple-300" size={24} />
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Duration</p>
                  <p className="font-bold text-lg">8 Weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Award className="text-purple-300" size={24} />
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Level</p>
                  <p className="font-bold text-lg">Intermediate</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/20 rounded-lg px-5 py-3 border border-white/10">
                <Users className="text-purple-300" size={24} />
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold">Students</p>
                  <p className="font-bold text-lg">900+</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="relative bg-gradient-to-r from-white to-gray-50 text-purple-600 hover:from-gray-50 hover:to-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-gray-500/25 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-purple-300/50 group overflow-hidden">
                <Link to="/contact?course=network-security">
                  <span className="relative z-10 flex items-center gap-2">
                    Enroll Now
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="relative bg-transparent backdrop-blur-md text-white hover:bg-white/10 font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 border-white/50 group overflow-hidden">
                <Link to="/contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Download Syllabus
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Course Info */}
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  What You'll Learn in Network Security
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Master the fundamentals of network security and learn to protect digital infrastructure from modern cyber threats. This comprehensive course covers everything from basic network concepts to advanced security protocols.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">Industry-Recognized Certification</h4>
                      <p className="text-gray-600">Get certified with our globally recognized network security certification</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">Expert Instructors</h4>
                      <p className="text-gray-600">Learn from industry professionals with years of real-world experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">Hands-on Training</h4>
                      <p className="text-gray-600">Practical labs and real-world scenarios for better understanding</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 h-14">
                    <Link to="/contact?course=network-security">Enroll Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-8 h-14">
                    Download Syllabus
                  </Button>
                </div>
              </div>
              
              {/* Right Side - Course Details Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Duration</h3>
                  <p className="text-gray-600">8 Weeks</p>
                  <p className="text-sm text-gray-500 mt-1">Comprehensive training program</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Level</h3>
                  <p className="text-gray-600">Intermediate</p>
                  <p className="text-sm text-gray-500 mt-1">Basic knowledge required</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Students</h3>
                  <p className="text-gray-600">900+</p>
                  <p className="text-sm text-gray-500 mt-1">Successful graduates</p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Projects</h3>
                  <p className="text-gray-600">15+ Projects</p>
                  <p className="text-sm text-gray-500 mt-1">Hands-on experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Take This Course?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master network security with comprehensive training for modern security challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Advanced Security",
                description: "Learn cutting-edge network security techniques and methodologies"
              },
              {
                icon: Target,
                title: "Hands-on Practice",
                description: "Work with real-world security scenarios and practical exercises"
              },
              {
                icon: Globe,
                title: "Industry Tools",
                description: "Master professional tools and technologies used in cybersecurity"
              },
              {
                icon: Award,
                title: "Expert Instruction",
                description: "Learn from experienced security professionals and industry experts"
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-purple-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <benefit.icon size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of students and become a network security expert
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 h-12">
            <Link to="/contact?course=network-security">Enroll Now</Link>
          </Button>
        </div>
      </section>

      {/* Training Form Selection Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Choose Your <span className="text-purple-600">Training Path</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select the training option that best fits your needs
              </p>
            </div>

            {/* Form Type Selection */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <label className="relative cursor-pointer">
                <input type="radio" name="formType" value="individual" className="peer sr-only" defaultChecked />
                <div className="p-6 bg-white rounded-2xl border-2 border-gray-200 peer-checked:border-purple-500 peer-checked:bg-purple-50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 peer-checked:bg-purple-500 peer-checked:text-white transition-colors">
                      <Users className="w-8 h-8 text-purple-600 peer-checked:text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Individual Training</h3>
                    <p className="text-gray-600 text-sm">Personal learning journey for yourself</p>
                  </div>
                </div>
              </label>

              <label className="relative cursor-pointer">
                <input type="radio" name="formType" value="corporate" className="peer sr-only" />
                <div className="p-6 bg-white rounded-2xl border-2 border-gray-200 peer-checked:border-purple-500 peer-checked:bg-purple-50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 peer-checked:bg-purple-500 peer-checked:text-white transition-colors">
                      <Shield className="w-8 h-8 text-purple-600 peer-checked:text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Corporate Training</h3>
                    <p className="text-gray-600 text-sm">Team training for organizations</p>
                  </div>
                </div>
              </label>

              <label className="relative cursor-pointer">
                <input type="radio" name="formType" value="personal" className="peer sr-only" />
                <div className="p-6 bg-white rounded-2xl border-2 border-gray-200 peer-checked:border-purple-500 peer-checked:bg-purple-50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 peer-checked:bg-purple-500 peer-checked:text-white transition-colors">
                      <Target className="w-8 h-8 text-purple-600 peer-checked:text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">1-on-1 Training</h3>
                    <p className="text-gray-600 text-sm">Personalized mentorship program</p>
                  </div>
                </div>
              </label>
            </div>

            {/* Individual Form */}
            <div id="individual-form" className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-gray-900">Individual Training</h3>
                <p className="text-gray-600">Start your personal learning journey</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                      className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your learning goals..."
                    rows={4}
                    required
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold h-14 shadow-lg hover:shadow-xl transition-all"
                >
                  Start Learning Journey
                </Button>
              </form>
            </div>

            {/* Corporate Form */}
            <div id="corporate-form" className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100 hidden">
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-gray-900">Corporate Training</h3>
                <p className="text-gray-600">Team training for your organization</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="org-name" className="text-gray-700 font-medium">Organization Name *</Label>
                    <Input
                      id="org-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your organization name"
                      required
                      className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="org-email" className="text-gray-700 font-medium">Email *</Label>
                    <Input
                      id="org-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="org-message" className="text-gray-700 font-medium">Training Requirements *</Label>
                  <Textarea
                    id="org-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your team training requirements..."
                    rows={4}
                    required
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold h-14 shadow-lg hover:shadow-xl transition-all"
                >
                  Submit Team Training Request
                </Button>
              </form>
            </div>

            {/* Personal 1-on-1 Form */}
            <div id="personal-form" className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl shadow-xl p-8 border border-purple-200 hidden">
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-gray-900">1-on-1 Personal Training</h3>
                <p className="text-gray-600">Personalized mentorship program</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="mentor-name" className="text-gray-700 font-medium">Name *</Label>
                    <Input
                      id="mentor-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                      className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mentor-email" className="text-gray-700 font-medium">Email *</Label>
                    <Input
                      id="mentor-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mentor-goals" className="text-gray-700 font-medium">Learning Goals *</Label>
                  <Textarea
                    id="mentor-goals"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your personal learning goals..."
                    rows={4}
                    required
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500/20 resize-none bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold h-14 shadow-lg hover:shadow-xl transition-all"
                >
                  Start Personal Mentorship
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkSecurity;
