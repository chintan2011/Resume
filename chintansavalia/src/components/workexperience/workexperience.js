import React, { Component } from 'react';
import './workexperience.css';
import Alert from 'react-bootstrap/Alert';

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      <div id="workexperience">
        <br></br>
        <Alert variant="primary">
            <Alert.Heading>Work Experience</Alert.Heading>
            <p> 
                <h5>Software Engineer - Automation (May 2019 - Present)</h5>
                <h6>Nokia - Ottawa, Ontario, Canada</h6>
                <ul>
                    <li>Responsible for maintaining and improving automated tests.</li>
					<li>Taking ownership of Features and thoroughly testing them both manually and with automation.</li>
					<li>Improved test execution timings by refactoring legacy code.</li>
					<li>JavaScript, Selenium, Selenium Grid, NodeJS, OpenStack.</li>
					<li>Solved selenium webdriver version conflicts by suggesting to have a shared centralized cloud VM.</li>
                </ul>
            </p>

            <p> 
                <h5>Software Engineer (March 2019 - May 2019)</h5>
                <h6>Quanergy Systems Canada Inc - Ottawa, Ontario, Canada</h6>
                <ul>
                    <li>Responsible for developing company private software tool to support Python3.</li>
					<li>Improved build system timing by 95% by redesigning CI (Jenkins).</li>
					<li>Work with the Director and the Software team to build features for Quanergy's new and existing products.</li>
					<li>Responsible for improving and maintaining build system.</li>
					<li>Write documentation on the tools and feature I develop.</li>
                </ul>
            </p>

            <p> 
                <h5>Lead Test Engineer - Automation (December 2017 - FFebruary 2019)</h5>
                <h6>BlackBerry Messenger (BBM) - Ottawa, Ontario, Canada</h6>
                <ul>
                    <li>Responsible for ensuring that product meets the in-market Quality Standards.</li>
					<li>Solved issue of device unavailability by introducing in-house device farm to the organization.</li>
					<li>Improved the efficiency of finding defects by automated defect and test failure reporting with every new build.</li>
					<li>Lead the testing process, Design Testing Strategy, Manual and Automated verification for every release
