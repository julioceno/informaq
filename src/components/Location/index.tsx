import { Info, InfoProps } from "./Info";
import { Maps } from "./Maps";

const informations: InfoProps[] = [
  {
    title: "Endereço",
    paragraphs: [
      "Rua Sebastião José Teixeira, 43",
      "Centro de Itaguái RJ",
      "23812-420",
    ],
  },
  {
    title: "Horário de Funcionamento",
    paragraphs: ["Segunda a Sexta", "08 às 17h"],
  },
];

export function Location() {
  return (
    <div className="min-h-80">
      <h2 className="font-inter text-center text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold">
        Localização
      </h2>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="h-full min-h-80 md:w-2/3">
          <Maps />
        </div>
        <div className="md:w-1/3 flex flex-col gap-5 xxs:flex-row md:flex-col">
          {informations.map((info, index) => (
            <Info title={info.title} paragraphs={info.paragraphs} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
