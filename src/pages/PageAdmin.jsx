import React, { useState } from "react";
import error404 from "../assets/icons/error404.png";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../helpers/flow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import loading from "../assets/loading.webp";

function DiapoItem({ item: it }) {
  const [ld, setld] = useState(false);

  function onSave(e) {
    setld(!ld);
  }

  return (
    <div className="flex  outline outline-lime-400 outline-1 rounded-md p-2 m-2 mb-4">
      <div>
        <div>
          <img src={it.pic} width={120} />
        </div>
        <div>
          <input type="file" />
        </div>
      </div>
      <div>
        <div>Title</div>
        <input
          type="text"
          className=" outline-none focus:border-blue-500 hover:border-blue-400 border border-gray-500 p-1 rounded-md "
        />
        <div>Description</div>
        <input
          type="text"
          className=" outline-none focus:border-blue-500 hover:border-blue-400 border border-gray-500 p-1 rounded-md "
        />
        <div>Button</div>
        <input
          type="text"
          className=" outline-none focus:border-blue-500 hover:border-blue-400 border border-gray-500 p-1 rounded-md "
        />
        <div>Path</div>
        <input
          type="text"
          className=" outline-none focus:border-blue-500 hover:border-blue-400 border border-gray-500 p-1 rounded-md "
        />
        <div>
          <div className="h-[24pt]  overflow-hidden relative ">
            <img
              src={loading}
              className={`absolute -top-20 ${ld ? "visible" : "hidden"} `}
            />
          </div>

          <button
            onClick={onSave}
            className=" my-4 rounded-md bg-blue-500 p-2 text-white hover:bg-blue-400"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PageAdmin({}) {
  const [admin, setadmin] = useState(false);
  const [diapos, setdiapos] = useState([
    ...Array(5).fill({
      title: "Title",
      description: "desc",
      button: "button",
      path: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21",
      pic: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21",
    }),
  ]);

  useState(() => {
    loadAdmin();
  }, []);

  async function loadAdmin() {
    let u = localStorage.getItem("fad");
    setadmin(JSON.parse(u));
  }

  if (admin) {
    return (
      <div className="max-w-[900px] mx-auto">
        <div className="text-xl">Parametres Photo Diapo</div>

        {Object.values(diapos).map((it, i) => (
          <DiapoItem key={i} item={it} />
        ))}
      </div>
    );
  }

  return <div className="text-center m-8 ">Login</div>;
}
