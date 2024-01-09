import { Phone } from "lucide-react";
import Logo from "../../../public/logo.svg";
import { BurgerMenu } from "./BurguerMenu";

const links = [
  {
    label: "Nossos Serviços",
    href: "#",
  },
  {
    label: "Sobre",
    href: "#",
  },
  {
    label: "Contato",
    href: "#",
  },
  {
    label: "Localização",
    href: "#",
  },
];

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} className="h-14 md:h-20" />

      <div className="flex gap-5 justify-center items-center">
        <nav className="flex ">
          <ul className="hidden md:flex gap-3">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-black ">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="flex gap-2 ml-10 cursor-pointer hover:bg-gray-200"
            href="tel:21988537749"
          >
            <Phone className="text-main-blue" />
            21 98853-7749
          </a>
        </nav>
        <div className="md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
}
