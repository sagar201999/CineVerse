import './App.css';
import Home from './Components/Home/Home';
// import Home from './Components/Home/Home';
// import Navbar from './Components/Home/Navbar';
import Landing from './Components/Landing/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Landing />} />
        <Route exact path='/Home' element={<Home />} />
      </Routes>
      </BrowserRouter>

      {/* <Navbar />
      <Home /> */}
    </div>
  );
}

export default App;
