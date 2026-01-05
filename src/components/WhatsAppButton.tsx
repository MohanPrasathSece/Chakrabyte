import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919482476051"; // Using the second number for WhatsApp
  const message = "Hello! I'm interested in learning more about your courses.";
  
  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-all duration-300 animate-bounce"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </button>
  );
};

export default WhatsAppButton;
