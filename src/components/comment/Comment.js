import './_comment.scss';

function Comment(props) {
  const commentTime=new Date(props.timestamp).toLocaleDateString();
  
  return (
   <>
    <div className="comment__wrapper">
      <div className="comment__image"></div>
      <div className="comment__wrapper--right">
        <div className="comment__name-date-wrapper">
          <h3 className="comment__name">{props.name}</h3>
          <span className="comment__time">{commentTime}</span>
        </div>
        <p className="comment__text">{props.comment}</p>
      </div>
    </div>
   </>
  )
}

export default Comment