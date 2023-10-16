import React, { useState } from "react";
import error404 from "../assets/icons/error404.png";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../helpers/flow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

export default function PageAdmin({}) {
  const [admin, setadmin] = useState(false);

  useState(() => {
    loadAdmin();
  }, []);

  async function loadAdmin() {
    let u = localStorage.getItem("fad");

    console.log(u);
  }

  return <div className="text-center m-8 ">Admin</div>;
}
