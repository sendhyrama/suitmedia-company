import React from "react";

function Footer() {
  return (
    <footer className="bg-neutral-800 relative flex flex-col text-white items-center py-5">
      <span>Copyright &copy; 2016. PT Company</span>
      <div className="flex gap-2 mt-2">
        <a href="#">
          <i className="bx text-3xl bxl-facebook-square"></i>
        </a>
        <a href="#">
          <i className="bx text-3xl bxl-twitter"></i>
        </a>
      </div>
    </footer>
  );
}
export default Footer;
