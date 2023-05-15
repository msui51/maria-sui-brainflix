import './_header.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import images from '../../assets/Images/Mohan-muruge.jpg';

function Header() {
  return (
    <header className="header">
        <div className="header__logo-wrapper">
            <img className="header__logo" src={logo} alt="play logo"></img>
        </div>
        <div className="header__input-wrapper">
            <input className="header__input" type="text" placeholder="Search"></input>
            <img className="header__img" src={images} alt="profile pic of a man"></img>
            <button className="header__button">UPLOAD</button>
        </div>
    </header> 
  )
}

export default Header