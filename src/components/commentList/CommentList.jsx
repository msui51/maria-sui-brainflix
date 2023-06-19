import './commentList.scss';
import Comment from '../comment/Comment';
import CommentForm from '../CommentForm/CommentForm';



function CommentLIst({currentVideo}) {

  return (

  //includes comment form component and mapping through individual comments

    <div className='commentList__wrapper'>
      <h2 className="commentList__title">{currentVideo.comments?.length} Comments</h2>
      <CommentForm/>
      <ul className='commentList__list'>
        {currentVideo.comments?.map((comment)=>(
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