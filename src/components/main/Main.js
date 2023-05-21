import Views from '../../assets/Icons/views.svg'
import Likes from '../../assets/Icons/likes.svg'
import CommentLIst from '../commentList/CommentList';
import VideoList from '../videoList/VideoList';
import './_main.scss';

function Main(props) {
  const commentTime=new Date(props.activeVideo.timestamp).toLocaleDateString();


  return (
    <div className="main__wrapper--all">
      <div className="main__wrapper">
          <h1 className="main__title">{props.activeVideo.title}</h1>
          <div className='main__sub-wrapper'>
            <div className='main__sub-wrapper--left'>
              <h2 className='main__sub-title'>By {props.activeVideo.channel}</h2>
              <p className='main__sub-text'>{commentTime}</p>
            </div>
            <div className='main__sub-wrapper--right'>
              
                <p className='main__icon-wrapper'><img className="main__icon" src={Views} alt="eye icon"></img><span className='main__sub-text'>{props.activeVideo.views}</span></p>
              
                <p className='main__icon-wrapper'><img className="main__icon" src={Likes} alt="heart icon"></img><span className='main__sub-text'>{props.activeVideo.likes}</span></p>
              
            </div>  
          </div>
          <p className='main__text'>{props.activeVideo.description}</p>
          <CommentLIst activeVideo={props.activeVideo}/>
      </div>
      {/* <CommentLIst activeVideo={props.activeVideo}/> */}
      <VideoList 
        videoList={props.videoList}
        changeActiveVideo={props.changeActiveVideo}
        activeVideo={props.activeVideo}
      />
    </div>
  )
}

export default Main