import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useRef, useState } from "react";
import { Breakpoints, useClickOutside, useIsLessThan } from "../../commom";
import { menuList } from "./menuList";

export function BurgerMenu() {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const isExtraSmall = useIsLessThan(Breakpoints.XXS);

  useClickOutside({ ref: containerRef, action: () => setIsOpen(false) });

  const genericHamburgerLine = `h-[.2rem] w-7 my-1 rounded-full bg-black duration-300`;

  return (
    <div ref={containerRef}>
      <button
        className="h-12 w-12 bg-gray-200 hover:bg-gray-300 rounded-full flex flex-col justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen && "rotate-45 translate-y-3 "
          }`}
        />
        <div className={`${genericHamburgerLine} ${isOpen && "opacity-0"}`} />
        <div
          className={`${genericHamburgerLine} ${
            isOpen && "-rotate-45 -translate-y-3"
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="relative z-10">
            <motion.nav
              initial={{ y: 60 }}
              animate={{ y: 10 }}
              exit={{ opacity: 0 }}
              className="rounded bg-gray-200  right-1 absolute inline-block font-poppins z-1000"
            >
              <ul className="text-main-black ">
                {menuList({ showTelephone: isExtraSmall }).map((item) => (
                  <Fragment>
                    {!item.disabled && (
                      <li>
                        <a
                          href={item.href}
                          className="flex gap-1 px-3 py-2 hover:bg-gray-300"
                        >
                          <span>{item.icon}</span>
                          {item.label}
                        </a>
                      </li>
                    )}
                  </Fragment>
                ))}
              </ul>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
