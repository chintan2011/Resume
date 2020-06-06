import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './contactus.css';

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="contactinfo" class="contactinfo">
		      	<SocialIcon url="https://linkedin.com/in/chintansavalia"/>
        		<SocialIcon url="https://github.com/chintan2011" bgColor="#00000"/>
				<SocialIcon url="https://www.facebook.com/chintan2011"/>
				<br></br><br></br>
		</div>
      </React.Fragment>
    );
  }
}