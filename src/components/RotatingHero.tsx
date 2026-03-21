import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, ChevronRight, Target, Award, GraduationCap } from 'lucide-react';

// Add CSS animations to document head
const addAnimationStyles = () => {
  const existingStyle = document.getElementById('rotating-hero-animations');
  if (existingStyle) return;

  const style = document.createElement('style');
  style.id = 'rotating-hero-animations';
  style.textContent = `
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in {
      animation: fade-in 0.8s ease-out;
    }

    .animate-fade-in-delay {
      animation: fade-in 0.8s ease-out 0.2s both;
    }

    .animate-fade-in-delay-2 {
      animation: fade-in 0.8s ease-out 0.4s both;
    }
  `;
  document.head.appendChild(style);
};

const RotatingHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add animation styles on component mount
  useEffect(() => {
    addAnimationStyles();
  }, []);

  const heroContent = [
    {
      id: 1,
      badge: {
        text: "Become SOC Ready in 90 Days",
        icon: Shield,
        link: "/courses/azure-sentinel"
      },
      heading: "The Future of AI in Security",
      subheading: "Discover how AI is transforming industries, driving innovation, and shaping the future of cybersecurity.",
      primaryButton: {
        text: "Get started",
        link: "/contact"
      },
      secondaryButton: {
        text: "Explore courses",
        link: "/courses"
      }
    },
    {
      id: 2,
      badge: {
        text: "30% OFF Limited Time",
        icon: Award,
        link: "/courses"
      },
      heading: "Elevate Your Skills Online",
      subheading: "Upgrade your skills through a special curated courses and real world hands on lab experiences.",
      primaryButton: {
        text: "Enroll now",
        link: "/contact"
      },
      secondaryButton: {
        text: "View courses",
        link: "/courses"
      }
    },
    {
      id: 3,
      badge: {
        text: "Expert-Led Training",
        icon: GraduationCap,
        link: "/courses"
      },
      heading: "Zero to Expert",
      subheading: "Go from fundamentals to field ready. Master offense and defence with our comprehensive VAPT, CEH and SOC course bundles.",
      primaryButton: {
        text: "Start learning",
        link: "/courses"
      },
      secondaryButton: {
        text: "View curriculum",
        link: "/courses"
      }
    },
    {
      id: 4,
      badge: {
        text: "Career Advancement",
        icon: Target,
        link: "/services/career-consulting"
      },
      heading: "Master the Cyber Battlefield",
      subheading: "Elevate your career with industry recognised expertise",
      primaryButton: {
        text: "Get started",
        link: "/contact"
      },
      secondaryButton: {
        text: "Learn more",
        link: "/about"
      }
    },
    {
      id: 5,
      badge: {
        text: "Limited Offer",
        icon: Award,
        link: "/courses"
      },
      heading: "Skill Boost Bonanza",
      subheading: "Discover which topics suit your goals",
      primaryButton: {
        text: "View offers",
        link: "/courses"
      },
      secondaryButton: {
        text: "Learn more",
        link: "/about"
      }
    },
    {
      id: 6,
      badge: {
        text: "Become SOC Ready in 90 Days",
        icon: Shield,
        link: "/courses/azure-sentinel"
      },
      heading: "Master Cybersecurity",
      subheading: "Transform your career in just 90 days. Get hands-on training, real-world projects, and industry-recognized certifications. Join 2,500+ successful cybersecurity professionals.",
      primaryButton: {
        text: "Get started today",
        link: "/contact"
      },
      secondaryButton: {
        text: "Explore courses",
        link: "/courses"
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [heroContent.length]);

  const currentContent = heroContent[currentIndex];
  const BadgeIcon = currentContent.badge.icon;

  return (
    <section className="min-h-screen bg-primary text-white flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-4 pt-24 sm:pt-20 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <Link to={currentContent.badge.link} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 text-sm font-medium">
              <BadgeIcon className="w-4 h-4 text-green-300" />
              <span className="text-green-100">{currentContent.badge.text}</span>
            </Link>

            {/* Headings with fade animation */}
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                {currentContent.heading}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light animate-fade-in-delay">
                {currentContent.subheading}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-fade-in-delay-2">
              <Button
                asChild
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-14 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 !bg-none border-none"
              >
                <Link to={currentContent.primaryButton.link}>
                  {currentContent.primaryButton.text}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:text-white font-bold px-8 h-14 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Link to={currentContent.secondaryButton.link}>
                  {currentContent.secondaryButton.text}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 text-sm opacity-80 animate-fade-in-delay-2">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Job Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certified Trainers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Cyber Defense</h3>
                    <p className="text-xs opacity-75">Professional Certification</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-bold">
                  Active Batch
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-purple-300 to-white rounded-full" />
                </div>
                <div className="flex justify-between text-sm">
                  <span>Course Progress</span>
                  <span className="font-bold">75%</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-black/20 rounded-lg p-4">
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-xs opacity-70">Lab Access</p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4">
                    <p className="text-2xl font-bold">50+</p>
                    <p className="text-xs opacity-70">Tools Covered</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-20 -right-10 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-20 -left-10 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default RotatingHero;
