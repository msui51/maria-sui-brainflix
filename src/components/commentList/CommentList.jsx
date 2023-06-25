import './commentList.scss';
import Comment from '../comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../util/ApiKey';
import { API_URL } from '../../util/Api';



function CommentLIst({currentVideo}) {
  const {videoId}=useParams();
  const [comments, setComments]=useState([]);
  const [userName, setUserName]=useState("");
  const [text, setText]=useState("");
  

  const nameChangeHandler=((event)=>{
    setUserName(event.target.value);
  })

  const textChangeHandler=((event)=>{
    setText(event.target.value);
  })

 

  const handleSubmit=((event)=>{
    event.preventDefault();
    axios.post(API_URL+`/videos/${videoId}/comments?api_key=${API_KEY}`, {
      comment: text,
      name: userName,
  })
    .then((response)=>{
      console.log(response.data)
      setComments(comments.push(response.data));
    })
    .catch((error)=>{
      console.error(error);
    })
  });
 
  useEffect(()=>{
    setComments(currentVideo.comments)
  },[currentVideo.comments])


  return (

  //includes comment form component and mapping through individual comments

    <div className='commentList__wrapper'>
      <h2 className="commentList__title">{currentVideo.comments?.length} Comments</h2>
      <CommentForm handleSubmit={handleSubmit} textChangeHandler={textChangeHandler} nameChangeHandler={nameChangeHandler} userName={userName} text={text}/>
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