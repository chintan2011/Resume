import React, { Component } from 'react';
import './header.css';
import logo from './logo.jpg'

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
    	{/* site header
    	================================================== */
      }
      <header className="s-header">
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img src={logo} alt="Logo" /> {}
          </a>
        </div>
        <div>
          <h1 class="myName"> Chintan Savalia </h1>
          <h2 class="contactInfo"> chintan2011@gmail.com |  613 - 501 - 5799 </h2>
        </div>
        <nav className="header-nav-wrap">
          {/*
          icons link  http://jaketrent.github.io/react-social-icons/
          update code to use this template https://www.styleshout.com/free-templates/ethos/
          use this tutorial https://medium.com/technoetics/create-a-developer-portfolio-using-reactjs-d34ea1bfb18e
          html to jsx https://magic.reactjs.net/htmltojsx.htm
          */}
        </nav>
      </header> {/* end s-header */}
      </React.Fragment>
    );
  }
}