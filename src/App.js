import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Review';
import Dasboard from './Components/Dasboard/Dasboard';
import Blog from './Components/Blog/Blog';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='reviews' element={<Reviews/>}></Route>
          <Route path='dasboard' element={<Dasboard/>}></Route>
          <Route path='blog' element={<Blog/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
