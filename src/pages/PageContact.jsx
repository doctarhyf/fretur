import React from "react";
import error404 from "../assets/icons/error404.png";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../helpers/flow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

export default function PageContact({}) {
  return (
    <div className=" m-8  ">
      <div className="flex max-w-[900px] mx-auto flex-col gap-4 border-1 border-t-4   border-t-yellow-500 ">
        <div className="text-3xl">Corporate Contact Information</div>

        <div>
          <p>Do you have questions about our services?</p>
          <Link to={ROUTES.PAGE_NEAR_OFFICE.path}>
            <p className="text-sky-500 hover:underline">
              Contact your nearby FRETUR agent location.
            </p>
          </Link>
        </div>

        <div>
          <div className="font-bold">Corporate Headquarters</div>
          <div>7001 E. Belleview, Denver, CO 80237.</div>
          <div className="font-bold">+1-000-000-0000</div>
        </div>
      </div>
    </div>
  );
}
