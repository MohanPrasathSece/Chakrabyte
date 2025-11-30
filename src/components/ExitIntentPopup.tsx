import { useState, useEffect, useRef } from 'react';
import { X, Gift, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import OptimizedImage from './OptimizedImage';

interface ExitIntentPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual email service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      
      // Store in localStorage to prevent showing again
      localStorage.setItem('exit-intent-submitted', 'true');
      
      // Close after delay
      setTimeout(() => {
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error('Exit intent submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible, onClose]);

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div
        ref={popupRef}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Wait! Don't Leave Empty-Handed 🎯
                </h2>
                <p className="text-gray-600">
                  Get our exclusive Cybersecurity Starter Kit - FREE!
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">Free Security Assessment Checklist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">Career Path Guide for Cybersecurity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700">Limited Time: 10% Course Discount</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Access →'}
                </Button>
              </form>

              {/* Trust indicators */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 mb-2">
                  Join 1,500+ cybersecurity professionals
                </p>
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
                  <span>No spam</span>
                  <span>•</span>
                  <span>Unsubscribe anytime</span>
                  <span>•</span>
                  <span>Instant access</span>
                </div>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome Aboard! 🎉
              </h2>
              <p className="text-gray-600 mb-4">
                Check your email for your free Cybersecurity Starter Kit!
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  Your exclusive resources and discount code are on their way.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Visual Element */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

// Exit Intent Hook
export const useExitIntent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user already submitted
    const hasSubmitted = localStorage.getItem('exit-intent-submitted');
    if (hasSubmitted) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from top
      if (e.clientY <= 10) {
        setShowPopup(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Trigger on Alt+F4 or Cmd+W (window close attempts)
      if ((e.altKey && e.key === 'F4') || (e.metaKey && e.key === 'w')) {
        e.preventDefault();
        setShowPopup(true);
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return {
    showPopup,
    closePopup: () => setShowPopup(false)
  };
};

export default ExitIntentPopup;
