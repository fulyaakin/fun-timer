import React from "react";
import Background from '../assets/graduation-bg.jpg';
import Timer from '../components/Timer';

function Graduation() {

  return (
    <Timer title="Graduation" date = {`01/15/2022`} background = {Background} />

  );
}

export default Graduation;
