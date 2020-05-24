import React, { Component } from 'react';
import './project.css';

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="project">
	  	<div>
			<h2 class="title">Projects</h2>
	  	</div>
        
        <div class="container">
            <a href="https://github.com/chintan2011/pusherpoll">PusherPoll - (JavaScript, NodeJS, Express, Mongoose, Pusher, HTML and CSS)</a>
            <li>Real-time voting app for team building activities .</li>
        </div>
        
        <div class="container">
            <a href="https://github.com/chintan2011/nodeJSFirebase">nodeJSFirebase - (JavaScript, NodeJS, Google Cloud, Firebase)</a>
            <li>Google Cloud VM running webserver as back-end with exposed REST api for real-time Firebase
                CRUD operations.</li>
        </div>

        <div class="container">
            <a href="https://github.com/chintan2011/fbCRUDAndroid">fbCRUDAndroid - (Android, Google Cloud, Firebase)</a>
            <li>Android app as front-end to perform CRUD with exposed REST api by nodeJSFirebase.</li>
        </div>

        <div class="container">
            <a href="https://github.com/chintan2011/todo-react-app">todo-react-app - (ReactJS, JavaScript)</a>
            <li>ToDo app using React</li>
        </div>

        <div class="container">
            <a href="https://github.com/chintan2011/JavaProjects">JavaProjects - (Java)</a>
            <li>Java coding coding exercises for algorithms and data structures.</li>
        </div>

        <div class="container">
            <a href="https://github.com/chintan2011/python-learns">python-learns - (Python)</a>
            <li>Python coding exercises for algorithms and data structures.</li>
        </div>

        <div class="container">
            <a href="https://github.com/chintan2011/JavaLearns">JavaLearns - (Java)</a>
            <li>Java coding coding exercises for algorithms and data structures.</li>
        </div>

        <div class="container">
            <a href="https://github.com/chintan2011/vagrant_automation">Vagrant_automation - (Vagrant)</a>
            <li>Automated deployment of Linux VM with Nginx, Git, and MySql configured for web
                development.</li>
        </div>
        </div>
      </React.Fragment>
    );
  }
}