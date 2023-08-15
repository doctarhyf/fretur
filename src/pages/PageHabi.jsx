import React, { useEffect, useState } from "react";
import { CLOTHES_TYPE } from "../helpers/flow";
import { useNavigate } from "react-router-dom";
import pic from "../assets/pic.jpg";

function Chip({ data, cat }) {
  const { name, path } = data;
  const [active, setActive] = useState(false);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loc = window.location.search.replace("?type=", "");
    const categoryEqualLocation = cat === loc;
    setActive(categoryEqualLocation);
  }, []);

  function onChipClicked(e) {
    navigate(path);
    window.location.reload();
  }

  return (
    <button
      className={`chip ${active ? "active" : ""} `}
      onClick={onChipClicked}
    >
      {name}
    </button>
  );
}

function CardCloth({}) {
  return (
    <div className="w-[260px] rounded-lg shadow-xl hover:outline-sky-500 shadow-black/30 outline outline-1 outline-sky-600/30  min-h-[240px]">
      <img src={pic} />
      <div className="p-2">
        <p className="text-sm text-slate-500 ">
          Fruit of the Loom Men's Eversoft Cotton Short Sleeve Pocket T-Shirts,
          Breathable & Tag Free
        </p>
        <div>* * * * * </div>
        <div className="flex">
          <span className="text-[9pt]">$</span>
          <span className="-mt-4 text-[40pt]">80</span>
          <span>50</span>
        </div>
      </div>
    </div>
  );
}

export default function PageHabi({}) {
  const arr = new Array(20).fill(0);
  let chips = [];

  return (
    <div className="m-8 ">
      <div className="chip-cont">
        {CLOTHES_TYPE.map((type, i) => (
          <Chip key={i} data={type} cat={type.cat} />
        ))}
      </div>

      <div className="flex gap-8  flex-wrap justify-center mt-4 mb-4">
        {arr.map((it, i) => (
          <CardCloth key={i} data={it} />
        ))}
      </div>
    </div>
  );
}
