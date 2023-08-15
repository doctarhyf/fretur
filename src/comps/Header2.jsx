import React from "react";
import menu from "../assets/icons/menu.png";
import fretur from "../assets/logo/fretur.png";

export default function Header2({}) {
  return (
    <div className="header gap-4 flex flex-col items-center justify-between p-4 bg-gray-900 text-white">
      <button onClick={(e) => setShowMenu(!showMenu)} className="self-end">
        <img src={menu} width={30} />
      </button>

      <div className="cont-logo gap-4 flex items-center">
        <img
          src={fretur}
          className=" flex-none "
          width={40}
          height={40}
          alt="logo"
        />
        <span className="text-[48pt]">FRETUR</span>
      </div>

      <div className="cont-search  min-w-full text-center ">
        <div>
          <span></span>
          <input
            type="seacrh"
            placeholder="Recherche fretur ..."
            className="text-black  px-4 rounded-full w-[80%] mx-4 h-[24pt]"
          />
          <img src="" />
        </div>
      </div>

      <div className=" flex justify-around gap-12 items-center ">
        <div>
          <div className="text-sm text-gray-400">Hello, signin</div>
          <div>My Account</div>
        </div>

        <div>
          <div>
            <span className="text-yellow-500">0</span>
            <img src="" />
          </div>

          <div className="text-sm">Cart</div>
        </div>
      </div>
    </div>
  );
}
