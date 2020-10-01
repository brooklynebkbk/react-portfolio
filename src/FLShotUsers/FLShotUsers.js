import React, { Component } from 'react';
import './FLShotUsers.css';
import './../Portfolio.css';
import FLSFooter from './FLSFooter.png';
import footerMobile from './footerMobile.PNG';
import home1 from './home1.png';
import home2 from './home2.png';
import home3 from './home3.png';
import FLMobile1 from './FLMobile1.png';
import FLMobile2 from './FLMobile2.png';
import FLMobile3 from './FLMobile3.png';
import FLMobile4 from './FLMobile4.png';
import web from './../webWhite.png';
import drib from './../dribbble.png';
import git from './../github.png';

export default class FLShotUsers extends React.Component  {
  constructor(props){
        super(props);
        this.contentFadeInOut = {
          contentFadeOut: function() {
            console.log(this.props.currentComponent);
            if(this.props.currentComp === 3){
            var FLShotDiv = document.querySelector("div.FLShotUsers");
              FLShotDiv.style.opacity = "0";
              FLShotDiv.style.transition = "1.1s ease";
            var previewDesktop = document.querySelector("div#FLShotsPreview");
              previewDesktop.style.display = "block";
            var previewMobile = document.querySelector("div#FLPreviewMobile");
              previewMobile.style.display = "block";
            var toNext = document.querySelector("div#nextPieceHebron");
              toNext.style.opacity = "0";
              toNext.style.transition = "1.1s ease";
            var theNumberFL = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
              theNumberFL.style.right = "49%";
            };
          }.bind(this),
          contentFadeIn: function() {//bind function once
            if(this.props.currentComp === 3){
            var FLShotDiv = document.querySelector("div.FLShotUsers");
              FLShotDiv.style.opacity = "1";
            var previewDesktop = document.querySelector("div#FLShotsPreview");
              previewDesktop.style.display = "none";
            var previewMobile = document.querySelector("div#FLPreviewMobile");
              previewMobile.style.display = "none";
            };
            var toNext = document.querySelector("div#nextPieceHebron");
              toNext.style.opacity = "1";
              toNext.style.transition = "1s ease";
            var theNumberFL = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
              if(window.innerWidth > 1200) {
                theNumberFL.style.right = "-4%";
              } else {
                theNumberFL.style.right = "2%"
              }
          }.bind(this),
          toNextPiece: function(event) {
            var page = event.target;
            if (page.scrollHeight - page.scrollTop <= (page.clientHeight+160)) {
            var toNext = document.querySelector("div#nextPieceHebron");
              toNext.style.display = "block";
              toNext.style.bottom = "-2vh"
              toNext.style.opacity = "1";
              toNext.style.transition = "1s";
            } else {
            var toNext = document.querySelector("div#nextPieceHebron");
              toNext.style.bottom = "-18vh"
              toNext.style.opacity = "0";
              toNext.style.transition = "1s";
            }
          }.bind(this),
          viewNextEnter: function() {
            var theContent = document.querySelector("div.FLShotUsers");
              theContent.style.opacity = "0";
              theContent.style.transition = "1s";
            var theNumberHebron = document.querySelector("div.panel > div:nth-child(4) > p.portfolioNumber");
              theNumberHebron.style.right = "-4%";
          }.bind(this),
          viewNextLeave: function() {
            var theContent = document.querySelector("div.FLShotUsers");
              theContent.style.opacity = "1";
              theContent.style.transition = "1s";
            var theNumberHebron = document.querySelector("div.panel > div:nth-child(4) > p.portfolioNumber");
              theNumberHebron.style.right = "49%";
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


  renderFLShotUsers = () => {
    var FLShotsComponent = document.querySelector("div.FLShotContent");
    FLShotsComponent.style.opacity = "1";
    FLShotsComponent.style.transition = "1.2s ease";
  };


componentDidMount() {
  var renderComponent = this.renderFLShotUsers;
  setTimeout(function() {
    renderComponent();
  }, 750);
  /*var theNumber = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
    theNumber.style.left = "7.19em";*/
  document.querySelector("div.panel").addEventListener('mouseenter', this.contentFadeInOut.contentFadeOut, false);
  document.querySelector("div.panel").addEventListener('mouseleave', this.contentFadeInOut.contentFadeIn, false);
  document.querySelector("div.FLShotUsers").addEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPieceHebron").addEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPieceHebron").addEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
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
  document.querySelector("div.FLShotUsers").removeEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPieceHebron").removeEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPieceHebron").removeEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
  var toNext = document.querySelector("div#nextPieceHebron");
    toNext.style.bottom = "-18vh"
    toNext.style.opacity = "0";
    toNext.style.transition = "1s";
}

render() {
    return (<div className="FLShotUsers">
      <div className="ThePreviews">
        <div className="previewDesktopCopy" id="FLShotsCopy">
          <img className="FLSFooter" src={FLSFooter} alt="FLSFooter" />
        </div>
        <div className="previewMobileCopy" id="FLShotsMobileCopy">
          <img className="footerMobile" src={footerMobile} alt="footerMobile" />
        </div>
      </div>
      <div className="FLShotContent">
        <div className="projectTitle">
          <p className="projectContributor">TEAM PROJECT:</p>
          <p className="theTitle">FL SHOT USERS WEBSITE REDESIGN AND DEVELOPMENT</p>
        </div>
        <div className="About" id="FLShotsAbout">
          <h4>ABOUT</h4>
          <p className="aboutClient">Florida Shots serves and stores centralized data for Florida Parents, Schools and Healthcare Providers.</p>
          <p className="aboutBuild">Accessibility and maintainability were key when contributing to the development of this government site.
          </p>
        </div>
        <div className="Contribution">
          <p className="theStack">CONTRIBUTIONS</p>
          <p className="aboutStack">As an intern my contributions included writing HTML to reflect the established designs, logging and fixing bugs.</p>
        </div>
        <div className="Stack">
          <p className="theStack">THE STACK</p>
          <p className="aboutStack">Built entirely in Drupal utilizing HTML Code Blocks, Code Injection, and Custom CSS</p>
        </div>
        <div className="FinalHome">
        <p className="finalText">THE FINISHED PRODUCT</p>
        <p className="finalDesktop">Desktop Display</p>
        <p className="finalMobile">Mobile Display</p>
        <div className="desktopFinal">
          <img className="home1" src={home1} alt="home1" />
          <img className="home2" src={home2} alt="home2" />
          <img className="home3" src={home3} alt="home3" />
        </div>
        <div className="mobileFinal">
          <img className="FLMobile1" src={FLMobile1} alt="FLMobile1" />
          <img className="FLMobile2" src={FLMobile2} alt="FLMobile2" />
          <img className="FLMobile3" src={FLMobile3} alt="FLMobile3" />
          <img className="FLMobile4" src={FLMobile4} alt="FLMobile4" />
        </div>
      </div>
      <div className="connectSection">
          <div className="connectIcons">
            <div className="toSite">
              <a href="https://FLShotsUsers.com" target="_blank" rel="noopener noreferrer" className="contactLink">
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
            <p className="viewSS">View Stylesheets</p>
            <p className="viewDesigns">View Designs</p>
          </div>
        </div>
      </div>
    </div>)
}


};
