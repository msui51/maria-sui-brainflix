import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import Data from '../src/assets/Data/video-details.json';
import List from '../src/assets/Data/videos.json';
import VideoList from './components/videoList/VideoList';
import { useState } from 'react';
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
    <>
      <Header/>
      <Hero activeVideo={activeVideo}/>
      <Main activeVideo={activeVideo}
            videoList={videoList}
            changeActiveVideo={changeActiveVideo}
      />
    </>
  );
}

export default App;
