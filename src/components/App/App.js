import React from 'react';
import './App.css';
import Home from '../Home/Home'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {  
  render(){
    return (
      <BrowserRouter>
        <Routes className="App">
            <Route path= "https://619e33a3f69a153a500b1449--elastic-agnesi-97d2bf.netlify.app/" element={<Home />} />
            <Route path="https://619e33a3f69a153a500b1449--elastic-agnesi-97d2bf.netlify.app/education" element={<Education />} />
            <Route path="https://619e33a3f69a153a500b1449--elastic-agnesi-97d2bf.netlify.app/experience" element={<Experience />} />
            <Route path="https://619e33a3f69a153a500b1449--elastic-agnesi-97d2bf.netlify.app/skills" element={<Skills />} />
            <Route path="https://619e33a3f69a153a500b1449--elastic-agnesi-97d2bf.netlify.app/projects" element={<Projects />} />                            
        </Routes> 
      </BrowserRouter>      
           
    );
  }  
}

export default App;