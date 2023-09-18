import React, { useRef, useState } from "react";
import error404 from "../assets/icons/error404.png";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../helpers/flow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import IconButton from "../comps/IconButton";
import s1 from "../assets/icons/s1.png";
import motorbike from "../assets/icons/motorbike.png";
import map from "../assets/icons/map.png";
import stats from "../assets/icons/stats.png";
import student from "../assets/icons/student.png";
import taxi from "../assets/icons/taxi.png";
import trigger from "../assets/icons/trigger.png";
import car from "../assets/icons/car.png";
import asset from "../assets/icons/asset.png";
import destination from "../assets/icons/destination.png";
import GMap from "../comps/GMap";
import alfa from "../assets/cards/alfa.jpg";

import "../App.css";

const SECTIONS_DATA = [
  { title: "Map", path: "map", icon: map },
  { title: "Assets", path: "assets", icon: asset },
  { title: "Past trips", path: "ptrips", icon: destination },
  { title: "Triggers", path: "trig", icon: trigger },
  { title: "Stats", path: "stats", icon: stats },
];

function Section({ children, title }) {
  return (
    <div className="p-4">
      <div className="text-xl text-sky-500">{title}</div>
      <div>{children}</div>
    </div>
  );
}

/* export default function PageTrackMob2({}) {
  const [selectedSectionData, setSelectedSectionData] = useState(SECTIONS[0]);
  const [selectedSubSection, setSelectedSubSection] = useState("");

  function onSelectSection(sectionData) {
    setSelectedSectionData(sectionData);
    console.log(sectionData);
  }

  function onSetSubSection(ss) {
    setSelectedSubSection(ss);
  }

  return (
    <div className="text-center md:max-w-[1100px] md:mx-auto raltive md:flex md:flex-row ">
      <div className="md:w-[320pt] w-full text-left p-8  bg-slate-200">
        <div>drrhyf@gmail.com</div>
        <details>
          <summary className="p-1 cursor-pointer">FLEET MONITORING</summary>
          <ul>
            {SECTIONS.map((m, i) => (
              <IconButton
                key={i}
                title={m.title}
                icon={m.icon}
                onClick={(e) => onSelectSection(SECTIONS[i])}
                colorName="blue"
                outline={true}
              />
            ))}
          </ul>
        </details>
      </div>

      {selectedSectionData && selectedSectionData.path === SECTIONS[0].path && (
        <Section title={selectedSectionData.title}>
          <GMap />
        </Section>
      )}

      {selectedSectionData && selectedSectionData.path === SECTIONS[1].path && (
        <Section title={selectedSectionData.title}>
          <div className="md:flex flex-wrap py-2 border-b justify-around gap-2">
            {[
              ["Cars", car, 23],
              ["Taxis", taxi, 13],
              ["Motos", motorbike, 17],
              ["Enfants", student, 5],
            ].map((it, i) => (
              <div
                onClick={(e) => onSetSubSection(it[0])}
                key={i}
                className={`flex px-4
                ${i === 0 ? "bg-sky-500 text-white" : ""}
                 hover:border-sky-500 cursor-pointer 
                 gap-4 items-center rounded-md border mb-4 p-2`}
              >
                <div className="w-[30pt] h-[30pt]">
                  <img src={it[1]} width="100%" />
                </div>
                <div>
                  <div>{it[0]}</div>
                  <div className="text-neutral-400">{it[2]}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            {[...Array(15).fill(0)].map((it, i) => (
              <div className="text-left">
                {selectedSubSection} {i}
              </div>
            ))}
          </div>
        </Section>
      )}

      {selectedSectionData && selectedSectionData.path === SECTIONS[2].path && (
        <Section title={selectedSectionData.title}></Section>
      )}

      {selectedSectionData && selectedSectionData.path === SECTIONS[3].path && (
        <Section title={selectedSectionData.title}></Section>
      )}

      {selectedSectionData && selectedSectionData.path === SECTIONS[4].path && (
        <Section title={selectedSectionData.title}></Section>
      )}
    </div>
  );
} */

