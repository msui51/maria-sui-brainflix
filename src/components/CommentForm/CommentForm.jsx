import image from '../../assets/Images/Mohan-muruge.jpg';
import './commentForm.scss';

function CommentForm({handleSubmit, textChangeHandler, text}) {

  

  return (

    //form to submit comments for the current video

    <div className="commentForm__wrapper">
        <div className="commentForm__wrapper--left">
            <img className="commentForm__image" src={image} alt="profile pic of a man"></img>
        </div>
        <form className="commentForm__wrapper--right" onSubmit={(event)=>{handleSubmit(event)}}>
          <div className="commentForm__input-wrapper">
            <div className="commentForm">
              <label className="commentForm__title" for="comment">JOIN THE CONVERSATION</label>
              <input className="commentForm__input" 
                        type="text" 
                        id="comment"
                        name="comment" 
                        placeholder="Add a new comment"
                        onChange={textChangeHandler}
                        value={text}>
              </input>
            </div>
          </div>
          <button className="commentForm__button" type='submit'>COMMENT</button>
        </form>
    </div>
  )
}

export default CommentForm