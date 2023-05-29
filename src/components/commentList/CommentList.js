import './_commentList.scss';
import Comment from '../comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

function CommentLIst(props) {
  return (
    <div className='commentList__wrapper'>
      <h2 className="commentList__title">{props.activeVideo.comments.length} Comments</h2>
      <CommentForm/>
      <ul className='commentList__list'>
        {props.activeVideo.comments.map((comment)=>(
        <li className="commentList__item">
        <Comment 
          key={comment.id}
          id={comment.id}
          name={comment.name}
          comment={comment.comment}
          timestamp={comment.timestamp}
          />
      </li>
      ))}
      </ul>
    </div>
    
  )
}

export default CommentLIst