import { useState } from "react";
import { Mail, Phone, MapPin, Clock, BookOpen, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import CourseBookingForm from "@/components/CourseBookingForm";
import PageBanner from "@/components/PageBanner";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    trainingMode: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
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
      userType: "",
      trainingMode: "",
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="contact" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-2 p-1 bg-purple-100 rounded-full">
                  <TabsTrigger
                    value="contact"
                    className="flex items-center gap-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    General Inquiry
                  </TabsTrigger>
                  <TabsTrigger
                    value="booking"
                    className="flex items-center gap-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    Book a Course
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="contact" className="space-y-8 animate-fade-in">
                <div className="grid lg:grid-cols-3 gap-10">
                  {/* Contact Form */}
                  <div className="lg:col-span-2">
                    <div className="bg-white p-8 rounded-2xl border border-purple-100 shadow-lg">
                      <div className="mb-8">
                        <h2 className="font-heading text-2xl font-bold text-gray-900">Send Us a Message</h2>
                        <p className="text-gray-500">Fill out the form below and we'll get back to you shortly.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="John Doe"
                              required
                              className="border-gray-200 focus:border-primary focus:ring-primary/20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@example.com"
                              required
                              className="border-gray-200 focus:border-primary focus:ring-primary/20"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-gray-700">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+91 98765 43210"
                              required
                              className="border-gray-200 focus:border-primary focus:ring-primary/20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="userType" className="text-gray-700">I am a *</Label>
                            <Select
                              value={formData.userType}
                              onValueChange={(value) => setFormData({ ...formData, userType: value })}
                            >
                              <SelectTrigger className="border-gray-200 focus:border-primary focus:ring-primary/20">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="student">Student</SelectItem>
                                <SelectItem value="college">College/Institution</SelectItem>
                                <SelectItem value="corporate">Corporate/Business</SelectItem>
                                <SelectItem value="individual">Individual Professional</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="trainingMode" className="text-gray-700">Preferred Training Mode</Label>
                          <Select
                            value={formData.trainingMode}
                            onValueChange={(value) => setFormData({ ...formData, trainingMode: value })}
                          >
                            <SelectTrigger className="border-gray-200 focus:border-primary focus:ring-primary/20">
                              <SelectValue placeholder="Select mode" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="online">Online Live Batch</SelectItem>
                              <SelectItem value="college">At My College / Institute</SelectItem>
                              <SelectItem value="office">At My Office / Company</SelectItem>
                              <SelectItem value="device-service">Device Security Service</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-gray-700">Message *</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about your requirements..."
                            rows={5}
                            required
                            className="border-gray-200 focus:border-primary focus:ring-primary/20 resize-none"
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-lg font-semibold h-12">
                          Send Message
                        </Button>
                      </form>
                    </div>
                  </div>

                  {/* Contact Info Sidebar */}
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
                      <h3 className="font-heading text-xl font-bold mb-6 text-primary">Contact Information</h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                            <Mail size={20} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Email Us</p>
                            <a href="mailto:info@chakrabyte.com" className="text-sm text-gray-600 hover:text-primary transition-colors">
                              info@chakrabyte.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                            <Phone size={20} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Call Us</p>
                            <a href="tel:+911234567890" className="text-sm text-gray-600 hover:text-primary transition-colors">
                              +91 123 456 7890
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                            <MapPin size={20} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Visit Us</p>
                            <p className="text-sm text-gray-600">
                              Cyber Hub, Tech Park<br />
                              Bangalore, Karnataka 560001
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                            <Clock size={20} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Business Hours</p>
                            <p className="text-sm text-gray-600">
                              Mon - Fri: 9:00 AM - 6:00 PM<br />
                              Sat: 10:00 AM - 4:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                      <h3 className="font-heading text-xl font-bold mb-3 relative z-10">Quick Response</h3>
                      <p className="text-sm opacity-90 mb-6 relative z-10">
                        Need immediate assistance? WhatsApp us for faster response!
                      </p>
                      <a
                        href="https://wa.me/911234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-6 py-3 text-sm font-bold hover:bg-purple-50 transition-colors w-full relative z-10"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="booking">
                <div className="bg-white p-8 rounded-2xl border border-purple-100 shadow-lg">
                  <CourseBookingForm />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
