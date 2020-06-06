import React, { Component } from 'react';
import './project.css';
import Alert from 'react-bootstrap/Alert';


export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
	  <div id="projects"></div>
	  	
        <Alert variant="success">
			<Alert.Heading>Projects</Alert.Heading>

			<Alert.Link href="https://github.com/chintan2011/Resume">
				Resume - (JavaScript, React, React-Bootstrap, HTML and CSS)
			</Alert.Link>
			<li>Resume website to get familiar with react components</li>

			<br></br>
			<Alert.Link href="https://github.com/chintan2011/pusherpoll">
				PusherPoll - (JavaScript, NodeJS, Express, Mongoose, Pusher, HTML and CSS)
			</Alert.Link>
			<li>Real-time voting app for team building activities .</li>

			<br></br>
			<Alert.Link href="https://github.com/chintan2011/nodeJSFirebase">
				nodeJSFirebase - (JavaScript, NodeJS, Google Cloud, Firebase)
			</Alert.Link>
			<li>Google Cloud VM running webserver as back-end with exposed REST api for real-time Firebase CRUD operations.</li>

			<br></br>
			<Alert.Link href="https://github.com/chintan2011/todo-react-app">
				todo-react-app - (ReactJS, JavaScript)
			</Alert.Link>
			<li>ToDo app using ReactJS</li>

			<br></br>
			<Alert.Link href="https://github.com/chintan2011/python-learns">
				python-learns - (Python)
			</Alert.Link>
			<li>Python coding exercises for algorithms and data structures.</li>

			<br></br>
			<Alert.Link href="https://github.com/chintan2011/vagrant_automation">
				Vagrant_automation - (Vagrant, Ruby, Shell)
			</Alert.Link>
			<li>Automated deployment of Linux VM with Nginx, Git, and MySql configured for web
                development.</li>
			
			<br></br>
			<Alert.Link href="https://github.com/chintan2011/fbCRUDAndroid">
				fbCRUDAndroid - (Android, Google Cloud, Firebase)
			</Alert.Link>
			<li>Android app as front-end to perform CRUD with exposed REST api by nodeJSFirebase.</li>

			<br></br>
			<Alert.Link href="https://github.com/chintan2011/JavaProjects">
				JavaProjects - (Java)
			</Alert.Link>
			<li>Mini Java projects</li>

			<br></br>
			<Alert.Link href="https://github.com/chintan2011/JavaLearns">
				JavaLearns - (Java)
			</Alert.Link>
			<li>Java coding coding exercises for algorithms and data structures.</li>

		</Alert>
      </React.Fragment>
    );
  }
}