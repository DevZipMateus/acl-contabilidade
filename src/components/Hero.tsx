
import { ArrowRight, Shield, Award, Users, Trophy } from 'lucide-react';
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

  const scrollToServicos = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image - Fully Responsive */}
      <div className="absolute inset-0 hero-bg-responsive" style={{
        backgroundImage: `url('/lovable-uploads/4caf9e32-a519-4136-b464-e435e919d850.png')`
      }} />
      
      {/* Overlay with 70% opacity for better text readability */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} className="absolute inset-0 bg-black" />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Content - Two Column Layout */}
          {PROJECT_STATE.hero.showMainContent && (
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
              {/* Text Content - Left Side */}
              <div className="space-y-6 sm:space-y-8 animate-fade-in-up text-left">
                {/* Main Title */}
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="block text-white">ALC</span>
                    <span className="block text-accent">Serviços Contábeis</span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                    Soluções contábeis completas com <span className="text-accent font-semibold">qualidade</span> e <span className="text-accent font-semibold">responsabilidade</span> para o sucesso da sua empresa
                  </p>
                </div>

                {/* Call to Action Buttons */}
                {PROJECT_STATE.hero.showCallToAction && (
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6">
                    <a 
                      href="https://wa.me/5555981465271" 
                      className="btn-accent inline-flex items-center gap-3 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto justify-center" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Falar com Especialista
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button 
                      onClick={scrollToServicos} 
                      className="btn-outline inline-flex items-center gap-3 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto justify-center border-white/60 text-white hover:bg-white hover:text-primary"
                    >
                      <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Nossos Serviços
                    </button>
                  </div>
                )}

                {/* Company Statistics */}
                {PROJECT_STATE.hero.showStatistics && (
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-8 sm:pt-12">
                    <div className="text-left animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">15+</div>
                      <div className="text-sm sm:text-base text-white/80">Anos de Experiência</div>
                    </div>
                    <div className="text-left animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">200+</div>
                      <div className="text-sm sm:text-base text-white/80">Clientes Atendidos</div>
                    </div>
                    <div className="text-left animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">50+</div>
                      <div className="text-sm sm:text-base text-white/80">Serviços Oferecidos</div>
                    </div>
                    <div className="text-left animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">98%</div>
                      <div className="text-sm sm:text-base text-white/80">Satisfação dos Clientes</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Image Content - Right Side */}
              <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="max-w-lg w-full">
                  <img 
                    src="/lovable-uploads/c2632df6-5f5d-4b7d-9d59-9fbdd9002457.png" 
                    alt="ALC Serviços Contábeis - Logo"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator - Responsive */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
