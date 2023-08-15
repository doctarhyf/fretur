import React from "react";

export default function MainMenu({ showMenu }) {
  return (
    <div
      className={` main menu transition ease-in-out delay-150 absolute w-[300px] ${
        showMenu ? "visible" : "invisible"
      } bg-sky-500 text-white shadow-xl shadow-black min-h-[200px] p-2  h-full  `}
    >
      <ul>
        <li>Home</li>
        <li>Colis</li>
      </ul>
    </div>
  );
}
