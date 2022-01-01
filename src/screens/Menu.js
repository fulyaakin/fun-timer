import React, { useState, useReducer, useEffect} from "react";
import Background from '../assets/menu-bg.jpg';
import { Link, Navigate } from "react-router-dom";

const formReducer = (state, event) => {
  if(event.reset) {
   return {
     countdown_date: '',
     theme:'',
     title:''
   }
 }
  return {
    ...state,
    [event.name]: event.value
  }
}


function Menu() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [input,setInput] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const styles = {
    header: {
      backgroundImage: "url(" + Background + ")",
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    content: {      
      display: "flex",
      flexDirection: "column",
      fontSize:"5vw",
      marginLeft:"0",
      fontFamily:"sans-serif"
    },
    linkStyle: {
      margin: "1rem",
    textDecoration: "none",
    color: 'white',
    }
  }

  const handleClick = () =>{
    setInput(!input);
  }

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
       reset: true
     })
    }, 3000);
    console.log(formData);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  useEffect(() => {
    localStorage.setItem("countdown_date", formData.countdown_date)
    localStorage.setItem("theme", formData.theme)
    localStorage.setItem("title", formData.title)
  }, [formData]);

  return (
    <div style={styles.header}>
          <div className="container">
          <nav  style={styles.content}>
          <ul>
            <ul>
              <Link to="/newyear" style={styles.linkStyle}>New Year</Link>
            </ul>
            <ul>
              <Link to="/quarantine" style={styles.linkStyle}>Quarantine</Link>
            </ul>
            <ul>
              <Link to="/birthday" style={styles.linkStyle}>Birthday</Link>
            </ul>
            <ul>
              <Link to="/graduation" style={styles.linkStyle} >Graduation</Link>
            </ul>
            </ul>
            </nav>
            <button onClick={handleClick} style={{"borderRadius":"10px","marginLeft":"6rem","backgroundColor":"#5F5D5E","fontSize":"3vw","color":"white"}}>Add new date</button>
            <br/>
            {input? <div><input style={{"borderRadius":"10px","width":"19vw","height":"3vw","textAlign":"center","marginLeft":"6rem","marginTop":"0.5rem","fontSize":"1.5vw"}} type="date" id="start" name="countdown_date"
                min={new Date()} max="2100-12-31" onChange={handleChange} />
                <br/>
                <select style={{"borderRadius":"10px","width":"19vw","height":"3vw","textAlign":"center","fontSize":"1.5vw","marginLeft":"6rem","marginTop":"0.5rem",}} name="theme" onChange={handleChange} value={formData.theme || ''}>
                <option value="">Please choose an option</option>
                <option value="Travel">Travel</option>
                <option value="Vacation">Vacation</option>
                <option value="Celebration">Celebration</option>
                <option value="Space">Space</option>
                <option value="Nature">Nature</option>
                <option value="Money">Money</option>
            </select>
            <br/>
            <input style={{"borderRadius":"10px","width":"19vw","height":"3vw","textAlign":"center","fontSize":"1.5vw","marginLeft":"6rem","marginTop":"0.5rem"}} name="title" onChange={handleChange} placeholder="Title" value={formData.title || ''}/><br/>
            <button onClick={handleSubmit} style={{"width":"12vw","height":"3vw","borderRadius":"10px","fontSize":"1.5vw","marginLeft":"9rem","marginTop":"0.5rem",}} type="submit"><strong>Create Timer</strong></button>
            </div>: null }
            {submitting? <Navigate to="/custom" /> : null}
          </div>
    </div>
    );
}

export default Menu;
