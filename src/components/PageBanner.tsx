import { LucideIcon } from "lucide-react";

interface PageBannerProps {
    title: string;
    subtitle: string;
    icon?: LucideIcon;
}

const PageBanner = ({ title, subtitle, icon: Icon }: PageBannerProps) => {
    return (
        <div className="bg-primary text-white py-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                {Icon && (
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                        <Icon className="w-8 h-8 text-white" />
                    </div>
                )}
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto font-light">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default PageBanner;
