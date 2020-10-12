import React, { Component } from 'react';
import './Portfolio.css';
import ThreeOhThree from './ThreeOhThree/ThreeOhThree.js';
import BaziniHopp from './BaziniHopp/BaziniHopp.js';
import AnimatedStructure from './AnimatedStructure/AnimatedStructure.js';
import FLShotUsers from './FLShotUsers/FLShotUsers.js';
import HebronHarvest from './HebronHarvest/HebronHarvest.js';
import WatchAConcept from './WatchConcept/WatchAConcept.js';
import Gallery from './Gallery.js';
import Contact from './Contact.js';
import galleryDesktop from './galleryDesktop.mov';
import ThreeHome from './ThreeOhThree/ThreeHome.png';
import mobile303Home from './ThreeOhThree/mobile303Home.PNG';
import BaziniHoppHome from './BaziniHopp/BaziniHopp.mov';
import baziniHoppMobile from './BaziniHopp/baziniHoppMobile.PNG';
import StructureAnimation from './AnimatedStructure/architectureAnimation.mov';
import structureMobile from './AnimatedStructure/structureMobile.png';
import FLSFooter from './FLShotUsers/FLSFooter.png';
import footerMobile from './FLShotUsers/footerMobile.PNG';
import HHHomePreview from './HebronHarvest/HHHomePreview.png'
import HHMobile from './HebronHarvest/HHMobile.PNG';
import watchNavigation from './WatchConcept/watchNavigation.mov';
import WatchMobile from './WatchConcept/watchMobile.png';
import mail from './email.png';
import drib from './dribbble.png';
import git from './github.png';
import insta from './insta.png';
import linked from './linkedIn.png';
import baselayer from './baselayer.png';
import leafOne from './leafOne.png';
import leafTwo from './leafTwo.png';
import leafThree from './leafThree.png';
import leafFour from './leafFour.png';
import leafFive from './leafFive.png';
import leafSix from './leafSix.png';

export default class Portfolio extends React.Component  {

