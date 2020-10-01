import React, { Component } from 'react';
import './HebronHarvest.css';
import './../Portfolio.css';
/*import harvestVideo from './harvestVideo.mov';*/
import HHHomePreview from './HHHomePreview.png'
import HHMobile from './HHMobile.PNG';
import collections1 from './collections1.png';
import collections2 from './collections2.png';
import mobile1 from './mobile1.png';
import mobile2 from './mobile2.png';
import HHPalette from './HHPalette.png';
import shoe1 from './shoe1.png';
import shoe2 from './shoe2.png';
import shoe3 from './shoe3.png';
import pinkSweater from './pinkSweater.jpg';
import web from './../webWhite.png';
import drib from './../dribbble.png';
import git from './../github.png';


export default class HebronHarvest extends React.Component  {
  constructor(props){
        super(props);
        this.contentFadeInOut = {
          contentFadeOut: function() {
            console.log(this.props.currentComponent);
            if(this.props.currentComp === 4){
            var HebronHarvestDiv = document.querySelector("div.HebronHarvest");
              HebronHarvestDiv.style.opacity = "0";
              HebronHarvestDiv.style.transition = "1.1s ease";
            var previewDesktop = document.querySelector("div#HebronPreview");
              previewDesktop.style.display = "block";
            var previewMobile = document.querySelector("div#HebronPreviewMobile");
              previewMobile.style.display = "block";
            var toNext = document.querySelector("div#nextPieceWatch");
              toNext.style.opacity = "0";
              toNext.style.transition = "1.1s ease";
            var theNumberHebron = document.querySelector("div.panel > div:nth-child(4) > p.portfolioNumber");
              theNumberHebron.style.right = "49%";
            };
          }.bind(this),
          contentFadeIn: function() {//bind function once
            if(this.props.currentComp === 4){
            var HebronHarvestDiv = document.querySelector("div.HebronHarvest");
              HebronHarvestDiv.style.opacity = "1";
            var previewDesktop = document.querySelector("div#HebronPreview");
              previewDesktop.style.display = "none";
            var previewMobile = document.querySelector("div#HebronPreviewMobile");
              previewMobile.style.display = "none";
            };
            var toNext = document.querySelector("div#nextPieceWatch");
              toNext.style.opacity = "1";
              toNext.style.transition = "1s ease";
            var theNumberHebron = document.querySelector("div.panel > div:nth-child(4) > p.portfolioNumber");
              if(window.innerWidth > 1200) {
                theNumberHebron.style.right = "-4%";
              } else {
                theNumberHebron.style.right = "2%"
              }
          }.bind(this),
          toNextPiece: function(event) {
            var page = event.target;
            if (page.scrollHeight - page.scrollTop <= (page.clientHeight+160)) {
            var toNext = document.querySelector("div#nextPieceWatch");
              toNext.style.display = "block";
              toNext.style.bottom = "-2vh"
              toNext.style.opacity = "1";
              toNext.style.transition = "1s";
            } else {
            var toNext = document.querySelector("div#nextPieceWatch");
              toNext.style.bottom = "-18vh"
              toNext.style.opacity = "0";
              toNext.style.transition = "1s";
            }
          }.bind(this),
          viewNextEnter: function() {
            var theContent = document.querySelector("div.HebronHarvest");
              theContent.style.opacity = "0";
              theContent.style.transition = "1s";
            var theNumberBazini = document.querySelector("div.panel > div:nth-child(5) > p.portfolioNumber");
              theNumberBazini.style.right = "-4%";
          }.bind(this),
          viewNextLeave: function() {
            var theContent = document.querySelector("div.HebronHarvest");
              theContent.style.opacity = "1";
              theContent.style.transition = "1s";
            var theNumberBazini = document.querySelector("div.panel > div:nth-child(5) > p.portfolioNumber");
              theNumberBazini.style.right = "49%";
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


  renderWatchConcept = () => {
    var WatchComponent = document.querySelector("div.HebronContent");
    WatchComponent.style.opacity = "1";
    WatchComponent.style.transition = "1.2s ease";
  };


componentDidMount() {
  var renderComponent = this.renderWatchConcept;
  setTimeout(function() {
    renderComponent();
  }, 750);
  /*var theNumber = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
    theNumber.style.left = "7.19em";*/
  document.querySelector("div.panel").addEventListener('mouseenter', this.contentFadeInOut.contentFadeOut, false);
  document.querySelector("div.panel").addEventListener('mouseleave', this.contentFadeInOut.contentFadeIn, false);
  document.querySelector("div.HebronHarvest").addEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPieceWatch").addEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPieceWatch").addEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
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
  document.querySelector("div.HebronHarvest").removeEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPieceWatch").removeEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPieceWatch").removeEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
  var toNext = document.querySelector("div#nextPieceWatch");
    toNext.style.bottom = "-18vh"
    toNext.style.opacity = "0";
    toNext.style.transition = "1s";
}

render() {
    return (<div className="HebronHarvest">
      <div className="ThePreviews">
        <div className="previewDesktopCopy" id="HarvestCopy">
          <img className="HHHomePreview" src={HHHomePreview} alt="HHHomePreview" />
        </div>
        <div className="previewMobileCopy" id="HarvestMobileCopy">
          <img className="HHMobile" src={HHMobile} alt="HHMobile" />
        </div>
      </div>
      <div className="HebronContent">
        <div className="projectTitle">
          <p className="projectContributor">SOLO PROJECT:</p>
          <p className="theTitle">HEBRON HARVEST BRANDING AND DEVELOPMENT</p>
        </div>
        <div className="About" id="HebronAbout">
          <h4>ABOUT</h4>
          <p className="aboutClient">Hebron Harvest curates and sells one of a kind vintage garments.</p>
          <p className="aboutBuild">The content creation, design, and development all echo simple, sustainable and femenine.
          </p>
        </div>
        <div className="colorScheme">
          <p>THE COLOR SCHEME</p>
          <img className="HHPalette" src={HHPalette} alt="HHPalette" />
        </div>
        <div className="brandDevelopment">
          <p>BRAND DEVELOPMENT AND CONTENT CREATION</p>
          <p>"thoughtfully curated vintage for everyday wear"</p>
        </div>
        <div className="contentCreation">
          <div className="inventory">
            <img className="shoe1" src={shoe1} alt="shoe1" />
            <img className="shoe2" src={shoe2} alt="shoe2" />
            <img className="shoe3" src={shoe3} alt="shoe3" />
          </div>
        </div>
        <div className="Stack">
          <p className="theStack">THE STACK</p>
          <p className="aboutStack">Online Store built with Shopify</p>
        </div>
        <div className="FinalHome">
        <p className="finalText">THE FINISHED PRODUCT</p>
        <p className="finalDesktop">Desktop Display</p>
        <p className="finalMobile">Mobile Display</p>
        <div className="desktopFinal">
          <img className="collections1" src={collections1} alt="collections1" />
          <img className="collections2" src={collections2} alt="collections2" />
        </div>
        <div className="mobileFinal">
          <img className="mobile1" src={mobile1} alt="mobile1" />
          <img className="mobile2" src={mobile2} alt="mobile2" />
        </div>
      </div>
      <div className="connectSection">
          <div className="connectIcons">
            <div className="toSite">
              <a href="https://hebronharvest.com" target="_blank" rel="noopener noreferrer" className="contactLink">
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


/*<video width="800" height="240" className="harvestVideo" alt="harvestVideo" autoPlay loop muted>
          <source src={harvestVideo} type="video/mp4"/>
        </video>*/
