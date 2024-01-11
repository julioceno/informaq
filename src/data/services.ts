import { PresentationServiceProps } from "../components";

import ComputerImage from "../../public/computer.svg";
import ProgrammingSecondary from "../../public/programming-secondary.svg";
import SolarPanelImage from "../../public/solar-panel.svg";

export const services: PresentationServiceProps[] = [
  {
    title: "Manutenção de Computadores",
    photo: ComputerImage,
    paragraphs: [
      "Seu computador merece estar sempre na melhor forma para garantir um desempenho excepcional. Nossos serviços de manutenção abrangem desde a formatação e limpeza até a montagem e otimização, proporcionando uma experiência fluida e livre de problemas.",
      "Confie em nossa experiência para manter seu computador em condições ideais. Entre em contato conosco e proporcione ao seu dispositivo a atenção que ele merece.",
    ],
    items: [
      {
        title: "Formatação Profissional",
        paragraphs: [
          "Dê um novo começo ao seu sistema operacional com nossa formatação especializada. Removemos todo o excesso, garantindo uma instalação limpa e eficiente.",
        ],
      },
      {
        title: "Limpeza Detalhada",
        paragraphs: [
          "O acúmulo de poeira e resíduos pode prejudicar o desempenho do seu computador. Nossa equipe realiza uma limpeza minuciosa, garantindo que cada componente esteja livre de impurezas.",
        ],
      },
      {
        title: "Montagem Especializada",
        paragraphs: [
          "Se você está pensando em uma atualização de hardware ou precisa de um novo sistema montado, nossos especialistas em montagem garantem uma configuração perfeita, considerando suas necessidades específicas.",
        ],
      },
    ],
  },
  {
    title: "Energia Solar Sustentável para um Futuro Brilhante",
    photo: SolarPanelImage,
    paragraphs: [
      "Descubra o potencial da energia solar com nossos serviços especializados em instalação e manutenção de painéis solares. Na busca por uma fonte de energia mais limpa e eficiente, oferecemos soluções que não apenas economizam dinheiro, mas também contribuem para um futuro mais sustentável.",
      "Faça a transição para a energia solar com confiança. Entre em contato conosco para explorar como podemos criar um sistema solar personalizado para sua residência ou empresa.",
    ],
    items: [
      {
        title: "Instalação de Ponta",
        paragraphs: [
          "Nossa equipe altamente qualificada realiza instalações de painéis solares com precisão e expertise. Desde a escolha do local ideal até a integração perfeita com sua infraestrutura, garantimos um sistema solar eficiente e personalizado para suas necessidades.",
        ],
      },
      {
        title: "Manutenção Confiáve",
        paragraphs: [
          "Para garantir o máximo aproveitamento da sua instalação solar, oferecemos serviços de manutenção regulares. Verificamos e ajustamos cada componente, assegurando que seu sistema opere com eficiência máxima ao longo do tempo.",
        ],
      },
      {
        title: "Eficiência Energética",
        paragraphs: [
          "Além da instalação e manutenção, focamos em otimizar a eficiência energética do seu sistema solar. Nossos especialistas identificam oportunidades de melhoria para maximizar a produção de energia e reduzir os custos a longo prazo.",
        ],
      },
      {
        title: "Compromisso Ambiental",
        paragraphs: [
          "Ao escolher nossos serviços, você não apenas investe em energia limpa, mas também contribui para a redução da pegada de carbono. Estamos comprometidos em criar soluções que beneficiem o meio ambiente e proporcionem economia sustentável.",
        ],
      },
    ],
  },
  {
    title: "Desenvolvimento de Software Elevando sua Presença Digital",
    photo: ProgrammingSecondary,
    paragraphs: [
      "Elevando sua Presença Digital no universo em constante evolução da tecnologia, oferecemos serviços de desenvolvimento de software que transcendem as expectativas. Desde a criação de websites envolventes até soluções avançadas de serviços de cloud, nossa equipe especializada está pronta para transformar suas ideias em realidade digital.",
      "Explore as infinitas possibilidades do desenvolvimento de software conosco. Entre em contato agora e descubra como podemos impulsionar sua presença digital para novos patamares de sucesso.",
    ],
    items: [
      {
        title: "Criação de Websites Personalizados",
        paragraphs: [
          "Destaque-se online com um site feito sob medida para sua marca. Do design intuitivo à funcionalidade impecável, criamos experiências que cativam seus visitantes desde o primeiro clique.",
        ],
      },
      {
        title: "Serviços de Cloud Sob Medida",
        paragraphs: [
          "Migre para o futuro da computação com nossos serviços de cloud personalizados. Armazenamento seguro, acesso flexível e escalabilidade garantida, tudo projetado para atender às suas necessidades específicas.",
        ],
      },
      {
        title: "Desenvolvimento de Aplicações",
        paragraphs: [
          "Impulsione sua eficiência com aplicações feitas sob medida para suas operações. Do planejamento à implementação, estamos comprometidos em entregar soluções que potencializam seus processos internos e externos.",
        ],
      },
      {
        title: "Manutenção e Atualização Contínua",
        paragraphs: [
          "Não apenas desenvolvemos, mas também garantimos a manutenção e atualização contínua de seus sistemas. Fique tranquilo, sabendo que sua presença digital está sempre na vanguarda da tecnologia.",
        ],
      },
    ],
  },
];
