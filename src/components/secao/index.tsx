import Image from "next/image";
import React from "react";

type SecaoProps = {
  label: string;
  description: string;
  title: string;
  imagem: string;
  reverse?: boolean;
};

export const Secao: React.FC<SecaoProps> = ({
  label,
  description,
  title,
  imagem,
  reverse,
}) => {
  return (
     <div className="w-full py-12 md:py-16 bg-white">
      <div className={`container mx-auto px-4 md:px-8 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 lg:gap-16`}>
        <div className="w-full md:w-1/2 flex justify-center bg-teal-20 rounded-3xl">
          <Image src={imagem} alt="Home" className="w-64 h-64 object-contain" />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <div className="mb-2">
            <span className="inline-block bg-primary-100 text-gray-20 py-1 rounded-full text-sm font-medium">{label}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-xl md:text-lg"> {description}</p>
        </div>
      </div>
    </div>
  );
};
