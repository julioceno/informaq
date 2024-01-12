import {
  Instagram,
  LucideProps,
  MessageCircleHeart,
  Smartphone,
} from "lucide-react";
import { SocialMediaEnum } from "../commom";

interface Props {
  icon: React.FC<LucideProps>;
  href: SocialMediaEnum;
  label: string;
}

export const contacts: Props[] = [
  {
    icon: MessageCircleHeart,
    href: SocialMediaEnum.WHATSAPP,
    label: "Whatsapp",
  },
  {
    icon: Smartphone,
    href: SocialMediaEnum.TELPHONE_REDIRECT,
    label: "Telefone",
  },
  {
    icon: Instagram,
    href: SocialMediaEnum.INSTAGRAM,
    label: "Instagram",
  },
];
