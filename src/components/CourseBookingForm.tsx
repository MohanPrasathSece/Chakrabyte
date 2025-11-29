import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, MapPin, Users, Clock, CheckCircle, Send } from "lucide-react";

const courses = [
  "Ethical Hacking & Penetration Testing",
  "SOC Analyst Training",
  "Cyber Forensics & Investigation",
  "Network Security",
  "Web Application Security",
  "Cloud Security (AWS + Azure)",
  "Malware Analysis & Reverse Engineering",
  "Red Team Operations",
  "Blue Team Defense",
  "Cybersecurity for Beginners"
];

const trainingModes = [
  { id: "online", label: "Online Live Batch", description: "Remote training with live instructors and labs", icon: "🌐" },
  { id: "college", label: "At My College / Institute", description: "We conduct training directly at your campus", icon: "🎓" },
  { id: "onsite", label: "At My Office / Company", description: "On-site corporate training at your office", icon: "🏢" }
];

const CourseBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    trainingMode: "",
    organization: "",
    location: "",
    groupSize: "",
    preferredDate: "",
    message: "",
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Booking Request Submitted!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for your interest! Our team will contact you within 24 hours to discuss your training requirements.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold mb-2">Book Your Training</CardTitle>
        <p className="text-muted-foreground">
          Choose your course and preferred training mode to get started
        </p>
      </CardHeader>
      
      <CardContent className="space-y-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization">Organization/College</Label>
                <Input
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => handleInputChange("organization", e.target.value)}
                  placeholder="Your organization or college name"
                />
              </div>
            </div>
          </div>

          {/* Course Selection */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Course Selection
            </h3>
            <div className="space-y-2">
              <Label htmlFor="course">Select Course *</Label>
              <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Training Mode */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Training Mode
            </h3>
            <RadioGroup
              value={formData.trainingMode}
              onValueChange={(value) => handleInputChange("trainingMode", value)}
              className="space-y-4"
            >
              {trainingModes.map((mode) => (
                <div key={mode.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value={mode.id} id={mode.id} />
                  <div className="flex-1">
                    <Label htmlFor={mode.id} className="font-medium cursor-pointer">
                      <span className="mr-2">{mode.icon}</span>
                      {mode.label}
                    </Label>
                    <p className="text-sm text-muted-foreground">{mode.description}</p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Additional Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Additional Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {formData.trainingMode === "onsite" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="location">Training Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="Your college/company address"
                      required={formData.trainingMode === "onsite"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="groupSize">Group Size</Label>
                    <Input
                      id="groupSize"
                      value={formData.groupSize}
                      onChange={(e) => handleInputChange("groupSize", e.target.value)}
                      placeholder="Number of participants"
                    />
                  </div>
                </>
              )}
              <div className="space-y-2">
                <Label htmlFor="preferredDate">Preferred Start Date</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Additional Requirements</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Tell us about your specific requirements or questions..."
                rows={4}
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
              required
            />
            <Label htmlFor="agreeToTerms" className="text-sm">
              I agree to be contacted by chakrabyte security regarding my training inquiry and understand that my information will be handled according to the privacy policy.
            </Label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || !formData.agreeToTerms}
              className="px-8"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Booking Request
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CourseBookingForm;
