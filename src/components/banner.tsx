import Image from "next/image";
import React from "react";
import banner from "./banner.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex items-center justify-center m-auto">
      <Link href={"https://api.whatsapp.com/send?phone=5515981223330"}>
        <Image
          src={banner}
          alt="Banner"
          className="flex items-center justify-center m-auto"
          width={500}
          height={700}
        />
      </Link>
    </div>
  );
};

export default Banner;
