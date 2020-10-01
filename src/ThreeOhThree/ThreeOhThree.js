import React, { Component } from 'react';
import './ThreeOhThree.css';
import './../Portfolio.css';
import ThreePalette from './ThreePalette.png';
import ThreeBGAnimation from './ThreeBGAnimation.png';
import MountainRange from './MountainRange.png';
import WFHomeDesktop from './WFHomeDesktop.png';
import WFHomeMobile from './WFHomeMobile.png';
import WFMerchMobile from './WFMerchMobile.png';
import WFNewsDesktop from './WFNewsDesktop.png';
import WFNewsMobile from './WFNewsMobile.png';
import WFSubNav from './WFSubNav.png';
import teko from './teko.png';
import robotoCondensed from './robotoCondensed.png';
import ThreeHost from './ThreeHost.png';
import ThreeCompete from './ThreeCompete.png';
import ThreeStream from './ThreeStream.png';
import ThreeBuild from './ThreeBuild.png';
import official from './official.png';
import HomeOne from './HomeOne.png';
import HomeTwo from './HomeTwo.png';
import HomeThree from './HomeThree.png';
import HomeFour from './HomeFour.png';
import HomeFive from './HomeFive.png';
import HomeSix from './HomeSix.png';
import HomeSeven from './HomeSeven.png';
import HomeEight from './HomeEight.png';
import MH1 from './MH1.png';
import MH2 from './MH2.png';
import MH3 from './MH3.png';
import MH4 from './MH4.jpg';
import MH5 from './MH5.jpg';
import MH6 from './MH6.jpg';
import MH7 from './MH7.jpg';
/*import globeBlack from './../globeBlack.png';
import githubBlack from './../githubBlack.png';
import dribbbleBlack from './../dribbbleBlack.png';*/
import ThreeHome from './ThreeHome.png';
import mobile303Home from './mobile303Home.PNG';
import web from './../webWhite.png';
import drib from './../dribbble.png';
import git from './../github.png';

