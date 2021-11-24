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
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />                            
        </Routes> 
      </BrowserRouter>      
           
    );
  }  
}

export default App;