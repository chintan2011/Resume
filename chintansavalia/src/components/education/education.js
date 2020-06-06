import React, { Component } from 'react';
import './education.css';
import Alert from 'react-bootstrap/Alert';


export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
	    <div id="education"></div>
	  	
        <Alert variant="education">
        <Alert.Heading>Education</Alert.Heading>
            <p> 
                <h5>Computer Systems Technician (2017)</h5>
                <h6>Algonquin College, Ottawa, Ontario, Canada</h6>
                
                <br></br>

                <h5>Computer Engineer (2013)</h5>
                <h6>Gujarat Technological University, Gujarat, India</h6>
            </p>
		</Alert>
      </React.Fragment>
    );
  }
}