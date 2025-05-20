import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const urlInstagram =
    "https://www.instagram.com/domaq_rl?igsh=NzltY2hpbTQ1MXEz";
  return (
    <nav className="hidden md:flex md:flex-grow justify-end">
      <ul className="flex justify-center space-x-4 text-gray-700">
        <li>
          <Link
            target="_blank"
            href={urlInstagram}
            className="text-gray-700 hover:text-teal-950"
          >
            <FontAwesomeIcon
              className="w-5 h5 hover:w-7 hover:h-7"
              icon={faInstagram}
            />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5515981223330"
            className="text-gray-700 hover:text-teal-950"
          >
            <FontAwesomeIcon
              className="w-5 h5 hover:w-7 hover:h-7"
              icon={faWhatsapp}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
