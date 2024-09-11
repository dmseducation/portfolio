import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Services from './Component/Services';
import Skills from './Component/Skills';
import Drawing from './Component/Drawing';
import Programming from './Component/Programming';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
       <div class="navbar">
        <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/service' element={<Services/>}/>
          <Route path='/skill' element={<Skills/>}/>
          <Route path='/drawing' element={<Drawing/>}/>
          <Route path='/programming' element={<Programming/>}/>

        </Routes>
        <Footer></Footer>
        </BrowserRouter>
          
       </div>
      
    </div>
  );
}

export default App;
