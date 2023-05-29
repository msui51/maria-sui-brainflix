import './_hero.scss';

function Hero(props) {
  return (
    <section className="hero__wrapper">
        <video width="100%"controls poster={props.activeVideo.image}>
        <source src={props.activeVideo.video}></source>
        </video>
    </section>
  )
}

export default Hero