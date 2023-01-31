import React from "react";
import { useState, useEffect } from "react";

// slide img buat background
const slide = ["bg-slide1", "bg-slide2"];

const SlideShowBG = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);
  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    // console.log(index);
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="flex w-full relative h-[800px] overflow-hidden">
      <button
        className="border-2 hover:bg-white transition-colors duration-200 rounded-full h-10 w-10  ml-3 absolute top-1/2 transform -translate-y-1/2 z-10"
        onClick={prev}>
        <i className="bx text-3xl p-3 text-white hover:text-black absolute -left-full bottom-2/4 translate-x-1/2 translate-y-2/4 bx-chevron-left"></i>
      </button>
      <div
        className={`w-full h-full bg-cover bg-center bg-slide1 transition-all duration-500 flex items-end justify-center absolute px-20`}
        style={{
          transform: `translateX(${-index * 100}%)`,
        }}>
        <div>
          <div className="text-white bg-black/[.5] lg:w-[730px] h-max p-5 w-auto lg:mr-64 xl:mr-72 mb-24">
            <p className="text-start font-bold lg:text-2xl xl:text-3xl">
              THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL
              CHEMISTRY
            </p>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full bg-cover bg-center bg-slide2 transition-all duration-500 flex items-end justify-center `}
        style={{
          transform: `translateX(${index == 1 ? 0 : 1 * 100}%)`,
        }}>
        <div>
          <div className="text-white bg-black/[.5] lg:w-[730px] h-max p-5 w-auto lg:mr-64 xl:mr-72 mb-24">
            <p className="text-start font-bold lg:text-2xl xl:text-3xl">
              WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 pb-10 justify-center absolute bottom-0 left-1/2 -translate-x-1/2">
        <div
          className={`w-3 h-3 border-2 ${
            index == 0 ? "bg-white" : "bg-white/[.4]"
          }  rounded-full`}></div>
        <div
          className={`w-3 h-3 ${
            index == 1 ? "bg-white" : "bg-white/[.4]"
          }   rounded-full`}></div>
      </div>
      <button
        className="border-2 rounded-full transition-colors duration-200 hover:bg-white h-10 w-10 self-center absolute top-1/2 right-0 transform -translate-y-1/2 z-10 mr-3"
        onClick={next}>
        <i className="bx text-3xl p-3 right-[-8px] bottom-2/4 translate-x-0 translate-y-2/4 text-white hover:text-black absolute bx-chevron-right"></i>
      </button>
    </div>
  );
};

function Header() {
  return <SlideShowBG imgs={["bg-slide1", "bg-slide2"]} />;
}

export default Header;
