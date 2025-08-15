import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5541999785930"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFloat;