(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),r=t.n(c),s=(t(13),t(1)),m=t(2),o=t(4),i=t(3),u=t(5),E=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resume;return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"/#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))," ")," ",l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e.basics.name,"."),l.a.createElement("h3",null,e.basics.label),l.a.createElement("h3",null,'"',e.basics.headline,'"'),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement("i",{className:"fa fa-skype"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement("i",{className:"fa fa-github"})))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component),d=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resume;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.basics.summary),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.basics.name),l.a.createElement("br",null),l.a.createElement("span",null,e.basics.email))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:"/#",className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume"))))," ")," "))}}]),a}(n.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){for(var e=this.props.resume.work,a=this.props.resume.skills,t=new Map,n=0;n<a.length;n++){var c={width:10*(10*a[n].rating)/5+"%"};t.set(a[n].name,c)}return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.position," ",l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.start.month,"/",e.start.year," - ",e.end.month,"/",e.end.year)),l.a.createElement("p",null,e.summary)))})))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},a.map((function(e){return l.a.createElement("div",null,l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand",style:t.get(e.name)}),l.a.createElement("em",null,e.name," - ",e.yearsOfExperience," Years")))})))))),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,"Coming soon"),l.a.createElement("p",{className:"info"},"Coming soon ",l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},"Coming soon")),l.a.createElement("p",null,"Coming soon"))))))}}]),a}(n.Component),p=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Coming soon."))))}}]),a}(n.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resume;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{action:!0,method:"post",id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:!0,size:35,id:"contactName",name:"contactName"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:!0,size:35,id:"contactEmail",name:"contactEmail"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{type:"text",defaultValue:!0,size:35,id:"contactSubject",name:"contactSubject"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:50,rows:15,id:"contactMessage",name:"contactMessage",defaultValue:""})),l.a.createElement("div",null,l.a.createElement("button",{className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"})))))," ",l.a.createElement("div",{id:"message-warning"}," Error boy"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Contact information"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.basics.name),l.a.createElement("br",null),l.a.createElement("span",null,e.basics.email))))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement("i",{className:"fa fa-skype"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement("i",{className:"fa fa-github"}))))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),b=(t(14),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={data:[],loading:!0},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gitconnected.com/v1/portfolio/fabiovalentino").then((function(e){return e.json()})).then((function(a){e.setState({data:a,loading:!1})})).catch(console.log)}},{key:"render",value:function(){return this.state.loading?"Loading...":l.a.createElement("div",{className:"App"},l.a.createElement(E,{resume:this.state.data}),l.a.createElement(d,{resume:this.state.data}),l.a.createElement(h,{resume:this.state.data}),l.a.createElement(p,{resume:this.state.data}),l.a.createElement(f,{resume:this.state.data}),l.a.createElement(v,{resume:this.state.data}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2194ff4d.chunk.js.map