export default class ThreeOhThree extends React.Component  {
  constructor(props){
        super(props);
        this.contentFadeInOut = {
          contentFadeOut: function() {
            if(this.props.currentComp === 1){
            var ThreeOhThreeDiv = document.querySelector("div.ThreeOhThree");
              ThreeOhThreeDiv.style.opacity = "0";
              ThreeOhThreeDiv.style.transition = "1.1s ease";
            var previewDesktop = document.querySelector("div#ThreeOhPreview");
              previewDesktop.style.display = "block";
            var previewMobile = document.querySelector("div#ThreeOhPreviewMobile");
              previewMobile.style.display = "block";
            var toNext = document.querySelector("div#nextPieceBazini");
              toNext.style.opacity = "0";
              toNext.style.transition = "1.1s ease";
            var theNumberBazini = document.querySelector("div.panel > div:nth-child(1) > p.portfolioNumber");
              theNumberBazini.style.right = "49%";
            };
          }.bind(this),
          contentFadeIn: function() {//bind function once
            if(this.props.currentComp === 1){
            var ThreeOhThreeDiv = document.querySelector("div.ThreeOhThree");
              ThreeOhThreeDiv.style.opacity = "1";
            var previewDesktop = document.querySelector("div#ThreeOhPreview");
              previewDesktop.style.display = "none";
            var previewMobile = document.querySelector("div#ThreeOhPreviewMobile");
              previewMobile.style.display = "none";
            };
            var toNext = document.querySelector("div#nextPieceBazini");
              toNext.style.opacity = "1";
              toNext.style.transition = "1s ease";
            var theNumberBazini = document.querySelector("div.panel > div:nth-child(1) > p.portfolioNumber");
              if(window.innerWidth > 1200) {
                theNumberBazini.style.right = "-4%";
              } else {
                theNumberBazini.style.right = "2%"
              }
          }.bind(this),
          toNextPiece: function(event) {
            var page = event.target;
            if (page.scrollHeight - page.scrollTop <= (page.clientHeight+160)) {
            var toNext = document.querySelector("div#nextPieceBazini");
              toNext.style.display = "block";
              toNext.style.bottom = "-2vh"
              toNext.style.opacity = "1";
              toNext.style.transition = "1s";
            } else {
            var toNext = document.querySelector("div#nextPieceBazini");
              toNext.style.bottom = "-18vh"
              toNext.style.opacity = "0";
              toNext.style.transition = "1s";
            }
          }.bind(this),
          viewNextEnter: function() {
            var theContent = document.querySelector("div.ThreeOhThree");
              theContent.style.opacity = "0";
              theContent.style.transition = "1s";
            var theNumberBazini = document.querySelector("div.panel > div:nth-child(2) > p.portfolioNumber");
              if(window.innerWidth > 1200) {
                theNumberBazini.style.right = "-4%";
              } else {
                theNumberBazini.style.right = "2%"
              }
          }.bind(this),
          viewNextLeave: function() {
            var theContent = document.querySelector("div.ThreeOhThree");
              theContent.style.opacity = "1";
              theContent.style.transition = "1s";
            var theNumberBazini = document.querySelector("div.panel > div:nth-child(2) > p.portfolioNumber");
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


  renderThreeOhThree = () => {
    var ThreeOhComponent = document.querySelector("div.ThreeOhThreeContent");
    ThreeOhComponent.style.opacity = "1";
    ThreeOhComponent.style.transition = "1.2s ease";
  };


componentDidMount() {
  var renderComponent = this.renderThreeOhThree;
  setTimeout(function() {
    renderComponent();
  }, 750);
  /*var theNumber = document.querySelector("div.panel > div:nth-child(2) > p.portfolioNumber");
    theNumber.style.left = "7.19em";*/
  document.querySelector("div.panel").addEventListener('mouseenter', this.contentFadeInOut.contentFadeOut, false);
  document.querySelector("div.panel").addEventListener('mouseleave', this.contentFadeInOut.contentFadeIn, false);
  document.querySelector("div.ThreeOhThree").addEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPieceBazini").addEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPieceBazini").addEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
  /*this.contentFadeInOut();*/
  document.querySelector("div.toSite").addEventListener('mouseenter', this.contentFadeInOut.viewSite, false);
  document.querySelector("div.toSite").addEventListener('mouseleave', this.contentFadeInOut.hideSite, false);
  document.querySelector("div.toGithub").addEventListener('mouseenter', this.contentFadeInOut.viewSS, false);
  document.querySelector("div.toGithub").addEventListener('mouseleave', this.contentFadeInOut.hideSS, false);
  document.querySelector("div.toDribbble").addEventListener('mouseenter', this.contentFadeInOut.viewDesigns, false);
  document.querySelector("div.toDribbble").addEventListener('mouseleave', this.contentFadeInOut.hideDesigns, false);
}

componentWillUnmount() {
  /*var theNumber = document.querySelector("div.panel > div:nth-child(2) > p.portfolioNumber");
    theNumber.style.left = "3em";*/
  document.querySelector("div.panel").removeEventListener('mouseenter', this.contentFadeInOut.contentFadeOut, false);
  document.querySelector("div.panel").removeEventListener('mouseleave', this.contentFadeInOut.contentFadeIn, false);
  document.querySelector("div.ThreeOhThree").removeEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPieceBazini").removeEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPieceBazini").removeEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
  var toNext = document.querySelector("div#nextPieceBazini");
    toNext.style.bottom = "-18vh"
    toNext.style.opacity = "0";
    toNext.style.transition = "1s";
}

render() {
    return (<div className="ThreeOhThree">
      <div className="ThePreviews">
        <div className="previewDesktopCopy" id="ThreeOhPreviewCopy">
          <img className="ThreeHome" src={ThreeHome} alt="ThreeHome" />
        </div>
        <div className="previewMobileCopy" id="ThreeOhPreviewMobileCopy">
          <img className="mobile303Home" src={mobile303Home} alt="mobile303Home" />
        </div>
      </div>
      <div className="ThreeOhThreeContent">
      <div className="projectTitle">
      <p className="projectContributor">SOLO PROJECT:</p>
        <p className="theTitle">303 ESPORTS WEBSITE DESIGN AND DEVELOPMENT</p>

      </div>
      <div className="About" id="ThreeOhAbout">
        <h4>ABOUT</h4>
        <p className="aboutClient">303 ESPORTS is a rapidly growing gaming community that
        hosts and competes at the highest caliber.</p>
        <p className="aboutBuild">From design to development this web application reinforces that identity.
        </p>
      </div>
      <div className="Layout">
        <p className="wireFrameText">THE WIREFRAMES</p>
        <p className="intuitiveText">Intuitive Navigation</p>
        <p className="responsiveText">Responsive Layout</p>
        <div className="desktopWireframes">
          <div><img className="WFHomeDesktop" src={WFHomeDesktop} alt="WFHomeDesktop" /></div>
          <div><img className="WFSubNav" src={WFSubNav} alt="WFSubNav" /></div>
          <div><img className="WFNewsDesktop" src={WFNewsDesktop} alt="WFNewsDesktop" /></div>
        </div>
        <div className="mobileWireframes">
          <div><img className="WFNewsMobile" src={WFNewsMobile} alt="WFNewsMobile" /></div>
          <div><img className="WFHomeMobile" src={WFHomeMobile} alt="WFHomeMobile" /></div>
          <div><img className="WFMerchMobile" src={WFMerchMobile} alt="WFMerchMobile" /></div>
        </div>
      </div>
      <div className="Text">
        <p className="typefaceText">THE TYPEFACE</p>
        <p className="fontsText">Bold Fonts</p>
        <p className="copyText">Impactful Copy</p>
        <div className="Copy">
        <img className="teko" src={teko} alt="teko" />
        <img className="robotoCondensed" src={robotoCondensed} alt="robotoCondensed" />
        </div>
        <div className="Font">
          <img className="ThreeHost" src={ThreeHost} alt="ThreeHost" />
          <img className="ThreeCompete" src={ThreeCompete} alt="ThreeCompete" />
          <img className="ThreeStream" src={ThreeStream} alt="ThreeStream" />
          <img className="ThreeBuild" src={ThreeBuild} alt="ThreeBuild" />
        </div>
      </div>
      <div className="Colors">
        <p className="colorScheme">THE COLORSCHEME</p>
        <p className="colorText">Vivid web colors inspired by the 303 ESPORTS logo</p>
        <img className="official" src={official} alt="official" />
        <img className="ThreePalette" src={ThreePalette} alt="ThreePalette" />
      </div>
      <div className="Assets">
        <p className="theAssets">THE CUSTOM ASSETS</p>
        <p className="stillAssets">Still Custom Design</p>
        <p className="animatedAssets">Animated Background Image</p>
        <div className="shards">
          <div className="shardsStill">
            <img className="ThreeBGAnimation" src={ThreeBGAnimation} alt="ThreeBGAnimation" />
          </div>
          <div className="shardsScroll">
          </div>
        </div>
        <p className="footerAsset">Custom Illustrated Footer</p>
        <div className="illustration">
          <img className="MountainRange" src={MountainRange} alt="MountainRange" />
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
          <img className="HomeOne" src={HomeOne} alt="HomeOne" />
          <img className="HomeTwo" src={HomeTwo} alt="HomeTwo" />
          <img className="HomeThree" src={HomeThree} alt="HomeThree" />
          <img className="HomeFour" src={HomeFour} alt="HomeFour" />
          <img className="HomeFive" src={HomeFive} alt="HomeFive" />
          <img className="HomeSix" src={HomeSix} alt="HomeSix" />
          <img className="HomeSeven" src={HomeSeven} alt="HomeSeven" />
          <img className="HomeEight" src={HomeEight} alt="HomeEight" />
        </div>
        <div className="mobileFinal">
          <img className="MH1" src={MH1} alt="MH1" />
          <img className="MH2" src={MH2} alt="MH2" />
          <img className="MH3" src={MH3} alt="MH3" />
          <img className="MH4" src={MH4} alt="MH4" />
          <img className="MH5" src={MH5} alt="MH5" />
          <img className="MH6" src={MH6} alt="MH6" />
          <img className="MH7" src={MH7} alt="MH7" />
        </div>
      </div>
      <div className="connectSection">
          <div className="connectIcons">
            <div className="toSite">
              <a href="https://303esports.com" target="_blank" rel="noopener noreferrer" className="contactLink">
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



/*      <div className="Connect">
        <div className="globe"><a href="https://303esports.com" target="_blank" rel="noopener noreferrer"><p>Visit Site</p><img className="globeBlack" src={globeBlack} alt="globeBlack" /></a></div>
        <div className="ball"><a href="https://github.com/brooklynebkbk/303ESPORTS" target="_blank" rel="noopener noreferrer"><p>View Stylesheets</p><img className="githubBlack" src={githubBlack} alt="githubBlack" /></a></div>
        <div className="cat"><a href="https://dribbble.com/brooklynefinni/about" target="_blank" rel="noopener noreferrer"><p>View Designs</p><img className="dribbbleBlack" src={dribbbleBlack} alt="dribbbleBlack" /></a></div>
      </div>*/
