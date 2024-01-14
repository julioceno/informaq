import { Phone } from "lucide-react";
import { IconBaseProps } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SocialMediaEnum } from "../commom";

interface Props {
  icon: React.FC<IconBaseProps>;
  href: SocialMediaEnum;
  label: string;
}

export const contacts: Props[] = [
  {
    icon: FaWhatsapp,
    href: SocialMediaEnum.WHATSAPP,
    label: "Whatsapp",
  },
  {
    icon: Phone,
    href: SocialMediaEnum.TELPHONE_REDIRECT,
    label: "Telefone",
  },
  {
    icon: FaInstagram,
    href: SocialMediaEnum.INSTAGRAM,
    label: "Instagram",
  },
];
