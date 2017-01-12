import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var root = document.getElementById('root');

const Header = ()=> <h1 style={{textAlign: 'center'}}>Michael Crowley</h1>;

const Intro = ()=> {
	return (
		<div style={{textAlign: 'center'}}>
			<img src={'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/02e/0a9/11a6631.jpg'} style={{height: '350px', width: '350px'}}/> 
			<p>Full Stack Javascript Developer</p>
		</div>
	)
}

const Skills = () => {
	return (
		<div style={{textAlign: 'center'}}>
			<h3 className="well">TECHNICAL SKILLS</h3>
			<div>
				<p>Proficient: JavaScript, Angular, Node.js, Express, Git, HTML5, CSS3, Sass, Postgres/Sequelize, Bootstrap</p>
				<p>Familiar: ES2015, Karma, Gulp, Yeoman, Mocha, Chai, Passport, Socket.io, C++, Python,   React, Functional Javascript programming, Docker</p>
			</div>
		</div>
	)
}

const Projects = () => {
	return (
		<section style={{textAlign: 'center', clear: 'both'}}>
			<h3 className="well">PROJECTS</h3>

			<div className="col-md-4 col-lg-4 col-sm-4">
				<p><a href="https://thesynth.herokuapp.com">The Synth</a></p>
				<p>Synthesize sounds right in the browser.</p>
				<p>Static Angular app Made with Yeoman Generator</p>
			</div>

			<div className="col-lg-4 col-md-4 col-sm-4">
				<p><a href="https://moseisleymarketplace.herokuapp.com">Mos Eisley MarketPlace</a></p>
				<p>Ecommerce CRUD application.</p>
				<p>RESTful API.</p>
				<p>Made with Angular, Node, Express, Passport, Gulp, etc.</p>
			</div>

			<div className="col-lg-4 col-md-4 col-sm-4">
				<p><a href="http://www.learntestcode.com">Testing123</a></p>
				<p>Test-code writing training tool.</p>
				<p>CRUD Application with RESTful API</p>
				<p>Made with Angular, Node, Express, Passport, Gulp, etc.</p>
			</div>
		</section>
	)
}

const Education = () => {
	return (
		<section style={{textAlign: 'center', clear: 'both'}}>

			<h3 className="well">EDUCATION</h3>	

			<div className="col-lg-3 col-md-6 col-sm-6">
				<p>Full Stack Academy of Code: Fall '16</p>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<p>City College: Spring '16</p>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<p>City Tech: Fall '15</p>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<p>NYU: Class of '09</p>
			</div>

		</section>
	)
}

const Links = () => {
	return (
		<div style={{textAlign: 'center', clear: 'both'}}>
			<h3 className="well">LINKS</h3>
			<p className="col-lg-4 col-xs-12"><a href="https://www.github.com/m-cr">Github</a></p>
			<p className="col-lg-4 col-xs-12"><a href="http://stackoverflow.com/users/7217950/m-crowley">Stack Overflow</a></p>
			<p className="col-lg-4 col-xs-12"><a href="https://www.linkedin.com/in/miketcrowley">LinkedIn</a></p>
		</div>
	)
}

const Footer = () => {
	return (
		<div style={{textAlign: 'center', clear: 'both'}}>
			<p><a href="mailto:miketcrowley@gmail.com">Contact</a> || Skills || Projects || Education</p>
		</div>
	)
}

class App extends Component{
	constructor(){
		super();
		// const todos = ['Foo', 'Bar'];
		// this.state = { todos };
	}
	render(){
		return (
			<div>
			<Header />
			<Intro />
			<Skills />
			<Projects />
			<Education />
			<Links />
			<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, root);