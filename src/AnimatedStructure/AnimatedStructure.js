import React, { Component } from 'react';
import './AnimatedStructure.css';
import './../Portfolio.css';
import architectureAnimation from './architectureAnimation.mov';
import structureMobile from './structureMobile.png';
import minniePic from './minnie.png';
import web from './../webWhite.png';
import drib from './../dribbble.png';
import git from './../github.png';

export default class AnimatedStructure extends React.Component  {

  constructor(props){
        super(props);
        this.contentFadeInOut = {
          contentFadeOut: function() {
            if(this.props.currentComp === 3){
            var BaziniHoppDiv = document.querySelector("div.AnimatedStructure");
              BaziniHoppDiv.style.opacity = "0";
              BaziniHoppDiv.style.transition = "1.1s ease";
            var previewDesktop = document.querySelector("div#StructurePreview");
              previewDesktop.style.display = "block";
            var previewMobile = document.querySelector("div#StructurePreviewMobile");
              previewMobile.style.display = "block";
            var toNext = document.querySelector("div#nextPieceFLShotUsers");
              toNext.style.opacity = "0";
              toNext.style.transition = "1.1s ease";
            var theNumberBazini = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
              theNumberBazini.style.right = "49%";
            };
          }.bind(this),
          contentFadeIn: function() {//bind function once
            if(this.props.currentComp === 3){
            var BaziniHoppDiv = document.querySelector("div.AnimatedStructure");
              BaziniHoppDiv.style.opacity = "1";
            var previewDesktop = document.querySelector("div#StructurePreview");
              previewDesktop.style.display = "none";
            var previewMobile = document.querySelector("div#StructurePreviewMobile");
              previewMobile.style.display = "none";
            };
            var toNext = document.querySelector("div#nextPieceFLShotUsers");
              toNext.style.opacity = "1";
              toNext.style.transition = "1s ease";
            var theNumberBazini = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
              if(window.innerWidth > 1200) {
                theNumberBazini.style.right = "-4%";
              } else {
                theNumberBazini.style.right = "2%"
              }
          }.bind(this),
          toNextPiece: function(event) {
            var page = event.target;
            if (page.scrollHeight - page.scrollTop <= (page.clientHeight+160)) {
            var toNext = document.querySelector("div#nextPieceFLShotUsers");
              toNext.style.display = "block";
              toNext.style.bottom = "-2vh"
              toNext.style.opacity = "1";
              toNext.style.transition = "1s";
            } else {
            var toNext = document.querySelector("div#nextPieceFLShotUsers");
              toNext.style.bottom = "-18vh"
              toNext.style.opacity = "0";
              toNext.style.transition = "1s";
            }
          }.bind(this),
          viewNextEnter: function() {
            var theContent = document.querySelector("div.AnimatedStructure");
              theContent.style.opacity = "0";
              theContent.style.transition = "1s";
            var thNumberFL = document.querySelector("div.panel > div:nth-child(4) > p.portfolioNumber");
              thNumberFL.style.right = "-4%";
          }.bind(this),
          viewNextLeave: function() {
            var theContent = document.querySelector("div.AnimatedStructure");
              theContent.style.opacity = "1";
              theContent.style.transition = "1s";
            var thNumberFL = document.querySelector("div.panel > div:nth-child(4) > p.portfolioNumber");
              thNumberFL.style.right = "49%";
          },
          viewSite: function() {
            var textAppear = document.querySelector("p.visitSite");
              textAppear.style.opacity = "1";
              textAppear.style.transition = "1s ease"
          },
          viewSS: function() {
            var textAppear = document.querySelector("p.viewSS");
              textAppear.style.opacity = "1";
              textAppear.style.transition = "1s ease"
          },
          viewDesigns: function() {
            var textAppear = document.querySelector("p.viewDesigns");
              textAppear.style.opacity = "1";
              textAppear.style.transition = "1s ease"
          },
          hideSite: function() {
            var textAppear = document.querySelector("p.visitSite");
              textAppear.style.opacity = "0";
              textAppear.style.transition = ".5s ease"
          },
          hideSS: function() {
            var textAppear = document.querySelector("p.viewSS");
              textAppear.style.opacity = "0";
              textAppear.style.transition = ".5s ease"
          },
          hideDesigns: function() {
            var textAppear = document.querySelector("p.viewDesigns");
              textAppear.style.opacity = "0";
              textAppear.style.transition = ".5s ease"
          }
    }
  };


