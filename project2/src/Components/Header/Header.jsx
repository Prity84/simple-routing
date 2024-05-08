import React from "react";

function Header() {
  return (
    <div className="bg-[#4681bc] p-4">
      <div className="max-w-[1240px] py-[15px] items-center flex justify-between  max-auto">
        <div className="text-3xl font-bold">My Page</div>
        <ul className=" hidden md:flex text-white  gap-12">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
