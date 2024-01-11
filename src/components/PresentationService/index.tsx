import { ServiceFeature, ServiceFeatureProps } from "./ServiceFeature";

export interface PresentationServiceProps {
  photo: string;
  title: string;
  paragraphs: string[];
  features: ServiceFeatureProps[];
  index?: number;
}

export function PresentationService({
  paragraphs,
  photo,
  title,
  features,
  index,
}: PresentationServiceProps) {
  const isRight = index! % 2 === 0;

  const imageOrder = isRight ? "order-1" : "order-2";
  const contentOrder = isRight ? "order-2" : "order-1";

  const imageRounded = isRight
    ? "md:rounded-tl-6xl md:rounded-br-6xl"
    : "md:rounded-tr-6xl md:rounded-bl-6xl";

  return (
    <div className="grid grid-cols-3 gap-3 md:gap-10 ">
      <img
        src={photo}
        alt="programming"
        className={`w-full h-36 md:h-96 xl:h-[30rem] 2xl:h-[37rem] object-cover rounded-md ${imageRounded} col-span-3 md:col-span-1 md:${imageOrder} 2xl:row-span-2`}
      />
      <div
        className={`flex flex-col gap-1 col-span-3 md:col-span-2 text-center md:text-start mt-3 md:mt-0 md:${contentOrder} md:place-self-start`}
      >
        <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold">
          {title}
        </h2>
        <div className="flex flex-col gap-1.5 md:gap-4">
          {paragraphs.map((paragraph) => (
            <p className="inter tracking-wider leading-8 text-black ">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="col-span-3 2xl:col-span-2 grid md:grid-cols-2 gap-4 order-3 mt-5 md:mt-0">
        {features.map((item, index) => (
          <ServiceFeature
            title={item.title}
            paragraphs={item.paragraphs}
            key={`${index}-${item.title}`}
          />
        ))}
      </div>
    </div>
  );
}
