import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { Routes,Route, } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Navbar from './Navbar/Navbar';
import About from './Components/About';
import Blog from './Components/Blog';
import OurServices from './Components/OurServices';
import Benefits from './Components/Benefits';

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/home" element={<Home />} />
      <Route path = "/about" element={<About />} />
      <Route path = "/ourservices" element={<OurServices />} />
      <Route path = "/benefits" element={<Benefits />} />
      <Route path = "/blog" element={<Blog />} />
      <Route path = "/contact" element={<Contact />} />
      </Routes>
    </div>
  
  );
}

export default App;
