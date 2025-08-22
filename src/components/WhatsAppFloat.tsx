
const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5555981465271"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src="/lovable-uploads/d15ad69b-8ec1-4d91-a0a3-c02575ca513f.png" 
        alt="WhatsApp"
        className="w-6 h-6"
      />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Falar no WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
    </a>
  );
};

export default WhatsAppFloat;
