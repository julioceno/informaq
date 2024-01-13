import { MessageCircleHeart } from "lucide-react";
import ProgrammingPhoto from "../../../public/programming.svg";
import { SocialMediaEnum } from "../../commom";

export function MainSection() {
  return (
    <section className="grid grid-cols-3 gap-3 md:gap-10">
      <img
        src={ProgrammingPhoto}
        alt="programming"
        className="w-full h-36 md:h-96 xl:h-[30rem] 2xl:h-[37rem] object-cover rounded-md md:rounded-tr-6xl md:rounded-bl-6xl col-span-3 md:col-span-1 md:order-2"
      />
      <div className="flex flex-col gap-1 col-span-3 md:col-span-2 text-center md:text-start mt-3 md:mt-14 md:order-1 md:place-self-start ">
        <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold md:w-5/6 2xl:md:4/6">
          Opções tecnológicas pensadas especialmente para atender às suas
          necessidades
        </h2>
        <span className="font-inter text-sm text-gray-500 md:mt-4 tracking-wider">
          Suporte gratuito para alguns serviços mesmo após a antrega.
        </span>

        <a
          className="self-center md:self-start bg-green-500 hover:bg-green-600 rounded-md flex justify-center items-center text-white gap-2 px-10 py-2 shadow-green-shadow mt-3 md:mt-20 "
          href={SocialMediaEnum.WHATSAPP}
          target="_blank"
        >
          <MessageCircleHeart className="size-6 md:size-8" />
          <span className="text-sm md:text-base">Entre em Contato</span>
        </a>
      </div>
    </section>
  );
}
