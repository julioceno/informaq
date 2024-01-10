import { useEffect, useState } from "react";

export enum Breakpoints {
  XXS = "xxs",
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  TWO_XL = "2xl",
}

function getBreakpoint(width: number) {
  if (width < 355) return Breakpoints.XXS;
  if (width < 475) return Breakpoints.XS;
  if (width < 640) return Breakpoints.SM;
  if (width < 768) return Breakpoints.MD;
  if (width < 1024) return Breakpoints.LG;
  if (width < 1280) return Breakpoints.XL;

  return Breakpoints.TWO_XL;
}

function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState<Breakpoints>(
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = window.innerWidth;

      setWidth(newWidth);
      setBreakpoint(getBreakpoint(newWidth));
    };

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return { width, breakpoint };
}

export { useWidth };
