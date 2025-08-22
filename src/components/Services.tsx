
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
      <div className="container-custom">
        {/* Cabeçalho */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-title text-primary mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços contábeis para atender 
            todas as necessidades da sua empresa com qualidade e eficiência.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicos.map((servico, index) => (
            <div 
              key={index}
              className="card-elevated group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <servico.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{servico.titulo}</h3>
                <p className="text-muted-foreground mb-4">{servico.descricao}</p>
              </div>

              <div className="space-y-2">
                {servico.detalhes.map((detalhe, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{detalhe}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <a 
                  href="https://wa.me/5555981465271" 
                  className="btn-outline w-full text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Diferenciais */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12 animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-subsection-title text-primary mb-6">
                Por que escolher nossos serviços?
              </h3>
              <div className="space-y-4">
                {diferenciais.map((diferencial, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground">{diferencial}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <PieChart className="w-20 h-20 text-primary mx-auto lg:ml-auto lg:mr-0 mb-4" />
                <h4 className="text-2xl font-bold text-primary mb-4">
                  Horário de Funcionamento
                </h4>
                <div className="space-y-2 text-foreground">
                  <p><strong>Segunda à Sexta-feira</strong></p>
                  <p>Manhã: 08:00 às 12:00</p>
                  <p>Tarde: 14:00 às 18:00</p>
                </div>
                <div className="mt-6">
                  <a 
                    href="https://wa.me/5555981465271" 
                    className="btn-primary"
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
