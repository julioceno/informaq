import { motion } from "framer-motion";
import { contacts } from "../../utils";

export function Contact() {
  return (
    <div className="flex flex-col gap-5 font-inter bg-neutral-700 w-10/12 mx-auto rounded-tr-6xl rounded-bl-6xl p-2 pt-5 pb-10 md:py-10 md:px-16 ">
      <h2 className=" text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-center text-white">
        Entre em contato conosco através de alguma das formas disponiveis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <p className="text-white text-center md:text-start">
          Não deixe seus problemas tecnológicos se acumularem, estamos aqui para
          simplificar sua vida digital. Experimente a excelência em serviços de
          manutenção e soluções inovadoras. Entre em contato agora e descubra
          como podemos otimizar sua experiência tecnológica. Sua jornada para um
          mundo mais eficiente começa aqui!
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {contacts.map(({ href, icon: Icon, label }, index) => (
            <motion.a
              href={href}
              target="_blank"
              className="rounded-sm flex flex-col gap-1 p-4 items-center justify-center border border-gray-200"
              key={`${index}-${label}`}
              whileHover={{ y: -2 }}
            >
              <Icon className="text-white size-10" />
              <div className="border border-gray-200 w-full" />
              <p className="text-white text-base">{label}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
