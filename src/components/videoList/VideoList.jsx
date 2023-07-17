import Video from "../video/Video"
import './videoList.scss';
import { Link } from "react-router-dom"

//mapping through the list of videos

function VideoList({currentVideo, videoList}) {

  const scrollTo=()=>{
    window.scrollTo(0,0);
  }

  return (
    <div className="videoList__wrapper">
        <h2 className="videoList__title">NEXT VIDEOS</h2>
        <ul className="videoList__list">
          {videoList
            .filter((video)=> currentVideo.id !== video.id)
            .map((video)=>(
            <li className="videoList__item">
            <Link className="videoList__link" onClick={scrollTo} to={`/videos/${video.id}`}> 
            <Video 
                key={video.id}
                id={video.id}
                image={`http://localhost:5000${video.image}`}
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