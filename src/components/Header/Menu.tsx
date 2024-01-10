import { Phone } from "lucide-react";
import { Breakpoints, useIsLessThan } from "../../commom";
import { menuList } from "./menuList";

export function Menu() {
  const isExtraSmall = useIsLessThan(Breakpoints.XXS);

  return (
    <nav className="flex items-center">
      <ul className="hidden md:flex gap-3">
        {menuList({}).map((item, index) => (
          <li key={index}>
            <a href={item.href} className="text-black ">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* TODO: add this contact in enum */}
      {!isExtraSmall && (
        <a
          className="flex gap-2 ml-10 p-1.5 ease-in-out duration-200 rounded-md cursor-pointer hover:bg-gray-200"
          href="tel:21988537749"
        >
          <Phone className="text-main-blue" />
          21 98853-7749
        </a>
      )}
    </nav>
  );
}
