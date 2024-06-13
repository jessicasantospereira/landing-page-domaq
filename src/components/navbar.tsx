const Navbar = () => {
  return (
    <nav className="hidden md:flex md:flex-grow justify-center">
      <ul className="flex justify-center end-0 text-gray-700">
        {/* <li><a href="#home" className="hover:text-secondary hover:uppercase hover:text-teal-950 font-bold text-lg">Home</a></li>
                <li><a href="#sobre-nos" className="hover:text-secondary hover:uppercase hover:text-teal-950 font-bold text-lg">Sobre nós</a></li>
                <li><a href="#refrigeradoras" className="hover:text-secondary hover:uppercase hover:text-teal-950 font-bold text-lg">Refrigeradoras</a></li>
                <li><a href="#lavadoras" className="hover:text-secondary hover:uppercase hover:text-teal-950 font-bold text-lg">Lavadoras</a></li>
                <li><a href="#ar-condicionado" className="hover:text-secondary hover:uppercase hover:text-teal-950 font-bold text-lg">Ar Condicionado</a></li>
                <li><a href="#instalacao-eletrica" className="hover:text-secondary hover:uppercase hover:text-teal-950 font-bold text-lg">Instalação elétrica</a></li> */}

        <li>
          <a
            href="https://api.whatsapp.com/send?phone=5515981223330"
            className="hover:text-secondary hover:uppercase hover:text-teal-950 font-bold text-lg"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
