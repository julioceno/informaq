interface Item {
  title: string;
  paragraphs: string[];
}

export interface PresentationServiceProps {
  photo: string;
  title: string;
  paragraphs: string[];
  items: Item[];
}

export function PresentationService({
  paragraphs,
  photo,
  title,
}: PresentationServiceProps) {
  return (
    <section className="grid grid-cols-3 gap-3 md:gap-10">
      <img
        src={photo}
        alt="programming"
        className="w-full h-36 md:h-96 xl:h-[30rem] 2xl:h-[37rem] object-cover rounded-md md:rounded-tr-6xl md:rounded-bl-6xl col-span-3 md:col-span-1 md:order-2"
      />
      <div className="flex flex-col gap-1 col-span-3 md:col-span-2 text-center md:text-start mt-3 md:mt-14 md:order-1 md:place-self-start ">
        <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold">
          {title}
        </h2>
        <div className="flex flex-col gap-4">
          {paragraphs.map((paragraph) => (
            <p className="inter tracking-wider leading-8 text-black ">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
