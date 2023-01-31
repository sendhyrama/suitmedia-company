import React, { useState, useEffect } from "react";

function Topnavbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    console.log(toggleMenu);
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [screenWidth]);

  return (
    <nav className="flex flex-col sm:flex-row navbar justify-around ">
      <div className="logo mx-auto sm:mx-0">
        <h1 className="font-bold p-4 text-xl ">Company</h1>
      </div>
      {(toggleMenu || screenWidth > 650) && (
        <ul className="flex lg:gap-8 text-base font-medium">
          <li className="relative ">
            <span className="hover:bg-slate-200/[0.5] inline-block py-4 lg:px-4 h-full cursor-pointer w-full">
              ABOUT
            </span>
            <ul className="absolute z-10 bg-white w-full md:w-64 submenu">
              <li className="hover:bg-neutral-900 px-3 py-4 hover:text-white cursor-pointer">
                <span>HISTORY</span>
              </li>
              <li className="hover:bg-neutral-900 px-3 py-4 hover:text-white cursor-pointer">
                <span>VISION MISSION</span>
              </li>
            </ul>
          </li>
          <li className="hover:bg-slate-200/[0.5] inline-block p-4 h-full cursor-pointer">
            <span>OUR WORK</span>
          </li>
          <li className="hover:bg-slate-200/[0.5] inline-block p-4 h-full cursor-pointer">
            <span>OUR TEAM</span>
          </li>
          <li className="hover:bg-slate-200/[0.5] inline-block p-4 h-full cursor-pointer">
            <span>CONTACT</span>
          </li>
        </ul>
      )}
      <button
        className="btn_nav position absolute right-5 top-3.5"
        onClick={toggleNav}>
        <i className="bx text-2xl bx-menu"></i>
      </button>
    </nav>
  );
}

export default Topnavbar;
