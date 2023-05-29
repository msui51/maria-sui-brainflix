import './_header.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import image from '../../assets/Images/Mohan-muruge.jpg';

function Header(props) {
  return (
    <header className="header__wrapper">
        <div className="header__logo-wrapper">
            <img className="header__logo" src={logo} alt="play logo"></img>
        </div>
        <div className="header__input-wrapper">
            <input className="header__input" type="text" id="search" name="search" placeholder="Search"></input>
            <img className="header__img" src={image} alt="profile pic of a man"></img>
            <button className="header__button">UPLOAD</button>
        </div>
    </header> 
  )
}

export default Header