import React from "react";
import Timer from '../components/Timer';
import Nature from '../assets/nature-bg.jpg';
import Celebration from '../assets/celebration-bg.jpg';
import Travel from '../assets/travel-bg.jpg';
import Vacation from '../assets/vacation-bg.jpg';
import Space from '../assets/space-bg.jpg';
import Money from '../assets/money-bg.jpg';

function Custom() {
    let custom_title = localStorage.getItem("title");
    const custom_date = localStorage.getItem("countdown_date");
    const custom_theme = localStorage.getItem("theme");

    let Background;

    if (custom_title === 'undefined'){
        custom_title = custom_theme;
    }

    switch(custom_theme) {
        case 'Nature':
            Background = Nature;
            break;
        case 'Celebration':
            Background = Celebration;
            break;
        case 'Travel':
            Background = Travel;
            break;
        case 'Vacation':
            Background = Vacation;
            break;
        case 'Space':
            Background = Space;
            break;
        case 'Money':
            Background = Money;
            break;
    }

  return (
    <Timer title={custom_title} date = {custom_date} background = {Background} />
  );
}

export default Custom;
