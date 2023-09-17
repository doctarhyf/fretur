import React, { useState } from "react";
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

const SECTIONS = [
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

export default function PageTrackMob({}) {
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
}
