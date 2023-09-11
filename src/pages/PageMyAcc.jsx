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

  return (
    <div className="md:max-w-[1100px] flex flex-col md:flex-row min-h-[420pt]  mx-auto md:p-4  ">
      <section className=" w-full md:w-[50%] ">
        <p>Creer un compte FRETUR</p>

        <div>
          <div>Nom Complet</div>
          <input type="text" />
        </div>

        <div>
          <div>Email</div>
          <input type="text" />
        </div>

        <div>
          <div>Addresse Physique</div>
          <input type="text" />
        </div>

        <div>
          <div>Phone</div>
          <select
            value={selectedCountry.country}
            onChange={(e) => setSelectedCountry(COUNTRIES[e.target.value])}
          >
            <option value="US">USA</option>
            <option value="CD">DRCONGO</option>
          </select>
          <div className="flex">
            <img width={30} src={selectedCountry.flag} />

            <div>{selectedCountry.code}</div>
            <input type="text" maxLength={9} />
          </div>

          <button>S'ENREGISTRER</button>
        </div>
      </section>
      <section className="bg-gradient-to-b from-green-500 to-blue-500 p-8 text-white md:w-[50%] w-full ">
        Bienvenue chez fretur
      </section>
    </div>
  );
}
