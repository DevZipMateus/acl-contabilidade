
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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center md:bg-top bg-no-repeat" 
           style={{
             backgroundImage: `url('/lovable-uploads/6e7ce3d3-4ab4-46aa-8cc0-0033f150d459.png')`
           }} />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/50" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Conteúdo Principal */}
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
              <span className="block">Excelência em</span>
              <span className="block text-accent">Serviços Contábeis</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 lg:mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Mais de 20 anos de experiência oferecendo soluções contábeis 
              personalizadas para o sucesso do seu negócio
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 lg:mb-16">
              <button 
                onClick={scrollToContato}
                className="btn-accent text-base sm:text-lg w-full sm:w-auto"
              >
                Solicite um Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a 
                href="https://wa.me/5555981465271" 
                className="btn-outline text-base sm:text-lg w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco
              </a>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-300">
                <Shield className="h-10 w-10 lg:h-12 lg:w-12 text-accent mb-4 mx-auto" />
                <h3 className="text-lg lg:text-xl font-semibold mb-2">Segurança Total</h3>
                <p className="text-white/80 text-sm lg:text-base">Proteção completa dos seus dados e informações fiscais</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-300">
                <Award className="h-10 w-10 lg:h-12 lg:w-12 text-accent mb-4 mx-auto" />
                <h3 className="text-lg lg:text-xl font-semibold mb-2">Qualidade Comprovada</h3>
                <p className="text-white/80 text-sm lg:text-base">Mais de duas décadas de excelência em serviços contábeis</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <Users className="h-10 w-10 lg:h-12 lg:w-12 text-accent mb-4 mx-auto" />
                <h3 className="text-lg lg:text-xl font-semibold mb-2">Atendimento Personalizado</h3>
                <p className="text-white/80 text-sm lg:text-base">Soluções sob medida para cada tipo de negócio</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
