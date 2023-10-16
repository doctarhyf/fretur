import React, { useState } from "react";
import error404 from "../assets/icons/error404.png";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../helpers/flow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

export default function PageAdmin({}) {
  const [admin, setadmin] = useState(false);
  const [diapos, setdiapos] = useState([
    ...Array(5).fill({
      title: "Title",
      description: "desc",
      button: "button",
      path: "path",
      pic: "",
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
      <div>
        {Object.values(diapos).map((it, i) => (
          <div key={i}>{JSON.stringify(it)}</div>
        ))}
      </div>
    );
  }

  return <div className="text-center m-8 ">Login</div>;
}
