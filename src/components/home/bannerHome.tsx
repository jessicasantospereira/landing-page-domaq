import React from "react";
import Card from "./card";
import Image from "next/image";
import familia from "@/assets/famila.svg";

export const BannerHome: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 py-8 md:py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        <Card
          title="Bem-vindo à DOMAQ"
          description="Serviços de qualidade para sua casa ou empresa"
        />
        <Image
          className="mt-8 md:mt-0 w-full max-w-[340px] h-auto"
          src={familia}
          alt="Família"
        />
      </div>
    </div>
  );
};
