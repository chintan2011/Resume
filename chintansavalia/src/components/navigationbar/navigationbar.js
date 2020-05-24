import React, { Component } from 'react';
import './navigationbar.css';

export default class Contact extends Component {
  render() {
	  function mytest(e){
		var tt = document.getElementById("workexperience")
		tt.scrollIntoView();
	  }
    return (
        <React.Fragment>
        {/* <div class="button-container">
        	<a href="#project" class="btn-group">ProjectLink</a>
        	<a href="#workexperience" class="btn-group">Work Experience</a>
        	<a href="#contactinfo" class="btn-group">Social</a>
        	<br/><br/><br/>
        </div> */}
		<div class="btn-group">
  			<button >Apple</button>
  			<button >Samsung</button>
  			<button >Sony</button>
		</div>

		<div class="first">
			<button onClick={mytest}>Testing Workexperience</button>
		</div>
        </React.Fragment>
    );
  }
}