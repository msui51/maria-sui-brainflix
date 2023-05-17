import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import Data from '../src/assets/Data/video-details.json';
import { useState } from 'react';
import './App.scss';

function App() {
  const [activeVideo, setActiveVideo]= useState(Data[0]);

  return (
    <>
      <Header />
      <Hero activeVideo={activeVideo}/>
      <Main activeVideo={activeVideo}/>
    </>
  );
}

export default App;
