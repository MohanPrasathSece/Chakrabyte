import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Clock, Users, Shield, Target, BookOpen, Briefcase, Star } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'courses' | 'services';
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, type }) => {
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Courses data with previews
  const coursesData = [
    {
      category: 'Popular Courses',
      icon: <Star className="w-4 h-4" />,
      items: [
        {
          title: 'Ethical Hacking',
          path: '/courses/ethical-hacking',
          description: 'Learn penetration testing and security assessment',
          duration: '3 Months',
          level: 'Beginner to Advanced',
          image: '/course-ethical-hacking.webp'
        },
        {
          title: 'SOC Analyst',
          path: '/courses/soc-analyst',
          description: 'Master security operations and threat analysis',
          duration: '2 Months',
          level: 'Intermediate',
          image: '/course-soc-analyst.webp'
        },
        {
          title: 'Cyber Forensics',
          path: '/courses/cyber-forensics',
          description: 'Digital forensics and incident response',
          duration: '3 Months',
          level: 'Intermediate',
          image: '/course-forensics.webp'
        }
      ]
    },
    {
      category: 'Security Domains',
      icon: <Shield className="w-4 h-4" />,
      items: [
        {
          title: 'Network Security',
          path: '/courses/network-security',
          description: 'Network defense and security protocols',
          duration: '2 Months',
          level: 'Intermediate',
          image: '/course-network-security.webp'
        },
        {
          title: 'Web App Security',
          path: '/courses/web-app-security',
          description: 'Application security and testing',
          duration: '2 Months',
          level: 'Intermediate',
          image: '/course-web-app-security.webp'
        },
        {
          title: 'Cloud Security',
          path: '/courses/cloud-security',
          description: 'Cloud platform security and compliance',
          duration: '2 Months',
          level: 'Advanced',
          image: '/course-cloud-security.webp'
        }
      ]
    },
    {
      category: 'Specialized Training',
      icon: <Target className="w-4 h-4" />,
      items: [
        {
          title: 'Red Team Operations',
          path: '/courses/red-team',
          description: 'Offensive security and adversarial tactics',
          duration: '3 Months',
          level: 'Advanced',
          image: '/course-red-team.webp'
        },
        {
          title: 'Blue Team Defense',
          path: '/courses/blue-team',
          description: 'Defensive security and incident response',
          duration: '3 Months',
          level: 'Advanced',
          image: '/course-blue-team.webp'
        },
        {
          title: 'Malware Analysis',
          path: '/courses/malware-analysis',
          description: 'Reverse engineering and malware analysis',
          duration: '3 Months',
          level: 'Advanced',
          image: '/course-malware-analysis.webp'
        }
      ]
    }
  ];

  // Services data with previews
  const servicesData = [
    {
      category: 'Training Programs',
      icon: <BookOpen className="w-4 h-4" />,
      items: [
        {
          title: 'Corporate Training',
          path: '/services/corporate-training',
          description: 'Customized cybersecurity training for organizations',
          duration: 'Custom',
          format: 'On-site/Online',
          image: '/service-corporate-training.webp'
        },
        {
          title: 'College Workshops',
          path: '/services/college-workshops',
          description: 'Specialized workshops for educational institutions',
          duration: '1-5 Days',
          format: 'On-site',
          image: '/service-college-workshops.webp'
        }
      ]
    },
    {
      category: 'Security Services',
      icon: <Shield className="w-4 h-4" />,
      items: [
        {
          title: 'VAPT Services',
          path: '/services/vapt',
          description: 'Vulnerability Assessment and Penetration Testing',
          duration: '1-2 Weeks',
          format: 'On-site/Remote',
          image: '/service-vapt.webp'
        },
        {
          title: 'Device Security',
          path: '/services/device-security',
          description: 'Mobile and IoT device security assessment',
          duration: '1 Week',
          format: 'Remote',
          image: '/service-device-security.webp'
        }
      ]
    },
    {
      category: 'Consulting',
      icon: <Briefcase className="w-4 h-4" />,
      items: [
        {
          title: 'Security Consulting',
          path: '/services/consultation',
          description: 'Strategic cybersecurity consulting and advisory',
          duration: 'Ongoing',
          format: 'On-site/Remote',
          image: '/service-consultation.webp'
        }
      ]
    }
  ];

  const data = type === 'courses' ? coursesData : servicesData;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
      <div ref={menuRef} className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center space-x-2 text-gray-900">
                {category.icon}
                <h3 className="font-semibold text-lg">{category.category}</h3>
              </div>

              {/* Category Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    to={item.path}
                    onClick={onClose}
                    className={`group block p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200 ${
                      location.pathname === item.path ? 'border-purple-500 bg-purple-50' : ''
                    }`}
                  >
                    <div className="flex space-x-4">
                      {/* Image Preview */}
                      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                        <OptimizedImage
                          src={item.image}
                          alt={item.title}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          {item.duration && (
                            <span className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{item.duration}</span>
                            </span>
                          )}
                          {item.level && (
                            <span className="flex items-center space-x-1">
                              <Target className="w-3 h-3" />
                              <span>{item.level}</span>
                            </span>
                          )}
                          {item.format && (
                            <span className="flex items-center space-x-1">
                              <Users className="w-3 h-3" />
                              <span>{item.format}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Looking for something specific?</h4>
              <p className="text-sm text-gray-600 mt-1">
                Can't find what you're looking for? We'd love to help.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                onClick={onClose}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to={type === 'courses' ? '/courses' : '/services'}
                onClick={onClose}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                View All {type === 'courses' ? 'Courses' : 'Services'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
