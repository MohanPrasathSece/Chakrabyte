import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import PageBanner from "@/components/PageBanner";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="Get in Touch"
        subtitle="Have questions or want to book a course? We're here to help."
        icon={Mail}
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Form - Takes more space */}
              <div className="lg:col-span-3">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
                  <div className="mb-8">
                    <h2 className="font-heading text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                    <p className="text-gray-600">Fill out the form below and we'll respond shortly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        required
                        className="h-12 border-gray-300 focus:border-primary focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                        className="h-12 border-gray-300 focus:border-primary focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        required
                        className="h-12 border-gray-300 focus:border-primary focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-medium">Your Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements, which course you're interested in, or any questions you have..."
                        rows={6}
                        required
                        className="border-gray-300 focus:border-primary focus:ring-primary/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-white text-lg font-semibold h-14 shadow-lg hover:shadow-xl transition-all"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                  <h3 className="font-heading text-xl font-bold mb-6 text-primary">Contact Info</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Email</p>
                        <a href="mailto:info@chakrabyte.com" className="text-sm text-gray-600 hover:text-primary transition-colors">
                          info@chakrabyte.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Phone</p>
                        <a href="tel:+911234567890" className="text-sm text-gray-600 hover:text-primary transition-colors">
                          +91 123 456 7890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Location</p>
                        <p className="text-sm text-gray-600">
                          Cyber Hub, Tech Park<br />
                          Bangalore, Karnataka
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Hours</p>
                        <p className="text-sm text-gray-600">
                          Mon - Fri: 9AM - 6PM<br />
                          Sat: 10AM - 4PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                  <h3 className="font-heading text-lg font-bold mb-2 relative z-10">Quick Response</h3>
                  <p className="text-sm opacity-90 mb-4 relative z-10">
                    Need immediate help? Chat with us on WhatsApp!
                  </p>
                  <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-5 py-2.5 text-sm font-bold hover:bg-purple-50 transition-colors w-full relative z-10"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked <span className="text-purple-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our cybersecurity courses and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(0)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">What are the prerequisites for your cybersecurity courses?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 0 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 0 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Most of our beginner courses require only basic computer skills. For advanced courses, we recommend having some IT background or completing our foundational courses first.
                  </p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(1)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Do you provide job placement assistance?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 1 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 1 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Yes, we offer comprehensive career support including resume building, interview preparation, and connections with our network of hiring partners in the cybersecurity industry.
                  </p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(2)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Are your certifications industry-recognized?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 2 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 2 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Absolutely! Our certifications are recognized by leading organizations and align with industry standards like CEH, CompTIA Security+, and other globally recognized cybersecurity certifications.
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(3)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">What is the duration of your courses?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 3 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 3 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Course durations vary from 8 weeks for foundational courses to 12 weeks for advanced programs. We also offer flexible weekend batches and self-paced learning options.
                  </p>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(4)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Do you offer corporate training programs?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 4 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 4 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Yes, we provide customized corporate training programs tailored to your organization's specific needs. Our trainers can conduct sessions at your premises or online.
                  </p>
                </div>
              </div>

              {/* FAQ 6 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(5)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">What payment options are available?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 5 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 5 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    We offer flexible payment options including one-time payment, EMI options, and installment plans. We also accept major credit cards, debit cards, and online banking transfers.
                  </p>
                </div>
              </div>

              {/* FAQ 7 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(6)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Do you provide course materials and recordings?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 6 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 6 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Yes, all students get access to comprehensive course materials, lab guides, and session recordings. These resources are available for lifetime access even after course completion.
                  </p>
                </div>
              </div>

              {/* FAQ 8 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(7)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Can I attend classes from outside India?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 7 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 7 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Absolutely! Our online courses are accessible globally. We have students from various countries attending live sessions and accessing our learning platform from anywhere in the world.
                  </p>
                </div>
              </div>

              {/* FAQ 9 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(8)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">What kind of lab access do students get?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 8 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 8 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    Students get 24/7 access to our virtual lab environment with real-world scenarios, tools, and vulnerabilities. This includes access to penetration testing labs, SIEM platforms, and cloud environments.
                  </p>
                </div>
              </div>

              {/* FAQ 10 */}
              <div className="border border-purple-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                <button 
                  onClick={() => toggleFaq(9)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Do you offer refunds if I'm not satisfied?</span>
                  <ChevronRight className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${expandedFaq === 9 ? 'rotate-180' : 'rotate-90'}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === 9 ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">
                    We offer a 7-day money-back guarantee for most courses. If you're not satisfied within the first week, you can request a full refund. Certain specialized courses may have different policies.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 text-purple-600 font-medium">
                <span>Still have questions?</span>
                <a href="#contact-form" className="underline hover:no-underline">
                  Contact our support team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
