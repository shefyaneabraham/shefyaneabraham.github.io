import './App.css';
import Main from "./components/Main";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import Work from './components/Work';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Project from './components/Project';
function App() {

  useEffect(() => {
    AOS.init({
    duration: 1000, // Global animation duration
    once: true, // Only once animation
    });
    }, [])
    
  return (
    <div className="wrapper bg-primary h-screen">
      
      <Router>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />}/>
        <Route path="work" element={<Work />} />
        <Route path="projects" element={<Project />} />
        <Route path="contact" element={<Contact />} />
        </Routes>

      </Router>
      {/* <NavigationRight/> */}
    </div>
  )

}

export default App;
