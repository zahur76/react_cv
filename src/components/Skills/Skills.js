import React from 'react';
import './Skills.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from '../Home/Home'
import aws from './aws.png'
import bootstrap from './bootstrap.png'
import css from './css.jpg'
import django from './django.jpg'
import flask from './flask.jpg'
import git from './git.png'
import github from './github.png'
import heroku from './heroku.png'
import html from './html.jpg'
import javascript from './javascript.png'
import jquery from './jquery.png'
import materialize from './materialize.png'
import mongo from './mongo.png'
import node from './node.png'
import react from './react.png'
import sql from './SQL.jpg'

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
            name: 'Database Management',
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
                        <Col xs={2} md={3}></Col>
                        <Col className='h4 border-bottom border-secondary' xs={8} md={6}>{element.number}.{element.name}</Col>
                        <Col xs={2} md={3}></Col>
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
                <Row>                    
                    <Col className="text-center p-2 icons" xs={3}><img src={aws}/></Col>
                    <Col className="text-center p-2 icons" xs={3}><img src={bootstrap}/></Col>
                    <Col className="text-center p-2 icons" xs={3}><img src={css}/></Col>
                    <Col className="text-center p-2 icons" xs={3}><img src={django}/></Col>
                </Row>
                <Row> 
                    <Col className="text-center p-2 icons" xs={3}><img src={flask}/></Col>
                    <Col className="text-center p-2 icons" xs={3}><img src={git}/></Col>
                    <Col className="text-center p-2 icons" xs={3}><img src={github}/></Col>
                    <Col className="text-center p-2 icons" xs={3}><img src={heroku}/></Col>                    
                </Row>
                <Row>                    
                    <Col className="text-center p-2 icons" xs={3}><img src={html}/></Col>
                    <Col className="text-center p-2 icons" xs={3}><img src={javascript}/></Col>
                    <Col className="text-center p-2 icons" xs={3}><img src={jquery}/></Col>
                    <Col className="text-center p-2 icons" xs={3}><img src={materialize}/></Col>
                </Row>
                <Row>
                    <Col className="text-center icons" xs={3}><img src={mongo}/></Col>
                    <Col className="text-center icons" xs={3}><img src={node}/></Col>
                    <Col className="text-center icons" xs={3}><img src={react}/></Col>
                    <Col className="text-center mb-5 icons" xs={3}><img src={sql}/></Col>                    
                </Row>
                {this.renderSkills()}                
                <div className="mt-3"></div>
            </div>
        );
    }  
}

export default Skills;