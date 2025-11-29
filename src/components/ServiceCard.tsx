import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServiceCard = ({ title, description, icon: Icon, link }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-2xl transition-all duration-500 border-border h-full flex flex-col hover:-translate-y-2 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
      
      <CardContent className="p-6 flex-1 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20">
          <Icon className="text-primary group-hover:animate-bounce" size={32} />
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-xs text-primary font-semibold uppercase tracking-wide">Service</span>
        </div>
        
        <h3 className="font-heading text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span className="text-sm font-medium mr-2">Learn more</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 relative z-10">
        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
          <Link to={link}>
            <span className="group-hover:mr-2 transition-all duration-300">Discover Service</span>
            <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -mr-4 group-hover:mr-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
