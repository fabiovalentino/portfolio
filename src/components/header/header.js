import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resume = this.props.resume;
    return (
       <header id="home">
         <nav id="nav-wrap">
           <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
           <a className="mobile-btn" href="/#" title="Hide navigation">Hide navigation</a>
           <ul id="nav" className="nav">
             <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
             <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
             <li><a className="smoothscroll" href="#portfolio">Works</a></li>
             <li><a className="smoothscroll" href="#contact">Contact</a></li>
           </ul> {/* end #nav */}
         </nav> {/* end #nav-wrap */}
         <div className="row banner">
           <div className="banner-text">
             <h1 className="responsive-headline">I'm {resume.basics.name}.</h1>
             <h3>{resume.basics.label}</h3>
             <h3>"{resume.basics.headline}"</h3>
             <hr />
             <ul className="social">
               <li><a href="/#"><i className="fa fa-linkedin" /></a></li>
               <li><a href="/#"><i className="fa fa-skype" /></a></li>
               <li><a href="/#"><i className="fa fa-github" /></a></li>
             </ul>
           </div>
         </div>
         <p className="scrolldown">
           <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
         </p>
       </header>
    );
  }
}