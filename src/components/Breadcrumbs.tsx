import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  // Generate breadcrumbs from current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', path: '/' }
    ];

    // Define custom labels for specific paths
    const pathLabels: Record<string, string> = {
      'courses': 'Courses',
      'services': 'Services',
      'about': 'About',
      'contact': 'Contact',
      'ethical-hacking': 'Ethical Hacking',
      'soc-analyst': 'SOC Analyst',
      'cyber-forensics': 'Cyber Forensics',
      'network-security': 'Network Security',
      'web-app-security': 'Web App Security',
      'cloud-security': 'Cloud Security',
      'red-team': 'Red Team Operations',
      'blue-team': 'Blue Team Defense',
      'malware-analysis': 'Malware Analysis',
      'cybersecurity-basics': 'Cybersecurity Basics',
      'corporate-training': 'Corporate Training',
      'college-workshops': 'College Workshops',
      'device-security': 'Device Security',
      'vapt': 'VAPT Services',
      'consultation': 'Security Consulting'
    };

    // Build breadcrumb path
    let currentPath = '';
    pathSegments.forEach(segment => {
      currentPath += `/${segment}`;
      const label = pathLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ');
      breadcrumbs.push({
        label,
        path: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isFirst = index === 0;

            return (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2 flex-shrink-0" />
                )}
                
                {isFirst ? (
                  <Link
                    to={item.path || '/'}
                    className="flex items-center text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    <Home className="w-4 h-4 mr-1" />
                    <span>{item.label}</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path || '#'}
                    className="text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
