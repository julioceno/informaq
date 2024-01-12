import { Clock, Cloud, Headphones } from "lucide-react";
import { ReactNode } from "react";
import DoubleQuatationMarks from "../../../public/double-quatation-marks.svg";

interface Props {
  icon: ReactNode;
  title: string;
  paragraph: string;
}

function Feature({ icon, paragraph, title }: Props) {
  return (
    <div className="flex flex-col  justify-start items-center font-poppins">
      <div className="h-14 md:h-16 w-14 md:w-16 bg-main-blue/15 flex justify-center items-center rounded-full">
        {icon}
      </div>
      <h3 className="font-extrabold text-base md:text-xl">{title}</h3>
      <p className="font-light text-center text-sm md:text-base">{paragraph}</p>
    </div>
  );
}

const features: Props[] = [
  {
    icon: <Clock className="text-main-blue size-8 md:size-10" />,
    title: "Velocidade",
    paragraph:
      "Em um mundo onde cada segundo importa, garantimos entregas rápidas sem comprometer a qualidade. Seu equipamento será atendido e devolvido em tempo recorde, proporcionando soluções eficientes quando você mais precisa.",
  },
  {
    icon: <Cloud className="text-main-blue size-8 md:size-10" />,
    title: "Cloud",
    paragraph:
      "Eleve sua experiência digital com nosso serviço de cloud. Armazenamento seguro, acesso remoto e colaboração simplificada. Deixe-nos guiar você pelo mundo da nuvem, proporcionando flexibilidade e segurança para seus dados.",
  },
  {
    icon: <Headphones className="text-main-blue size-8 md:size-10 " />,
    title: "Suporte",
    paragraph:
      "Nosso compromisso vai além dos serviços. Oferecemos suporte contínuo para garantir que cada solução funcione impecavelmente. Nossa equipe está pronta para responder às suas dúvidas e resolver problemas, proporcionando a tranquilidade para que você possa focar no seu trabalho.",
  },
];

export function About() {
  return (
    <div className="flex flex-col items-center w-8/12 mx-auto gap-5 md:gap-10">
      <div className="relative">
        <img
          src={DoubleQuatationMarks}
          className="absolute opacity-15 -left-[5%] md:-left-[10%] md:-top-[30%] h-14 md:h-24"
        />

        <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-center">
          Conheça um pouco da Informaq
        </h2>
      </div>
      <p className="font-inter font-light text-lg text-center md:text-start">
        Em 14//12/1998 a empresa denominada REI DAS MÁQUINAS. Empresa na qual
        faziamos manutenção em máquinas de escrever, mimeógrafos, fax e
        calculadoras e já estavamos consertando computadores e impressoras desde
        1996. Migramos com o CNPJ para INFORMAQ LTDA. E agradecemos aos nossos
        clientes e amigos que estão conoso até hoje. Lá se vão 25 anos de muita
        dedicação e comprometimento com nossos clientes.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 md:gap-11 ">
        {features.map((feature, index) => (
          <Feature
            icon={feature.icon}
            paragraph={feature.paragraph}
            title={feature.title}
            key={`${index}-${feature.title}`}
          />
        ))}
      </div>
    </div>
  );
}
