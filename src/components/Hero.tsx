
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

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
    <section id="inicio" className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/6e7ce3d3-4ab4-46aa-8cc0-0033f150d459.png')`
      }} />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/60" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Conteúdo Principal */}
          <div className="text-center animate-fade-in-up">
            <h1 className="text-hero mb-6">
              Serviços Contábeis com 
              <span className="text-accent block mt-2">Qualidade e Responsabilidade</span>
            </h1>
            
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Contribuímos para o desenvolvimento das empresas e organizações com nossos valores de 
              <strong> responsabilidade, respeito, experiência e integridade</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://wa.me/5555981465271" className="btn-accent inline-flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
                <span>Solicitar Orçamento</span>
                <ArrowRight size={20} />
              </a>
              
              <button onClick={scrollToContato} className="btn-outline border-white/60 text-white hover:bg-white hover:text-primary">
                Falar Conosco
              </button>
            </div>

            {/* Badges de Confiança */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-accent" />
                <p className="text-sm text-white/80">Segurança</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-accent" />
                <p className="text-sm text-white/80">Experiência</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-accent" />
                <p className="text-sm text-white/80">Confiança</p>
              </div>
            </div>
          </div>
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
