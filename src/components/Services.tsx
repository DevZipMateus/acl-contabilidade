
import { Calculator, FileText, TrendingUp, Shield, Users, Briefcase, PieChart, CheckCircle } from 'lucide-react';

const Services = () => {
  const servicos = [
    {
      icon: Calculator,
      titulo: "Contabilidade Geral",
      descricao: "Escrituração contábil completa, balancetes e demonstrações financeiras.",
      detalhes: ["Livros contábeis", "Balancetes mensais", "DRE", "Balanço patrimonial"]
    },
    {
      icon: FileText,
      titulo: "Obrigações Fiscais",
      descricao: "Gestão completa de todas as obrigações tributárias da sua empresa.",
      detalhes: ["Declarações fiscais", "Apuração de impostos", "SPED", "ECF"]
    },
    {
      icon: Users,
      titulo: "Departamento Pessoal",
      descricao: "Gestão completa da folha de pagamento e obrigações trabalhistas.",
      detalhes: ["Folha de pagamento", "eSocial", "FGTS", "Rescisões"]
    },
    {
      icon: Briefcase,
      titulo: "Consultoria Empresarial",
      descricao: "Orientação estratégica para o crescimento sustentável do seu negócio.",
      detalhes: ["Planejamento tributário", "Análise financeira", "Gestão de custos", "Consultoria"]
    },
    {
      icon: TrendingUp,
      titulo: "Análises Gerenciais",
      descricao: "Relatórios e indicadores para tomada de decisões estratégicas.",
      detalhes: ["Relatórios gerenciais", "Indicadores financeiros", "Análise de resultados", "Dashboards"]
    },
    {
      icon: Shield,
      titulo: "Compliance e Auditoria",
      descricao: "Garantia de conformidade com normas e legislações vigentes.",
      detalhes: ["Auditoria interna", "Compliance fiscal", "Revisão contábil", "Adequações normativas"]
    }
  ];

  const diferenciais = [
    "Atendimento personalizado e próximo ao cliente",
    "Equipe especializada e experiente",
    "Tecnologia moderna para maior eficiência",
    "Suporte completo em todas as áreas contábeis",
    "Localização estratégica em Santa Maria/RS",
    "Horário de funcionamento amplo e flexível"
  ];

  return (
    <section id="servicos" className="section-padding">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho - Responsive */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Oferecemos uma gama completa de serviços contábeis para atender 
            todas as necessidades da sua empresa com qualidade e eficiência.
          </p>
        </div>

        {/* Grid de Serviços - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {servicos.map((servico, index) => (
            <div 
              key={index}
              className="card-elevated group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <servico.icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">{servico.titulo}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">{servico.descricao}</p>
              </div>

              <div className="space-y-2 mb-6">
                {servico.detalhes.map((detalhe, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground">{detalhe}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t">
                <a 
                  href="https://wa.me/5555981465271" 
                  className="btn-outline w-full text-center text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Diferenciais - Responsive */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6 text-center lg:text-left">
                Por que escolher nossos serviços?
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {diferenciais.map((diferencial, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-accent mt-0.5 sm:mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-foreground">{diferencial}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center order-1 lg:order-2">
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl max-w-sm mx-auto">
                <PieChart className="w-16 sm:w-20 h-16 sm:h-20 text-primary mx-auto mb-4" />
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-4">
                  Horário de Funcionamento
                </h4>
                <div className="space-y-1 sm:space-y-2 text-foreground text-sm sm:text-base">
                  <p><strong>Segunda à Sexta-feira</strong></p>
                  <p>Manhã: 08:00 às 12:00</p>
                  <p>Tarde: 14:00 às 18:00</p>
                </div>
                <div className="mt-4 sm:mt-6">
                  <a 
                    href="https://wa.me/5555981465271" 
                    className="btn-primary text-sm sm:text-base w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar Reunião
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
