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
            <Route path= "https://zahur76.github.io/react_cv" element={<Home />} />
            <Route path="https://zahur76.github.io/react_cv/education" element={<Education />} />
            <Route path="https://zahur76.github.io/react_cv/experience" element={<Experience />} />
            <Route path="https://zahur76.github.io/react_cv/skills" element={<Skills />} />
            <Route path="/https://zahur76.github.io/react_cv/projects" element={<Projects />} />                            
        </Routes> 
      </BrowserRouter>      
           
    );
  }  
}

export default App;