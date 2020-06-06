import React, { Component } from 'react';
import './header.css';
import logo from './logo.jpg'

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
	  	<div>
		  	<a href="index.html">
        		<img src={logo} alt="Logo"/>
          	</a>

			<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        	
			<h1 class="myName"> Chintan Savalia </h1>	
			<h2 class="contactInfo"> chintan2011@gmail.com |  613 - 501 - 5799 </h2>
        </div>
      </React.Fragment>
    );
  }
}