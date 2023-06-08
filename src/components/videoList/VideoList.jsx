import Video from "../video/Video"
import './videoList.scss';

function VideoList(props) {
  

  return (
    <div className="videoList__wrapper">
        <h2 className="videoList__title">NEXT VIDEOS</h2>
        <ul className="videoList__list">
          {props.videoList
            .filter((video)=> props.activeVideo.id !== video.id)
            .map((video)=>(
            <li className="videoList__item"
            onClick={()=> props.changeActiveVideo(video.id)}       
            >
            <Video 
                key={video.id}
                id={video.id}
                image={video.image}
                title={video.title}
                author={video.channel} 
            />
            </li>
          ))}
        </ul>
    </div>
  )
}

export default VideoList