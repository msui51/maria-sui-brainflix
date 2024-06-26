import './video.scss'

    //individual videos in the video list


function Video({image, title, author}) {

  return (    
    <div className='video__wrapper'>
        <div className="video__wrapper--left">
            <img className="video__image" src={image} alt="video images"></img>
        </div>
        <div className="video__wrapper--right">
            <h3 className="video__title">{title}</h3>
            <p className="video__author">{author}</p>
        </div>
    </div>
    
   
  )
}

export default Video