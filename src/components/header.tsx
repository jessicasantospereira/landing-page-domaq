import Image from "next/image";
import logo from "./logo.png";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="bg-white sticky ml-32 w-4/5 top-0 px-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <Image className="h-12 w-auto mr-4" src={logo} alt="Logo" />
          <h1 className="text-teal-950 font-bold text-2xl">
            Refrigeração e Lavadoras
          </h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
