import React from "react";
import "./imageLinkForm.css";

const imageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {
          "Dieses magische Hirn wird Gesichter in ihren Fotos finden. Versuchen Sie es!"
        }
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadwow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-red"
            onClick={onButtonSubmit}
            
          >
            Erkennen
          </button>
        </div>
      </div>
    </div>
  );
};

export default imageLinkForm;
