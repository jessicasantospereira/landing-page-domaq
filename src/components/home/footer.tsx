import Image from "next/image";
import React from "react";
import logo from "./logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-center mt-5 pt-5">
      <Link
        href="#"
        className="flex items-center justify-center mb-5 text-2xl font-semibold text-teal-950"
      >
        <Image
          src={logo}
          className="h-12 w-auto mr-3 sm:h-9"
          alt="DOMAQ Logo"
        />
        Refrigeração e Lavadoras
      </Link>
      <span className="block text-sm text-center text-gray-500">
        © 2025 DOMAQ Refrigeração e Lavadoras. Todos os direitos reservados.
        Contate-nos:{" "}
        <a href="#" className="text-teal-800 hover:underline hover:font-bold">
          domaqrefrigeracaoeeletrica@gmail.com
        </a>{" "}
        |{" "}
        <a
          href="tel:+5515981223330"
          className="text-teal-800 hover:underline hover:font-bold"
        >
          (15) 98122-3330
        </a>
        .
      </span>
    </div>
  );
};

export default Footer;
