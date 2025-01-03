import Image from "next/image";
import React from "react";
import styles from "./Secao.module.css";

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
    <div className={`${styles.container} md:${styles.containerMd}`}>
      <div
        className={`flex gap-24 justify-center ${
          reverse ? styles.reverse : ""
        }`}
      >
        <div
          className={`${styles.imageContainer} md:${styles.imageContainerMd}`}
        >
          <Image src={imagem} alt="Home" width={270} height={270} />
        </div>

        <div className={`${styles.textContainer} md:${styles.textContainerMd}`}>
          <div className=" mb-7">
            <label className={styles.label}>{label}</label>
          </div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}> {description}</p>
        </div>
      </div>
    </div>
  );
};
