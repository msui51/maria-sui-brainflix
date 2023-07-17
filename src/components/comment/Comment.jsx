import './comment.scss';
import { commentTime } from '../../util/CommonFunction'; 

 //current video's individual comments

function Comment({name, comment, timestamp, deleteComment}) {
 
  return (
   <>
      <div className="comment__image"></div>
      <div className="comment__wrapper--right">
        <div className="comment__name-date-wrapper">
          <h3 className="comment__name">{name}</h3>
          <span className="comment__time">{commentTime(timestamp)}</span>
        </div>
        <p className="comment__text">{comment}</p>
        <div className="comment__buttons-wrapper">
          <button className="comment__buttons" type="button" onClick={deleteComment}>DELETE</button>
        </div>
      </div>
  </>
  )
}

export default Comment