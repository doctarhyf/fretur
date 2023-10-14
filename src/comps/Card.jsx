import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ data }) {
  const { icon, title, cont, path } = data;
  const navigate = useNavigate();

  return (
    <div className=" mx-auto p-4 max-w-[280px] items-center flex flex-col gap-2 justify-center">
      <img src={icon} className="bg-white rounded-full w-[100px]" />
      <div className="text-black text-xl">{title}</div>
      <div className="text-sm lg:min-h-[225pt]   ">{cont}</div>
      <button
        onClick={(e) => navigate(path)}
        className="px-2 text-sm rounded-full text-cyan-500 bg-white shadow-md"
      >
        Learn More
      </button>
    </div>
  );
}
