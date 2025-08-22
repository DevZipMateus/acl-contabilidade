import { ArrowRight, Shield, Award, Users, CheckCircle } from 'lucide-react';
const Hero = () => {
  const scrollToContato = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="inicio" className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('/lovable-uploads/9352ef0f-b64b-4697-8e2f-fbcc765ddb65.png')`
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-hero mb-6">
              Serviços Contábeis com 
              <span className="text-accent block mt-2">Qualidade e Responsabilidade</span>
            </h1>
            
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Contribuímos para o desenvolvimento das empresas e organizações com nossos valores de 
              <strong> responsabilidade, respeito, experiência e integridade</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="https://wa.me/5555981465271" className="btn-accent inline-flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
                <span>Solicitar Orçamento</span>
                <ArrowRight size={20} />
              </a>
              
              <button onClick={scrollToContato} className="btn-outline border-white/60 text-white hover:bg-white hover:text-primary">
                Falar Conosco
              </button>
            </div>

            {/* Badges de Confiança */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
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

          {/* Card de Informações */}
          <div className="animate-scale-in">
            <div className="card-elevated backdrop-blur-md border-white/20 bg-[#6c6a6a]/[0.31]">
              <div className="text-center mb-6">
                
                <h3 className="text-2xl font-bold mb-2">Por que escolher a ALC?</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-white/90">Informações com qualidade e responsabilidade</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-white/90">Contribuição para desenvolvimento empresarial</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-white/90">Atendimento personalizado e profissional</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-white/90">Localizado em Santa Maria/RS</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-center text-white/80 text-sm">
                  <strong>CNPJ:</strong> 29.581.957/0001-50
                </p>
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
    </section>;
};
export default Hero;