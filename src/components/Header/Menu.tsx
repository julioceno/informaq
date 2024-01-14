import formatStringByPattern from "format-string-by-pattern";
import { Phone } from "lucide-react";
import { Breakpoints, SocialMediaEnum, useIsLessThan } from "../../commom";
import { useMenuList } from "./useMenuList";

export function Menu() {
  const list = useMenuList();
  const isExtraSmall = useIsLessThan(Breakpoints.XXS);

  return (
    <nav className="flex items-center font-poppins font-medium">
      <ul className="hidden md:flex gap-3">
        {list.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="text-black hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {!isExtraSmall && (
        <a
          className="flex gap-2 ml-10 p-1.5 ease-in-out duration-200 rounded-md cursor-pointer hover:bg-gray-200  "
          href="tel:21988537749"
        >
          <Phone className="text-main-blue" />
          {formatStringByPattern("(99) 99999-9999", SocialMediaEnum.TELPHONE)}
        </a>
      )}
    </nav>
  );
}
