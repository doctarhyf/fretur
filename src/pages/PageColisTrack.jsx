import React from "react";
import * as classes from "../classes";
import { useState } from "react";
import loading from "../assets/icons/loading.gif";
import map from "../assets/maps.webp";
import GMap from "../comps/GMap";

export default function PageColisTrack(props) {
  const [checking, setChecking] = useState(false);

  function onClick(e) {
    alert("Checking colis ...");

    setChecking(!checking);
  }

  return (
    <>
      <main className="bg-gradient-to-b p-8  from-[#F3DD12]/10 to-white ">
        <div>
          <h3 className="text-sky-500 text-xl">Package Tracking</h3>
          <div className="text-gray-500">
            Veuillez emtrer tous les details pour receptionner un colis.
          </div>
        </div>

        <div className="forms-cont flex flex-col gap-8">
          <div className="form-section">
            <div className="text-sky-500">Code de transfert</div>
            <form>
              <div>
                <input
                  className={classes.inputText}
                  type="text"
                  placeholder="Code transfert"
                />
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={onClick}
                  className="bg-sky-500 text-white px-4 py-1 rounded-xl hover:bg-sky-400 mx-auto"
                >
                  START TRACKING
                </button>
              </div>

              <div className="w-[100%]  h-[280px] mt-4 rounded-xl overflow-hidden">
                <img
                  src={map}
                  className="w-[100%] hidden h-[100%] object-cover"
                />
                <GMap />
              </div>

              <div
                className={`text-green-500 flex ${
                  checking ? "visible" : "invisible"
                } text-sm gap-2 justify-evenly pt-2`}
              >
                <img src={loading} width={30} height={30} />
                <span>Verification ... veuillez patienter svp</span>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
