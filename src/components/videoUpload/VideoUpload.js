import './_videoUpload.scss';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';

function VideoUpload() {
  return (
    <main className="upLoad">
        <h1 className="upLoad__title">Upload Video</h1>
        <div className="upLoad__wrapper">
            <div className="upLoad__image-wrapper">
                <label className="upLoad__label" for="image">VIDEO THUMBNAIL</label>
                <img className="upLoad__image" src={thumbnail} alt="blue bike"></img>
            </div>
            <div className="upLoad__form-wrapper">
                <form className="upLoad__form">
                    <label className="upLoad__label" 
                        for="title">
                        TITLE YOUR VIDEO
                    </label>
                    <input className="upLoad__input upLoad__input--title" 
                        type="text" 
                        id="text" 
                        name="text" 
                        placeholder="Add a title to your video">
                    </input>
                    <label className="upLoad__label" 
                        for ="description">
                        ADD A VIDEO DESCRIPTION
                    </label>
                    <input className="upLoad__input upLoad__input--description" 
                        type="text" 
                        id="text" 
                        name="text" 
                        placeholder="Add a description to your video">    
                    </input>
                </form>
            </div>
        </div>
        <div className="upLoad__button-wrapper">
            <button className="upLoad__button">PUBLISH</button>
            <button className="upLoad__button upLoad__button--different">CANCEL</button>
        </div>
    </main>
  )
}

export default VideoUpload