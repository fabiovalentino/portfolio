import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resume = this.props.resume;
    return ( 
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resume.basics.summary}
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resume.basics.name}</span><br />
                  <span>{resume.basics.email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="/#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
    );
  }
}