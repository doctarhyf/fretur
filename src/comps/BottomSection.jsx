import React from "react";
import { NavLink } from "react-router-dom";

export default function BottomSection({ data }) {
  const { title, links } = data;

  return (
    <div>
      <div className="text-sm">{title}</div>
      {links.map((lk, i) => (
        <div>
          <NavLink
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#7BC6F1" : "white",
              };
            }}
            to={lk.link}
          >
            {" "}
            {lk.label}{" "}
          </NavLink>{" "}
        </div>
      ))}
    </div>
  );
}
