import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between p-20">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Banner />
        </div>
      </main>
      <Footer />
    </>
  );
}
