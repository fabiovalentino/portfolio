import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let works = this.props.resume.work;
    let skills = this.props.resume.skills;
    let map = new Map();
    for(let i=0; i<skills.length; i++){
      var size = skills[i].rating*10;
      var percent = size*10/5;
      let listItemStyle = {
        width: percent+'%'
    };
      map.set(skills[i].name, listItemStyle);
    }
    return (
      <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          {works.map((work)=>
          <div className="row item">
            <div className="twelve columns">
              <h3>{work.company}</h3>
              <p className="info">{work.position} <span>•</span> <em className="date">{work.start.month}/{work.start.year} - {work.end.month}/{work.end.year}</em></p>
              <p>
                {work.summary}
              </p>
              {work.highlights.map((highlight)=>
                <p className="info"><span>•</span>{highlight}</p>
              )}
            </div>
          </div>
          )}
        </div>
      </div> 
    
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">
              {skills.map((skill)=><div>
                <li><span className="bar-expand" style={map.get(skill.name)} /><em>{skill.name} - {skill.yearsOfExperience} Years</em></li></div>
              )}
            </ul>
          </div>
        </div>
      </div>
    
    <div className="row education">
    <div className="three columns header-col">
      <h1><span>Education</span></h1>
    </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3>Coming soon</h3>
            <p className="info">Coming soon <span>•</span> <em className="date">Coming soon</em></p>
            <p>
              Coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
    );
  }
}