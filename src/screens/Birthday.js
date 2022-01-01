import React from "react";
import Background from '../assets/birthday-bg.jpg';
import Timer from '../components/Timer';

function Birthday() {

  return (
    <Timer title = "Birthday" date = {`01/05/2022`} background = {Background} />
  );
}

export default Birthday;