  renderAnimatedStructure = () => {
    var StructureComponent = document.querySelector("div.StructureContent");
    StructureComponent.style.opacity = "1";
    StructureComponent.style.transition = "1.2s ease";
  };


componentDidMount() {
  var renderComponent = this.renderAnimatedStructure;
  setTimeout(function() {
    renderComponent();
  }, 750);
  /*var theNumber = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
    theNumber.style.left = "7.19em";*/
  document.querySelector("div.panel").addEventListener('mouseenter', this.contentFadeInOut.contentFadeOut, false);
  document.querySelector("div.panel").addEventListener('mouseleave', this.contentFadeInOut.contentFadeIn, false);
  document.querySelector("div.AnimatedStructure").addEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPieceFLShotUsers").addEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPieceFLShotUsers").addEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
  /*this.contentFadeInOut();*/
  document.querySelector("div.toSite").addEventListener('mouseenter', this.contentFadeInOut.viewSite, false);
  document.querySelector("div.toSite").addEventListener('mouseleave', this.contentFadeInOut.hideSite, false);
  document.querySelector("div.toGithub").addEventListener('mouseenter', this.contentFadeInOut.viewSS, false);
  document.querySelector("div.toGithub").addEventListener('mouseleave', this.contentFadeInOut.hideSS, false);
  document.querySelector("div.toDribbble").addEventListener('mouseenter', this.contentFadeInOut.viewDesigns, false);
  document.querySelector("div.toDribbble").addEventListener('mouseleave', this.contentFadeInOut.hideDesigns, false);
}

componentWillUnmount() {
  /*var theNumber = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
    theNumber.style.left = "3em";*/
  document.querySelector("div.panel").removeEventListener('mouseenter', this.contentFadeInOut.contentFadeOut, false);
  document.querySelector("div.panel").removeEventListener('mouseleave', this.contentFadeInOut.contentFadeIn, false);
  document.querySelector("div.AnimatedStructure").removeEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPieceFLShotUsers").removeEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPieceFLShotUsers").removeEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
  var toNext = document.querySelector("div#nextPieceFLShotUsers");
    toNext.style.bottom = "-18vh"
    toNext.style.opacity = "0";
    toNext.style.transition = "1s";
}

render() {
    return (<div className="AnimatedStructure">
      <div className="ThePreviews">
        <div className="previewDesktopCopy" id="StructurePreviewCopy">
          <video className="architectureAnimation" alt="architectureAnimation" autoPlay loop muted>
            <source src={architectureAnimation} type="video/mp4"/>
          </video>
        </div>
        <div className="previewMobileCopy" id="StructurePreviewMobileCopy">
          <img className="structureMobile" src={structureMobile} alt="structureMobile" />
        </div>
      </div>
      <div className="StructureContent">
        <div className="projectTitle">
          <p className="projectContributor">SOLO PROJECT:</p>
          <p className="theTitle">STRUCTURE ANIMATION</p>
        </div>
        <div className="About" id="StructureAbout">
          <h4>ABOUT</h4>
          <p className="aboutClient">This Animated Structure was born out of sheer curiosity.</p>
          <p className="aboutBuild">3D Graphic Animations are fascinating and I plan to further explore
          what is possible using just CSS and HTML.
          </p>
        </div>
        <div className="Stack">
          <p className="theStack">THE STACK</p>
          <p className="aboutStack">This animation was created in React.JS using CSS, HTML and Javascript.
          It has been deployed to Heroku for viewing purposes.</p>
        </div>
        <div className="Minnie">
          <p className="assistant">I would like to thank the academy and my faithful assistant, Minnie.</p>
          <div className="minnieHolder">
          <img className="minniePic" src={minniePic} alt="minniePic" />
        </div>
        </div>
        <div className="connectSection">
          <div className="connectIcons">
            <div className="toSite">
              <a href="https://thawing-depths-01252.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="contactLink">
                <img className="web" src={web} alt="web" />
              </a>
            </div>
            <div className="toGithub">
              <a href="https://github.com/brooklynebkbk" target="_blank" rel="noopener noreferrer" className="contactLink">
                <img className="git" src={git} alt="git" />
              </a>
            </div>
            <div className="toDribbble">
              <a href="https://dribbble.com/brooklynefinni" target="_blank" rel="noopener noreferrer" className="contactLink">
                <img className="drib" src={drib} alt="drib" />
              </a>
            </div>
          </div>
          <div className="iconDo">
            <p className="visitSite">Visit Site</p>
            <p className="viewSS">View Code</p>
            <p className="viewDesigns">View Designs</p>
          </div>
        </div>
      </div>
    </div>)
}


};