candidate build for Android and iOS.</li>
					<li>Leverage knowledge of mobile applications, networking and mobile communication to develop intricate test
						scenarios through CICD (Continuous Integration Continuous Deployment).</li>
					<li>Played major role in investigation of determining the restrictions of the possible cloud services solution.</li>
					<li>Python, Jenkins, Robot Framework, Google Cloud Platform (GCP), Google Firebase, Kibana(Elasticsearch),
						Spanner(NoSQL Database), Gennymotion Cloud, Appium, REST api, Xcode, Adb (Android Debug Bridge)</li>
                </ul>
            </p>

            <p> 
                <h5>Software Testing Associate (May 2017 - December 2017)</h5>
                <h6>Superna.net - Ottawa, Ontario, Canada</h6>
                <ul>
                    <li>Working as a member of Superna Eyeglass test team as they develop new products and extend their existing
						products.</li>
					<li>Played major role in testing Ransomware Protection (product) by creating script that simulates malware actions.</li>
					<li>Docker, Hadoop, Phabricator, HDFS, End-to-End Testing, Shell Script, Linux, Vsphere and Vcenter, Active
						Directory, Jenkins, Bitbucket.</li>
					<li>Documentation of test results, Maintaining test environment, Support internal and external parties, writing test
						plans and test cases, writing description of software/interoperability test as input to final documentation.</li>
                </ul>
            </p>
        </Alert>

        <Alert variant="info">
            <Alert.Heading>Internship</Alert.Heading>

            <p> 
                <h5>Test Automation Developer - Student (September 2016 - December 2016)</h5>
                <h6>BlackBerry - Ottawa, Ontario, Canada</h6>
                <ul>
                    <li>Familiar with BBM and responsible for test planning, quality and clarity of defect authoring, and overall
						contribution to the SCRUM team.</li>
					<li>Drive the automation strategy supported by SCRUM team members and other members of the automation
						team using Ruby, Cucumber, Adb.</li>
					<li>Contributed to functional testing of cross platform BBM by implementing automation framework for BB10 from
						scratch.</li>
                </ul>
            </p>

            <p> 
                <h5>Android Developer - Student (May 2016 - August 2016)</h5>
                <h6>Urkkada Technology Ltd. - Ottawa, Ontario, Canada</h6>
                <ul>
                    <li>Developed Android Application that helps in carrying out geo-technical engineering calculations for internal use.</li>
					<li>Integrated app with ArcGIS maps.</li>
					<li>Responsible for developing and testing front-end and back-end of the app using Java and XML.</li>
                </ul>
            </p>
        </Alert>
        </div>
        {/* <div class="experience">
            <div class="experienceHeader">
                <h3 class="companyName">Nokia - Ottawa, Ontario, Canada</h3>
                <h4 class="position">Software Test Engineer - Automation (May 2019 - Present)</h4>
                <ul class="jobdetails">
                    <li>Responsible for maintaining and improving automated tests.</li>
					<li>Taking ownership of Features and thoroughly testing them both manually and with automation.</li>
					<li>Improved test execution timings by refactoring legacy code.</li>
					<li>JavaScript, Selenium, Selenium Grid, NodeJS, OpenStack.</li>
					<li>Solved selenium webdriver version conflicts by suggesting to have a shared centralized cloud VM.</li>
                </ul>
            </div>
        </div>

		<div class="experience">
            <div class="experienceHeader">
                <h3 class="companyName">Quanergy Systems Canada Inc - Ottawa, Ontario, Canada</h3>
                <h4 class="position">Software Engineer (March 2019 - May 2019)</h4>
                <ul class="jobdetails">
                    <li>Responsible for developing company private software tool to support Python3.</li>
					<li>Improved build system timing by 95% by redesigning CI (Jenkins).</li>
					<li>Work with the Director and the Software team to build features for Quanergy's new and existing products.</li>
					<li>Responsible for improving and maintaining build system.</li>
					<li>Write documentation on the tools and feature I develop.</li>
                </ul>
            </div>
        </div>

		<div class="experience">
            <div class="experienceHeader">
                <h3 class="companyName">BlackBerry Messenger (BBM) - Ottawa, Ontario, Canada</h3>
                <h4 class="position">Test Automation Engineer (December 2017 - FFebruary 2019)</h4>
                <ul class="jobdetails">
                    <li>Responsible for ensuring that product meets the in-market Quality Standards.</li>
					<li>Solved issue of device unavailability by introducing in-house device farm to the organization.</li>
					<li>Improved the efficiency of finding defects by automated defect and test failure reporting with every new build.</li>
					<li>Lead the testing process, Design Testing Strategy, Manual and Automated verification for every release
candidate build for Android and iOS.</li>
					<li>Leverage knowledge of mobile applications, networking and mobile communication to develop intricate test
						scenarios through CICD (Continuous Integration Continuous Deployment).</li>
					<li>Played major role in investigation of determining the restrictions of the possible cloud services solution.</li>
					<li>Python, Jenkins, Robot Framework, Google Cloud Platform (GCP), Google Firebase, Kibana(Elasticsearch),
						Spanner(NoSQL Database), Gennymotion Cloud, Appium, REST api, Xcode, Adb (Android Debug Bridge)</li>
                </ul>
            </div>
        </div>

		<div class="experience">
            <div class="experienceHeader">
                <h3 class="companyName">Superna.net - Ottawa, Ontario, Canada</h3>
                <h4 class="position">Software Testing Associate (May 2017 - December 2017)</h4>
                <ul class="jobdetails">
                    <li>Working as a member of Superna Eyeglass test team as they develop new products and extend their existing
						products.</li>
					<li>Played major role in testing Ransomware Protection (product) by creating script that simulates malware actions.</li>
					<li>Docker, Hadoop, Phabricator, HDFS, End-to-End Testing, Shell Script, Linux, Vsphere and Vcenter, Active
						Directory, Jenkins, Bitbucket.</li>
					<li>Documentation of test results, Maintaining test environment, Support internal and external parties, writing test
						plans and test cases, writing description of software/interoperability test as input to final documentation.</li>
                </ul>
            </div>
        </div>

		<div>
			<h2 class="title">Internship</h2>
	  	</div>

		<div class="experience">
            <div class="experienceHeader">
                <h3 class="companyName">BlackBerry - Ottawa, Ontario, Canada</h3>
                <h4 class="position">Test Automation Developer (September 2016 - December 2016)</h4>
                <ul class="jobdetails">
                    <li>Familiar with BBM and responsible for test planning, quality and clarity of defect authoring, and overall
						contribution to the SCRUM team.</li>
					<li>Drive the automation strategy supported by SCRUM team members and other members of the automation
						team using Ruby, Cucumber, Adb.</li>
					<li>Contributed to functional testing of cross platform BBM by implementing automation framework for BB10 from
						scratch.</li>
                </ul>
            </div>
        </div>

		<div class="experience">
            <div class="experienceHeader">
                <h3 class="companyName">Urkkada Technology Ltd. - Ottawa, Ontario, Canada</h3>
                <h4 class="position">Test Automation Developer (May 2016 - August 2016)</h4>
                <ul class="jobdetails">
                    <li>Developed Android Application that helps in carrying out geo-technical engineering calculations for internal use.</li>
					<li>Integrated app with ArcGIS maps.</li>
					<li>Responsible for developing and testing front-end and back-end of the app using Java and XML.</li>
                </ul>
            </div>
        </div> */}
        
      </React.Fragment>
    );
  }
}