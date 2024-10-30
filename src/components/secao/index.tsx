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
    <div className={`flex md:flex-row md:p-20 p-20 gap-10 justify-center`}>
      <div className={`flex gap-32 ${reverse ? "md:flex-row-reverse" : ""}`}>
        <div className="flex justify-center items-center rounded-3xl bg-teal-20 md:w-[470px] h-[340px]">
          <Image src={imagem} alt="Home" width={270} height={270} />
        </div>

        <div className="flex-col w-full md:w-[550px]">
          <div className=" mb-7">
            <label className="text-gray-20 text-sm font-medium mb-7">
              {label}
            </label>
          </div>
          <h2 className="text-4xl font-semibold mb-7">{title}</h2>
          <p className="text-black-20 text-2xl"> {description}</p>
        </div>
      </div>
    </div>
  );
};
