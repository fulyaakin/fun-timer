import React from "react";
import Background from '../assets/quarantine-bg.jpg';
import Timer from '../components/Timer';

function Quarantine() {

  return (
      <Timer title="Quarantine" date = {`01/10/2022`} background = {Background} />
   
  );
}

export default Quarantine;
