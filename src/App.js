import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Reviews from './Components/Reviews/Review';
import Dasboard from './Components/Dasboard/Dasboard';
import Blog from './Components/Blog/Blog';
import Error404 from './Components/NotFound/Error404';
import ReviewUI from './Components/ReviewUI/ReviewUI';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/home/:reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/reviews' element={<Reviews/>}></Route>
          <Route path='/dasboard' element={<Dasboard/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          
          <Route path='*' element={<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
