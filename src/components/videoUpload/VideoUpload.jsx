import './videoUpload.scss';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function VideoUpload() {
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");
    const [error, setError]=useState(false);
    const navigate =useNavigate();

    //listening to changes to input for video title

    const titleChangeHandler =(event)=>{
        setTitle(event.target.value);
    };

    //listening to changes to input for video description

    const descriptionChangeHandler =(event)=>{
        setDescription(event.target.value);
    };

    //function for submitting form

    const handleSubmit =(event)=>{
        event.preventDefault();
        if(isFormValid()){
            axios.post("http://localhost:5000/videos",{
                title: title,
                description: description,
            })
            alert( "uploaded successfully");
            navigate("/");
        }else{
            setError(true);
            alert( "need to input text")
           
        }
    }

    // function for styling input border for title if there's an error

   const styleErrorTitle=(error)=>{
    if(error){
        if(!title){
            return{
            borderColor:"#D22D2D"
            }
        }
    }
   }

    // function for styling input border for description if there's an error

   const styleErrorDescription=(error)=>{
    if(error){
        if(!description){
            return{
            borderColor:"#D22D2D"
            }
        }
    }
   }

   //function to detect if form is valid

    const isFormValid=()=>{
        if (!title|| !description){
            return false;
        };
        return true;
    }


  return (
    <main className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form className="upload__wrapper" onSubmit={(event)=>{handleSubmit(event)}}>
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
                        style={styleErrorTitle(error)}
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
                        value={description}
                        onChange={descriptionChangeHandler}
                        style={styleErrorDescription(error)}
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