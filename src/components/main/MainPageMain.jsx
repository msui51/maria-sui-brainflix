import Views from '../../assets/Icons/views.svg'
import Likes from '../../assets/Icons/likes.svg'
import CommentLIst from '../commentList/CommentList';
import VideoList from '../videoList/VideoList';
import './mainPageMain.scss';
import { commentTime } from '../../util/CommonFunction';


function MainPageMain({currentVideo, videoList}) {


  return (

  //includes data for current video, comment list and video list component

    <div className="main__wrapper--all">
      <div className="main__wrapper">
          <h1 className="main__title">{currentVideo.title}</h1>
          <div className='main__sub-wrapper'>
            <div className='main__sub-wrapper--left'>
              <h2 className='main__sub-title'>By {currentVideo.channel}</h2>
              <p className='main__sub-text'>{commentTime(currentVideo.timestamp)}</p>
            </div>
            <div className='main__sub-wrapper--right'>
              <p className='main__icon-wrapper'>
                <img className="main__icon" src={Views} alt="eye icon"></img>
                <span className='main__sub-text'>{currentVideo.views}</span>
              </p>
              <p className='main__icon-wrapper'>
                <img className="main__icon" src={Likes} alt="heart icon"></img>
                <span className='main__sub-text'>{currentVideo.likes}</span>
              </p>
            </div>  
          </div>
          <p className='main__text'>{currentVideo.description}</p>    
          <CommentLIst currentVideo={currentVideo}/>    
      </div>
      <VideoList 
        videoList={videoList}
        currentVideo={currentVideo}/>
    </div>
  )
}

export default MainPageMain