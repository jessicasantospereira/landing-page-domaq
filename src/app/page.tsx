import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import { Home } from "@/components/home/Home";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
