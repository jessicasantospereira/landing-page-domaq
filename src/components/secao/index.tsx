import Image from "next/image";
import React from "react";

type SecaoProps = {
  label: string;
  description: string;
  title: string;
  imagem: string;
};

export const Secao: React.FC<SecaoProps> = ({
  label,
  description,
  title,
  imagem,
}) => {
  return (
    <div className="flex flex-col">
      <Image src={imagem} alt="Home" width={270} height={270} />
      <label className="text-gray-20 text-sm font-medium">{label}</label>
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-black-20 text-2xl"> {description}</p>
    </div>
  );
};
