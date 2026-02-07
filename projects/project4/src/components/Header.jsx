import { IoIosMenu } from "react-icons/io";
import { useCallback } from "react";

const Header = () => {
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
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
      >
        CodeSyntax
      </h1>

      {/* navigator */}
      <nav className="hidden md:flex items-center gap-12">
        {[ "About Us", "Contact Us", "Skills", "Projects"].map(
          (item) => (
            <a id="A"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1800"
              key={item}
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              href=""
            >
              {item}
            </a>
          )
        )}
      </nav>

      {/* sign in button */}
      <button data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2300"
        type="button"
        className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50"
      >
        HERE ME
      </button>

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

      {/* mobile menu nav */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md"
      >
        <nav className="flex flex-col gap-6 items-center">
          {[ "About Us", "Contact Us", "Skills", "Projects"].map(
            (item) => (
              <a
                key={item}
                className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
                href="#"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
