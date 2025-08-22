
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { PROJECT_STATE } from '../config/projectState';

const Hero = () => {
  const scrollToContato = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-end pb-32 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat" 
        style={{
          backgroundImage: `url('/lovable-uploads/6e7ce3d3-4ab4-46aa-8cc0-0033f150d459.png')`
        }} 
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-accent/40" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} 
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content - INTENTIONALLY EMPTY */}
          {/* 
            NOTE: Main content was removed and should remain empty
            PROJECT_STATE.hero.showMainContent = false
            Do not add title, subtitle, buttons, or statistics without explicit user request
          */}
          {PROJECT_STATE.hero.showMainContent && (
            <div className="text-center space-y-8">
              {/* This section is intentionally disabled */}
              {/* Content would go here if enabled */}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
