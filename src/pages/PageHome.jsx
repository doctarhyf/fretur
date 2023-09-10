import React, { useState } from "react";

import { ROUTES, CARDS_DATA, images } from "../helpers/flow";
import { NavLink } from "react-router-dom";
import MyImageGallery from "../comps/MyImageGallery";

function HomePageCard({ data }) {
  let { title, desc, img, path, btnText } = data;

  btnText = btnText ? btnText : "Learn more";

  console.log("data => \n", data);

  return (
    <div className="relative w-full  md:w-[30%]   card pt-4 bg-slate-100 shadow-md shadow-black/25 mt-4 rounded-md">
      <div className="absolute bottom-0 p-2 m-2 text-xs hover:bg-sky-500 transition-all  text-white rounded-lg border border-sky-500">
        <NavLink to={path}>{btnText}</NavLink>
      </div>
      <div className="mx-4 text-lg text-sky-500">{title}</div>
      <div className="mx-4 text-slate-800 text-sm">{desc}</div>
      <div className="mt-4  min-h-[140px] max-h-[180px] md:h-[340px]  overflow-hidden">
        <img className=" h-[100%] object-cover w-[100%] " src={img} />
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
          {false && <p>Chez Fretur nous fournissons differents services</p>}
        </div>

        <div
          className=" flex justify-around flex-row gap-8 flex-wrap "
          id="cards-cont   "
        >
          {CARDS_DATA.map((card, i) => (
            <HomePageCard key={i} data={card} />
          ))}
        </div>
      </main>
    </>
  );
}
