import './commentList.scss';
import Comment from '../comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


//includes comment form component and mapping through individual comments

function CommentLIst({ currentVideo }) {
  const { videoId, commentId } = useParams();
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  

// change text in form for posting new comments

  const textChangeHandler = ((event) => {
    setText(event.target.value);
  })


// form submit function for posting new comments

  const handleSubmit = (event) => {
    event.preventDefault();
    if (videoId) {
      axios.post(`http://localhost:5000/videos/${videoId}/comments`, {
        comment: text,
        name: "maria",
      })
        .then((response) => {
          return axios.get(`http://localhost:5000/videos/${videoId}/comments`)
        })
        .then((response)=>{
          setComments(response.data)
          setText("")
        })
        .catch((error) => {
          console.error(error);
      })} else {
        axios.post("http://localhost:5000/videos/84e96018-4022-434e-80bf-000ce4cd12b8/comments", {
          comment: text,
          name: "maria",
        })
          .then((response) => {
           return axios.get("http://localhost:5000/videos/84e96018-4022-434e-80bf-000ce4cd12b8/comments")
          })
          .then((response)=>{
            setComments(response.data);
            setText("");
          })
          .catch((error) => {
            console.error(error);
          })}
  };

  
//to delete a comment

  const deleteComment=()=>{
    if(videoId){
      axios.delete(`http://localhost:5000/videos/${videoId}/comments/${commentId}`)
      .then((response)=>{
        return axios.get(`http://localhost:5000/videos/${videoId}`)
      }).then((response)=>{
        setComments(response.data.comments)
      }).catch((err)=>{
        console.error("err")
      })
    } else {
        axios.delete(`http://localhost:5000/videos/84e96018-4022-434e-80bf-000ce4cd12b8/comments/${commentId}`)
        .then((response)=>{
          return axios.get("http://localhost:5000/videos/84e96018-4022-434e-80bf-000ce4cd12b8")
        }).then((response)=>{
          setComments(response.data.comments)
        }).catch((err)=>{
          console.error("err")
        })
    }
  }
 
  return (

    <div className='commentList__wrapper'>
      <h2 className="commentList__title">{currentVideo.comments?.length} Comments</h2>
      <CommentForm handleSubmit={handleSubmit} textChangeHandler={textChangeHandler} text={text} />
      <ul className='commentList__list'>
        {currentVideo.comments?.map((comment) => (
          <li className="commentList__item">
            <Comment
              key={comment.id}
              id={comment.id}
              name={comment.name}
              comment={comment.comment}
              timestamp={comment.timestamp}
              deleteComment={deleteComment}
            />
          </li>
        ))}
      </ul>
    </div>

  )
}

export default CommentLIst