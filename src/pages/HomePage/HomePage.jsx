import MainPageHero from '../../components/hero/MainPageHero';
import MainPageMain from '../../components/main/MainPageMain';
import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import { API_URL } from '../../util/Api';
import { API_KEY } from '../../util/ApiKey';


function HomePage() {
  const [currentVideo, setCurrentVideo]=useState({});
  const [videoList, setVideoList]= useState([]);
  const {videoId} =useParams();
  
// get video list data from API

  useEffect(()=>{
    axios.get(API_URL + `/videos?api_key=${API_KEY}`)
    .then((response)=>{
      setVideoList(response.data)
    });
  },[]);

//get individual video data from API
  useEffect(()=>{
    if (videoId){
    axios.get(API_URL + `/videos/${videoId}?api_key=${API_KEY}`)
    .then((response)=>{
      setCurrentVideo(response.data)
    })} else {
      axios.get(API_URL + `/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${API_KEY}`)
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