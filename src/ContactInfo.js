import React, { Component } from 'react';
import './Contact.css';
import mail from './email.png';
import drib from './dribbble.png';
import git from './github.png';
import insta from './insta.png';
import linked from './linkedIn.png';

export default class ContactInfo extends React.Component  {

  contactFadeIn = () => {
    var contactInfo = document.querySelector("div.ContactInfo");
    contactInfo.classList.add("contactFade");
  };

  contactFadeOut = () => {
    document.querySelector("div.ContactInfo").addEventListener("mouseleave", function(){
      var contactInfo = document.querySelector("div.ContactInfo");
      contactInfo.style.marginTop = "-7em";
      contactInfo.style.opacity = "0";
      contactInfo.style.transition = "all .9s .4s ease-in-out";
    })
  };


componentDidMount() {
  this.contactFadeIn();
  this.contactFadeOut();
  /*setTimeout(function() {
    for (let i=1; i<10; i++) {
      designer(i);
    }

    function designer(i) {
      setTimeout(function selectAll() {
        var design = document.querySelector("div.designer > p.letterTitle:nth-child("+i+")");
        design.style.opacity = "1";
        design.style.marginTop = "1.2em";
        design.style.transition = ".2s cubic-bezier(.21,1.04,.83,.56)";
        console.log(i);
      }, 120 * i);
    }
  }, 900);


  setTimeout(function() {
    for (let d=1; d<11; d++) {
      developer(d);
    }

    function developer(d) {
      setTimeout(function selectAll() {
        var design = document.querySelector("div.developer > p.letterTitle:nth-child("+d+")");
        design.style.opacity = "1";
        design.style.marginTop = "1.2em";
        design.style.transition = ".2s cubic-bezier(.21,1.04,.83,.56)";
        console.log(d);
      }, 120 * d);
    }
  }, 2000);


  setTimeout(function() {
    for (let l=1; l<9; l++) {
      learner(l);
    }

    function learner(l) {
      setTimeout(function selectAll() {
        var design = document.querySelector("div.learner > p.letterTitle:nth-child("+l+")");
        design.style.opacity = "1";
        design.style.marginTop = "1.2em";
        design.style.transition = ".2s cubic-bezier(.21,1.04,.83,.56)";
        console.log(l);
      }, 120 * l);
    }
  }, 3300);*/


  /*setTimeout(function selectAll() {
    for (let i = 1; i < 11; i++) {
      var design = document.querySelector("div.developer > p.letterTitle:nth-child("+i+")");
      design.classList.add("titleLoad");
      console.log(i);
    }
  }, 1900);

  setTimeout(function selectAll() {
    for (let i = 1; i < 9; i++) {
      var design = document.querySelector("div.learner > p.letterTitle:nth-child("+i+")");
      design.classList.add("titleLoad");
      console.log(i);
    }
  }, 3000);*/

}

componentWillUnmount() {
  /*alert("unmounting");*/
}

render() {
    return (<div className="ContactInfo">
      <div className="landingTitle">
        <div className="designer">
          <p className="letterTitle">D</p>
          <p className="letterTitle">E</p>
          <p className="letterTitle">S</p>
          <p className="letterTitle">I</p>
          <p className="letterTitle">G</p>
          <p className="letterTitle">N</p>
          <p className="letterTitle">E</p>
          <p className="letterTitle">R</p>
          <p className="letterTitle">.&nbsp;</p>
        </div>
        <div className="developer">
          <p className="letterTitle">D</p>
          <p className="letterTitle">E</p>
          <p className="letterTitle">V</p>
          <p className="letterTitle">E</p>
          <p className="letterTitle">L</p>
          <p className="letterTitle">O</p>
          <p className="letterTitle">P</p>
          <p className="letterTitle">E</p>
          <p className="letterTitle">R</p>
          <p className="letterTitle">.&nbsp;</p>
        </div>
        <div className="learner">
          <p className="letterTitle">L</p>
          <p className="letterTitle">E</p>
          <p className="letterTitle">A</p>
          <p className="letterTitle">R</p>
          <p className="letterTitle">N</p>
          <p className="letterTitle">E</p>
          <p className="letterTitle">R</p>
          <p className="letterTitle">.&nbsp;</p>
        </div>
      </div>
      <div className="contactIcons">
        <div className="email">
          <a href="mailto:brooklyne.finni@gmail.com" target="_blank" rel="noopener noreferrer" className="contactLink">
            <img className="mail" src={mail} alt="mail" />
          </a>
        </div>
        <div className="dribbble">
          <a href="https://dribbble.com/brooklynefinni" target="_blank" rel="noopener noreferrer" className="contactLink">
            <img className="drib" src={drib} alt="drib" />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/brooklynebkbk" target="_blank" rel="noopener noreferrer" className="contactLink">
            <img className="git" src={git} alt="git" />
          </a>
        </div>
        <div className="instagram">
          <a href="https://www.instagram.com/bklnfn/" target="_blank" rel="noopener noreferrer" className="contactLink">
            <img className="insta" src={insta} alt="insta" />
          </a>
        </div>
        <div className="linkedIn">
          <a href="https://www.linkedin.com/in/brooklynefinni/" target="_blank" rel="noopener noreferrer" className="contactLink">
            <img className="linked" src={linked} alt="linked" />
          </a>
        </div>
      </div>
    </div>)
}


};
