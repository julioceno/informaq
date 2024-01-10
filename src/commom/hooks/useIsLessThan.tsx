import { Breakpoints, useWidth } from "..";

export function useIsLessThan(breakpointToCompare: Breakpoints) {
  const { breakpoint } = useWidth();

  const isEqual = breakpoint === breakpointToCompare;

  return isEqual;
}
