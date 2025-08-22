
import { Target, Eye, Heart, Award } from 'lucide-react';

const About = () => {
  const valores = [
    {
      icon: Heart,
      titulo: "Responsabilidade",
      descricao: "Comprometimento total com nossos clientes e suas necessidades contábeis."
    },
    {
      icon: Award,
      titulo: "Respeito",
      descricao: "Tratamento ético e respeitoso em todas as nossas relações profissionais."
    },
    {
      icon: Target,
      titulo: "Experiência",
      descricao: "Anos de conhecimento aplicado em soluções contábeis eficientes."
    },
    {
      icon: Eye,
      titulo: "Integridade",
      descricao: "Transparência e honestidade em todos os processos e procedimentos."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção - Responsive */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Sobre a ALC Serviços Contábeis
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Somos um escritório contábil comprometido em oferecer soluções completas 
            para empresas e organizações, sempre pautados em nossos valores fundamentais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16">
          {/* Missão e Visão - Responsive */}
          <div className="animate-fade-in-up">
            <div className="space-y-6 sm:space-y-8">
              {/* Missão */}
              <div className="card-primary">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Nossa Missão</h3>
                    <p className="text-base sm:text-lg text-foreground leading-relaxed">
                      Prestar informações com <strong>qualidade e responsabilidade</strong> aos usuários, 
                      garantindo excelência em todos os serviços contábeis oferecidos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visão */}
              <div className="card-primary">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Nossa Visão</h3>
                    <p className="text-base sm:text-lg text-foreground leading-relaxed">
                      <strong>Contribuir para o desenvolvimento</strong> das empresas e organizações, 
                      sendo reconhecidos pela qualidade e inovação em nossos serviços.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem/Logo - Responsive */}
          <div className="text-center animate-scale-in order-first lg:order-last">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 lg:p-12 inline-block max-w-full">
              <img 
                src="/lovable-uploads/9f12f653-9867-4dde-8c6c-798c6cc07d2c.png" 
                alt="ALC Serviços Contábeis - Sobre nós"
                className="w-48 sm:w-56 lg:w-64 h-auto mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Valores - Responsive Grid */}
        <div className="animate-fade-in-up">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4">
              Nossos Valores
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Os pilares que sustentam nossa atuação profissional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {valores.map((valor, index) => (
              <div 
                key={index}
                className="card-primary text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <valor.icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-primary mb-3">{valor.titulo}</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Responsive */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Pronto para ter a ALC como sua parceira contábil?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90 px-4">
              Entre em contato conosco e descubra como podemos contribuir 
              para o desenvolvimento da sua empresa.
            </p>
            <a 
              href="https://wa.me/5555981465271" 
              className="btn-accent inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
