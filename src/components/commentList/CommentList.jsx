import './commentList.scss';
import Comment from '../comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';




function CommentLIst({ currentVideo }) {
  const { videoId } = useParams();
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

// change text in form for posting new comments

  const textChangeHandler = ((event) => {
    setText(event.target.value);
  })

// form submit function for posting new comments

  const handleSubmit = ((event) => {
    event.preventDefault();
    if (videoId) {
      axios.post(`http://localhost:5000/videos/${videoId}/comments`, {
        comment: text,
        name: "maria",
      })
        .then((response) => {
          console.log(response.data)
          return axios.get(`http://localhost:5000/videos/${videoId}/comments`)
        })
        .then((response)=>{
          console.log(response.data);
          setComments(response.data);
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
            console.log(response.data)
            return axios.get("http://localhost:5000/videos/84e96018-4022-434e-80bf-000ce4cd12b8/comments")
          })
          .then((response)=>{
            console.log(response.data);
            setComments(response.data);
            setText("")
          })
          .catch((error) => {
            console.error(error);
          })}
  });


  return (

    //includes comment form component and mapping through individual comments

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
            />
          </li>
        ))}
      </ul>
    </div>

  )
}

export default CommentLIst