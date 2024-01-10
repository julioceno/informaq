import Logo from "../../../public/logo.svg";
import { BurgerMenu } from "./BurguerMenu";
import { Menu } from "./Menu";

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} className="h-14 md:h-20" />

      <div className="flex gap-5 justify-center items-center">
        <Menu />
        <div className="md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
}
