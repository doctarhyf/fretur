import React, { useEffect, useState } from "react";
import error404 from "../assets/icons/error404.png";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../helpers/flow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

const API_END_POINT = "https://randomuser.me/api/?results=14";

export default function PageDV({}) {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    setloading(true);

    setusers([]);

    const resp = await fetch(API_END_POINT);
    const uz = await resp.json();

    setusers(uz.results);
    console.log(uz);

    setloading(false);
  }

  return (
    <div className=" m-8  md:max-w-[1100px] mx-auto ">
      <div className=" text-center text-xl text-sky-500 p-4">DV Lotterie</div>
      <div className=" h-[240pt] text-4xl text-white font-serif text-center p-8 bg-[url('./assets/bg/ny.jpg')] bg-top object-center ">
        Felicitations aux gangants de la Lotterie 2023
      </div>

      {loading && (
        <div className="text-green-500 p-2 text-sm  text-center">
          {" "}
          Loading ...
        </div>
      )}

      <div className="dv-cont mt-8 border-t pt-4 justify-center md:flex flex-wrap ">
        {users.map((u, i) => (
          <div className="flex space-x-4 mb-4 border p-2 border-transparent hover:border-blue-400 rounded-md cursor-pointer ">
            <div>
              <img
                className="bg-red-500 rounded-full"
                src={u.picture.medium}
                width={80}
              />
            </div>
            <div>
              <div>
                {u.name.title}. {u.name.first} {u.name.last_name}
              </div>
              <div className="text-blue-700">{u.gender}</div>
              <div className="text-gray-600 text-sm">{u.email}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-y-4 justify-center flex-col p-8">
        <p className="mx-auto">
          Pour avoir plus de renseignement sur la DV Lotterie avec FRETUR
        </p>
        <button className="bg-blue-500 text-white px-2 p-1 rounded-md mx-auto">
          Learn More
        </button>
      </div>
    </div>
  );
}
