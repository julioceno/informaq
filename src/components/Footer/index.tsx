import { useEffect, useState } from "react";
import { contacts } from "../../utils";

export function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();

    setYear(currentYear);
  }, []);

  return (
    <footer className="flex flex-col gap-0.5">
      <div className="flex flex-col xxs:flex-row justify-between items-center xxs:items-end gap-1  xxs:gap-3">
        <div className="flex items-end gap-1">
          <h3 className="text-2xl md:text-3xl font-poppins text-zinc-700 font-bold">
            INFORMAQ
          </h3>
          <span className="text-main-blue text-sm md:text-base">Ltda</span>
        </div>
        <div className="flex flex-col md:flex-row-reverse w-full justify-between items-center xxs:items-start">
          <div className="flex  self-center xxs:self-end ">
            {contacts.map(({ href, icon: Icon }, index) => (
              <a
                href={href}
                target="_blank"
                className="hover:bg-zinc-600 py-0.5 px-1 rounded-md group peer"
                key={index}
              >
                <Icon className="text-zinc-600 size-6 group-hover:text-white duration-300" />
              </a>
            ))}
          </div>
          <p className="flex inter text-xs md:text-sm font-light justify-end text-end xxs:self-end">
            &copy; Todos os direitos reservados {year}
          </p>
        </div>
      </div>
      <div className="border border-gray-200 w-full" />
      <p className="inter text-center text-gray-600 md:text-start text-sm md:text-base">
        Transformamos desafios em soluções e problemas em inovação. Na nossa
        loja, sua experiência é mais do que um serviço; é uma revolução
        tecnológica feita sob medida para você.
      </p>
    </footer>
  );
}
