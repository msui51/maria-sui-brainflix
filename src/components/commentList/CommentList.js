import './_commentList.scss';
import Comment from '../comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

function CommentLIst(props) {
  return (
    <div className='commentList__wrapper'>
      <h2>{props.activeVideo.comments.length} Comments</h2>
      <CommentForm/>
      {props.activeVideo.comments.map((comment)=>(
      <Comment 
        key={comment.id}
        id={comment.id}
        name={comment.name}
        comment={comment.comment}
        timestamp={comment.timestamp}
        />
      
      ))}
    </div>
    
  )
}

export default CommentLIst