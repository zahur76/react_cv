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
            <Route path="https://619e384f0fb62f41910290e4--objective-albattani-c3e0e0.netlify.app/" element={<Home />} />
            <Route path="https://619e384f0fb62f41910290e4--objective-albattani-c3e0e0.netlify.app/education" element={<Education />} />
            <Route path="https://619e384f0fb62f41910290e4--objective-albattani-c3e0e0.netlify.app/experience" element={<Experience />} />
            <Route path="https://619e384f0fb62f41910290e4--objective-albattani-c3e0e0.netlify.app/skills" element={<Skills />} />
            <Route path="https://619e384f0fb62f41910290e4--objective-albattani-c3e0e0.netlify.app/projects" element={<Projects />} />                            
        </Routes> 
      </BrowserRouter>      
           
    );
  }  
}

export default App;