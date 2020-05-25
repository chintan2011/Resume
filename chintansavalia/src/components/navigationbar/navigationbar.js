import React, { Component } from 'react';
import './navigationbar.css';
import Button from 'react-bootstrap/Button';
import {ButtonGroup} from 'react-bootstrap';


export default class Contact extends Component {
  render() {
	  	function scrollToWorkExperience(e){
			let locator = document.getElementById("workexperience")
			locator.scrollIntoView();
		}
		function scrollToProject(e){
			let locator = document.getElementById("project")
			locator.scrollIntoView();
		}
		function scrollToContactInfo(e){
			let locator = document.getElementById("contactinfo")
			locator.scrollIntoView();
		}
    return (
        <React.Fragment>
        {/* <div class="button-container">
        	<a href="#project" class="btn-group">ProjectLink</a>
        	<a href="#workexperience" class="btn-group">Work Experience</a>
        	<a href="#contactinfo" class="btn-group">Social</a>
        	<br/><br/><br/>
        </div> */}
			<ButtonGroup className="mb-2" size="lg">
  				<Button variant="secondary" onClick={scrollToProject}>Projects</Button>
  				<Button variant="secondary" onClick={scrollToWorkExperience}>Work Experience</Button>
  				<Button variant="secondary" onClick={scrollToContactInfo}>Social</Button>
			</ButtonGroup>
        </React.Fragment>
    );
  }
}