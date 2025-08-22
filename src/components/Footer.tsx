
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - Responsive */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Empresa */}
            <div className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/9f12f653-9867-4dde-8c6c-798c6cc07d2c.png" 
                  alt="ALC Serviços Contábeis"
                  className="h-10 sm:h-12 w-auto flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-base sm:text-lg">ALC Serviços Contábeis</h3>
                  <p className="text-xs sm:text-sm text-primary-foreground/80">Qualidade e Responsabilidade</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 mb-4 sm:mb-6 text-sm sm:text-base">
                Prestamos informações com qualidade e responsabilidade, 
                contribuindo para o desenvolvimento das empresas e organizações.
              </p>
              <p className="text-xs sm:text-sm text-primary-foreground/70">
                <strong>CNPJ:</strong> 29.581.957/0001-50
              </p>
            </div>

            {/* Links Rápidos */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Links Rápidos</h4>
              <nav className="space-y-2 sm:space-y-3">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base mx-auto md:mx-0"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base mx-auto md:mx-0"
                >
                  Sobre Nós
                </button>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base mx-auto md:mx-0"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base mx-auto md:mx-0"
                >
                  Contato
                </button>
              </nav>
            </div>

            {/* Contato */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Contato</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-1 md:space-y-0 md:space-x-3">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/90 text-sm sm:text-base">(55) 98146-5271</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-1 md:space-y-0 md:space-x-3">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-primary-foreground/90 text-xs sm:text-sm break-all">dirceu.conrad@gmail.com</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-1 md:space-y-0 md:space-x-3">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/90 text-xs sm:text-sm">
                      Rua Dezessete de Maio, 205<br />
                      Sala 202 - Camobi<br />
                      Santa Maria/RS - CEP: 97.105-070
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horário de Funcionamento */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Horário de Funcionamento</h4>
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-1 md:space-y-0 md:space-x-3">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/90 text-xs sm:text-sm">
                      <strong>Segunda à Sexta-feira</strong><br />
                      Manhã: 08:00 às 12:00<br />
                      Tarde: 14:00 às 18:00
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <a 
                  href="https://wa.me/5555981465271" 
                  className="btn-accent w-full text-center text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer - Responsive */}
        <div className="py-4 sm:py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-primary-foreground/70 text-xs sm:text-sm">
              © {currentYear} ALC Serviços Contábeis. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <p className="text-primary-foreground/70 text-xs sm:text-sm">
                Desenvolvido com qualidade e responsabilidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
