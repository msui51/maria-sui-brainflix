

function Hero(props) {
  return (
    <section>
        <video width="100%"controls poster={props.activeVideo.image}>
        <source src={props.activeVideo.video}></source>
        </video>
    </section>
  )
}

export default Hero