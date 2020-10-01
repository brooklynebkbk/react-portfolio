import React, { Component } from 'react';
/*import ContactInfo from './ContactInfo.js';*/
import './Contact.css';
import mail from './email.png';
import drib from './dribbble.png';
import git from './github.png';
import insta from './insta.png';
import linked from './linkedIn.png';

export default class Contact extends React.Component  {

  /*constructor(props){
    super(props);
    this.state = {
      showContactInfo: false
    };
  };*/

  /*contactFadeIn = () => {
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
  };*/

nameMouseOver = () =>{
  var contactInfo = document.querySelector("div.ContactInfo");
  contactInfo.style.backgroundColor = this.props.colorCode[2];
    if(this.props.currentDisplay === 0){
      var contactInfo = document.querySelector("div.ContactInfo");
        contactInfo.style.marginTop = "3em";
        contactInfo.style.opacity = "1";
        contactInfo.style.boxShadow = "0 0 0 0";
    }else{
      var contactInfo = document.querySelector("div.ContactInfo");
        contactInfo.style.marginTop = "3em";
        contactInfo.style.opacity = "1";
        contactInfo.style.boxShadow = "0 0 8px 2px #aaaaaa";
    };
    var floatingPlant = document.querySelector("div.floatingPlant");
    floatingPlant.style.marginTop = "10vh";
    floatingPlant.style.transition = "1s .2s ease-in-out";
    for(let i= 1; i<6; i++){
      var circle = document.querySelector("div.contactIcons > div:nth-child("+i+")");
      circle.style.backgroundColor = this.props.colorCode[0];
    }
    for (let t=1; t<10; t++) {
      var design = document.querySelector("div.designer > p.letterTitle:nth-child("+t+")");
      design.style.color = this.props.colorCode[0];
    }
    for (let d=1; d<11; d++) {
      var develop = document.querySelector("div.developer > p.letterTitle:nth-child("+d+")");
      develop.style.color = this.props.colorCode[0];
    }
    for (let l=1; l<9; l++) {
      var learn = document.querySelector("div.learner > p.letterTitle:nth-child("+l+")");
      learn.style.color = this.props.colorCode[0];
    }
    var email = document.querySelector("div.contactIcons > div.email");
    email.addEventListener("mouseenter", this.props.newColorsDark[0]);
    email.addEventListener("mouseleave", this.props.oldColorsBright[0]);
    var dribbble = document.querySelector("div.contactIcons > div.dribbble");
    dribbble.addEventListener("mouseenter", this.props.newColorsDark[1]);
    dribbble.addEventListener("mouseleave", this.props.oldColorsBright[1]);
    var github = document.querySelector("div.contactIcons > div.github");
    github.addEventListener("mouseenter", this.props.newColorsDark[2]);
    github.addEventListener("mouseleave", this.props.oldColorsBright[2]);
    var instagram = document.querySelector("div.contactIcons > div.instagram");
    instagram.addEventListener("mouseenter", this.props.newColorsDark[3]);
    instagram.addEventListener("mouseleave", this.props.oldColorsBright[3]);
    var linkedIn = document.querySelector("div.contactIcons > div.linkedIn");
    linkedIn.addEventListener("mouseenter", this.props.newColorsDark[4]);
    linkedIn.addEventListener("mouseleave", this.props.oldColorsBright[4]);
    /*this.setState({showContactInfo: true});*/
};

nameMouseOut = () =>{
    var floatingPlant = document.querySelector("div.floatingPlant");
    floatingPlant.style.marginTop = "0vh";
    floatingPlant.style.transition = "1s .5s ease-in-out";
    var contactInfo = document.querySelector("div.ContactInfo");
    contactInfo.style.marginTop = "-7em";
    contactInfo.style.opacity = "0";
    contactInfo.style.transition = "1s .2s ease-in-out";
    /*setTimeout(function() {
      this.setState({showContactInfo: false});
    }.bind(this), 3000);*/
};

componentDidMount() {
  /*this.contactFadeIn();
  this.contactFadeOut();*/
}

render() {
    return (<div className="Contact">
      <div className="nameHolder" onMouseEnter={()=> this.nameMouseOver()}>
      <h4 className="contactFirstName">BROOKLYNE</h4>
      <h4 className="contactLastName">FINNI</h4>
      </div>
      <div className="ContactInfo" onMouseLeave={()=> this.nameMouseOut()}>
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
    </div>
    </div>)
}


};

      /*{ this.state.showContactInfo && <ContactInfo /> }*/

