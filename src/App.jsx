import PageHeader from './components/header/PageHeader';
import HomePage from '../src/pages/HomePage/HomePage';
import VideoUploadPage from '../src/pages/VideoUploadPage/VideoUploadPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import '../src/styles/partials/_variables.scss';

function App() {

  return (
    <BrowserRouter>
      <PageHeader/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/videos/:videoId" element={<HomePage/>} />
        <Route path="/videos/:videoId/comments/:commentId" element={<HomePage/>}/>
        <Route path="/upload" element ={<VideoUploadPage/>} />
      </Routes>
      </BrowserRouter>   
  );
}

export default App;
