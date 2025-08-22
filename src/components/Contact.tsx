
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho - Responsive */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Estamos prontos para atender sua empresa. Entre em contato conosco 
            e solicite um orçamento personalizado para seus serviços contábeis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Informações de Contato - Responsive */}
          <div className="animate-fade-in-up">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 sm:mb-8 text-center lg:text-left">
              Fale Conosco
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {/* Telefone */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Telefone</h4>
                  <a 
                    href="tel:+5555981465271" 
                    className="text-foreground hover:text-primary transition-colors text-lg"
                  >
                    (55) 98146-5271
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-primary mb-1">E-mail</h4>
                  <a 
                    href="mailto:dirceu.conrad@gmail.com" 
                    className="text-foreground hover:text-primary transition-colors break-all text-sm sm:text-base"
                  >
                    dirceu.conrad@gmail.com
                  </a>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Endereço</h4>
                  <p className="text-foreground leading-relaxed text-sm sm:text-base">
                    Rua Dezessete de Maio, 205<br />
                    Sala 202 - Camobi<br />
                    Santa Maria/RS<br />
                    CEP: 97.105-070
                  </p>
                </div>
              </div>

              {/* Horários */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Horário de Funcionamento</h4>
                  <p className="text-foreground text-sm sm:text-base">
                    <strong>Segunda à Sexta-feira</strong><br />
                    Manhã: 08:00 às 12:00<br />
                    Tarde: 14:00 às 18:00
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA - Responsive */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-primary rounded-xl sm:rounded-2xl text-white">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 text-center sm:text-left">
                <MessageSquare className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold">WhatsApp</h4>
                  <p className="text-white/90 text-sm sm:text-base">Resposta rápida e direta</p>
                </div>
              </div>
              <p className="mb-4 text-white/90 text-sm sm:text-base text-center sm:text-left">
                Fale conosco pelo WhatsApp para um atendimento mais rápido e personalizado.
              </p>
              <a 
                href="https://wa.me/5555981465271" 
                className="btn-accent w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Iniciar Conversa no WhatsApp
              </a>
            </div>
          </div>

          {/* Card de Informações da Empresa - Responsive */}
          <div className="animate-scale-in">
            <div className="card-elevated bg-white max-w-lg mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <img 
                  src="/lovable-uploads/9f12f653-9867-4dde-8c6c-798c6cc07d2c.png" 
                  alt="ALC Serviços Contábeis"
                  className="w-24 sm:w-28 lg:w-32 h-auto mx-auto mb-4"
                />
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                  ALC Serviços Contábeis
                </h3>
                <p className="text-accent font-medium text-sm sm:text-base">
                  Qualidade e Responsabilidade
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="p-3 sm:p-4 bg-secondary/50 rounded-xl">
                  <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">CNPJ</h4>
                  <p className="text-foreground text-sm sm:text-base">29.581.957/0001-50</p>
                </div>

                <div className="p-3 sm:p-4 bg-secondary/50 rounded-xl">
                  <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Responsável</h4>
                  <p className="text-foreground text-sm sm:text-base">ALC Serviços Contábeis</p>
                </div>

                <div className="p-3 sm:p-4 bg-secondary/50 rounded-xl">
                  <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Localização</h4>
                  <p className="text-foreground text-sm sm:text-base">Santa Maria/RS</p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t text-center">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base px-2">
                  Pronto para ter uma contabilidade de qualidade?
                </p>
                <a 
                  href="https://wa.me/5555981465271" 
                  className="btn-primary w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
