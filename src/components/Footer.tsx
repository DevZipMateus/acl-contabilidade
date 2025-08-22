
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
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Empresa */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/9f12f653-9867-4dde-8c6c-798c6cc07d2c.png" 
                  alt="ALC Serviços Contábeis"
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="font-bold text-lg">ALC Serviços Contábeis</h3>
                  <p className="text-sm text-primary-foreground/80">Qualidade e Responsabilidade</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 mb-6">
                Prestamos informações com qualidade e responsabilidade, 
                contribuindo para o desenvolvimento das empresas e organizações.
              </p>
              <p className="text-sm text-primary-foreground/70">
                <strong>CNPJ:</strong> 29.581.957/0001-50
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
              <nav className="space-y-3">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Sobre Nós
                </button>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contato
                </button>
              </nav>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/90">(55) 98146-5271</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/90">dirceu.conrad@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/90">
                      Rua Dezessete de Maio, 205<br />
                      Sala 202 - Camobi<br />
                      Santa Maria/RS - CEP: 97.105-070
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horário de Funcionamento */}
            <div>
              <h4 className="font-bold text-lg mb-6">Horário de Funcionamento</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/90">
                      <strong>Segunda à Sexta-feira</strong><br />
                      Manhã: 08:00 às 12:00<br />
                      Tarde: 14:00 às 18:00
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://wa.me/5555981465271" 
                  className="btn-accent w-full text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-center md:text-left">
              © {currentYear} ALC Serviços Contábeis. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <p className="text-primary-foreground/70 text-sm">
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
