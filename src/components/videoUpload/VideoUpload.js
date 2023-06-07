import './_videoUpload.scss';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VideoUpload() {
    const [title, setTitle]=useState("");
    const [text, setText]=useState("");

    const titleChangeHandler =(event)=>{
        setTitle(event.target.value);
    };

    const textChangeHandler =(event)=>{
        setText(event.target.value);
    };

    const navigate =useNavigate();
    const handleSubmit =(event)=>{
        event.preventDefault();
        if(isFormValid()){
            alert( "uploaded successfully");
            navigate("/");
        }else{
            alert( "need to input text")
        }
    }

    const isFormValid=()=>{
        if (!title|| !text){
            return false;
        };
        return true;
    }


  return (
    <main className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__wrapper">
           
            <div className="upload__image-wrapper">
                <label className="upload__label" for="image">VIDEO THUMBNAIL</label>
                <img className="upload__image" src={thumbnail} alt="blue bike"></img>
            </div>
            <div className="upload__form-wrapper">
                <form className="upload__form" onSubmit={handleSubmit}>
                    <label className="upload__label" 
                        for="title">
                        TITLE YOUR VIDEO
                    </label>
                    <input className="upload__input upload__input--title" 
                        type="text" 
                        id="text" 
                        name="text" 
                        placeholder="Add a title to your video"
                        value={title}
                        onChange={titleChangeHandler}>
                    </input>
                    <label className="upload__label" 
                        for ="description">
                        ADD A VIDEO DESCRIPTION
                    </label>
                    <input className="upload__input upload__input--description" 
                        type="text" 
                        id="text" 
                        name="text" 
                        placeholder="Add a description to your video"
                        value={text}
                        onChange={textChangeHandler}>    
                    </input>
                    <div className='upload__button-wrapper'>
                        <button className="upload__button" type="submit">PUBLISH</button>
                        <button className="upload__button upload__button--different">CANCEL</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
  )
}

export default VideoUpload