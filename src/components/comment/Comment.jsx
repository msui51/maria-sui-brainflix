import './comment.scss';
import { commentTime } from '../../util/CommonFunction'; 
import { useParams } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

function Comment({name, comment, timestamp, deleteComment}) {
 
  return (

    //current video's individual comments

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