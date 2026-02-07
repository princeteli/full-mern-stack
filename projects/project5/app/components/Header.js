"use client";
import { IoIosMenu } from "react-icons/io";
import { useCallback, useState } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    const el = document.getElementById("mobileMenu");
    if (!el) return;
    el.classList.toggle("hidden");
  }, []);

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 ">
      {/* logo */}
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
     data-aos-duration="800"
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
      >
        <Link href='/'>  Prince</Link>
      
      </h1>

      {/* navigator */}
      <nav className="hidden md:flex items-center gap-12">
        {["About", "Skills", "Projects"].map((item) => (
          <Link
            id="A"
            data-aos="fade-down"
            data-aos-easing="linear"
       data-aos-duration="800"

            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* sign in button */}
      <button
       onClick={() => setIsOpen(true)}
        data-aos="fade-down"
        data-aos-easing="linear"
       data-aos-duration="800"

        type="button"
        className="hidden md:block bg-white text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-gray-500 hover:text-white cursor-pointer z-50 text-[20px]"
      >
        Contact Me 
      </button>

  <ContactForm isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* mobile menu button */}
      <button
        type="button"
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
        aria-controls="mobileMenu"
        aria-expanded="false"
      >
        <IoIosMenu />
      </button>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="hidden fixed inset-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md flex flex-col items-center justify-center gap-6"
      >
        {[ "About", "Skills", "Projects"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-lg font-medium tracking-wider text-white transition-colors hover:text-gray-300"
          >
            {item}
          </Link>
        ))}

        {/* Mobile Contact Button */}
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="bg-white text-black py-3 px-8 rounded-full font-medium transition-all duration-500 hover:bg-gray-500 hover:text-white cursor-pointer text-[20px] mt-4"
        >
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Header;
