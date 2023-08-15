import React, { useState } from "react";

import { ROUTES, CARDS_DATA, images } from "../helpers/flow";
import { NavLink } from "react-router-dom";
import MyImageGallery from "../comps/MyImageGallery";

function Card({ data }) {
  let { title, desc, img, path, btnText } = data;

  btnText = btnText ? btnText : "Learn more";

  console.log("data => \n", data);

  return (
    <div className="relative card pt-4 bg-slate-100 shadow-md shadow-black/25 mt-4 rounded-md">
      <div className="absolute bottom-0 p-2 m-2 text-xs hover:bg-sky-500 transition-all  text-white rounded-lg border border-sky-500">
        <NavLink to={path}>{btnText}</NavLink>
      </div>
      <div className="mx-4 text-lg text-sky-500">{title}</div>
      <div className="mx-4 text-slate-800 text-sm">{desc}</div>
      <div className="mt-4 min-h-[140px] max-h-[140px] w-full overflow-hidden">
        <img className="w-[100%] h-[100%] object-cover" src={img} />
      </div>
    </div>
  );
}

export default function PageHome(props) {
  return (
    <>
      <MyImageGallery images={images} />

      <main className="home-main max-w-[90%]  mx-auto p-4 ">
        <div>
          <h4 className="text-3xl text-sky-500">Nos Services</h4>
          <p>Chez Fretur nous fournissons differents services</p>
        </div>

        <div className="" id="cards-cont">
          {CARDS_DATA.map((card, i) => (
            <Card key={i} data={card} />
          ))}
        </div>
      </main>
    </>
  );
}
