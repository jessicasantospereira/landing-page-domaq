import Banner from "@/components/banner";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-20">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Banner />
      </div>
    </main>
  );
}
