import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden">
      {/* Left side images */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 flex flex-col justify-center space-y-8 opacity-80">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
          alt="Professional 1"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-white"
        />
        <img 
          src="https://images.unsplash.com/photo-1494790108755-2616b332c1ca?w=200&h=200&fit=crop&crop=face"
          alt="Professional 2"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-white"
        />
      </div>

      {/* Right side images */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 flex flex-col justify-center space-y-8 opacity-80">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
          alt="Professional 3"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-white"
        />
        <img 
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
          alt="Professional 4"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-white"
        />
      </div>

      {/* Center content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by leaders from various industries
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Learn why professionals trust our solutions to complete their customer journeys and advance their careers in cybersecurity.
          </p>
          
          <Button asChild className="bg-blue-600 text-white px-4 py-2 text-base rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
            <Link to="/testimonials">
              Read Success Stories
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
