import React, { Component } from 'react';
//import './navigationbar.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class Contact extends Component {
  render() {
	  	function scrollToWorkExperience(e){
			let locator = document.getElementById("workexperience")
			locator.scrollIntoView();
		}
		function scrollToProject(e){
			let locator = document.getElementById("projects")
			locator.scrollIntoView();
		}
		function scrollToContactInfo(e){
			let locator = document.getElementById("contactinfo")
			locator.scrollIntoView();
		}
    return (
        <React.Fragment>
			<Container fluid>
  				<Row className="justify-content-md-center">
				  	<Col md="auto">
					  <Button onClick={scrollToProject} size="lg">Projects</Button> {' '}
					  <Button onClick={scrollToWorkExperience} size="lg">Work Experience</Button> {' '}
					  <Button onClick={scrollToContactInfo} size="lg">Social</Button> {' '}
					</Col>  					
  				</Row>
			</Container>
        
		</React.Fragment>
    );
  }
}