  constructor(props){
    super(props);
    const me = this;
    this.state = {
      currentDisplay: 0,
      visbleNavigation: false,
      menuItem: 0,
      activeColorCodes: ["#0408DC", "#CCFA4C", "#DEF2F8"]
    };

    this.Navigation = {
      showNavigation: function() {
        var width = window.innerWidth;
        if (width > 1200){
        var portfolioNav = document.querySelector("div.portfolioMenu");
        portfolioNav.style.transform = "translateX(32.8vw)";
        portfolioNav.style.transition = "1.1s ease-in-out";
        var floatingPlant = document.querySelector("div.floatingPlant");
        floatingPlant.style.opacity = "0";
        floatingPlant.style.marginTop = "36vh";
        floatingPlant.style.transition = "1.1s .2s ease-in-out";
        var previewWatch = document.querySelector("div#WatchPreview");
        previewWatch.style.display = "block";
        var previewWatchMobile = document.querySelector("div#WatchPreviewMobile");
        previewWatchMobile.style.display = "block";
        var previewHebron = document.querySelector("div#HebronPreview");
        previewHebron.style.display = "block";
        var previewHebronMobile = document.querySelector("div#HebronPreviewMobile");
        previewHebronMobile.style.display = "block";
        var previewFLS = document.querySelector("div#FLShotsPreview");
        previewFLS.style.display = "block";
        var previewFLSMobile = document.querySelector("div#FLPreviewMobile");
        previewFLSMobile.style.display = "block";
        var previewStructure = document.querySelector("div#StructurePreview");
        previewStructure.style.display = "block";
        var previewStructureMobile = document.querySelector("div#StructurePreviewMobile");
        previewStructureMobile.style.display = "block";
        var previewBazini = document.querySelector("div#BaziniPreview");
        previewBazini.style.display = "block";
        var previewBaziniMobile = document.querySelector("div#BaziniPreviewMobile");
        previewBaziniMobile.style.display = "block";
        var previewThree = document.querySelector("div#ThreeOhPreview");
        previewThree.style.display = "block";
        var previewThreeMobile = document.querySelector("div#ThreeOhPreviewMobile");
        previewThreeMobile.style.display = "block";
        /*var previewGallery = document.querySelector("div#GalleryPreview");
        previewGallery.style.display = "block";*/
      } else {
        var panel = document.querySelector("div.panel");
        panel.style.width= "95vw";
        panel.style.transition = "1.1s ease-in-out";
        var portfolioNav = document.querySelector("div.portfolioMenu");
        portfolioNav.style.width = "90vw";
        portfolioNav.style.transform = "translateX(32.8vw)";
        portfolioNav.style.transition = "1.1s ease-in-out";
      }

      },
      hideNavigation: function () {
        if(window.innerWidth > 1200){
          var portfolioNav = document.querySelector("div.portfolioMenu");
          portfolioNav.style.transform = "translateX(2vw)";
        } else {
          var portfolioNav = document.querySelector("div.portfolioMenu");
          portfolioNav.style.transform = "translateX(-62vw)";
        }
          portfolioNav.style.transition = "1.1s ease-in-out";
          var previewWatch = document.querySelector("div#WatchPreview");
          previewWatch.style.display = "none";
          var previewWatchMobile = document.querySelector("div#WatchPreviewMobile");
          previewWatchMobile.style.display = "none";
          var previewHebron = document.querySelector("div#HebronPreview");
          previewHebron.style.display = "none";
          var previewHebronMobile = document.querySelector("div#HebronPreviewMobile");
          previewHebronMobile.style.display = "none";
          var previewFLS = document.querySelector("div#FLShotsPreview");
          previewFLS.style.display = "none";
          var previewFLSMobile = document.querySelector("div#FLPreviewMobile");
          previewFLSMobile.style.display = "none";
          var previewStructure = document.querySelector("div#StructurePreview");
          previewStructure.style.display = "none";
          var previewStructureMobile = document.querySelector("div#StructurePreviewMobile");
          previewStructureMobile.style.display = "none";
          var previewBazini = document.querySelector("div#BaziniPreview");
          previewBazini.style.display = "none";
          var previewBaziniMobile = document.querySelector("div#BaziniPreviewMobile");
          previewBaziniMobile.style.display = "none";
          var previewThree = document.querySelector("div#ThreeOhPreview");
          previewThree.style.display= "none";
          var previewThreeMobile = document.querySelector("div#ThreeOhPreviewMobile");
          previewThreeMobile.style.display = "none";
          /*var previewGallery = document.querySelector("div#GalleryPreview");
          previewGallery.style.display = "none";*/
      },
      hidePreview: function () {
          var floatingPlant = document.querySelector("div.floatingPlant");
            floatingPlant.style.opacity = "1";
            floatingPlant.style.marginLeft = "0vw";
            floatingPlant.style.marginTop = "0vh";
            floatingPlant.style.transition = "1.1s .2s ease-in-out";
          var previewP1 = document.querySelector("div#ThreeOhPreview");
            previewP1.style.bottom = "-10vw";
            previewP1.style.opacity = "0";
            previewP1.style.transition = "1s ease";
          var previewP1Mobile = document.querySelector("div#ThreeOhPreviewMobile");
            previewP1Mobile.style.top = "-20vw";
            previewP1Mobile.style.opacity = "0";
            previewP1Mobile.style.transition = "1s ease";
          var previewP2 = document.querySelector("div#BaziniPreview");
            previewP2.style.bottom = "-10vw";
            previewP2.style.opacity = "0";
            previewP2.style.transition = "1s ease";
          var previewP2Mobile = document.querySelector("div#BaziniPreviewMobile");
            previewP2Mobile.style.top = "-20vw";
            previewP2Mobile.style.opacity = "0";
            previewP2Mobile.style.transition = "1s ease";
          var previewP3 = document.querySelector("div#StructurePreview");
            previewP3.style.bottom = "-10vw";
            previewP3.style.opacity = "0";
            previewP3.style.transition = "1s ease";
          var previewP3Mobile = document.querySelector("div#StructurePreviewMobile");
            previewP3Mobile.style.top = "-20vw";
            previewP3Mobile.style.opacity = "0";
            previewP3Mobile.style.transition = "1s ease";
          var previewP4 = document.querySelector("div#FLShotsPreview");
            previewP4.style.bottom = "-10vw";
            previewP4.style.opacity = "0";
            previewP4.style.transition = "1s ease";
          var previewP4Mobile = document.querySelector("div#FLPreviewMobile");
            previewP4Mobile.style.top = "-20vw";
            previewP4Mobile.style.opacity = "0";
            previewP4Mobile.style.transition = "1s ease";
          var previewP5 = document.querySelector("div#HebronPreview");
            previewP5.style.bottom = "-10vw";
            previewP5.style.opacity = "0";
            previewP5.style.transition = "1s ease";
          var previewP5Mobile = document.querySelector("div#HebronPreviewMobile");
            previewP5Mobile.style.top = "-20vw";
            previewP5Mobile.style.opacity = "0";
            previewP5Mobile.style.transition = "1s ease";
          var previewP6 = document.querySelector("div#WatchPreview");
            previewP6.style.bottom = "-10vw";
            previewP6.style.opacity = "0";
            previewP6.style.transition = "1s ease";
          var previewP6Mobile = document.querySelector("div#WatchPreviewMobile");
            previewP6Mobile.style.top = "-20vw";
            previewP6Mobile.style.opacity = "0";
            previewP6Mobile.style.transition = "1s ease";
      },
      mobileScroll: function(event) {
        if(window.innerWidth< 640){
          var page = event.target;
          if (page.scrollTop <= 40) {
            var floatingPlant = document.querySelector("div.floatingPlant");
              floatingPlant.style.opacity = "1";
              floatingPlant.style.marginLeft = "0vw";
              floatingPlant.style.marginTop = "26vh";
              floatingPlant.style.transition = "1s ease-in-out";
          } else {
            var floatingPlant = document.querySelector("div.floatingPlant");
              floatingPlant.style.opacity = "0";
              floatingPlant.style.marginLeft = "0vw";
              floatingPlant.style.marginTop = "0vh";
              floatingPlant.style.transition = "1s ease-in-out";
        }
      }
      }.bind(this),
      newColors: [function() {
          var circle = document.querySelector("div.contactIcons > div:nth-child(1)");
          circle.style.backgroundColor = me.state.activeColorCodes[1];
      }, function() {
          var circle = document.querySelector("div.contactIcons > div:nth-child(2)");
          circle.style.backgroundColor = me.state.activeColorCodes[1];
      }, function() {
          var circle = document.querySelector("div.contactIcons > div:nth-child(3)");
          circle.style.backgroundColor = me.state.activeColorCodes[1];
      }, function() {
          var circle = document.querySelector("div.contactIcons > div:nth-child(4)");
          circle.style.backgroundColor = me.state.activeColorCodes[1];
      }, function() {
          var circle = document.querySelector("div.contactIcons > div:nth-child(5)");
          circle.style.backgroundColor = me.state.activeColorCodes[1];
      }],
      oldColors: [function() {
          var circle = document.querySelector("div.contactIcons > div:nth-child(1)");
          circle.style.backgroundColor = me.state.activeColorCodes[0];
      }, function() {
          var circle = document.querySelector("div.contactIcons > div:nth-child(2)");
          circle.style.backgroundColor = me.state.activeColorCodes[0];
      }, function() {
          var circle = document.querySelector("div.contactIcons > div:nth-child(3)");
          circle.style.backgroundColor = me.state.activeColorCodes[0];
      }, function() {
          var circle = document.querySelector("div.contactIcons > div:nth-child(4)");
          circle.style.backgroundColor = me.state.activeColorCodes[0];
      }, function() {
          var circle = document.querySelector("div.contactIcons > div:nth-child(5)");
          circle.style.backgroundColor = me.state.activeColorCodes[0];
      },],
      previewPieceOne: [1, 'div#ThreeOhPreview', 'div#ThreeOhPreviewMobile', '#DBE6E3', '#061A1E', '#F29121', '#ADBDB6'],
      previewPieceTwo: [2, 'div#BaziniPreview', 'div#BaziniPreviewMobile', '#E8ECED', '#414C62', '#EC7A6F', '#E8ECED'],
      previewPieceThree: [3, 'div#StructurePreview', 'div#StructurePreviewMobile', '#E5EBEA', '#0B191F', '#4C5E5C', '#E5EBEA'],
      previewPieceFour: [4, 'div#FLShotsPreview', 'div#FLPreviewMobile', '#DAF6FB', '#084D67', '#52DCF4', '#DAF6FB'],
      previewPieceFive: [5, 'div#HebronPreview', 'div#HebronPreviewMobile', '#F9F2DC', '#39140E', '#304A44', '#F9F2DC'],
      previewPieceSix: [6, 'div#WatchPreview', 'div#WatchPreviewMobile', '#E8E7E0', '#264B48', '#8DD69D', '#E8E7E0'],
      previewProjects: [function(PortfolioPieceKeys) {
        me.setState({menuItem: PortfolioPieceKeys[0]});
          var preview = document.querySelector(PortfolioPieceKeys[1]);
            preview.style.bottom = "36%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var previewMobile = document.querySelector(PortfolioPieceKeys[2]);
            previewMobile.style.top = "46%";
            previewMobile.style.opacity = "1";
            previewMobile.style.transition = "1.2s ease";
          var plant = document.querySelector("div.floatingPlant");
            plant.style.marginTop = "46vh";
            plant.style.opacity = "0";
            plant.style.transition = "1s ease-in-out";
          var app = document.querySelector(".App");
            app.style.transition = ".5s ease";
            app.style.backgroundColor = PortfolioPieceKeys[3];
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.transition = ".5s ease";
            name1.style.color = PortfolioPieceKeys[4];
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.transition = ".5s ease";
            name2.style.color = PortfolioPieceKeys[4];
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.transition = ".5s ease";
            portfolioTab.style.backgroundColor = PortfolioPieceKeys[4];
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.transition = ".5s ease";
              theNumber.style.color = PortfolioPieceKeys[5];
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.transition = ".5s ease";
              thePiece.style.color = PortfolioPieceKeys[6];
          }
          var panel = document.querySelector("div.panel");
            panel.style.transition = ".5s ease";
            panel.style.backgroundColor = PortfolioPieceKeys[4];
          var theNumber = document.querySelector("div.panel > div:nth-child("+PortfolioPieceKeys[0]+") > p.portfolioNumber");
            if(window.innerWidth > 1200 || window.innerWidth < 420) {
              theNumber.style.right = "-4%";
              } else {
                theNumber.style.right = "2%";
              }
        },
        function() {
          me.setState({menuItem: 7});
          var plant = document.querySelector("div.floatingPlant");
            plant.style.marginTop = "46vh";
            plant.style.opacity = "0";
            plant.style.transition = "1s ease-in-out";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#DEF2F8";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#0408DC";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#0408DC";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#0408DC";
            portfolioTab.style.transition = ".5s ease";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.color = "#008DD5";
              theNumber.style.transition = ".5s ease";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.color = "#99FF00";
              thePiece.style.transition = ".5s ease";
          }
          var panel = document.querySelector("div.panel");
            panel.style.backgroundColor = "#0408DC";
            panel.style.transition = ".5s ease";
        },
        function() {
          me.setState({menuItem: 0});
          var floatingPlant = document.querySelector("div.floatingPlant");
            floatingPlant.style.opacity = "1";
            floatingPlant.style.marginLeft = "0vw";
            floatingPlant.style.marginTop = "0vh";
            floatingPlant.style.transition = "1.1s .2s ease-in-out";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#DEF2F8";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#0408DC";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#0408DC";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#0408DC";
            portfolioTab.style.transition = ".5s ease";
          /*var gallery = document.querySelector("#toGallery > p");
            gallery.style.color = "#99FF00";
            gallery.style.transition = ".5s ease";*/
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.color = "#008DD5";
              theNumber.style.transition = ".5s ease";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.color = "#99FF00";
              thePiece.style.transition = ".5s ease";
          }
          var panel = document.querySelector("div.panel");
            panel.style.backgroundColor = "#0408DC";
            panel.style.transition = ".5s ease";
        }],
        nextProject: [function(NextPieceKeys) {
          var nextPiece = NextPieceKeys[0];
          var currentPiece = --nextPiece;
          var preview = document.querySelector(NextPieceKeys[1]);
            preview.style.display = "block";
            preview.style.bottom = "30%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var previewMobile = document.querySelector(NextPieceKeys[2]);
            previewMobile.style.display = "block";
            previewMobile.style.top = "40%";
            previewMobile.style.opacity = "1";
            previewMobile.style.transition = "1.2s ease";
          var app = document.querySelector(".App");
            app.style.transition = ".5s ease";
            app.style.backgroundColor = NextPieceKeys[3];
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.transition = ".5s ease";
            name1.style.color = NextPieceKeys[4];
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.transition = ".5s ease";
            name2.style.color = NextPieceKeys[4];
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.transition = ".5s ease";
            portfolioTab.style.backgroundColor = NextPieceKeys[4];
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.transition = ".5s ease";
              theNumber.style.color = NextPieceKeys[5];
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.transition = ".5s ease";
              thePiece.style.color = NextPieceKeys[6];
          }
          var panel = document.querySelector("div.panel");
            panel.style.transition = ".5s ease";
            panel.style.backgroundColor = NextPieceKeys[4];
          var theNumber = document.querySelector("div.panel > div:nth-child("+currentPiece+") > p.portfolioNumber");
            theNumber.style.right = "49%";
        },
        function() {
          var floatingPlant = document.querySelector("div.floatingPlant");
            floatingPlant.style.opacity = "1";
            floatingPlant.style.marginLeft = "0vw";
            floatingPlant.style.marginTop = "0vh";
            floatingPlant.style.transition = ".8s .1s ease-in-out";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#DEF2F8";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#0408DC";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#0408DC";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#0408DC";
            portfolioTab.style.transition = ".5s ease";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#DEF2F8";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#0408DC";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#0408DC";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#0408DC";
            portfolioTab.style.transition = ".5s ease";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.color = "#008DD5";
              theNumber.style.transition = ".5s ease";
              theNumber.style.right = "49%";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.color = "#99FF00";
              thePiece.style.transition = ".5s ease";
          }
          var panel = document.querySelector("div.panel");
            panel.style.backgroundColor = "#0408DC";
            panel.style.transition = ".5s ease";
        }]
    };
  };

  renderLanding = () => {
    var displayBefore = this.state.currentDisplay;
    for (let i = 1; i < 7; i++) {
      var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
        theNumber.style.right = "49%";
        theNumber.style.transition = ".5s ease";
    }
    if(displayBefore === 0) {
      return;
    } else {
      this.setState({currentDisplay: 0});
      this.setState({activeColorCodes: ["#0408DC", "#CCFA4C", "#DEF2F8"]});
    }

  };

  renderSelectedPortfolioPiece = (PPKeys) => {
    this.Navigation.hideNavigation();
    var displayBefore = this.state.currentDisplay;
    if(displayBefore === PPKeys[0]) {
      return;
    } else {
      this.setState({currentDisplay: PPKeys[0]});
      this.setState({activeColorCodes: [PPKeys[4], PPKeys[5], PPKeys[3]]});
    }
    setTimeout(function(){
      var preview = document.querySelector(PPKeys[1]);
          preview.style.display = "none";
      var previewMobile = document.querySelector(PPKeys[2]);
          previewMobile.style.display = "none";
    }, 2500);

  };

  leavePortfolioSection = (PPKeys) => {
    var preview = document.querySelector(PPKeys[1]);
    preview.style.bottom = "-10vw";
    preview.style.opacity = "0";
    preview.style.transition = "1s ease";
    var previewMobile = document.querySelector(PPKeys[2]);
    previewMobile.style.top = "-20vw";
    previewMobile.style.opacity = "0";
    previewMobile.style.transition = "1s ease";
    var theNumber = document.querySelector("div.panel > div:nth-child("+PPKeys[0]+") > p.portfolioNumber");
    theNumber.style.right = "49%";
  };

  portfolioHover = () =>{
    var menu = document.querySelector("div.portfolioMenu");
    menu.style.opacity = "1";
    menu.style.transition = "1.2s ease-in-out";
    document.querySelector("div.portfolioTab").addEventListener("mouseenter", this.Navigation.showNavigation);
    if(window.innerWidth< 640){
      for (let i = 1; i < 17; i++) {
        var previews = document.querySelector("div.Portfolio > div:nth-of-type("+i+")");
          previews.style.opacity = "1";
          previews.style.transition = "1.6s .1s ease";
      }
      } else {
        return;
      }

  };


  nameClicked = () => {
    document.querySelector("div.Contact").addEventListener("click", this.renderLanding);
    document.querySelector("div.Contact").addEventListener("click", this.Navigation.previewProjects[2]);
    document.querySelector("div.Contact").addEventListener("click", this.Navigation.hidePreview);
  };

  setToSelected = () => {
    var toNext = document.querySelector("div#nextPiece303");
      toNext.style.bottom = "-18vh"
      toNext.style.opacity = "0";
      toNext.style.transition = "1s";
    if(this.state.currentDisplay === 0){
      this.Navigation.previewProjects[2]();
      this.Navigation.hideNavigation();
    }else if(this.state.currentDisplay === 1){
      this.Navigation.previewProjects[0](this.Navigation.previewPieceOne);
      this.Navigation.hideNavigation();
    }else if(this.state.currentDisplay === 2){
      this.Navigation.previewProjects[0](this.Navigation.previewPieceTwo);
      this.Navigation.hideNavigation();
    }else if(this.state.currentDisplay === 3){
      this.Navigation.previewProjects[0](this.Navigation.previewPieceThree);
      this.Navigation.hideNavigation();
    }else if(this.state.currentDisplay === 4){
      this.Navigation.previewProjects[0](this.Navigation.previewPieceFour);
      this.Navigation.hideNavigation();
    }else if(this.state.currentDisplay === 5){
      this.Navigation.previewProjects[0](this.Navigation.previewPieceFive);
      this.Navigation.hideNavigation();
    }else if(this.state.currentDisplay === 6){
      this.Navigation.previewProjects[0](this.Navigation.previewPieceSix);
      this.Navigation.hideNavigation();
    } else{
      this.Navigation.previewProjects[1]();
      this.Navigation.hideNavigation();
    }
  };






