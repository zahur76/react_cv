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
            <Route path= "https://app.netlify.com/sites/elastic-agnesi-97d2bf/" element={<Home />} />
            <Route path="https://app.netlify.com/sites/elastic-agnesi-97d2bf/education" element={<Education />} />
            <Route path="https://app.netlify.com/sites/elastic-agnesi-97d2bf/experience" element={<Experience />} />
            <Route path="https://app.netlify.com/sites/elastic-agnesi-97d2bf/skills" element={<Skills />} />
            <Route path="https://app.netlify.com/sites/elastic-agnesi-97d2bf/projects" element={<Projects />} />                            
        </Routes> 
      </BrowserRouter>      
           
    );
  }  
}

export default App;