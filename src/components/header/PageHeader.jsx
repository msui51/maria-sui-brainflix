import './pageHeader.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import image from '../../assets/Images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function PageHeader(props) {
  



  return (
    <header className="header__wrapper">
        <div className="header__logo-wrapper">
            <Link to="/"><img className="header__logo" src={logo} alt="play logo"></img></Link>
        </div>
        <div className="header__input-wrapper">                
            <input className="header__input" type="text" id="search" name="search" placeholder="Search"></input>
            <img className="header__img" src={image} alt="profile pic of a man"></img>
            <Link className="header__button-link" to="/upload"><button className="header__button">UPLOAD</button></Link>
        </div>
    </header> 
  )
}

export default PageHeader