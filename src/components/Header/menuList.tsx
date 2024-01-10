import { FolderKanban, MapPinned, Phone, Send } from "lucide-react";
import { ReactNode } from "react";
import { SocialMediaEnum } from "../../commom";

interface Props {
  showTelephone?: boolean;
}

interface MenuItem {
  icon: ReactNode;
  label: string;
  href: string;
  disabled?: boolean;
}

export const menuList = ({ showTelephone }: Props): MenuItem[] => {
  return [
    {
      icon: <FolderKanban size={20} />,
      label: "Nossos Serviços",
      href: "#",
    },
    {
      icon: <FolderKanban size={20} />,
      label: "Sobre",
      href: "#",
    },
    {
      icon: <Send size={20} />,
      label: "Contato",
      href: "#",
    },
    {
      icon: <MapPinned size={20} />,
      label: "Localização",
      href: "#",
    },
    {
      icon: <Phone size={20} className="text-main-blue" />,
      label: "Ligue",
      href: SocialMediaEnum.TELPHONE_REDIRECT,
      disabled: !showTelephone,
    },
  ];
};