componentDidMount() {
  var self = this;
  console.log(this.Navigation.previewPieceOne);
  var activatePortfolioHover = this.portfolioHover;
  setTimeout(function() {
    activatePortfolioHover();
  }, 7000);
  this.nameClicked();
  document.querySelector("div#nextPieceBazini").addEventListener('mouseenter', function() {
    self.Navigation.nextProject[0](self.Navigation.previewPieceTwo);
  });
  document.querySelector("div#nextPieceStructure").addEventListener('mouseenter', function() {
    self.Navigation.nextProject[0](self.Navigation.previewPieceThree);
  });
  document.querySelector("div#nextPieceFLShotUsers").addEventListener('mouseenter', function() {
    self.Navigation.nextProject[0](self.Navigation.previewPieceFour);
  });
  document.querySelector("div#nextPieceHebron").addEventListener('mouseenter', function() {
    self.Navigation.nextProject[0](self.Navigation.previewPieceFive);
  });
  document.querySelector("div#nextPieceWatch").addEventListener('mouseenter', function() {
    self.Navigation.nextProject[0](self.Navigation.previewPieceSix);
  });
  document.querySelector("div#nextPieceHome").addEventListener('mouseenter', this.Navigation.nextProject[1]);
}


render() {
    return (<div className="Portfolio">
      <div className="floatingPlant">
          <img className="baselayer" src={baselayer} alt="baselayer" />
          <img className="leafOne" src={leafOne} alt="leafOne" />
          <img className="leafTwo" src={leafTwo} alt="leafTwo" />
          <img className="leafThree" src={leafThree} alt="leafThree" />
          <img className="leafFour" src={leafFour} alt="leafFour" />
          <img className="leafFive" src={leafFive} alt="leafFive" />
          <img className="leafSix" src={leafSix} alt="leafSix" />
          <div className="plantShadow"></div>
      </div>
      <div className="portfolioArch">
        <span className="char1">p</span>
        <span className="char2">o</span>
        <span className="char3">r</span>
        <span className="char4">t</span>
        <span className="char5">f</span>
        <span className="char6">o</span>
        <span className="char7">l</span>
        <span className="char8">i</span>
        <span className="char9">o</span>
      </div>
      { this.state.currentDisplay === 1 && <ThreeOhThree currentComp={this.state.currentDisplay}/> }
      { this.state.currentDisplay === 2 && <BaziniHopp currentComp={this.state.currentDisplay}/> }
      { this.state.currentDisplay === 3 && <AnimatedStructure currentComp={this.state.currentDisplay}/> }
      { this.state.currentDisplay === 4 && <FLShotUsers currentComp={this.state.currentDisplay}/> }
      { this.state.currentDisplay === 5 && <HebronHarvest currentComp={this.state.currentDisplay}/> }
      { this.state.currentDisplay === 6 && <WatchAConcept currentComp={this.state.currentDisplay}/> }
      <div className="portfolioMenu" onMouseEnter={()=>this.Navigation.hidePreview()} onMouseLeave={()=> this.setToSelected()}>
      <div className="portfolioTab">
        <p>{this.state.currentDisplay}</p>
      </div>
      <div className="panel">
      <div className="portfolioSection" id="toThreeOhThree"
          onClick={()=> this.renderSelectedPortfolioPiece(this.Navigation.previewPieceOne)}
          onMouseEnter={()=> this.Navigation.previewProjects[0](this.Navigation.previewPieceOne)}
          onMouseLeave={()=> this.leavePortfolioSection(this.Navigation.previewPieceOne)}>
        <p className="portfolioNumber">1</p><p className="portfolioPiece">303 ESPORTS</p>
        <p className="viewProject">View Project</p>
      </div>
      <div className="portfolioSection" id="toBaziniHopp"
          onClick={()=> this.renderSelectedPortfolioPiece(this.Navigation.previewPieceTwo)}
          onMouseEnter={()=> this.Navigation.previewProjects[0](this.Navigation.previewPieceTwo)}
          onMouseLeave={()=> this.leavePortfolioSection(this.Navigation.previewPieceTwo)}>
        <p className="portfolioNumber">2</p><p className="portfolioPiece">BAZINIHOPP</p>
        <p className="viewProject">View Project</p>
      </div>
      <div className="portfolioSection" id="toWatchAConcept"
          onClick={()=> this.renderSelectedPortfolioPiece(this.Navigation.previewPieceThree)}
          onMouseEnter={()=> this.Navigation.previewProjects[0](this.Navigation.previewPieceThree)}
          onMouseLeave={()=> this.leavePortfolioSection(this.Navigation.previewPieceThree)}>
        <p className="portfolioNumber">3</p><p className="portfolioPiece">STRUCTURE ANIMATION</p>
        <p className="viewProject">View Project</p>
      </div>
      <div className="portfolioSection" id="toFLShotUsers"
          onClick={()=> this.renderSelectedPortfolioPiece(this.Navigation.previewPieceFour)}
          onMouseEnter={()=> this.Navigation.previewProjects[0](this.Navigation.previewPieceFour)}
          onMouseLeave={()=> this.leavePortfolioSection(this.Navigation.previewPieceFour)}>
        <p className="portfolioNumber">4</p><p className="portfolioPiece">FL SHOT USERS</p>
        <p className="viewProject">View Project</p>
      </div>
      <div className="portfolioSection" id="toHebronHarvest"
          onClick={()=> this.renderSelectedPortfolioPiece(this.Navigation.previewPieceFive)}
          onMouseEnter={()=> this.Navigation.previewProjects[0](this.Navigation.previewPieceFive)}
          onMouseLeave={()=> this.leavePortfolioSection(this.Navigation.previewPieceFive)}>
        <p className="portfolioNumber">5</p><p className="portfolioPiece">HEBRON HARVEST</p>
        <p className="viewProject">View Project</p>
      </div>
      <div className="portfolioSection" id="toWatchAConcept"
          onClick={()=> this.renderSelectedPortfolioPiece(this.Navigation.previewPieceSix)}
          onMouseEnter={()=> this.Navigation.previewProjects[0](this.Navigation.previewPieceSix)}
          onMouseLeave={()=> this.leavePortfolioSection(this.Navigation.previewPieceSix)}>
        <p className="portfolioNumber">6</p><p className="portfolioPiece">WATCH: A CONCEPT</p>
        <p className="viewProject">View Project</p>
      </div>
      </div>
      </div>
      <Contact currentDisplay={this.state.currentDisplay} colorCode={this.state.activeColorCodes} newColorsDark={this.Navigation.newColors} oldColorsBright={this.Navigation.oldColors}/>
      <div className="previewDesktop" id="ThreeOhPreview">
        <a href="https://303esports.com" target="_blank" rel="noopener noreferrer">
          <img className="ThreeHome" src={ThreeHome} alt="ThreeHome" />
        </a>
      </div>
      <div className="previewMobile" id="ThreeOhPreviewMobile">
        <a href="https://303esports.com" target="_blank" rel="noopener noreferrer">
          <img className="mobile303Home" src={mobile303Home} alt="mobile303Home" />
        </a>
      </div>
      <div className="previewDesktop" id="BaziniPreview">
        <a href="https://bazinihopp.com" target="_blank" rel="noopener noreferrer">
          <video className="BaziniHoppHome" alt="BaziniHoppHome" autoPlay loop muted>
            <source src={BaziniHoppHome} type="video/mp4"/>
          </video>
        </a>
      </div>
      <div className="previewMobile" id="BaziniPreviewMobile">
        <a href="https://bazinihopp.com" target="_blank" rel="noopener noreferrer">
          <img className="baziniHoppMobile" src={baziniHoppMobile} alt="baziniHoppMobile" />
        </a>
      </div>
      <div className="previewDesktop" id="StructurePreview">
        <a href="https://thawing-depths-01252.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <video className="StructureAnimation" alt="StructureAnimation" autoPlay loop muted>
            <source src={StructureAnimation} type="video/mp4"/>
          </video>
        </a>
      </div>
      <div className="previewMobile" id="StructurePreviewMobile">
        <a href="https://thawing-depths-01252.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <img className="structureMobile" src={structureMobile} alt="structureMobile" />
        </a>
      </div>
      <div className="previewDesktop" id="FLShotsPreview">
        <a href="https://flshotusers.com" target="_blank" rel="noopener noreferrer">
          <img className="FLSFooter" src={FLSFooter} alt="FLSFooter" />
        </a>
      </div>
      <div className="previewMobile" id="FLPreviewMobile">
        <a href="https://flshotusers.com" target="_blank" rel="noopener noreferrer">
          <img className="footerMobile" src={footerMobile} alt="footerMobile" />
        </a>
      </div>
      <div className="previewDesktop" id="HebronPreview">
        <a href="https://hebronharvest.com" target="_blank" rel="noopener noreferrer">
          <img className="HHHomePreview" src={HHHomePreview} alt="HHHomePreview" />
        </a>
      </div>
      <div className="previewMobile" id="HebronPreviewMobile">
        <a href="https://hebronharvest.com" target="_blank" rel="noopener noreferrer">
          <img className="HHMobile" src={HHMobile} alt="HHMobile" />
        </a>
      </div>
      <div className="previewDesktop" id="WatchPreview">
        <video className="watchNavigation" alt="watchNavigation" autoPlay loop muted>
          <source src={watchNavigation} type="video/mp4"/>
        </video>
      </div>
      <div className="previewMobile" id="WatchPreviewMobile">
        <a href="https://dribbble.com/brooklynefinni" target="_blank" rel="noopener noreferrer">
          <img className="WatchMobile" src={WatchMobile} alt="WatchMobile" />
        </a>
      </div>
      <div className="nextPiece" id="nextPiece303" onClick={()=> this.renderSelectedPortfolioPiece(this.Navigation.previewPieceOne)} onMouseLeave={()=> this.setToSelected()}>
        <p>ENTER PORTFOLIO</p>
        <p className="viewNextPiece">View 303 Esports</p>
      </div>
      <div className="nextPiece" id="nextPieceBazini" onClick={()=> this.renderSelectedPortfolioPiece(this.Navigation.previewPieceTwo)} onMouseLeave={()=> this.setToSelected()}>
        <p>NEXT PORTFOLIO PIECE</p>
        <p className="viewNextPiece">View BaziniHopp</p>
      </div>
      <div className="nextPiece" id="nextPieceStructure" onClick={()=> this.renderSelectedPortfolioPiece(this.Navigation.previewPieceThree)} onMouseLeave={()=> this.setToSelected()}>
        <p>NEXT PORTFOLIO PIECE</p>
        <p className="viewNextPiece">View Structure Animation</p>
      </div>
      <div className="nextPiece" id="nextPieceFLShotUsers" onClick={()=> this.renderSelectedPortfolioPiece(this.Navigation.previewPieceFour)} onMouseLeave={()=> this.setToSelected()}>
        <p>NEXT PORTFOLIO PIECE</p>
        <p className="viewNextPiece">View FL Shot Users</p>
      </div>
      <div className="nextPiece" id="nextPieceHebron" onClick={()=> this.renderSelectedPortfolioPiece(this.Navigation.previewPieceFive)} onMouseLeave={()=> this.setToSelected()}>
        <p>NEXT PORTFOLIO PIECE</p>
        <p className="viewNextPiece">View Hebron Harvest</p>
      </div>
      <div className="nextPiece" id="nextPieceWatch" onClick={()=> this.renderSelectedPortfolioPiece(this.Navigation.previewPieceSix)} onMouseLeave={()=> this.setToSelected()}>
        <p>NEXT PORTFOLIO PIECE</p>
        <p className="viewNextPiece">View Watch Concept</p>
      </div>
      <div className="nextPiece" id="nextPieceHome" onClick={()=> this.renderLanding()} onMouseLeave={()=> this.setToSelected()}>
        <p>HOME</p>
        <p className="viewNextPiece">Back to Top</p>
      </div>
      <div className="mobileContact">
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

