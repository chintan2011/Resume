import React, { Component } from 'react';
import './scrolltotop.css';
import Button from 'react-bootstrap/Button';

export default class Contact extends Component {
  render() {

        let mybutton = document.getElementById("myBtn");
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              mybutton.style.display = "block";
            } else {
              mybutton.style.display = "none";
            }
        }

        function topFunction(){
            document.body.scrollTop = 0;    // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox
        }

    return (
        <React.Fragment>
	        <div>
                <Button onclick={topFunction} id="myBtn" title="Go to top">Scroll To Top</Button>
            </div>
      </React.Fragment>
    );
  }
}