import React from "react";
import * as classes from "../classes";
import { useState } from "react";
import loading from "../assets/icons/loading.gif";
import bg from "../assets/bg/bg.png";
import flags from "../assets/icons/flags.png";
import s1 from "../assets/icons/s1.png";
import s2 from "../assets/icons/s2.png";
import s3 from "../assets/icons/s3.png";
import s4 from "../assets/icons/s2.png";

import Card from "../comps/Card";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../helpers/flow";

const cards = [
  {
    path: ROUTES.PAGE_COLIS_SEND.path,
    icon: s1,
    title: "Send Goods",
    cont: "une solution simple pour une expédition efficace. Planifiez en quelques clics les enlèvements et les livraisons, suivez vos colis en temps réel et simplifiez la logistique. Optez pour une chaîne d'approvisionnement plus efficace. Dites adieu aux soucis d'expédition et profitez de la facilité.",
  },
  {
    path: ROUTES.PAGE_COLIS_REC.path,
    icon: s2,
    title: "Receive Goods",
    cont: "Fretur vous facilite la réception de colis pour simplifier votre vie. Vous pouvez désormais faire envoyer vos colis à notre adresse spéciale, ce qui vous garantit une réception sécurisée. Dès qu'un colis arrive, nous vous prévenons instantanément, vous offrant la flexibilité de récupérer vos articles à votre convenance. Simplifiez la réception de colis grâce à notre service efficace et pratique.",
  },
  
  {
    path: ROUTES.PAGE_COLIS_REC.path,
    icon: s4,
    title: "Collection collis",
    cont: "Nous sommes là pour vous aider à rassembler et à gérer vos colis. Notre service facilite la réception et l'organisation de vos envois, vous offrant une solution pratique pour gérer votre collection. Lorsque vos colis arrivent, nous veillons à ce que tout soit bien pris en charge, vous évitant ainsi le stress lié à la gestion des livraisons. Simplifiez votre expérience de collecte de colis grâce à notre assistance dédiée.",
  },

  {
    path: ROUTES.PAGE_MY_ACC.path,
    icon: s3,
    title: "Register My Account",
    cont: "N'hésitez pas à créer un compte sur notre plateforme ! En vous inscrivant, vous accéderez à une multitude d'avantages exclusifs. Profitez d'une expérience personnalisée, restez informé de nos dernières offres et simplifiez vos interactions avec notre service. Rejoignez notre communauté aujourd'hui pour vivre une expérience exceptionnelle.",
  },
];

export default function PageImpExp(props) {
  const [checking, setChecking] = useState(false);

  const navigate = useNavigate();

  function onClick(e) {
    alert("Checking colis ...");

    setChecking(!checking);
  }

  return (
    <>
      <div className="h-[300px] md:h-[420px]  mx-auto  relative ">
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

      <div className="cards-cont  md:flex min-h-[300px] text-center bg-sky-500 text-white pb-8">
        {cards.map((card, i) => (
          <Card key={i} data={card} />
        ))}
      </div>

      <div className="bg-sky-500 flex justify-center items-center">
        <button
          onClick={(e) => navigate(ROUTES.PAGE_NEAR_OFFICE.path)}
          className="hover:bg-yellow-200
        m-8
        
        bg-yellow-300 text-yellow-800 hover:text-yellow-700 p-4 rounded-full   "
        >
          Find neared office
        </button>
      </div>
    </>
  );
}
