import React from "react";
import fb from "../assets/logo/fb.png";
import insta from "../assets/logo/insta.png";
import tw from "../assets/logo/tw.png";
import rhyf from "../assets/rhyf.jpg";
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

export default function PageMyAcc({}) {
  return (
    <div className="m-8 flex min-h-[60vh] max-w-[75vw] mx-auto ">
      <section className=" py-8 rounded-l-3xl left bg-gradient-to-b from-[#191560] to-[#6D00FD] text-white  ">
        <div className="text-center text-3xl">MY PROFILE</div>

        <div className="flex gap-4 p-4">
          <img
            src={rhyf}
            className="rounded-full border-4 border-white w-[60pt] h-[60pt] "
          />
          <div className="flex flex-col gap-2">
            <p>Upload Avater image file</p>
            <button
              type="button"
              className="border-2 hover:bg-white hover:text-black hover:border-black px-2 border-dashed w-min mx-auto border-gray"
            >
              BROWSE
            </button>
            <div className="flex gap-4 justify-around">
              <img src={fb} className="net" />
              <img src={insta} className="net" />
              <img src={tw} className="net" />
            </div>
          </div>
        </div>

        <nav className=" flex flex-col ">
          {Object.values(SECTIONS_DATA).map((it, i) => (
            <MenuItem key={i} data={it} />
          ))}
        </nav>
      </section>
      <section className="right ">rigth</section>
    </div>
  );
}
