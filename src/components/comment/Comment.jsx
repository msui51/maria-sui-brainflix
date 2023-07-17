import './comment.scss';
import { commentTime } from '../../util/CommonFunction'; 

function Comment({name, comment, timestamp, deleteComment}) {
  
  return (

    //current video's individual comments

   <>
      <div className="comment__image"></div>
      <div className="comment__wrapper--right">
        <div className="comment__name-date-wrapper">
          <h3 className="comment__name">{name}</h3>
          <span className="comment__time">{commentTime(timestamp)}</span>
        </div>
        <p className="comment__text">{comment}</p>
      </div>
  </>
  )
}

export default Comment