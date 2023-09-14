import React from "react";
import arrowd from "../assets/icons/arrowd.svg";
import "../App.css";

function FAQItem({ data }) {
  const { title, desc } = data;
  return (
    <div className="faq-item flex">
      <div className="faq-title flex justify-between bg-sky-500 text-white rounded-t-lg">
        <span>{title}</span>

        <img src={arrowd} width={30} />
      </div>
      <div className="faq-cont">{desc}</div>
    </div>
  );
}

export default function PageFAQ({}) {
  return (
    <div className=" m-8 ">
      <div className=" text-center text-xl text-sky-500 p-4">
        Foire aux questions
      </div>
      <div className="faq-cont">
        {[...Array(7)].map((it, i) => (
          <details>
            <summary className="p-1 cursor-pointer">
              Question numero {i}
            </summary>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              repellendus?
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
