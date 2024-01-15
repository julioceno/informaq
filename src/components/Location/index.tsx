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
      <h2 className="font-inter text-center md:text-start text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold">
        Localização
      </h2>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="h-full min-h-80 md:w-2/3">
          <Maps />
          {/*  <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229.7558102621398!2d-43.773732!3d-22.873024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf88b0c9e1cc9%3A0xcfef5d0c42e8a0cd!2sInformaq%20Ltda!5e0!3m2!1sen!2sus!4v1705238447606!5m2!1sen!2sus"
            width="100%"
            loading="lazy"
            className="min-h-72 md:min-h-96"
          /> */}
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
