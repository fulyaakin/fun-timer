import React, { useEffect, useState } from "react";

function Timer(props) {

    const styles = {
        header: {
            margin: 0,
            color: 'white',
            textAlign:"center", 
            fontSize:"4.5vw",
            backgroundImage: "url(" + props.background + ")",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh',
            overflow:"hidden",
        },
        content: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            marginLeft:"15vw",
            marginRight:"15vw",
            color: 'white',
            textAlign:"center", 
            display:"flex",
            justifyContent:"center",
            marginTop:"15vh",
            fontSize:"5vw",
            borderRadius:"20px"
        }
      }
      
  const calculateTimeLeft = () => {
    let difference = +new Date(props.date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60) == 0 ? "00" : Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <span style={{padding:"1vw"}}>
      {timeLeft[interval]}<br/>{interval}
    </span>

  );
});

  return (
    <div style={styles.header}>
    <h1>{props.title} Countdown</h1>
    {timerComponents.length ? <span style={styles.content}> {timerComponents}  </span>: <span>Time's up!</span>}
  </div>
  );
}

export default Timer;
