import { Instagram, MessageCircleHeart, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { SocialMediaEnum } from "../../commom";

const links = [
  {
    icon: <MessageCircleHeart size={22} className="text-gray-600" />,
    href: SocialMediaEnum.WHATSAPP,
  },
  {
    icon: <Smartphone size={22} className="text-gray-600" />,
    href: SocialMediaEnum.TELPHONE_REDIRECT,
  },
  {
    icon: <Instagram size={22} className="text-gray-600" />,
    href: SocialMediaEnum.INSTAGRAM,
  },
];

export function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();

    setYear(currentYear);
  }, []);

  return (
    <footer className="flex flex-col gap-0.5">
      <div className="flex justify-between items-end md:gap-3">
        <div className="flex items-end gap-1">
          <h3 className="text-2xl md:text-3xl font-poppins text-zinc-700 font-bold">
            INFORMAQ
          </h3>
          <span className="text-main-blue text-sm md:text-base">Ltda</span>
        </div>
        <div className="flex flex-col md:flex-row-reverse w-full justify-between">
          <div className="flex gap-1 self-end">
            {links.map((link) => (
              <a href={link.href} target="_blank">
                {link.icon}
              </a>
            ))}
          </div>
          <p className="flex inter text-xs md:text-sm font-light justify-end">
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