export default function PageTrackMob({}) {
  const [selectedSectionData, setSelectedSectionData] = useState();
  const [selectedSubSection, setSelectedSubSection] = useState("");
  const [showingMenu, setShowingMenu] = useState(false);
  const refMenu = useRef();

  function onSelectSection(sectionData) {
    setSelectedSectionData(sectionData);
    console.log(sectionData);
  }

  function onSetSubSection(ss) {
    setSelectedSubSection(ss);
  }

  function onMenuItemClick(isMenubutton, sectionData) {
    /*  setSelectedSectionData(sectionData);

    refMenu.current.open = false;
    setShowingMenu(false); */
    if (isMenubutton) {
      setShowingMenu(false);
    } else {
    }

    console.log(isMenubutton, onMenuItemClick);
  }

  return (
    <div className="min-h-[320pt] relative text-white md:max-w-[1100px] md:mx-auto bg-[#21212D]">
      <div className=" h-[200pt] md:h-[300pt] text-white overflow-hidden relative w-full bg-[#21212D]">
        <img src={alfa} className="w-[100%] absolute object-fit " />
        <div className="bg-gradient-to-b from-transparent to-[#21212D] absolute w-[100%] h-[100%]"></div>
        <div className="absolute text-left  p-8 flex flex-col gap-8">
          <div className="text-3xl font-bold">Tracking Mobiliers</div>
          <div className="max-w-[180pt] text-white/100">
            Pour tous tracking de vos bien mobiliers comme (Vehicule, Taxi,
            motos etc. )
          </div>
          <button className=" text-sky-500 border border-sky-500 w-fit p-2 rounded-md hover:bg-sky-500 hover:text-white ">
            Learn More
          </button>
        </div>
      </div>

      <div className="p-8 gap-4 flex flex-col w-full md:max-w-[480pt]">
        <div className="text-sky-500">FORMULAIRE D"ENREGISTREMENT</div>
        <input
          className="p-2 border outline-none  border-neutral-200 text-neutral-700 hover:border-sky-500 rounded-md"
          type="text"
          placeholder="Full name"
        />
        <div>
          <div>Type de mobilier:</div>
          <select className="p-2 border outline-none  border-neutral-200 text-neutral-700 hover:border-sky-500 rounded-md">
            {["Camion", "Vehicule", "Taxi", "Moto", "Autre"].map((it, i) => (
              <option>{it}</option>
            ))}
          </select>
        </div>
        <input
          className="p-2 border outline-none  border-neutral-200 text-neutral-700 hover:border-sky-500 rounded-md"
          type="text"
          placeholder="Plaque d'immatriculation"
        />

        <div className="text-sky-500">TYPE D'ABONNEMENT</div>

        <div className="flex gap-8 flex-col md:flex-row">
          {[
            {
              title: "Normal",
              desc: "Package normal, juste localisation",
              price: 199,
              oldPrice: 299,
              code: "normal",
            },
            {
              title: "Full",
              desc: "Package complet, localisation et assisstance en cas de perte",
              price: 299,
              oldPrice: 399,
              code: "full",
            },
          ].map((p, i) => (
            <div
              className={` md:w-[50%] w-full  ${
                i === 0 ? "bg-sky-500/20 border-sky-700" : ""
              } border  cursor-pointer p-4 rounded-md
              hover:bg-sky-500/30 hover:border-sky-800
              
              `}
            >
              <div>{p.title}</div>
              <div className="text-3xl text-sky-500">${p.price}</div>
              <div className="text-red-500 line-through">${p.oldPrice}</div>
              <div className="text-neutral-400 italic text-sm">{p.desc}</div>
            </div>
          ))}
        </div>

        <button className=" text-sky-500 border border-sky-500 w-fit p-2 rounded-md hover:bg-sky-500 hover:text-white ">
          S'ENREGISTRER
        </button>
      </div>

      {/*  <div className="bg-[#2C2E3A] z-500  absolute  sm:w-[220pt] w-full p-4">
        <details ref={refMenu}>
          <summary>drrhyf@gmail.com</summary>
          <div
            className={`flex flex-col transition-all ease-in-out duration-200 `}
          >
            {SECTIONS_DATA.map((sectionData, i) => (
              <button
                className="text-left rounded-md border border-transparent
              hover:border-sky-200
              hover:bg-sky-400 flex gap-4 p-2"
                onClick={(e) => {
                  setSelectedSectionData(sectionData);
                  refMenu.current.open = false;
                }}
              >
                <img src={sectionData.icon} width={30} className="float-left" />
                {sectionData.title}
              </button>
            ))}
          </div>
        </details>
      </div>

      <div className=" text-white  p-8 pt-[40pt]">
        {selectedSectionData.path === SECTIONS_DATA[0].path && (
          <Section title={selectedSectionData.title}>
            <div className={`w-[100%] ${"hidden"} z-0 bg-red-50 h-[320pt] `}>
              <GMap />
            </div>
            <img src={map} className="w-full h-full" />
          </Section>
        )}

        {selectedSectionData.path === SECTIONS_DATA[1].path && (
          <Section title={selectedSectionData.title}></Section>
        )}

        {selectedSectionData.path === SECTIONS_DATA[2].path && (
          <Section title={selectedSectionData.title}>cool</Section>
        )}

        {selectedSectionData.path === SECTIONS_DATA[3].path && (
          <Section title={selectedSectionData.title}>cool</Section>
        )}

        {selectedSectionData.path === SECTIONS_DATA[4].path && (
          <Section title={selectedSectionData.title}>cool</Section>
        )}
      </div> */}
    </div>
  );
}
