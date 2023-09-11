import React from "react";
import fretur from "../assets/logo/fretur.png";
import fb from "../assets/logo/fb.png";
import yt from "../assets/logo/yt.png";
import tw from "../assets/logo/tw.png";
import insta from "../assets/logo/insta.png";
import { ROUTES } from "../helpers/flow";
import BottomSection from "../comps/BottomSection";
import { NavLink } from "react-router-dom";

const BottomSectionsData = [
  {
    title: "Tools",
    links: [
      { label: "Find Near Office", link: ROUTES.PAGE_NEAR_OFFICE.path },
      { label: "Track Package", link: ROUTES.PAGE_COLIS_TRACK.path },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "FAQ", link: ROUTES.PAGE_FAQ.path },
      { label: "Contact Us", link: ROUTES.PAGE_CONTACT.path },
      /*  { label: "Fraud Awarness", link: "" }, */
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Online privacy statement", link: ROUTES.PAGE_PRIVACY.path },
      /*  { label: "Intellectual Property", link: "" }, */
    ],
  },
];

export default function Footer({}) {
  return (
    <>
      <div className="bottom-cont bg-gray-700 p-4 flex md:flex-row md:justify-around flex-col gap-4 text-white">
        <BottomSection data={BottomSectionsData[0]} />
        <BottomSection data={BottomSectionsData[1]} />
        <BottomSection data={BottomSectionsData[2]} />
      </div>
      <footer className="bg-gray-900 text-sky-500 text-sm p-4 min-h-[100pt]">
        <div className="border-b py-2 border-b-gray-800">
          <ul className="flex gap-4 flex-wrap justify-around">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={ROUTES.PAGE_ABOUT.path}>
              <li>About Us</li>
            </NavLink>
            <NavLink to={ROUTES.PAGE_CONTACT.path}>
              <li>Contact Us</li>
            </NavLink>
            <NavLink to={ROUTES.PAGE_PRIVACY.path}>
              <li>Privacy Statement</li>
            </NavLink>
          </ul>

          <ul className="flex gap-4 justify-around">
            <NavLink to="facebook.com">
              <img src={fb} width={30} />
            </NavLink>
            <NavLink to="youtube.com">
              <img src={yt} width={30} />
            </NavLink>
            <NavLink to="instagram.com">
              <img src={insta} width={30} />
            </NavLink>
            <NavLink to="twitter.com">
              <img src={tw} width={30} />
            </NavLink>
          </ul>
        </div>

        <div className="text-center text-gray-300 border-b py-2 border-b-gray-800">
          © 2023 FRETUR, Inc. All rights reserved.
        </div>

        <div className="flex mt-4 justify-center gap-4 text-3xl text-center">
          <img src={fretur} width={40} />
          <span>FRETUR</span>
        </div>
      </footer>
    </>
  );
}
