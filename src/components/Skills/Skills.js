import React from 'react';
import './Skills.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from '../Home/Home'

let mySkills = [
        {
            number: 1,
            name: 'Frontend',
            technologies: 'HTML, CSS, REACT, JavaScript'
        },
        {
            number: 2,
            name: 'Backend',
            technologies: 'Python, Node.js'
        },
        {
            number: 3,
            name: 'Frameworks',
            technologies: 'Flask, Django, Bootstrap, Materialize'
        },
        {
            number: 4,
            name: 'Database Management System',
            technologies: 'SQL, Postgresql, MongoDB'
        },
        {
            number: 5,
            name: 'Source Control',
            technologies: 'Git, Github'
        },
        {
            number: 6,
            name: 'UX/UI',
            technologies: 'Wireframe'
        },
        {
            number: 7,
            name: 'Deployment',
            technologies: 'Heroku, Github, AWS, S3'
        },

]

class Skills extends React.Component {
    renderSkills(){
        return mySkills.map(element =>{
            return  <Row>
                        <Col xs={2} md={4}></Col>
                        <Col className='h4 border-bottom border-secondary' xs={8} md={4}>{element.number}.{element.name}</Col>
                        <Col xs={2} md={4}></Col>
                        <Col className='text-center mb-3 technology-text' xs={12}>{element.technologies}</Col>
                    </Row>
        })
    }    
    render(){
        return (
            <div>
                <Home active='active-skills'/>       
                <Row>
                    <Col xs={1} md={3}>                    
                    </Col>
                    <Col xs={10} md={6}>
                        <h2 className="info-title mt-3 mb-3 bg">CODING SKILLS</h2>
                    </Col>
                    <Col xs={1} md={3}>                                       
                    </Col>
                </Row>
                {this.renderSkills()}                
                <div className="mt-3"></div>
            </div>
        );
    }  
}

export default Skills;