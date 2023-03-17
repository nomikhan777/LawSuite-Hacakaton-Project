import './App.css'
import Chatbot from './components/Chatbot/Chatbot'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from './components/Team/Team';
import Video from './components/Video/Video';
import About from './components/About/About';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Chatbot />} />
        <Route path='/team' element={<Team />} />
        <Route path='/video' element={<Video />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
