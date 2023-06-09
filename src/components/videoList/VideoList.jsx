import Video from "../video/Video"
import './videoList.scss';
import { Link } from "react-router-dom"


function VideoList({currentVideo, videoList}) {



  return (

    //mapping through the list of videos

    <div className="videoList__wrapper">
        <h2 className="videoList__title">NEXT VIDEOS</h2>
        <ul className="videoList__list">
          {videoList
            .filter((video)=> currentVideo.id !== video.id)
            .map((video)=>(
            <li className="videoList__item">
            <Link className="videoList__link" to={`/videos/${video.id}`}> 
            <Video 
                key={video.id}
                id={video.id}
                image={video.image}
                title={video.title}
                author={video.channel} 
            />
            </Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default VideoList