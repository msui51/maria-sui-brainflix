import Header from './components/header/Header';
import Data from '../src/assets/Data/video-details.json';
import HomePage from '../src/pages/HomePage/HomePage';
import VideoUploadPage from '../src/pages/VideoUploadPage/VideoUploadPage';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  const [activeVideo, setActiveVideo]= useState(Data[0]);
  const [videoList, setVideoList]= useState(Data);
  

  
  const changeActiveVideo =(id)=>{
    videoList.forEach((video)=>{
      if (id === video.id){
        setActiveVideo(video);
      }
    })
    
  };

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage activeVideo={activeVideo}
                                          videoList={videoList}
                                          changeActiveVideo={changeActiveVideo}/>}/>
        <Route path="/upload" element ={<VideoUploadPage/>} />
      </Routes>
      </BrowserRouter>   
  );
}

export default App;
