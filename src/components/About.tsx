
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
      <div className="container-custom">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-title text-primary mb-4">
            Sobre a ALC Serviços Contábeis
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos um escritório contábil comprometido em oferecer soluções completas 
            para empresas e organizações, sempre pautados em nossos valores fundamentais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Missão e Visão */}
          <div className="animate-fade-in-up">
            <div className="space-y-8">
              {/* Missão */}
              <div className="card-primary">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">Nossa Missão</h3>
                    <p className="text-lg text-foreground leading-relaxed">
                      Prestar informações com <strong>qualidade e responsabilidade</strong> aos usuários, 
                      garantindo excelência em todos os serviços contábeis oferecidos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visão */}
              <div className="card-primary">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">Nossa Visão</h3>
                    <p className="text-lg text-foreground leading-relaxed">
                      <strong>Contribuir para o desenvolvimento</strong> das empresas e organizações, 
                      sendo reconhecidos pela qualidade e inovação em nossos serviços.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem/Logo */}
          <div className="text-center animate-scale-in">
            <div className="bg-white rounded-3xl shadow-2xl p-12 inline-block">
              <img 
                src="/lovable-uploads/9f12f653-9867-4dde-8c6c-798c6cc07d2c.png" 
                alt="ALC Serviços Contábeis - Sobre nós"
                className="w-64 h-auto mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-subsection-title text-primary">
              Nossos Valores
            </h3>
            <p className="text-lg text-muted-foreground">
              Os pilares que sustentam nossa atuação profissional
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div 
                key={index}
                className="card-primary text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <valor.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{valor.titulo}</h4>
                <p className="text-muted-foreground leading-relaxed">{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-primary rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para ter a ALC como sua parceira contábil?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Entre em contato conosco e descubra como podemos contribuir 
              para o desenvolvimento da sua empresa.
            </p>
            <a 
              href="https://wa.me/5555981465271" 
              className="btn-accent"
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
