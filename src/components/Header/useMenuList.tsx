import { FolderKanban, MapPinned, Phone, Send } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { Breakpoints, SocialMediaEnum, useIsLessThan } from "../../commom";

interface MenuItem {
  icon: ReactNode;
  label: string;
  href: string;
}

export const useMenuList = (): MenuItem[] => {
  const [list, setList] = useState([
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
  ]);

  const isExtraSmall = useIsLessThan(Breakpoints.XXS);

  const item = {
    icon: <Phone size={20} className="text-main-blue" />,
    label: "Ligue",
    href: SocialMediaEnum.TELPHONE_REDIRECT,
  };

  useEffect(() => {
    if (isExtraSmall) {
      setList((prev) => [...prev, item]);
      return;
    }

    setList((prev) => {
      const filtered = prev.filter((item) => item.label !== "Ligue");
      return filtered;
    });
  }, [isExtraSmall]);

  return list;
};
