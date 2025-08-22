
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Cabeçalho */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-title text-primary mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender sua empresa. Entre em contato conosco 
            e solicite um orçamento personalizado para seus serviços contábeis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-primary mb-8">
              Fale Conosco
            </h3>

            <div className="space-y-6">
              {/* Telefone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Telefone</h4>
                  <a 
                    href="tel:+5555981465271" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    (55) 98146-5271
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">E-mail</h4>
                  <a 
                    href="mailto:dirceu.conrad@gmail.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    dirceu.conrad@gmail.com
                  </a>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Endereço</h4>
                  <p className="text-foreground leading-relaxed">
                    Rua Dezessete de Maio, 205<br />
                    Sala 202 - Camobi<br />
                    Santa Maria/RS<br />
                    CEP: 97.105-070
                  </p>
                </div>
              </div>

              {/* Horários */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Horário de Funcionamento</h4>
                  <p className="text-foreground">
                    <strong>Segunda à Sexta-feira</strong><br />
                    Manhã: 08:00 às 12:00<br />
                    Tarde: 14:00 às 18:00
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 p-6 bg-gradient-primary rounded-2xl text-white">
              <div className="flex items-center space-x-4 mb-4">
                <MessageSquare className="w-8 h-8 text-accent" />
                <div>
                  <h4 className="text-xl font-bold">WhatsApp</h4>
                  <p className="text-white/90">Resposta rápida e direta</p>
                </div>
              </div>
              <p className="mb-4 text-white/90">
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

          {/* Card de Informações da Empresa */}
          <div className="animate-scale-in">
            <div className="card-elevated bg-white">
              <div className="text-center mb-8">
                <img 
                  src="/lovable-uploads/9f12f653-9867-4dde-8c6c-798c6cc07d2c.png" 
                  alt="ALC Serviços Contábeis"
                  className="w-32 h-auto mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-primary mb-2">
                  ALC Serviços Contábeis
                </h3>
                <p className="text-accent font-medium">
                  Qualidade e Responsabilidade
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <h4 className="font-semibold text-primary mb-2">CNPJ</h4>
                  <p className="text-foreground">29.581.957/0001-50</p>
                </div>

                <div className="p-4 bg-secondary/50 rounded-xl">
                  <h4 className="font-semibold text-primary mb-2">Responsável</h4>
                  <p className="text-foreground">ALC Serviços Contábeis</p>
                </div>

                <div className="p-4 bg-secondary/50 rounded-xl">
                  <h4 className="font-semibold text-primary mb-2">Localização</h4>
                  <p className="text-foreground">Santa Maria/RS</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t text-center">
                <p className="text-muted-foreground mb-4">
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
