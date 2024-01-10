import ProgrammingPhoto from "../../../public/programming.svg";

export function ImageAndText() {
  return (
    <section className="grid grid-cols-3 gap-3 md:gap-10">
      <img
        src={ProgrammingPhoto}
        alt="programming"
        className="w-full h-36 md:h-96 lg:h-[37rem] object-cover rounded-md md:rounded-tr-6xl md:rounded-bl-6xl col-span-3 md:col-span-1 md:order-2"
      />
      <div className="flex flex-col gap-1 col-span-3 md:col-span-2 text-center md:text-start mt-3 md:mt-14 md:order-1 md:place-self-start ">
        <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold md:w-5/6 lg:md:4/6">
          Opções tecnológicas pensadas especialmente para atender às suas
          necessidades
        </h2>
        <span className="font-inter text-sm text-gray-500 md:mt-12 tracking-wider">
          Suporte gratuito para alguns serviços mesmo após a antrega.
        </span>
      </div>
    </section>
  );
}
