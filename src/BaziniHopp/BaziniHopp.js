import React, { Component } from 'react';
import './BaziniHopp.css';
import './../Portfolio.css';
import BaziniHoppHome from './BaziniHopp.mov';
import baziniHoppMobile from './baziniHoppMobile.PNG';
import capabilities1 from './capabilities1.png';
import capabilities2 from './capabilities2.png';
import capabilities3 from './capabilities3.png';
import capabilities4 from './capabilities4.png';
import baziniMobile1 from './baziniMobile1.png';
import baziniMobile2 from './baziniMobile2.png';
import baziniMobile3 from './baziniMobile3.png';
import baziniMobile4 from './baziniMobile4.png';
import logoWhite from './logoWhite.png';
import logoDark from './logoDark.png';
import brandingColors from './brandingColors.png';
import editorialIcon from './editorialIcon.png';
import eventsIcon from './eventsIcon.png';
import socialIcon from './socialIcon.png';
import web from './../webWhite.png';
import drib from './../dribbble.png';
import git from './../github.png';

export default class BaziniHopp extends React.Component  {

  constructor(props){
        super(props);
        this.contentFadeInOut = {
          contentFadeOut: function() {
            if(this.props.currentComp === 2){
            var BaziniHoppDiv = document.querySelector("div.BaziniHopp");
              BaziniHoppDiv.style.opacity = "0";
              BaziniHoppDiv.style.transition = "1.1s ease";
            var previewDesktop = document.querySelector("div#BaziniPreview");
              previewDesktop.style.display = "block";
            var previewMobile = document.querySelector("div#BaziniPreviewMobile");
              previewMobile.style.display = "block";
            var toNext = document.querySelector("div#nextPieceStructure");
              toNext.style.opacity = "0";
              toNext.style.transition = "1.1s ease";
            var theNumberBazini = document.querySelector("div.panel > div:nth-child(2) > p.portfolioNumber");
              theNumberBazini.style.right = "49%";
            };
          }.bind(this),
          contentFadeIn: function() {//bind function once
            if(this.props.currentComp === 2){
            var BaziniHoppDiv = document.querySelector("div.BaziniHopp");
              BaziniHoppDiv.style.opacity = "1";
            var previewDesktop = document.querySelector("div#BaziniPreview");
              previewDesktop.style.display = "none";
            var previewMobile = document.querySelector("div#BaziniPreviewMobile");
              previewMobile.style.display = "none";
            };
            var toNext = document.querySelector("div#nextPieceStructure");
              toNext.style.opacity = "1";
              toNext.style.transition = "1s ease";
            var theNumberBazini = document.querySelector("div.panel > div:nth-child(2) > p.portfolioNumber");
              if(window.innerWidth > 1200) {
                theNumberBazini.style.right = "-4%";
              } else {
                theNumberBazini.style.right = "2%"
              }
          }.bind(this),
          toNextPiece: function(event) {
            var page = event.target;
            if (page.scrollHeight - page.scrollTop <= (page.clientHeight+160)) {
            var toNext = document.querySelector("div#nextPieceStructure");
              toNext.style.display = "block";
              toNext.style.bottom = "-2vh"
              toNext.style.opacity = "1";
              toNext.style.transition = "1s";
            } else {
            var toNext = document.querySelector("div#nextPieceStructure");
              toNext.style.bottom = "-18vh"
              toNext.style.opacity = "0";
              toNext.style.transition = "1s";
            }
          }.bind(this),
          viewNextEnter: function() {
            var theContent = document.querySelector("div.BaziniHopp");
              theContent.style.opacity = "0";
              theContent.style.transition = "1s";
            var thNumberStructure = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
              thNumberStructure.style.right = "-4%";
          }.bind(this),
          viewNextLeave: function() {
            var theContent = document.querySelector("div.BaziniHopp");
              theContent.style.opacity = "1";
              theContent.style.transition = "1s";
            var thNumberStructure = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
              thNumberStructure.style.right = "49%";
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


  renderBaziniHopp = () => {
    var BaziniHoppComponent = document.querySelector("div.BaziniHoppContent");
    BaziniHoppComponent.style.opacity = "1";
    BaziniHoppComponent.style.transition = "1.2s ease";
  };


componentDidMount() {
  var renderComponent = this.renderBaziniHopp;
  setTimeout(function() {
    renderComponent();
  }, 750);
  /*var theNumber = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
    theNumber.style.left = "7.19em";*/
  document.querySelector("div.panel").addEventListener('mouseenter', this.contentFadeInOut.contentFadeOut, false);
  document.querySelector("div.panel").addEventListener('mouseleave', this.contentFadeInOut.contentFadeIn, false);
  document.querySelector("div.BaziniHopp").addEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPieceStructure").addEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPieceStructure").addEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
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
  document.querySelector("div.BaziniHopp").removeEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPieceStructure").removeEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPieceStructure").removeEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
  var toNext = document.querySelector("div#nextPieceStructure");
    toNext.style.bottom = "-18vh"
    toNext.style.opacity = "0";
    toNext.style.transition = "1s";
}

render() {
    return (<div className="BaziniHopp">
      <div className="ThePreviews">
        <div className="previewDesktopCopy" id="BaziniPreviewCopy">
          <video className="BaziniHoppHome" alt="BaziniHoppHome" autoPlay loop muted>
            <source src={BaziniHoppHome} type="video/mp4"/>
          </video>
        </div>
        <div className="previewMobileCopy" id="BaziniPreviewMobileCopy">
          <img className="baziniHoppMobile" src={baziniHoppMobile} alt="baziniHoppMobile" />
        </div>
      </div>
      <div className="BaziniHoppContent">
        <div className="projectTitle">
          <p className="projectContributor">SOLO PROJECT:</p>
          <p className="theTitle">BAZINI HOPP WEBSITE BUILD</p>
        </div>
        <div className="About" id="BaziniAbout">
          <h4>ABOUT</h4>
          <p className="aboutClient">BaziniHopp is a competitive PR Firm based in New York City.</p>
          <p className="aboutBuild">The objective of this project was to build a modern and professional site based on the predetermined designs.
          </p>
        </div>
        <div className="rebranding">
          <p>REBRANDING</p>
          <p>By Alex Geddes</p>
          <img className="brandingColors" src={brandingColors} alt="brandingColors" />
          <div className="logos">
            <img className="logoWhite" src={logoWhite} alt="logoWhite" />
            <img className="logoDark" src={logoDark} alt="logoDark" />
          </div>
        </div>
        <div className="creative">
          <p>CUSTOM DIGITAL ASSETS</p>
          <p>By Alex Geddes</p>
          <div className="iconHolder">
            <img className="editorialIcon" src={editorialIcon} alt="editorialIcon" />
            <img className="eventsIcon" src={eventsIcon} alt="eventsIcon" />
            <img className="socialIcon" src={socialIcon} alt="socialIcon" />
          </div>
        </div>
        <div className="Stack">
          <p className="theStack">THE STACK</p>
          <p className="aboutStack">Built entirely in SquareSpace utilizing
            Code Blocks, Page Header Code Injection, and Custom CSS</p>
        </div>
        <div className="FinalHome">
          <p className="finalText">THE FINISHED PRODUCT</p>
          <p className="finalDesktop">Desktop Display</p>
          <p className="finalMobile">Mobile Display</p>
          <div className="desktopFinal">
            <img className="capabilities1" src={capabilities1} alt="capabilities1" />
            <img className="capabilities2" src={capabilities2} alt="capabilities2" />
            <img className="capabilities3" src={capabilities3} alt="capabilities3" />
            <img className="capabilities4" src={capabilities4} alt="capabilities4" />
          </div>
          <div className="mobileFinal">
            <img className="baziniMobile1" src={baziniMobile1} alt="baziniMobile1" />
            <img className="baziniMobile2" src={baziniMobile2} alt="baziniMobile2" />
            <img className="baziniMobile3" src={baziniMobile3} alt="baziniMobile3" />
            <img className="baziniMobile4" src={baziniMobile4} alt="baziniMobile4" />
          </div>
        </div>
        <div className="connectSection">
          <div className="connectIcons">
            <div className="toSite">
              <a href="https://bazinihopp.com" target="_blank" rel="noopener noreferrer" className="contactLink">
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
