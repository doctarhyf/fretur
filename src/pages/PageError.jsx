import React from "react";
import error404 from "../assets/icons/error404.png";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../helpers/flow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

export default function PageError({}) {
  return (
    <div className="text-center m-8 ">
      <img
        src={error404}
        className="w-[50%] h-[50%] max-w-[280px] max-h-[280px]  mx-auto gap4"
      />

      <div className="text-3xl text-sky-500">Page not found!</div>
      <p>Sorry the page you are looking for does not exist!</p>
      <NavLink className="text-sky-500" to={ROUTES.PAGE_HOME.path}>
        <FontAwesomeIcon icon={fa.faHome} />
        HOME
      </NavLink>
      <div></div>
    </div>
  );
}
