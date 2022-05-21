import './App.css';
import Header from '../src/components/Header'
import Home from './components/Home/Home';
import Bollywood from './components/Bollywood/Bollywood';
import { Routes, Route, useLocation } from 'react-router-dom'
import Technology from './components/Technology/Technology';
import Hollywood from './components/Hollywood/Hollywood';
import Fitness from './components/Fitness/Fitness';
import Food from './components/Food/Food'
import Blog from './components/Blog/Blog';




function App() {
  const location = useLocation()
  return (
    <>
      {location.pathname.search(/blog/i) === -1 ? <Header /> : ''}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path=":cat/blog/:id" element={<Blog />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </>
  );
}

export default App;
