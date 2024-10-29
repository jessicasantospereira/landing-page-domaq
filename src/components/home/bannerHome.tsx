import React from "react";
import Card from "./card";
import Image from "next/image";
import maquina from "@/assets/maquina_lavar.svg";
import familia from "@/assets/famila.svg";
import styles from "./Home.module.css";

export const BannerHome: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={maquina} alt="Home" width={270} height={270} />
      </div>
      <div className={styles.cardContainer}>
        <Card
          title="Bem-vindo à DOMAQ"
          description="Serviços de qualidade para sua casa ou empresa"
        />
        <Image
          className={styles.familyImage}
          src={familia}
          alt="Home"
          width={340}
          height={376}
        />
      </div>
    </div>
  );
};
