import React from "react";

const Rang = ({ name, entries }) => {
  return (
    <div>
      <div className="white f1">
        {`${name} , Du hast diese Funktion bisher`}
        <div className="white f1 ">{entries}</div>
      </div>
    </div>
  );
};

export default Rang;
