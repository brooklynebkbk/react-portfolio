import React, { Component } from 'react';
import './WatchAConcept.css';
import './../Portfolio.css';
import watchNavigation from './watchNavigation.mov';
import handy from './handy.png';
import WatchPalette from './WatchPalette.png';
import web from './../email.png';
import drib from './../dribbble.png';
import git from './../github.png';

export default class WatchAConcept extends React.Component  {

constructor(props){
        super(props);
        this.contentFadeInOut = {
          contentFadeOut: function() {
            console.log(this.props.currentComponent);
            if(this.props.currentComp === 6){
            var WatchDiv = document.querySelector("div.WatchAConcept");
              WatchDiv.style.opacity = "0";
              WatchDiv.style.transition = "1.1s ease";
            var previewDesktop = document.querySelector("div#WatchPreview");
              previewDesktop.style.display = "block";
            var toNext = document.querySelector("div#nextPieceHome");
              toNext.style.opacity = "0";
              toNext.style.transition = "1.1s ease";
            var theNumberWatch = document.querySelector("div.panel > div:nth-child(6) > p.portfolioNumber");
              theNumberWatch.style.right = "49%";
            };
          }.bind(this),
          contentFadeIn: function() {//bind function once
            if(this.props.currentComp === 6){
            var WatchDiv = document.querySelector("div.WatchAConcept");
              WatchDiv.style.opacity = "1";
            var previewDesktop = document.querySelector("div#WatchPreview");
              previewDesktop.style.display = "none";
            };
            var theNumberWatch = document.querySelector("div.panel > div:nth-child(6) > p.portfolioNumber");
              if(window.innerWidth > 1200) {
                theNumberWatch.style.right = "-4%";
              } else {
                theNumberWatch.style.right = "2%"
              }
            var toNext = document.querySelector("div#nextPieceHome");
              toNext.style.opacity = "1";
              toNext.style.transition = "1s ease";
          }.bind(this),
          toNextPiece: function(event) {
            var page = event.target;
            if (page.scrollHeight - page.scrollTop <= (page.clientHeight+160)) {
            var toNext = document.querySelector("div#nextPieceHome");
              toNext.style.display = "block";
              toNext.style.bottom = "-2vh"
              toNext.style.opacity = "1";
              toNext.style.transition = "1s";
            } else {
            var toNext = document.querySelector("div#nextPieceHome");
              toNext.style.bottom = "-18vh"
              toNext.style.opacity = "0";
              toNext.style.transition = "1s";
            }
          }.bind(this),
          viewNextEnter: function() {
            var theContent = document.querySelector("div.WatchAConcept");
              theContent.style.opacity = "0";
              theContent.style.transition = "1s";
            var theNumberWatch = document.querySelector("div.panel > div:nth-child(6) > p.portfolioNumber");
              theNumberWatch.style.right = "49%";
          }.bind(this),
          viewNextLeave: function() {
            var theContent = document.querySelector("div.WatchAConcept");
              theContent.style.opacity = "1";
              theContent.style.transition = "1s";
            var theNumberWatch = document.querySelector("div.panel > div:nth-child(6) > p.portfolioNumber");
              theNumberWatch.style.right = "-4%";
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


  renderWatchAConcept = () => {
    var WatchComponent = document.querySelector("div.WatchContent");
    WatchComponent.style.opacity = "1";
    WatchComponent.style.transition = "1.2s ease";
  };


componentDidMount() {
  var renderComponent = this.renderWatchAConcept;
  setTimeout(function() {
    renderComponent();
  }, 750);
  /*var theNumber = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
    theNumber.style.left = "7.19em";*/
  document.querySelector("div.panel").addEventListener('mouseenter', this.contentFadeInOut.contentFadeOut, false);
  document.querySelector("div.panel").addEventListener('mouseleave', this.contentFadeInOut.contentFadeIn, false);
  document.querySelector("div.WatchAConcept").addEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPieceHome").addEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPieceHome").addEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
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
  document.querySelector("div.WatchAConcept").removeEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPieceHome").removeEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPieceHome").removeEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
  var toNext = document.querySelector("div#nextPieceHome");
    toNext.style.bottom = "-18vh"
    toNext.style.opacity = "0";
    toNext.style.transition = "1s";
}

render() {
    return (<div className="WatchAConcept">
      <div className="ThePreviews">
        <div className="previewDesktopCopy" id="WatchPreviewCopy">
          <video className="watchNavigation" alt="watchNavigation" autoPlay loop muted>
            <source src={watchNavigation} type="video/mp4"/>
          </video>
        </div>
      </div>
      <div className="WatchContent">
        <div className="projectTitle">
          <p className="projectContributor">SOLO PROJECT:</p>
          <p className="theTitle">WATCH: A DESIGN CONCEPT</p>
        </div>
        <div className="About" id="WatchAbout">
          <h4>ABOUT</h4>
          <p className="aboutClient">Watch: A Design Concept experiments with conceptualization and the versatility of React.JS</p>
          <p className="aboutBuild">
          </p>
        </div>
        <div className="palette">
          <p className="colorSwatch">THE SWATCH</p>
          <p className="colorSwatchText">An experimental palette based on a vintage Swatch</p>
          <img className="WatchPalette" src={WatchPalette} alt="WatchPalette" />
          <img className="handy" src={handy} alt="handy" />
        </div>
        <div className="Stack">
          <p className="theStack">THE STACK</p>
          <p className="aboutStack">This React Microsite explores heavy concepting, playful design, and unconvential navigation.<br/><br/>Languages include React.JS, HTML, CSS.</p>
        </div>
        <div className="connectSection">
          <div className="connectIcons">
            <div className="toSite">
              <a href="mailto:brooklyne.finni@gmail.com" target="_blank" rel="noopener noreferrer" className="contactLink">
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
            <p className="visitSite">Contact</p>
            <p className="viewSS">View Stylesheets</p>
            <p className="viewDesigns">View Designs</p>
          </div>
        </div>
      </div>

    </div>)
}


};
