import React from "react";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full flex justify-between items-center px-20 py-8 gap-12">
      <div className="logo">Logo</div>

      <div className="Links flex justify-between gap-10">
        {["About", "Contact", "Services", "Our Work", "SignIn"].map(
          (item, idx) => {
            return (
              <a
                href="#"
                key={idx}
                className={`text-lg capitalize font-light ${
                  idx === 4 ? "ml-32" : ""
                }`}
              >
                {item}
              </a>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Navbar;
