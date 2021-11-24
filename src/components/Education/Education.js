import React from 'react';
import './Education.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from '../Home/Home'

let EducationHistory = [
    {
        year: '2021-21',
        institution: 'Code Institute',
        course: 'Diploma in FullStack Software Development'
    },
    {
        year: '2006-07',
        institution: '43 AirSchool',
        course: 'Frozen ATPL'
    },
    {
        year: '2002-04',
        institution: 'University Of Mauritius',
        course: 'MSc Project Management'
    },
    {
        year: '1995-99',
        institution: 'University Of Mauritius',
        course: 'Bachelor of Civil Engineering (Honours)'
    }    
]


class Education extends React.Component {    
    renderEducation(){
        return EducationHistory.map(element => {
            return  <Row>
                        <Col xs={2} md={2} className="title-edu">{element.year}</Col>
                        <Col xs={5} md={7} className="title-edu">{element.course}</Col>
                        <Col xs={5} md={3} className="title-edu mb-2">{element.institution}</Col>
                    </Row>
        })
    }
    render(){
        return (
            <div>
                <Home active='active-edu'/>       
                <Row>
                    <Col xs={1} md={3}>                    
                    </Col>
                    <Col xs={10} md={6}>
                        <h2 className="info-title mt-3 mb-3 bg">EDUCATION</h2>
                    </Col>
                    <Col xs={1} md={3}>                                       
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} md={2} className="title mb-2">Year</Col>
                    <Col xs={5} md={7}className="title mb-2">Course</Col>
                    <Col xs={5} md={3} className="title mb-2">Institution</Col>
                </Row>
                {this.renderEducation()}
                <div className="mt-3"></div>
            </div>
        );
    }  
}

export default Education;