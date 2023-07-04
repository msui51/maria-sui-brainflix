import MainPageHero from '../../components/hero/MainPageHero';
import MainPageMain from '../../components/main/MainPageMain';
import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import axios from 'axios';
// import { API_URL } from '../../util/Api';
// import { API_KEY } from '../../util/ApiKey';


function HomePage() {
  const [currentVideo, setCurrentVideo]=useState({});
  const [videoList, setVideoList]= useState([]);
  const {videoId} =useParams();

  
// get video list data from API

  useEffect(()=>{
    axios.get("http://localhost:5000/videos")
    .then((response)=>{
      setVideoList(response.data)
    });
  },[]);

//get individual video data from API
  useEffect(()=>{
    if (videoId){
    axios.get(`http://localhost:5000/videos/${videoId}`)
    .then((response)=>{
      setCurrentVideo(response.data)
    })} else {
      axios.get("http://localhost:5000/videos/84e96018-4022-434e-80bf-000ce4cd12b8")
      .then((response)=>{
        setCurrentVideo(response.data)
      })

    }
  },[videoId])

  
  return (
    <>
        <MainPageHero 
          currentVideo={currentVideo}/>
        <MainPageMain 
          videoList={videoList}
          currentVideo={currentVideo}/>   
    </>
  )
}

export default HomePage