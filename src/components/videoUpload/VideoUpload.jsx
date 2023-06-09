import './videoUpload.scss';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VideoUpload() {
    const [title, setTitle]=useState("");
    const [text, setText]=useState("");
    const [error, setError]=useState(false);
    const navigate =useNavigate();

    //listening to changes to input for video title

    const titleChangeHandler =(event)=>{
        setTitle(event.target.value);
    };

    //listening to changes to input for video description

    const textChangeHandler =(event)=>{
        setText(event.target.value);
    };

    //function for submitting form

    const handleSubmit =(event)=>{
        event.preventDefault();
        if(isFormValid()){
            alert( "uploaded successfully");
            navigate("/");
        }else{
            setError(true);
            alert( "need to input text")
           
        }
    }

    //function for styling input border if there's an error

   const styleError=(error)=>{
    if(error){
        return{
            borderColor:"#D22D2D"
        }
    }
   }

   //function to detect if form is valid

    const isFormValid=()=>{
        if (!title|| !text){
            return false;
        };
        return true;
    }


  return (
    <main className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form className="upload__wrapper" onSubmit={handleSubmit}>
           <div className="upload__image-form-wrapper">
                <div className="upload__image-wrapper">
                    <label className="upload__label" for="image">VIDEO THUMBNAIL</label>
                    <img className="upload__image" src={thumbnail} alt="blue bike"></img>
                </div>
                <div className="upload__form-wrapper">
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
                        onChange={titleChangeHandler}
                        style={styleError(error)}
                        >
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
                        onChange={textChangeHandler}
                        style={styleError(error)}
                        >    
                    </input>
                </div>
            </div>
            <div className='upload__button-wrapper'>
                <button className="upload__button" type="submit">PUBLISH</button>
                <button className="upload__button upload__button--different">CANCEL</button>
            </div>
        </form>
    </main>
  )
}

export default VideoUpload