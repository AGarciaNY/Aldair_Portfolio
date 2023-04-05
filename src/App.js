import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
//components
import Home from './components/home/index.js';
import Nav from './components/nav';
import Footer from './components/footer';
import ArtWork from './components/art-work';
import Projects from './components/projects';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artwork' element={<ArtWork />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<Navigate to="/" />} />
        {/* <Route path='' element={}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
