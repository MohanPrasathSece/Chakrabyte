import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
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
    </div>
  );
};

export default Contact;
