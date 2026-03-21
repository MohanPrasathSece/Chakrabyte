import { FileSearch, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";
import StickyFooterAndActions from "@/components/StickyFooterAndActions";

const Consultation = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageBanner
        title="Cybersecurity Consultation"
        subtitle="Expert guidance for your security strategy and compliance"
        icon={FileSearch}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Strategic Security Consulting
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Get expert advice on building a robust security posture, meeting compliance requirements, and managing cyber risks effectively.
          </p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link to="/contact">Talk to an Expert</Link>
          </Button>
        </div>
      </section>

      <StickyFooterAndActions />
    </div>
  );
};

export default Consultation;
