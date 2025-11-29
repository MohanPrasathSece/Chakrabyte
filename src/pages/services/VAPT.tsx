import { ShieldCheck, CheckCircle, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";

const VAPT = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="VAPT Services"
        subtitle="Identify and fix vulnerabilities before attackers exploit them"
        icon={ShieldCheck}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Vulnerability Assessment
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Our VAPT services provide a deep dive into your security posture, identifying weaknesses in your web applications, networks, and cloud infrastructure.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Request Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default VAPT;
