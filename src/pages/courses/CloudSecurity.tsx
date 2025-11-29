import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Users } from "lucide-react";

const CloudSecurity = () => {
  const modules = [
    { title: "Cloud Computing Fundamentals", topics: ["Cloud service models", "Deployment models", "Cloud providers overview", "Shared responsibility model"] },
    { title: "AWS Security", topics: ["IAM policies", "S3 bucket security", "EC2 security groups", "VPC configuration", "AWS security tools", "CloudTrail", "GuardDuty"] },
    { title: "Azure Security", topics: ["Azure AD", "Resource groups", "NSG configuration", "Azure Security Center", "Key Vault", "Azure Sentinel"] },
    { title: "Identity and Access Management", topics: ["Cloud IAM", "Least privilege", "Role-based access", "Service accounts", "Federation", "MFA"] },
    { title: "Data Security in Cloud", topics: ["Encryption at rest", "Encryption in transit", "Key management", "Data classification", "DLP solutions"] },
    { title: "Container Security", topics: ["Docker security", "Kubernetes security", "Image scanning", "Runtime protection", "Container isolation"] },
    { title: "Serverless Security", topics: ["Lambda security", "Azure Functions", "API Gateway", "Event-driven security", "Function vulnerabilities"] },
    { title: "Cloud Network Security", topics: ["Virtual networks", "Security groups", "WAF", "DDoS protection", "VPN", "Direct Connect"] },
    { title: "Compliance and Governance", topics: ["Compliance frameworks", "Cloud auditing", "Policy enforcement", "Cost management", "CSPM tools"] },
    { title: "Cloud Incident Response", topics: ["Cloud forensics", "Log analysis", "Threat detection", "Automated response", "Backup and recovery"] }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Cloud Security (AWS + Azure)</h1>
            <p className="text-xl mb-6 opacity-90">Secure cloud infrastructure and applications on AWS and Azure platforms</p>
            <div className="flex flex-wrap gap-4 mb-6 opacity-90">
              <div className="flex items-center gap-2"><Clock size={20} /><span>12 Weeks</span></div>
              <div className="flex items-center gap-2"><Award size={20} /><span>Certification</span></div>
              <div className="flex items-center gap-2"><Users size={20} /><span>700+ Students</span></div>
            </div>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact?course=cloud-security">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-6">Course Overview</h2>
          <p className="text-muted-foreground">Master cloud security for AWS and Azure. Learn to secure cloud infrastructure, implement IAM policies, protect data, and ensure compliance. Perfect for cloud engineers and security professionals.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8">Course Modules</h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div key={index} className="bg-light-section p-6 rounded-lg">
                <h3 className="font-heading text-lg font-semibold mb-3">Module {index + 1}: {module.title}</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary">•</span><span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Become a Cloud Security Expert</h2>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact?course=cloud-security">Enroll Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CloudSecurity;
