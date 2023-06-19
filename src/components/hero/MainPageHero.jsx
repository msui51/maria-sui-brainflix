import './mainPageHero.scss';

function MainPageHero({currentVideo}) {
  return (
    //current video's image
    
    <section className="hero__wrapper">
        <video width="100%"controls poster={currentVideo.image}>
        <source src={currentVideo.video}></source>
        </video>
    </section>
  )
}

export default MainPageHero