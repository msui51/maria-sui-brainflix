import './video.scss'

function Video(props) {
  
  return (
    
    <>
        <div className="video__wrapper--left">
            <img className="video__image" src={props.image} alt="video images"></img>
        </div>
        <div className="video__wrapper--right">
            <h3 className="video__title">{props.title}</h3>
            <p className="video__author">{props.author}</p>
        </div>
    </>
   
  )
}

export default Video