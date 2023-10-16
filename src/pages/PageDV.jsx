import React, { useEffect, useState } from "react";
import error404 from "../assets/icons/error404.png";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../helpers/flow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

const API_END_POINT =
  "https://random-data-api.com/api/v2/users?size=10&is_xml=true";

const o = {
  id: 4312,
  uid: "293b9e69-2baa-4f0e-a3fe-8b6ca56b53f2",
  password: "ExVUw8JaR0",
  first_name: "Betsey",
  last_name: "Beatty",
  username: "betsey.beatty",
  email: "betsey.beatty@email.com",
  avatar: "https://robohash.org/quinisimollitia.png?size=300x300&set=set1",
  gender: "Female",
  phone_number: "+675 845-991-3654",
  social_insurance_number: "767224785",
  date_of_birth: "2001-02-14",
  employment: {
    title: "Lead Construction Planner",
    key_skill: "Fast learner",
  },
  address: {
    city: "Stepheniechester",
    street_name: "Gabriel Freeway",
    street_address: "823 Johnson Mews",
    zip_code: "19050",
    state: "New Mexico",
    country: "United States",
    coordinates: {
      lat: 2.6113568845180026,
      lng: -86.79098940376679,
    },
  },
  credit_card: {
    cc_number: "6771-8980-9506-3336",
  },
  subscription: {
    plan: "Silver",
    status: "Pending",
    payment_method: "Google Pay",
    term: "Full subscription",
  },
};

export default function PageDV({}) {
  const [users, setusers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const resp = await fetch(API_END_POINT);
    const uz = await resp.json();
    setusers(uz);
    console.log(uz);
  }

  return (
    <div className=" m-8  md:max-w-[1100px] mx-auto ">
      <div className=" text-center text-xl text-sky-500 p-4">DV Lotterie</div>
      <div className=" h-[240pt] text-4xl text-white font-serif text-center p-8 bg-[url('./assets/bg/ny.jpg')] bg-top object-center ">
        Felicitations aux gangants de la Lotterie 2023
      </div>
      <div className="dv-cont mt-8 border-t pt-4 justify-center md:flex flex-wrap ">
        {users.map((u, i) => (
          <div className="flex space-x-4 mb-4 border p-2 border-transparent hover:border-blue-400 rounded-md cursor-pointer ">
            <div>
              <img
                className="bg-red-500 rounded-full"
                src={u.avatar}
                width={80}
              />
            </div>
            <div>
              <div>
                {u.first_name} {u.last_name}
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
