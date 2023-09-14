import React, { useState } from "react";
import fb from "../assets/logo/fb.png";
import insta from "../assets/logo/insta.png";
import tw from "../assets/logo/tw.png";
import rhyf from "../assets/rhyf.jpg";
import cd from "../assets/icons/flag_cd.jpeg";
import us from "../assets/icons/flag_us.jpeg";
import "../App.css";

const SECTIONS_DATA = {
  PERS_DET: ["PERSONAL DETAILS", "Please fill up your"],
  BILLING_ADD: ["BILLING ADDRESS", "Your billing address"],
  PAYMENT_METH: ["PAYMENT METHODS", "All your payment methods"],
  CHANGE_PWD: [
    "CHANGE PASSWORD",
    "Minimun 8 characters including atleast 1 number, please not that passwords are case sensitive",
  ],
};

function MenuItem({ data }) {
  const title = data[0];
  const desc = data[1];

  return (
    <div
      className={`hover:bg-white self-end  group hover:text-gray-600 cursor-pointer w-min min-w-[70%]  right-0 p-2 rounded-l-xl  `}
    >
      <h5 className="group-hover:text-black">{title}</h5>
      <p className="text-xs group-hover:text-black text-gray-300/50">{desc}</p>
    </div>
  );
}

const COUNTRIES = {
  US: { flag: us, code: "+1", country: "US" },
  CD: { flag: cd, code: "+243", country: "CD" },
};

export default function PageMyAcc({}) {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES.US);
  const [data, setdata] = useState({});

  const clSectionTitle = "text-neutral-600  my-4";
  const clInput =
    " mb-4 outline w-full outline-1 outline-neutral-400 hover:outline-sky-500 p-2 rounded-md";

  const clBtnForm = ` rounded-md p-2 text-center w-full text-sky-500 hover:text-white hover:bg-sky-500`;

  return (
    <div className="md:max-w-[1100px] flex flex-col md:flex-row min-h-[420pt]  mx-auto md:p-4  ">
      <section className=" relative bg-[url('./assets/bg_myacc.jpg')] bg-top md:bg-center bg-cover md:text-right from-green-500 to-blue-500 p-8  md:w-[50%] w-full ">
        <p className="text-3xl font-bold z-20 relative text-purple-500 ">
          Avantage du compte Fretur
        </p>

        <div className=" bg-gradient-to-b  from-black/50 to-white/10 z-10 absolute left-0 w-full h-full top-0"></div>

        <ul className="mt-8 z-10 text-white relative ">
          {[
            "Profitez des promotions",
            "Tracker vos colis",
            "Gagner des cadeux par vos recommendations",
            "Et plus ...",
          ].map((it, i) => (
            <li className="list-bullet">{it}</li>
          ))}
        </ul>
      </section>

      <section className=" p-8 w-full md:w-[50%] ">
        <p className="text-3xl font-bold my-4">Creer un compte</p>

        <p className={clSectionTitle}>Info Perso</p>

        <div>
          <input className={clInput} placeholder="Nom Complet" />
        </div>

        <div>
          <input className={clInput} placeholder="Email" type="text" />
        </div>

        <div>
          <div>Phone</div>
          <select
            className={clInput}
            value={selectedCountry.country}
            onChange={(e) => setSelectedCountry(COUNTRIES[e.target.value])}
          >
            <option value="US">USA</option>
            <option value="CD">DRCONGO</option>
          </select>

          <div className="flex gap-4 justify-between  items-start ">
            <div className="flex gap-2 mt-2">
              <img
                width={30}
                height={30}
                className="object-center"
                src={selectedCountry.flag}
              />

              <div>{selectedCountry.code}</div>
            </div>
            <input
              className={`${clInput} mt-0 `}
              type="tel"
              placeholder="893092849"
              maxLength={9}
            />
          </div>
        </div>

        <div>
          <input className={clInput} placeholder="Password" type="password" />
        </div>

        <div>
          <input
            className={clInput}
            placeholder="Re-Password"
            type="password"
          />
        </div>

        <p className={clSectionTitle}>Addresse Physique</p>

        <div className="flex gap-2 items-start">
          <p className="my-2">Ville:</p>
          <select className={` ${clInput} w-full `}>
            <option>KINSHASA</option>
            <option>LUBUMBASHI</option>
            <option>LIKASI</option>
            <option>KOLWEZI</option>
            <option>MBUJI-MAYI</option>
          </select>
        </div>
        <div>
          <input className={clInput} placeholder="Quartier" type="text" />
        </div>
        <div className="flex gap-2">
          <input className={clInput} placeholder="Avenue" type="text" />

          <input className={` ${clInput} `} placeholder="Numero" type="text" />
        </div>

        <div>
          <button className={clBtnForm}>S'ENREGISTRER</button>
        </div>
      </section>
    </div>
  );
}
