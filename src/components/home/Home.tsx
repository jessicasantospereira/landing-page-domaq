import React from "react";
import { BannerHome } from "./bannerHome";
import dados from "./infos.json";
import { Secao } from "../secao";
import eletrica from "@/assets/eletrica.svg";
import geladeira from "@/assets/geladeira.svg";
import maquina from "@/assets/concerto_maquina.svg";
import FeedbackCarousel from "./FeedbackCarousel";

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      <BannerHome />

      {dados.map((dado, index) => (
        <Secao
          key={index}
          description={dado.description}
          label={dado.label}
          title={dado.title}
          imagem={index === 0 ? geladeira : index === 1 ? eletrica : maquina}
          reverse={index % 2 !== 0}
        />
      ))}
      {/* <FeedbackCarousel /> */}
    </div>
  );
};
