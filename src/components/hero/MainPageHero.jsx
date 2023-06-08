import './mainPageHero.scss';

function MainPageHero(props) {
  return (
    <section className="hero__wrapper">
        <video width="100%"controls poster={props.activeVideo.image}>
        <source src={props.activeVideo.video}></source>
        </video>
    </section>
  )
}

export default MainPageHero