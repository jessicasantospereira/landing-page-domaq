import React from "react";
import { BannerHome } from "./bannerHome";
import dados from "./infos.json";
import { Secao } from "../secao";

export const Home: React.FC = () => {
  return (
    <>
      <BannerHome />
      {dados.map((dado, index) => (
        <Secao
          key={index}
          description={dado.description}
          label={dado.label}
          title={dado.title}
          imagem={dado.imagem}
        />
      ))}
      ;
    </>
  );
};
