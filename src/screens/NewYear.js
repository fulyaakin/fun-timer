import React from "react";
import Background from '../assets/newyear-bg.jpg';
import Timer from '../components/Timer';

function NewYear() {

  return (
    <Timer title="2023" date = {`01/01/2023`} background = {Background} />
  );
}

export default NewYear;
