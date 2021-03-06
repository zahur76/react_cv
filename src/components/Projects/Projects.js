import React from 'react';
import './Projects.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Accordion } from 'react-bootstrap';
import Home from '../Home/Home'

let projectHistory = [
    {
        number: 1,
        name: 'Visit Maurtius',
        technologies: 'HTML, CSS, Bootstrap',
        description: 'Site to Promote Tourism in Mauritius',
        site: 'https://zahur76.github.io/MilestoneProject1/',
        github: 'https://github.com/zahur76/MilestoneProject1',
        comment: ''
    },
    {
        number: 2,
        name: 'Star Match',
        technologies: 'HTML, CSS, Javascript, Bootstrap',
        description: 'Star Wars Themed memory match game',
        site: 'https://zahur76.github.io/MilestoneProject_2/',
        github: 'https://github.com/zahur76/MilestoneProject_2',
        comment: ''
    },
    {
        number: 3,
        name: 'Artist For Life',
        technologies: 'Flask, MongoDB, Python, Heroku, HTML, CSS, Javascript, Materialize',
        description: 'Site for artists to showcase their art work to potential buyers and other enthusiasts in the Mauritian market',
        site: 'https://artist-for-life.herokuapp.com/',
        github: 'https://github.com/zahur76/MilestoneProject_3',
        comment: ''
    },
    {
        number: 4,
        name: 'Molacuizine',
        technologies: 'Django, SQL, Python, Heroku, HTML, CSS, Javascript, Bootstrap, Stripe, JQuery, AWS, S3, GoogleAPI',
        description: 'Online food and delivery service site with full admin control on products and users with online payment system',
        site: 'https://mo-lacuizine.herokuapp.com/',
        github: 'https://github.com/zahur76/molacuizine',
        comment: ''
    },
    {
        number: 5,
        name: 'Star Wars Character Search: Django',
        technologies: 'Django, SQL, Python, Heroku, HTML, CSS, Javascript, Bootstrap, JQuery, AWS, S3',
        description: 'Site to search Star Wars character details by categories with full admin character control and OTP sign-in',
        site: 'https://django-starwars.herokuapp.com/',
        github: 'https://github.com/zahur76/starwars-django-main',
        comment: ''
    },
    {
        number: 6,
        name: 'Django Quiz',
        technologies: 'Django, SQL, Python, Heroku, HTML, CSS, Javascript, Bootstrap, JQuery, AWS, S3',
        description: 'Application to implement quiz in workplace using employee number with security to prevent answer manipulation and full admin control on question database and results',
        site: 'https://django-quiz-zahur.herokuapp.com/',
        github: 'https://github.com/zahur76/workforce-django',
        comment: 'Request username and password on zahurmeerun@hotmail.com for test'
    },    
    {
        number: 7,
        name: 'Workforce',
        technologies: 'Django, SQL, Python, Heroku, HTML, CSS, Javascript, Bootstrap, JQuery, AWS, S3',
        description: 'Site to manage Employee records with full admin control with emphasis on sick and annual leave',
        site: 'https://workforce-django.herokuapp.com/',
        github: 'https://github.com/zahur76/django-quiz',
        comment: 'Request username and password on zahurmeerun@hotmail.com for test'
    },
    {
        number: 8,
        name: 'Star Wars Character Search: NodeJS',
        technologies: 'Node.js, Express.js, SQL, HTML, CSS, Javascript, Bootstrap',
        description: 'Site to search Star Wars character details by categories with full admin character control using Node.js',
        site: 'https://django-starwars.herokuapp.com/',
        github: 'https://github.com/zahur76/starwar-api',
        comment: ''
    },
    {
        number: 9,
        name: 'React/NodeJs-todo',
        technologies: 'React, Node.js, Express.js, Sqlite, Postgres, HTML, CSS, Javascript, Bootstrap',
        description: 'Basic todo app using React as frontend and NodeJs as backend while managing state with hooks',
        site: 'https://react-node-todo-zahur.herokuapp.com/',
        github: 'https://github.com/zahur76/react-node-api',
        comment: ''
    },
    {
        number: 10,
        name: 'Redux React Star Wars',
        technologies: 'React, Redux, HTML, CSS, Javascript, Bootstrap',
        description: 'Star Wars Character Search site making use of Redux to manage application state',
        site: 'https://clever-albattani-e81087.netlify.app/',
        github: 'https://github.com/zahur76/redux-react-example',
        comment: ''
    },
    {
        number: 11,
        name: 'Hybrid Django React Todo app',
        technologies: 'React, Django, RestAPI, HTML, CSS, Javascript, Bootstrap',
        description: 'A React-Django Hybrid Todo app making use of Django rest for API requests in the backend while using React in the Frontend. Also includes sign in feature for CRUD operations and search bar',
        site: 'https://django-react-todo-zahur.herokuapp.com/',
        github: 'https://github.com/zahur76/django-react-todo',
        comment: ''
    },
    {
        number: 12,
        name: 'Hybrid Django React Astronomy App',
        technologies: 'React, Django, RestAPI, HTML, CSS, Javascript, Bootstrap',
        description: 'A React-Django Hybrid Astronomy app making use of Django rest for API requests in the backend while using React in the Frontend. Also includes sign in feature for CRUD operations and search bar',
        site: 'https://django-react-universe-zahur.herokuapp.com/',
        github: 'https://github.com/zahur76/django-react-universe',
        comment: ''
    },
    {
        number: 13,
        name: 'Mgi site',
        technologies: 'Flask, SQLalchemy, HTML, CSS, Bootstrap, CSS, MySQL',
        description: 'Build a site for client involved in the IT industry.',
        site: 'https://staging.mgenesysinnov.com/',
        github: 'https://gitlab.com/mgenesysinnov/mgi',
        comment: 'Main assignments was to code registration, page, language, donation and accessibility modules. The page and language module involved programming an interface for the client whereby the pages could be customed designed and translated by admin.'
    },
    {
        number: 14,
        name: 'API',
        technologies: 'Django, Python, Django Rest Framework, postgresql',
        description: 'Code an API to connect web scraping application to database',
        site: 'https://stratalis-property.herokuapp.com/',
        github: 'https://github.com/zahur76/property_api',
        comment: 'My duty was to develop an API to so to create and update data sent from a web scraping application to a database. The API would also produce a list of data which needed to be updated'
    },     
]

class Projects extends React.Component {
    renderProjectHistory(){
        return projectHistory.map(element=>{
            return  <Row>
                    <Col xs={2} md={1} lg={2}></Col>
                    <Col xs={12} md={10} lg={8}>              
                        <Accordion>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                    <Col xs={1} md={2}></Col>
                                    <Col className="h4 project-name" xs={10} md={7}>{element.number}.{element.name}</Col>
                                    <Col xs={1} md={3}></Col>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Row>                            
                                    <Col className="h4 text-center" xs={12}>Technologies used</Col>
                                    <Col className="text-center mb-1" xs={12}>{element.technologies}</Col>
                                    <Col className="h4 text-center" xs={12}>Description</Col>
                                    <Col className="text-center mb-1" xs={12}>{element.description}</Col>
                                    <Col className="text-center" xs={12}><a href={element.site} target="_blank" >Live Site</a></Col>
                                    <Col className="text-center mb-2" xs={12}><a href={element.github} target="_blank" >Github Repository</a></Col>
                                    <Col className="text-center mb-2" xs={12}>{element.comment}</Col>
                                </Row>                       
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col xs={0} md={1} lg={2}></Col>
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
                        <h2 className="info-title mt-3 mb-3">PORTFOLIO</h2>
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