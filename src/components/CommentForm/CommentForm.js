import image from '../../assets/Images/Mohan-muruge.jpg';
import './_commentForm.scss';

function CommentForm() {
  return (
    <div className="commentForm__wrapper">
        <div className="commentForm__wrapper--left">
            <img className="commentForm__image" src={image} alt="profile pic of a man"></img>
        </div>
        <div className="commentForm__wrapper--right">
          <div className="commentForm__input-wrapper">
            <form className="commentForm">
              <label className="commentForm__title" for="comment">JOIN THE CONVERSATION</label>
              <textarea className="commentForm__input" 
                        type="text" 
                        id="comment"
                        name="comment" 
                        // rows="5"
                        placeholder="Add a new comment">
              </textarea>
            </form>
          </div>
          <button className="commentForm__button">COMMENT</button>
        </div>
    </div>
  )
}

export default CommentForm