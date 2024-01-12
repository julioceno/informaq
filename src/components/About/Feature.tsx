import { ReactNode } from "react";

export interface FeatureProps {
  icon: ReactNode;
  title: string;
  paragraph: string;
}

export function Feature({ icon, paragraph, title }: FeatureProps) {
  return (
    <div className="flex flex-col  justify-start items-center font-poppins">
      <div className="h-14 md:h-16 w-14 md:w-16 bg-main-blue/15 flex justify-center items-center rounded-full">
        {icon}
      </div>
      <h3 className="font-extrabold text-base md:text-xl">{title}</h3>
      <p className="font-light text-center text-sm md:text-base">{paragraph}</p>
    </div>
  );
}
