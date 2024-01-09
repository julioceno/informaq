import { FolderKanban, MapPinned, Send } from "lucide-react";
import { ReactNode } from "react";

interface MenuItem {
  icon: ReactNode;
  label: string;
  href: string;
}

export const menuList: MenuItem[] = [
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
];
