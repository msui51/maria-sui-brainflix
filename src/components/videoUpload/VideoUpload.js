import './_videoUpload.scss';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';

function VideoUpload() {
  return (
    <main className="main">
        <h1 className="main__title">Upload Video</h1>
        <div className="main__wrapper">
            <div className="main__image-wrapper">
                <label className="main__label" for="image">VIDEO THUMBNAIL</label>
                <img className="main__image" src={thumbnail} alt="blue bike"></img>
            </div>
            <div className="main__form-wrapper">
                <form className="main__form">
                    <label className="main__label" 
                        for="title">
                        TITLE YOUR VIDEO
                    </label>
                    <input className="main__input main__input--title" 
                        type="text" 
                        id="text" 
                        name="text" 
                        placeholder="Add a title to your video">
                    </input>
                    <label className="main__label" 
                        for ="description">
                        ADD A VIDEO DESCRIPTION
                    </label>
                    <input className="main__input main__input--description" 
                        type="text" 
                        id="text" 
                        name="text" 
                        placeholder="Add a description to your video">    
                    </input>
                </form>
            </div>
        </div>
        <div className="main__button-wrapper">
            <button className="main__button">PUBLISH</button>
            <button className="main__button main__button--different">CANCEL</button>
        </div>
    </main>
  )
}

export default VideoUpload