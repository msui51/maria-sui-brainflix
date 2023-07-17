import './mainPageHero.scss';

  //current video's image

function MainPageHero({currentVideo}) {
  
 return (
    <section className="hero__wrapper">
        <video width="100%"controls poster={`http://localhost:5000/${currentVideo.image}`}>
        <source src={currentVideo.video}></source>
        </video>
    </section>
  )
}

export default MainPageHero