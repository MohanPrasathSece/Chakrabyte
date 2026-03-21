import { Link } from "react-router-dom";
import { Clock, Award, Users } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  students: string;
  image: string;
  link: string;
}

const CourseCard = ({
  title,
  description,
  duration,
  level,
  students,
  image,
  link,
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-border flex flex-col h-full hover:-translate-y-2 group relative">
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-primary text-white rounded-full p-2 animate-pulse">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>

      <div className="aspect-video overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${title === "Security+" ||
            title === "Cloud Security" ||
            title === "CySA+" ||
            title === "Ethical Hacking" ||
            title === "Azure Sentinel"
            ? "object-[center_0%]"
            : "object-center"
            }`}
        />
      </div>

      <CardContent className="p-6 flex-1 flex flex-col group-hover:bg-gradient-to-b group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
            {level}
          </span>
          <span className="text-xs text-muted-foreground">{duration}</span>
        </div>

        <h3 className="font-heading text-xl font-semibold mb-3 min-h-[3.5rem] group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3 group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
            <Users size={16} className="group-hover:animate-bounce" />
            <span>{students}</span>
          </div>
          <div className="flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
            <Clock size={16} className="group-hover:animate-pulse" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
            <Award size={16} className="group-hover:animate-spin" />
            <span>Certified</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 font-bold h-12 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none group">
          <Link to={link} className="flex items-center justify-center gap-2">
            <span className="group-hover:mr-2 transition-all duration-300">View Course Details</span>
            <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -mr-4 group-hover:mr-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
