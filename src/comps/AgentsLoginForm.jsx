import React from "react";
import * as classes from "../classes";
import { useState } from "react";
import loading from "../assets/icons/loading.gif";

export default function AgentsLoginForm({}) {
  const [checking, setChecking] = useState(false);

  function onClick(e) {
    setChecking(!checking);
  }

  return (
    <div className="fretur-form-section">
      <form>
        <div>
          <input
            className={classes.inputText}
            type="text"
            placeholder="Phone"
          />
        </div>
        <div>
          <input
            className={classes.inputText}
            type="password"
            placeholder="password"
          />
        </div>

        <div className="">
          <button
            type="button"
            onClick={onClick}
            className="bg-sky-500 text-white px-4 py-1 rounded-xl hover:bg-sky-400 mx-auto"
          >
            CONNEXION
          </button>
        </div>

        <div
          className={`text-green-500  ${
            checking ? "visible" : "invisible"
          } text-sm gap-2  pt-2`}
        >
          <img src={loading} width={30} height={30} />
          <span>Wait please ...</span>
        </div>
      </form>
    </div>
  );
}
