import React, { Component } from 'react';
import Header from './components/header/header';
import Contact from './components/contactus/contactus';
import WorkExperience from './components/workexperience/workexperience';
import Projects from './components/projects/projects'
import Navigation from './components/navigationbar/navigationbar';
import Education from './components/education/education';
import Skills from './components/skills/skills';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Header />
		<Navigation />
        <WorkExperience />
        <Projects />
		<Skills />
		<Education/>
		<Contact />
		
      </div>
    );
  }
}
export default App;