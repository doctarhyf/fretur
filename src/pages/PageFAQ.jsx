import React from "react";
import arrowd from "../assets/icons/arrowd.svg";
import "../App.css";

function FAQItem({ data }) {
  const { title, desc } = data;
  return (
    <div className="faq-item">
      <div className="faq-title">
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
          <FAQItem
            key={i}
            data={{
              title: `Question numero ${i}`,
              desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, commodi.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, commodi.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, commodi.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, commodi.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, commodi.",
            }}
          />
        ))}
      </div>
    </div>
  );
}
