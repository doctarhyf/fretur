import React from "react";
import * as classes from "../classes";
import { useState } from "react";
import loading from "../assets/icons/loading.gif";
import bg from "../assets/bg/bg.png";
import flags from "../assets/icons/flags.png";
import s1 from "../assets/icons/s1.png";
import s2 from "../assets/icons/s2.png";
import s3 from "../assets/icons/s3.png";

import Card from "../comps/Card";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../helpers/flow";

const cards = [
  {
    path: ROUTES.PAGE_COLIS_SEND.path,
    icon: s1,
    title: "Send Goods",
    cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque consect nibh, sit amet egestas felis la.,",
  },
  {
    path: ROUTES.PAGE_COLIS_REC.path,
    icon: s2,
    title: "Receive Goods",
    cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque consect nibh, sit amet egestas felis la.,",
  },
  {
    path: ROUTES.PAGE_MY_ACC.path,
    icon: s3,
    title: "Register My Account",
    cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque consect nibh, sit amet egestas felis la.,",
  },
];

export default function PageImpExp(props) {
  const [checking, setChecking] = useState(false);

  function onClick(e) {
    alert("Checking colis ...");

    setChecking(!checking);
  }

  return (
    <>
      <div className="h-[300px] relative ">
        <div className="absolute m-8 ">
          <div className="text-sky-500 text-[50px] ">FRETUR</div>
          <div className="max-w-[50%]">
            Facilitates all your freights from DRC to USA
          </div>
          <div>
            <img src={flags} width={80} className="mt-4" />
          </div>
        </div>
        <img src={bg} className="w-[100%] h-[100%] object-cover" />
      </div>

      <div className="cards-cont min-h-[300px] text-center bg-sky-500 text-white pb-8">
        {cards.map((card, i) => (
          <Card key={i} data={card} />
        ))}

        <NavLink to={ROUTES.PAGE_NEAR_OFFICE.path}>
          <div className="hover:bg-yellow-200 bg-yellow-300 text-yellow-800 hover:text-yellow-700 p-4 rounded-full max-w-[50%] mx-auto   ">
            Find neared office
          </div>
        </NavLink>
      </div>
    </>
  );
}
