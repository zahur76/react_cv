import React from 'react';
import './Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './selfie.jpg'
import react from '../../logo.svg'
import CV from '../../CV.pdf'


class Home extends React.Component {        
    setActiveEdu(){
        if(this.props.active==='active-edu'){
            return 'active'
        }else{
            return ''
        }      
    }
    setActiveExp(){
        if(this.props.active==='active-exp'){
            return 'active'
        }else{
            return ''
        }      
    }
    setActiveSkills(){
        if(this.props.active==='active-skills'){
            return 'active'
        }else{
            return ''
        }      
    }
    setActiveProjects(){
        if(this.props.active==='active-projects'){
            return 'active'
        }else{
            return ''
        }      
    }
    render(){
        return (
            <div>
                <Row className="details">
                    <Col xs={12} className="text-center power">Site Powered By <img className="react" src={react}/></Col>
                    <Col className="text-center" xs={12} sm={3}>
                        <img src={image} alt="profile pic" />
                    </Col>
                    <Col xs={12} sm={9}>
                        <Row>
                            <Col xs={12}>                                
                                <Col><h2 className="info-title">PERSONAL INFO</h2></Col>
                                <Col><h4 className="position">Junior Fullstack Developer</h4></Col>
                                <Row>
                                    <Col xs={4} md={3} className="info">Name:</Col><Col xs={8} md={9}>Zahur Meerun</Col>
                                </Row>
                                <Row>
                                    <Col xs={4} md={3} className="info">Date of Birth:</Col><Col xs={8} md={9}>6th May 1976</Col>
                                </Row>
                                <Row>
                                    <Col xs={4} md={3} className="info">Nationality:</Col><Col xs={8} md={9}>British/Mauritian</Col>
                                </Row>
                                <Row>
                                    <Col xs={4} md={3} className="info">Contact No:</Col><Col xs={8} md={9}>(+230)57075200</Col>
                                </Row>
                                <Row>
                                    <Col xs={4} md={3} className="info">Email:</Col><Col xs={8} md={9}>zahurmeerun@hotmail.com</Col>
                                </Row>
                                <Row>
                                    <Col xs={4} md={3} className="info">Github:</Col><Col xs={8} md={9}><a href="https://github.com/zahur76" target="_blank">Github</a></Col>
                                </Row>
                                <Row>
                                    <Col xs={4} md={3} className="info">LinkedIn:</Col><Col xs={8} md={9}><a href="https://www.linkedin.com/in/zahur-meerun-6323841b5/" target="_blank">LinkedIn</a></Col>
                                </Row>
                                <Row>
                                    <Col xs={4} md={3} className="info">CV:</Col><Col xs={8} md={9}><a href={CV} target="_blank">Download</a></Col>
                                </Row>
                                <Row className="links">
                                    <Col xs={3}><a href="/education" id={this.setActiveEdu()} className="link-1 btn text-center">Education</a></Col>
                                    <Col xs={3}><a href="/experience" id={this.setActiveExp()} className="link-2 btn text-center">Experience</a></Col>
                                    <Col xs={3}><a href="/skills" id={this.setActiveSkills()} className="link-3 btn text-center">Skills</a></Col>
                                    <Col xs={3}><a href="/projects" id={this.setActiveProjects()} className="link-4 btn text-center">Portfolio</a></Col>
                                </Row>                            
                            </Col>
                        </Row>                  
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} md={3}>                    
                    </Col>
                    <Col xs={10} md={6}>
                        <h2 className="info-title mt-3">PERSONAL STATEMENT</h2>
                    </Col>
                    <Col xs={1} md={3}>                                       
                    </Col>
                    <Col xs={12} className="mt-2 statement text-center">
                        <div>Full Stack Software Developer, newly graduated, with skills in HTML, CSS, JavaScript
                        and Python. Able to complement these technical skills with a professional background
                        within the aviation industry. I’m a career switcher, formerly a commercial airline pilot with
                        15 years’ of experience as a First Officer, with a first degree in Civil Engineering.
                        Creative, focused and committed to the technical industry.
                        </div> 
                    </Col>
                </Row>         
        </div>
        );
    }  
}

export default Home;