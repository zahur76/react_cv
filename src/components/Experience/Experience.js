import React from 'react';
import './Experience.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from '../Home/Home'


let WorkHistory = [
    {
        number: 1,
        year: '2008-Present',
        position: 'First Officer',
        institution: 'Air Mauritius',
        description: '7500 flying hours with majority on Jet (A319/330/340/350). Presently rated on A350/330.'
    },
    {
        
        number: 2,
        year: '2004-2005',
        position: 'Assistant Site Manager',
        institution: 'Fitzpatrick Construction uk',
        description: 'Assistant site manager for a school expansion project in Morden, London. Duties involved management of resources for a steel/concrete school expansion on a daily basis. I was also involved with safety regulation implementation. '
    },
    {
        number: 3,
        year: '2003-2004',
        position: 'Assistant Project Manager',
        institution: 'LTA Construction',
        description: 'Site manager supervising civil works for the super market chain Super U (Mauritius) and also assistant project manager for a new build cold storage for the fruit supplier Surat. Main duties involved dealing with the client from conception stage of projects, design process, tendering and management of different contractors (civil, mechanical etc…) until completion of the project.' 
    },
    {
        number: 4,
        year: '1999-2003',
        position: 'Trainee Engineer/Assistant Site Manager',
        institution: 'Compagnie Mauricienne De Textile',
        description: 'Assistant site manager for several projects for CMT involving new build and renovation works located at La Tour Koenig, Phoenix, Verdun and Montagne Blanche. Main duties involved design of concrete structures and management of in house and appointed contractors for the construction of steel frame buildings.  I was also involved in the tender process and civil maintenance of existing buildings.'
    }    
]

class Experience extends React.Component {
    renderWorkHistory(){
        return WorkHistory.map(element => {
            return  <Row>
                        <Col xs={1} md={3}></Col>
                        <Col className="p-2 h4 border-bottom border-dark" xs={10} md={6}>{element.number}.{element.institution}</Col>
                        <Col xs={1} md={3}></Col>
                        <Col className="p-2 h6 text-center" xs={12}><b>Year</b> {element.year}</Col>
                        <Col className="p-2 h6 text-center" xs={12}><b>Position</b> {element.position}</Col>
                        <Col className="p-2 text-center" xs={12}><b>Job Description</b></Col>
                        <Col className="p-2 text-center" xs={12}>{element.description}</Col>
                    </Row>
        })
    }    
    render(){
        return (
            <div>
                <Home active='active-exp'/>
                <Row>
                    <Col xs={1} md={3}>                    
                    </Col>
                    <Col xs={10} md={6}>
                        <h2 className="info-title mt-3 mb-3 bg">WORK EXPERIENCE</h2>
                    </Col>
                    <Col xs={1} md={3}>                                       
                    </Col>
                </Row>
                {this.renderWorkHistory()}
                <div className="mt-3"></div>                
            </div>
        );
    }  
}

export default Experience;