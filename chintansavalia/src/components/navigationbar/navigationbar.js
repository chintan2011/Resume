import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class Contact extends Component {
  render() {

	  	function scrollToWorkExperience(e){
			let locator = document.getElementById("workexperience");
			locator.scrollIntoView();
		}

		function scrollToProject(e){
			let locator = document.getElementById("projects");
			locator.scrollIntoView();
		}

		function scrollToContactInfo(e){
			let locator = document.getElementById("contactinfo");
			locator.scrollIntoView();
		}

		function scrollToEducation(e){
			let locator = document.getElementById("education");
			locator.scrollIntoView();
		}

		function scrollToSkills(e){
			let locator = document.getElementById("skills");
			locator.scrollIntoView();
		}
    return (
        <React.Fragment>
			<Container fluid>
  				<Row className="justify-content-md-center">
				  	<Col md="auto">
					  	<Button onClick={scrollToWorkExperience} size="lg">Work Experience</Button> {' '}
						<Button onClick={scrollToProject} size="lg">Projects</Button> {' '}
						<Button onClick={scrollToSkills} size="lg">Skills</Button> {' '}
						<Button onClick={scrollToEducation} size="lg">Education</Button> {' '}
						<Button onClick={scrollToContactInfo} size="lg">Social</Button> {' '}	
					</Col>  					
  				</Row>
			</Container>
        
		</React.Fragment>
    );
  }
}