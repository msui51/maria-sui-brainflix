import PageHeader from './components/header/PageHeader';
import Data from '../src/assets/Data/video-details.json';
import HomePage from '../src/pages/HomePage/HomePage';
import VideoUploadPage from '../src/pages/VideoUploadPage/VideoUploadPage';
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { API_URL } from './Api';
import axios from 'axios';
import './App.scss';
import '../src/styles/partials/_variables.scss';

function App() {
  // const [activeVideo, setActiveVideo]= useState(Data[0]);
  const [videoList, setVideoList]= useState([]);
  const [activeVideo, setActiveVideo]= useState(Data[0]);

  useEffect(()=>{
    axios.get(API_URL + "/videos?api_key=d5e078a3-86fb-4955-a599-6b602cc40156")
    .then((response)=>{
      setVideoList(response.data)
    });
  },[]);
  

  
  const changeActiveVideo =(id)=>{
    videoList.forEach((video)=>{
      if (id === video.id){
        setActiveVideo(video);
      }
    })
    
  };

  return (
    <BrowserRouter>
      <PageHeader/>
      <Routes>
        <Route path="/" element={<HomePage activeVideo={activeVideo}
                                           videoList={videoList}
                                           changeActiveVideo={changeActiveVideo}/>}/>
        <Route path="/videos/:videoId" element={<VideoPlayerPage/>} />
        <Route path="/upload" element ={<VideoUploadPage/>} />
      </Routes>
      </BrowserRouter>   
  );
}

export default App;
