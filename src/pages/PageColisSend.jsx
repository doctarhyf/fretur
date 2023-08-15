import React from "react";
import * as classes from "../classes";
import { useState } from "react";
import loading from "../assets/icons/loading.gif";

export default function PageColisSend(props) {
  const [checking, setChecking] = useState(false);

  function onClick(e) {
    alert("Checking colis ...");

    setChecking(!checking);
  }

  return (
    <>
      <main className="bg-gradient-to-b p-8  from-[#F3DD12]/10 to-white ">
        <div>
          <h3 className="text-sky-500 text-xl">Envois Colis</h3>
          <div className="text-gray-500">
            Veuillez emtrer tous les details pour envoyer un colis.
          </div>
        </div>

        <div className="forms-cont flex flex-col gap-8">
          <div className="form-section ">
            <div>
              <div className="text-sky-500">Details de l'expediteur</div>

              <div>
                <input
                  className={classes.inputText}
                  type="text"
                  placeholder="Nom complet"
                />
              </div>
              <div>
                <input
                  className={classes.inputText}
                  type="text"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div>
              <div className="text-sky-500">
                Details de la personne a recevoir
              </div>

              <div>
                <input
                  className={classes.inputText}
                  type="text"
                  placeholder="Nom complet"
                />
              </div>
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
                  type="text"
                  placeholder="Addresse complete"
                />
              </div>
              <div>
                <input
                  className={classes.inputText}
                  type="text"
                  placeholder="Boite postale"
                />
              </div>
            </div>

            <div>
              <div className="text-sky-500">Details Colis</div>
              Type:
              <select>
                <option>BOX</option>
                <option>Lettre</option>
                <option>Electronique</option>
              </select>
              <input
                className={classes.inputText}
                type="text"
                placeholder="Poids"
              />
              <div>Photos</div>
              <input
                className={classes.inputText}
                type="file"
                multiple
                placeholder="Poids"
              />
            </div>

            <div>
              <div className="text-sky-500">Pays a expedier</div>
              <div>
                <input
                  checked
                  className="p-4 border"
                  type="radio"
                  name="pays"
                />{" "}
                USA
                <input type="radio" name="pays" /> DRC
              </div>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={onClick}
                className="bg-sky-500 text-white px-4 py-1 rounded-xl hover:bg-sky-400 mx-auto"
              >
                ENVOYER
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
