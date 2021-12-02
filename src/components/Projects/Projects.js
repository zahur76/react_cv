import React from 'react';
import './Projects.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from '../Home/Home'

let projectHistory = [
    {
        number: 1,
        name: 'Visit Maurtius',
        technologies: 'HTML, CSS, Bootstrap',
        description: 'Site to Promote Tourism in Mauritius',
        site: 'https://zahur76.github.io/MilestoneProject1/',
        github: 'https://github.com/zahur76/MilestoneProject1'
    },
    {
        number: 2,
        name: 'Star Match',
        technologies: 'HTML, CSS, Javascript, Bootstrap',
        description: 'Star Wars Themed memory match game',
        site: 'https://zahur76.github.io/MilestoneProject_2/',
        github: 'https://github.com/zahur76/MilestoneProject_2'
    },
    {
        number: 3,
        name: 'Artist For Life',
        technologies: 'Flask, MongoDB, Python, Heroku, HTML, CSS, Javascript, Materialize',
        description: 'Site for artists to showcase their art work to potential buyers and other enthusiasts in the Mauritian market',
        site: 'https://artist-for-life.herokuapp.com/',
        github: 'https://github.com/zahur76/MilestoneProject_3'
    },
    {
        number: 4,
        name: 'Molacuizine',
        technologies: 'Django, SQL, Python, Heroku, HTML, CSS, Javascript, Bootstrap, Stripe, JQuery, AWS, S3, GoogleAPI',
        description: 'Online food and delivery service site with full admin control on products and users with online payment system',
        site: 'https://mo-lacuizine.herokuapp.com/',
        github: 'https://github.com/zahur76/molacuizine'
    },
    {
        number: 5,
        name: 'Star Wars Character search',
        technologies: 'Django, SQL, Python, Heroku, HTML, CSS, Javascript, Bootstrap, JQuery, AWS, S3',
        description: 'Site to search Star Wars character details by categories with full admin character control and OTP sign-in',
        site: 'https://django-starwars.herokuapp.com/',
        github: 'https://github.com/zahur76/starwars-django-main'
    },
    {
        number: 6,
        name: 'Django Quiz',
        technologies: 'Django, SQL, Python, Heroku, HTML, CSS, Javascript, Bootstrap, JQuery, AWS, S3',
        description: 'Site to implement quiz in workplace using employee number with protection to prevent answer manipulation',
        site: 'https://django-quiz-zahur.herokuapp.com/',
        github: 'https://github.com/zahur76/workforce-django'
    },    
    {
        number: 7,
        name: 'Workforce',
        technologies: 'Django, SQL, Python, Heroku, HTML, CSS, Javascript, Bootstrap, JQuery, AWS, S3',
        description: 'Site to manage Employee records with full admin control with emphasis on sick and annual leave',
        site: 'https://workforce-django.herokuapp.com/',
        github: 'https://github.com/zahur76/django-quiz'
    },
    {
        number: 8,
        name: 'Star Wars Character Search 2',
        technologies: 'Node.js, Express.js, SQL, HTML, CSS, Javascript, Bootstrap',
        description: 'Site to search Star Wars character details by categories with full admin character control using Node.js',
        site: 'https://django-starwars.herokuapp.com/',
        github: 'https://github.com/zahur76/starwar-api'
    },
    {
        number: 9,
        name: 'React/NodeJs-todo',
        technologies: 'React, Node.js, Express.js, Sqlite, Postgres, HTML, CSS, Javascript, Bootstrap',
        description: 'Basic todo app using React as frontend and NodeJs as backend while managing state with hooks',
        site: 'https://react-node-todo-zahur.herokuapp.com/',
        github: 'https://github.com/zahur76/react-node-api'
    },
    {
        number: 10,
        name: 'Redux React Star Wars',
        technologies: 'React, Redux, HTML, CSS, Javascript, Bootstrap',
        description: 'Star Wars Character Search site making use of Redux to manage application state',
        site: 'https://clever-albattani-e81087.netlify.app/',
        github: 'https://github.com/zahur76/redux-react-example'
    },
    {
        number: 11,
        name: 'Hybrid Django React Todo app',
        technologies: 'React, Django, RestAPI, HTML, CSS, Javascript, Bootstrap',
        description: 'A React-Django Hybrid Todo app making use of Django rest for API requests in the backend while using React in the Frontend',
        site: 'https://django-react-todo-zahur.herokuapp.com/',
        github: 'https://github.com/zahur76/django-react-todo'
    },       
]

class Projects extends React.Component {
    renderProjectHistory(){
        return projectHistory.map(element=>{
            return  <Row>
                        <Col xs={1} md={3}></Col>
                        <Col className="h3 border-bottom border-secondary project-name" xs={10} md={6}>{element.number}.{element.name}</Col>
                        <Col xs={1} md={3}></Col>
                        <Col className="h4 text-center" xs={12}>Technologies used</Col>
                        <Col className="text-center mb-1" xs={12}>{element.technologies}</Col>
                        <Col className="h4 text-center" xs={12}>Description</Col>
                        <Col className="text-center mb-1" xs={12}>{element.description}</Col>
                        <Col className="text-center" xs={12}><a href={element.site} target="_blank" >Live Site</a></Col>
                        <Col className="text-center mb-2" xs={12}><a href={element.github} target="_blank" >Github Repository</a></Col>
                    </Row>
        })
    }
    render(){
        return (
            <div>
                <Home active='active-projects'/>       
                <Row>
                    <Col xs={1} md={3}>                    
                    </Col>
                    <Col xs={10} md={6}>
                        <h2 className="info-title mt-3 mb-3 bg">PORTFOLIO</h2>
                    </Col>
                    <Col xs={1} md={3}>                                       
                    </Col>
                </Row>
                {this.renderProjectHistory()}                
                <div className="mt-3"></div>
            </div>
        );
    }  
}

export default Projects;