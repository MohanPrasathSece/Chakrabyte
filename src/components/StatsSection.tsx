import { useEffect, useRef, useState } from "react";
import { Users, GraduationCap, Building2, Award } from "lucide-react";

type StatConfig = {
  icon: any;
  value: number;
  suffix?: string;
  label: string;
};

const STATS: StatConfig[] = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Students Trained",
  },
  {
    icon: GraduationCap,
    value: 200,
    suffix: "+",
    label: "Workshops Conducted",
  },
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "Corporate Clients",
  },
  {
    icon: Award,
    value: 100,
    suffix: "+",
    label: "College Partnerships",
  },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1500; // ms
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);

      setCounts(
        STATS.map((stat) =>
          Math.round(stat.value * progress)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon size={32} />
              </div>
              <div className="font-heading text-3xl font-bold mb-2">
                {counts[index].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
