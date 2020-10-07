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
/*import HHHome from './HebronHarvest/harvestVideo.mov';*/
import HHHomePreview from './HebronHarvest/HHHomePreview.png'
import HHMobile from './HebronHarvest/HHMobile.PNG';
import watchNavigation from './WatchConcept/watchNavigation.mov';
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
/*import architectureAnimation from './AnimatedStructure/architectureAnimation.mov';
import greenHouseSketch from './AnimatedStructure/greenhouseSketch.jpg';
import galleryColors from './galleryColors.png';
import ThreePalette from './ThreeOhThree/ThreePalette.png';
import ThreeHost from './ThreeOhThree/ThreeHost.png';
import ThreeCompete from './ThreeOhThree/ThreeCompete.png';
import ThreeStream from './ThreeOhThree/ThreeStream.png';
import ThreeBuild from './ThreeOhThree/ThreeBuild.png';
import MountainRange from './/ThreeOhThree/MountainRange.png';
import ThreeBGAnimation from './ThreeOhThree/ThreeBGAnimation.png';*/

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
    this.domVariables = {
      desktopVar: "var preview = document.querySelector",
      desktopEnter: "preview.style.bottom = '20vw';preview.style.opacity = '1';preview.style.transition = '1.2s ease';",
      mobileVar: "var previewMobile = document.querySelector",
      mobileEnter: "previewMobile.style.top = '26vw';previewMobile.style.opacity = '1';previewMobile.style.transition = '1.2s ease';",
      background: "var app = document.querySelector('.App');app.style.transition = '.5s ease';app.style.backgroundColor = ",
      firstName: "var name1 = document.querySelector('.nameHolder > h4:nth-child(1)');name1.style.transition = '.5s ease';name1.style.color = ",
      lastName: "var name2 = document.querySelector('.nameHolder > h4:nth-child(2)');name2.style.transition = '.5s ease';name1.style.color = ",
      portfolioBar: "var portfolioTab = document.querySelector('div.portfolioTab');portfolioTab.style.transition = '.5s ease';portfolioTab.style.backgroundColor = ",
      portfolioNumber: "for (let i = 1; i < 7; i++) {var theNumber = document.querySelector('div.panel > div:nth-child('+i+') > p.portfolioNumber');theNumber.style.transition = '.5s ease';theNumber.style.color = ",
      portfolioPiece: "for (let i = 1; i < 7; i++) {var thePiece = document.querySelector('div.panel > div:nth-child('+i+') > p.portfolioPiece');thePiece.style.transition = '.5s ease';thePiece.style.color = ",
      portfolioPanel: "var panel = document.querySelector('div.panel');panel.style.transition = '.5s ease';panel.style.backgroundColor = "
    };
    this.Navigation = {
      contentFadeOut: function() {
            console.log(me.state.currentDisplay);
            if(me.currentDisplay === 0){
            var floatingPlant = document.querySelector("div.floatingPlant");
              floatingPlant.style.opacity = "0";
              floatingPlant.style.marginTop = "36vh";
              floatingPlant.style.transition = "1.1s .2s ease-in-out";
            var previewThree = document.querySelector("div#ThreeOhPreview");
              previewThree.style.display= "block";
            var previewThreeMobile = document.querySelector("div#ThreeOhPreviewMobile");
              previewThreeMobile.style.display = "block";
            var toNext = document.querySelector("div#nextPiece303");
              toNext.style.opacity = "1";
              toNext.style.transition = "1.1s ease";
            };
          }.bind(this),
          contentFadeIn: function() {//bind function once
            if(me.state.currentDisplay === 0){
            var floatingPlant = document.querySelector("div.floatingPlant");
              floatingPlant.style.opacity = "1";
              floatingPlant.style.marginLeft = "0vw";
              floatingPlant.style.marginTop = "0vh";
              floatingPlant.style.transition = ".8s ease-in-out";
            var previewThree = document.querySelector("div#ThreeOhPreview");
              previewThree.style.display= "none";
            var previewThreeMobile = document.querySelector("div#ThreeOhPreviewMobile");
              previewThreeMobile.style.display = "none";
            var toNext = document.querySelector("div#nextPiece303");
              toNext.style.opacity = "0";
              toNext.style.transition = "1s ease";
            }
          }.bind(this),
          toNextPiece: function(event) {
            if (me.state.currentDisplay === 0) {
              console.log("scrolled");
            var page = event.target;
            if (page.scrollHeight - page.scrollTop <= (page.clientHeight+10)) {
            var toNext = document.querySelector("div#nextPiece303");
              toNext.style.display = "block";
              toNext.style.bottom = "-2vh"
              toNext.style.opacity = "1";
              toNext.style.transition = "1s";
            } else {
            var toNext = document.querySelector("div#nextPiece303");
              toNext.style.bottom = "-18vh"
              toNext.style.opacity = "0";
              toNext.style.transition = "1s";
            }
          }
          }.bind(this),
          viewNextEnter: function() {
            var theContent = document.querySelector("div.floatingPlant");
              theContent.style.opacity = "0";
              theContent.style.transition = "1s";
            var theNumberWatch = document.querySelector("div.panel > div:nth-child(1) > p.portfolioNumber");
              theNumberWatch.style.right = "-4%";
          }.bind(this),
          viewNextLeave: function() {
            var theContent = document.querySelector("div.floatingPlant");
              theContent.style.opacity = "1";
              theContent.style.transition = "1s";
            var theNumberWatch = document.querySelector("div.panel > div:nth-child(1) > p.portfolioNumber");
              theNumberWatch.style.right = "49%";
          },
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
          /*var previewP0 = document.querySelector("div#GalleryPreview");
            previewP0.style.bottom = "-10vw";
            previewP0.style.opacity = "0";
            previewP0.style.transition = "1s ease";*/
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
      previewProjects: [function() {
        me.setState({menuItem: 1});
          var preview = document.querySelector("div#ThreeOhPreview");
            preview.style.bottom = "36%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var previewMobile = document.querySelector("div#ThreeOhPreviewMobile");
            previewMobile.style.top = "46%";
            previewMobile.style.opacity = "1";
            previewMobile.style.transition = "1.2s ease";
          var plant = document.querySelector("div.floatingPlant");
            plant.style.marginTop = "46vh";
            plant.style.opacity = "0";
            plant.style.transition = "1s ease-in-out";
          var app = document.querySelector(".App");
            app.style.transition = ".5s ease";
            app.style.backgroundColor = "#DBE6E3";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.transition = ".5s ease";
            name1.style.color = "#061A1E";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.transition = ".5s ease";
            name2.style.color = "#061A1E";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.transition = ".5s ease";
            portfolioTab.style.backgroundColor = "#061A1E";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.transition = ".5s ease";
              theNumber.style.color = "#F29121";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.transition = ".5s ease";
              thePiece.style.color = "#ADBDB6";
          }
          var panel = document.querySelector("div.panel");
            panel.style.transition = ".5s ease";
            panel.style.backgroundColor = "#061A1E";
          var theNumber = document.querySelector("div.panel > div:nth-child(1) > p.portfolioNumber");
            if(window.innerWidth > 1200 || window.innerWidth < 420) {
              theNumber.style.right = "-4%";
              } else {
                theNumber.style.right = "2%";
              }
        },
        function() {
          me.setState({menuItem: 2});
          var preview = document.querySelector("div#BaziniPreview");
            preview.style.display = "block";
            preview.style.bottom = "36%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var plant = document.querySelector("div.floatingPlant");
            plant.style.marginTop = "46vh";
            plant.style.opacity = "0";
            plant.style.transition = "1s ease-in-out";
          var previewMobile = document.querySelector("div#BaziniPreviewMobile");
            previewMobile.style.display = "block";
            previewMobile.style.top = "46%";
            previewMobile.style.opacity = "1";
            previewMobile.style.transition = "1.2s ease";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#E8ECED";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#414C62";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#414C62";
            name2.style.transition = ".5s ease";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#414C62";
            portfolioTab.style.transition = ".5s ease";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.color = "#EC7A6F";
              theNumber.style.transition = ".5s ease";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.color = "#E8ECED";
              thePiece.style.transition = ".5s ease";
          }
          var panel = document.querySelector("div.panel");
            panel.style.backgroundColor = "#414C62";
            panel.style.transition = ".5s ease";
          var theNumber = document.querySelector("div.panel > div:nth-child(2) > p.portfolioNumber");
            if(window.innerWidth > 1200 || window.innerWidth < 420) {
              theNumber.style.right = "-4%";
            } else {
              theNumber.style.right = "2%";
            }
        },
        function() {
          me.setState({menuItem: 3});
          var preview = document.querySelector("div#StructurePreview");
            preview.style.display = "block";
            preview.style.bottom = "36%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var plant = document.querySelector("div.floatingPlant");
            plant.style.marginTop = "46vh";
            plant.style.opacity = "0";
            plant.style.transition = "1s ease-in-out";
          var previewMobile = document.querySelector("div#StructurePreviewMobile");
            previewMobile.style.display = "block";
            previewMobile.style.top = "46%";
            previewMobile.style.opacity = "1";
            previewMobile.style.transition = "1.2s ease";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#E5EBEA";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#0B191F";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#0B191F";
            name2.style.transition = ".5s ease";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#0B191F";
            portfolioTab.style.transition = ".5s ease";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.color = "#4C5E5C";
              theNumber.style.transition = ".5s ease";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.color = "#E5EBEA";
              thePiece.style.transition = ".5s ease";
          }
          var panel = document.querySelector("div.panel");
            panel.style.backgroundColor = "#0B191F";
            panel.style.transition = ".5s ease";
          var theNumber = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
            if(window.innerWidth > 1200 || window.innerWidth < 420) {
              theNumber.style.right = "-4%";
            } else {
              theNumber.style.right = "2%";
            }
        },
        function() {
          me.setState({menuItem: 4});
          var preview = document.querySelector("div#FLShotsPreview");
            preview.style.bottom = "36%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var plant = document.querySelector("div.floatingPlant");
            plant.style.marginTop = "46vh";
            plant.style.opacity = "0";
            plant.style.transition = "1s ease-in-out";
          var previewMobile = document.querySelector("div#FLPreviewMobile");
            previewMobile.style.top = "46%";
            previewMobile.style.opacity = "1";
            previewMobile.style.transition = "1.2s ease";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#DAF6FB";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#084D67";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#084D67";
            name2.style.transition = ".5s ease";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#084D67";
            portfolioTab.style.transition = ".5s ease";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.color = "#52DCF4";
              theNumber.style.transition = ".5s ease";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.color = "#DAF6FB";
              thePiece.style.transition = ".5s ease";
          }
          var panel = document.querySelector("div.panel");
            panel.style.backgroundColor = "#084D67";
            panel.style.transition = ".5s ease";
          var theNumber = document.querySelector("div.panel > div:nth-child(4) > p.portfolioNumber");
            if(window.innerWidth > 1200 || window.innerWidth < 420) {
              theNumber.style.right = "-4%";
            } else {
              theNumber.style.right = "2%";
            }
        },
        function() {
          me.setState({menuItem: 5});
          var previewHebron = document.querySelector("div#HebronPreview");
            previewHebron.style.display = "block";
          var previewHebronMobile = document.querySelector("div#HebronPreviewMobile");
            previewHebronMobile.style.display = "block";
          var preview = document.querySelector("div#HebronPreview");
            preview.style.bottom = "36%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var plant = document.querySelector("div.floatingPlant");
            plant.style.marginTop = "46vh";
            plant.style.opacity = "0";
            plant.style.transition = "1s ease-in-out";
          var previewMobile = document.querySelector("div#HebronPreviewMobile");
            previewMobile.style.top = "46%";
            previewMobile.style.opacity = "1";
            previewMobile.style.transition = "1.2s ease";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#F9F2DC";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#39140E";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#39140E";
            name2.style.transition = ".5s ease";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#39140E";
            portfolioTab.style.transition = ".5s ease";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.color = "#304A44";
              theNumber.style.transition = ".5s ease";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.color = "#F9F2DC";
              thePiece.style.transition = ".5s ease";
          }
          var panel = document.querySelector("div.panel");
            panel.style.backgroundColor = "#39140E";
            panel.style.transition = ".5s ease";
          var theNumber = document.querySelector("div.panel > div:nth-child(5) > p.portfolioNumber");
            if(window.innerWidth > 1200 || window.innerWidth < 420) {
              theNumber.style.right = "-4%";
            } else {
              theNumber.style.right = "2%";
            }
        },
        function() {
          me.setState({menuItem: 6});
          var preview = document.querySelector("div#WatchPreview");
            preview.style.bottom = "36%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var plant = document.querySelector("div.floatingPlant");
            plant.style.marginTop = "46vh";
            plant.style.opacity = "0";
            plant.style.transition = "1s ease-in-out";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#E8E7E0";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#264B48";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#264B48";
            name2.style.transition = ".5s ease";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#264B48";
            portfolioTab.style.transition = ".5s ease";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.color = "#8DD69D";
              theNumber.style.transition = ".5s ease";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.color = "#E8E7E0";
              thePiece.style.transition = ".5s ease";
          }
            var panel = document.querySelector("div.panel");
              panel.style.backgroundColor = "#264B48";
              panel.style.transition = ".5s ease";
            var theNumber = document.querySelector("div.panel > div:nth-child(6) > p.portfolioNumber");
              if(window.innerWidth > 1200 || window.innerWidth < 420) {
                theNumber.style.right = "-4%";
              } else {
                theNumber.style.right = "2%";
              }
        },
        function() {
          me.setState({menuItem: 7});
          /*var preview = document.querySelector("div#GalleryPreview");
            preview.style.bottom = "36%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";*/
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
        nextProject: [function() {
          var preview = document.querySelector("div#ThreeOhPreview");
            preview.style.display = "block";
            preview.style.bottom = "30%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var previewMobile = document.querySelector("div#ThreeOhPreviewMobile");
            previewMobile.style.display = "block";
            previewMobile.style.top = "40%";
            previewMobile.style.opacity = "1";
            previewMobile.style.transition = "1.2s ease";
          var app = document.querySelector(".App");
            app.style.transition = ".5s ease";
            app.style.backgroundColor = "#DBE6E3";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.transition = ".5s ease";
            name1.style.color = "#061A1E";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.transition = ".5s ease";
            name2.style.color = "#061A1E";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.transition = ".5s ease";
            portfolioTab.style.backgroundColor = "#061A1E";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.transition = ".5s ease";
              theNumber.style.color = "#F29121";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.transition = ".5s ease";
              thePiece.style.color = "#ADBDB6";
          }
          var panel = document.querySelector("div.panel");
            panel.style.transition = ".5s ease";
            panel.style.backgroundColor = "#061A1E";
          var theNumber = document.querySelector("div.panel > div:nth-child(1) > p.portfolioNumber");
            theNumber.style.right = "49%";
        },
        function() {
          var preview = document.querySelector("div#BaziniPreview");
            preview.style.display = "block";
            preview.style.bottom = "36%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var previewMobile = document.querySelector("div#BaziniPreviewMobile");
            previewMobile.style.display = "block";
            previewMobile.style.top = "46%";
            previewMobile.style.opacity = "1";
            previewMobile.style.transition = "1.2s ease";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#E8ECED";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#414C62";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#414C62";
            name2.style.transition = ".5s ease";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#414C62";
            portfolioTab.style.transition = ".5s ease";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.color = "#ec7a6f";
              theNumber.style.transition = ".5s ease";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.color = "#E8ECED";
              thePiece.style.transition = ".5s ease";
          }
          var panel = document.querySelector("div.panel");
            panel.style.backgroundColor = "#414C62";
            panel.style.transition = ".5s ease";
          var theNumberThree = document.querySelector("div.panel > div:nth-child(1) > p.portfolioNumber");
            theNumberThree.style.right = "49%";
        },
        function() {
          var preview = document.querySelector("div#StructurePreview");
            preview.style.display = "block";
            preview.style.bottom = "36%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var previewMobile = document.querySelector("div#StructurePreviewMobile");
            previewMobile.style.display = "block";
            previewMobile.style.top = "46%";
            previewMobile.style.opacity = "1";
            previewMobile.style.transition = "1.2s ease";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#E5EBEA";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#0B191F";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#0B191F";
            name2.style.transition = ".5s ease";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#0B191F";
            portfolioTab.style.transition = ".5s ease";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.color = "#4C5E5C";
              theNumber.style.transition = ".5s ease";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.color = "#E5EBEA";
              thePiece.style.transition = ".5s ease";
          }
          var panel = document.querySelector("div.panel");
            panel.style.backgroundColor = "#0B191F";
            panel.style.transition = ".5s ease";
          var theNumberBazini = document.querySelector("div.panel > div:nth-child(2) > p.portfolioNumber");
            theNumberBazini.style.right = "49%";

        },
        function() {
          var preview = document.querySelector("div#FLShotsPreview");
            preview.style.display = "block";
            preview.style.bottom = "36%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var previewMobile = document.querySelector("div#FLPreviewMobile");
            previewMobile.style.display = "block";
            previewMobile.style.top = "46%";
            previewMobile.style.opacity = "1";
            previewMobile.style.transition = "1.2s ease";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#DAF6FB";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#084D67";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#084D67";
            name2.style.transition = ".5s ease";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#084D67";
            portfolioTab.style.transition = ".5s ease";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.color = "#52DCF4";
              theNumber.style.transition = ".5s ease";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.color = "#DAF6FB";
              thePiece.style.transition = ".5s ease";
          }
          var panel = document.querySelector("div.panel");
            panel.style.backgroundColor = "#084D67";
            panel.style.transition = ".5s ease";
          var theNumber = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
            theNumber.style.right = "49%";
        },
        function() {
          var preview = document.querySelector("div#HebronPreview");
            preview.style.display = "block";
            preview.style.bottom = "36%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var previewMobile = document.querySelector("div#HebronPreviewMobile");
            previewMobile.style.display = "block";
            previewMobile.style.top = "46%";
            previewMobile.style.opacity = "1";
            previewMobile.style.transition = "1.2s ease";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#F9F2DC";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#39140E";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#39140E";
            name2.style.transition = ".5s ease";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#39140E";
            portfolioTab.style.transition = ".5s ease";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.color = "#304A44";
              theNumber.style.transition = ".5s ease";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.color = "#F9F2DC";
              thePiece.style.transition = ".5s ease";
          }
          var panel = document.querySelector("div.panel");
            panel.style.backgroundColor = "#39140E";
            panel.style.transition = ".5s ease";
          var theNumber = document.querySelector("div.panel > div:nth-child(4) > p.portfolioNumber");
            theNumber.style.right = "49%";
        },
        function() {
          var preview = document.querySelector("div#WatchPreview");
            preview.style.display = "block";
            preview.style.bottom = "36%";
            preview.style.opacity = "1";
            preview.style.transition = "1.2s ease";
          var app = document.querySelector(".App");
            app.style.backgroundColor = "#E8E7E0";
            app.style.transition = ".5s ease";
          var name1 = document.querySelector(".nameHolder > h4:nth-child(1)");
            name1.style.color = "#264B48";
            name1.style.transition = ".5s ease";
          var name2 = document.querySelector(".nameHolder > h4:nth-child(2)");
            name2.style.color = "#264B48";
            name2.style.transition = ".5s ease";
          var portfolioTab = document.querySelector("div.portfolioTab");
            portfolioTab.style.backgroundColor = "#264B48";
            portfolioTab.style.transition = ".5s ease";
          for (let i = 1; i < 7; i++) {
            var theNumber = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioNumber");
              theNumber.style.color = "#8DD69D";
              theNumber.style.transition = ".5s ease";
          }
          for (let i = 1; i < 7; i++) {
            var thePiece = document.querySelector("div.panel > div:nth-child("+i+") > p.portfolioPiece");
              thePiece.style.color = "#E8E7E0";
              thePiece.style.transition = ".5s ease";
          }
            var panel = document.querySelector("div.panel");
              panel.style.backgroundColor = "#264B48";
              panel.style.transition = ".5s ease";
            var theNumber = document.querySelector("div.panel > div:nth-child(5) > p.portfolioNumber");
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

  renderThreeOhThree = () => {
    this.Navigation.hideNavigation();
    var displayBefore = this.state.currentDisplay;
    if(displayBefore === 1) {
      return;
    } else {
      this.setState({currentDisplay: 1});
      this.setState({activeColorCodes: ["#061A1E", "#F29121", "#DBE6E3"]});
    }
    setTimeout(function(){
      var preview = document.querySelector("div#ThreeOhPreview");
          preview.style.display = "none";
      var previewMobile = document.querySelector("div#ThreeOhPreviewMobile");
          previewMobile.style.display = "none";
    }, 2500);

  };

  renderBaziniHopp = () => {
    this.Navigation.hideNavigation();
    var displayBefore = this.state.currentDisplay;
    if(displayBefore === 2) {
      return;
    } else {
      this.setState({currentDisplay: 2});
      this.setState({activeColorCodes: ["#414C62", "#EC7A6F"," #E8ECED"]});
    }
    setTimeout(function(){
      var preview = document.querySelector("div#BaziniPreview");
          preview.style.display = "none";
      var previewMobile = document.querySelector("div#BaziniPreviewMobile");
          previewMobile.style.display = "none";
    }, 2500);

  };

  renderStructure = () => {
    this.Navigation.hideNavigation();
    var displayBefore = this.state.currentDisplay;
    if(displayBefore === 3) {
      return;
    } else {
      this.setState({currentDisplay: 3});
      this.setState({activeColorCodes: ["#0B191F", "#4C5E5C"," #E5EBEA"]});
    }
    setTimeout(function(){
      var preview = document.querySelector("div#StructurePreview");
          preview.style.display = "none";
      var previewMobile = document.querySelector("div#StructurePreviewMobile");
          previewMobile.style.display = "none";
    }, 2500);

  };

  renderFLShotUsers = () => {
    this.Navigation.hideNavigation();
    var displayBefore = this.state.currentDisplay;
    if(displayBefore === 4) {
      return;
    } else {
      this.setState({currentDisplay: 4});
      this.setState({activeColorCodes: ["#084D67", "#52DCF4", "#DAF6FB"]});
    }
    setTimeout(function(){
      var preview = document.querySelector("div#FLShotsPreview");
          preview.style.display = "none";
      var previewMobile = document.querySelector("div#FLPreviewMobile");
          previewMobile.style.display = "none";
    }, 2500);

  };

  renderHebronHarvest = () => {
    this.Navigation.hideNavigation();
    var displayBefore = this.state.currentDisplay;
    if(displayBefore === 5) {
      return;
    } else {
      this.setState({currentDisplay: 5});
      this.setState({activeColorCodes: ["#39140E", "#304A44", "#F9F2DC"]});
    }
    setTimeout(function(){
      var preview = document.querySelector("div#HebronPreview");
          preview.style.display = "none";
      var previewMobile = document.querySelector("div#HebronPreviewMobile");
          previewMobile.style.display = "none";
    }, 2500);

  };

  renderWatchAConcept = () => {
    this.Navigation.hideNavigation();
    var displayBefore = this.state.currentDisplay;
    if(displayBefore === 6) {
      return;
    } else {
      this.setState({currentDisplay: 6});
      this.setState({activeColorCodes: ["#264B48", "#8DD69D", "#E8E7E0"]});
    }
    setTimeout(function(){
      var preview = document.querySelector("div#WatchPreview");
            preview.style.display = "none";
    }, 2500);

  };

  /*renderLanding = () => {
    this.Navigation.hideNavigation();
    var displayBefore = this.state.currentDisplay;
    if(displayBefore === 6) {
      return;
    } else {
      this.setState({currentDisplay: 6});
      this.setState({activeColorCodes: ["#0408DC", "#CCFA4C", "#DEF2F8"]});
    }
    setTimeout(function(){
      var preview = document.querySelector("div#GalleryPreview");
            preview.style.display = "none";
    }, 2500);

  };*/

  /*leaveP6 = () => {
    var preview = document.querySelector("div#GalleryPreview");
    preview.style.bottom = "-10vw";
    preview.style.opacity = "0";
    preview.style.transition = "1s ease";
    var theNumber = document.querySelector("div.panel > div:nth-child(1) > p.portfolioNumber");
    theNumber.style.left = "auto";
  };*/
  leaveP1 = () => {
    var preview = document.querySelector("div#ThreeOhPreview");
    preview.style.bottom = "-10vw";
    preview.style.opacity = "0";
    preview.style.transition = "1s ease";
    var previewMobile = document.querySelector("div#ThreeOhPreviewMobile");
    previewMobile.style.top = "-20vw";
    previewMobile.style.opacity = "0";
    previewMobile.style.transition = "1s ease";
    var theNumber = document.querySelector("div.panel > div:nth-child(1) > p.portfolioNumber");
    theNumber.style.right = "49%";
  };
  leaveP2 = () => {
    var preview = document.querySelector("div#BaziniPreview");
    preview.style.bottom = "-10vw";
    preview.style.opacity = "0";
    preview.style.transition = "1s ease";
    var previewMobile = document.querySelector("div#BaziniPreviewMobile");
    previewMobile.style.top = "-20vw";
    previewMobile.style.opacity = "0";
    previewMobile.style.transition = "1s ease";
    var theNumber = document.querySelector("div.panel > div:nth-child(2) > p.portfolioNumber");
    theNumber.style.right = "49%";
  };
  leaveP3 = () => {
    var preview = document.querySelector("div#StructurePreview");
    preview.style.bottom = "-10vw";
    preview.style.opacity = "0";
    preview.style.transition = "1s ease";
    var previewMobile = document.querySelector("div#StructurePreviewMobile");
    previewMobile.style.top = "-20vw";
    previewMobile.style.opacity = "0";
    previewMobile.style.transition = "1s ease";
    var theNumber = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
    theNumber.style.right = "49%";
  };
  leaveP4 = () => {
    var preview = document.querySelector("div#FLShotsPreview");
    preview.style.bottom = "-10vw";
    preview.style.opacity = "0";
    preview.style.transition = "1s ease";
    var previewMobile = document.querySelector("div#FLPreviewMobile");
    previewMobile.style.top = "-20vw";
    previewMobile.style.opacity = "0";
    previewMobile.style.transition = "1s ease";
    var theNumber = document.querySelector("div.panel > div:nth-child(4) > p.portfolioNumber");
    theNumber.style.right = "49%";
  };
  leaveP5 = () => {
    var preview = document.querySelector("div#HebronPreview");
    preview.style.bottom = "-10vw";
    preview.style.opacity = "0";
    preview.style.transition = "1s ease";
    var previewMobile = document.querySelector("div#HebronPreviewMobile");
    previewMobile.style.top = "-20vw";
    previewMobile.style.opacity = "0";
    previewMobile.style.transition = "1s ease";
    var theNumber = document.querySelector("div.panel > div:nth-child(5) > p.portfolioNumber");
    theNumber.style.right = "49%";
  };
  leaveP6 = () => {
    var preview = document.querySelector("div#WatchPreview");
    preview.style.bottom = "-10vw";
    preview.style.opacity = "0";
    preview.style.transition = "1s ease";
    var theNumber = document.querySelector("div.panel > div:nth-child(6) > p.portfolioNumber");
    theNumber.style.right = "49%";
  };

  portfolioHover = () =>{
    var menu = document.querySelector("div.portfolioMenu");
    menu.style.opacity = "1";
    menu.style.transition = "1.2s ease-in-out";
    document.querySelector("div.portfolioTab").addEventListener("mouseenter", this.Navigation.showNavigation);
    if(window.innerWidth< 640){
      for (let i = 1; i < 16; i++) {
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
    document.querySelector("div.Contact").addEventListener("click", this.Navigation.previewProjects[6]);
    document.querySelector("div.Contact").addEventListener("click", this.Navigation.hidePreview);
  };

  setToSelected = () => {
    var toNext = document.querySelector("div#nextPiece303");
      toNext.style.bottom = "-18vh"
      toNext.style.opacity = "0";
      toNext.style.transition = "1s";
    if(this.state.currentDisplay === 0){
      this.Navigation.previewProjects[7]();
      this.Navigation.hideNavigation();
    }else if(this.state.currentDisplay === 1){
      this.Navigation.previewProjects[0]();
      this.Navigation.hideNavigation();
    }else if(this.state.currentDisplay === 2){
      this.Navigation.previewProjects[1]();
      this.Navigation.hideNavigation();
    }else if(this.state.currentDisplay === 3){
      this.Navigation.previewProjects[2]();
      this.Navigation.hideNavigation();
    }else if(this.state.currentDisplay === 4){
      this.Navigation.previewProjects[3]();
      this.Navigation.hideNavigation();
    }else if(this.state.currentDisplay === 5){
      this.Navigation.previewProjects[4]();
      this.Navigation.hideNavigation();
    }else if(this.state.currentDisplay === 6){
      this.Navigation.previewProjects[5]();
      this.Navigation.hideNavigation();
    } else{
      this.Navigation.previewProjects[6]();
      this.Navigation.hideNavigation();
    }
  };






componentDidMount() {
  var activatePortfolioHover = this.portfolioHover;
  setTimeout(function() {
    activatePortfolioHover();
  }, 7000);
  this.nameClicked();
  /*document.querySelector("div.Portfolio").addEventListener('scroll', this.Navigation.toNextPiece, false);
  document.querySelector("div#nextPiece303").addEventListener('mouseenter', this.Navigation.viewNextEnter, false);
  document.querySelector("div#nextPiece303").addEventListener('mouseleave', this.Navigation.viewNextLeave, false);*/
  document.querySelector("div#nextPiece303").addEventListener('mouseenter', this.Navigation.nextProject[0]);
  document.querySelector("div#nextPieceBazini").addEventListener('mouseenter', this.Navigation.nextProject[1]);
  document.querySelector("div#nextPieceStructure").addEventListener('mouseenter', this.Navigation.nextProject[2]);
  document.querySelector("div#nextPieceFLShotUsers").addEventListener('mouseenter', this.Navigation.nextProject[3]);
  document.querySelector("div#nextPieceHebron").addEventListener('mouseenter', this.Navigation.nextProject[4]);
  document.querySelector("div#nextPieceWatch").addEventListener('mouseenter', this.Navigation.nextProject[5]);
  document.querySelector("div#nextPieceHome").addEventListener('mouseenter', this.Navigation.nextProject[6]);
  /*if (window.innerWidth < 640) {
    document.querySelector(".Portfolio").addEventListener('scroll', this.Navigation.mobileScroll);
  } else {
    return;*/
    /*document.querySelector(".Portfolio").addEventListener('scroll', this.Navigation.previewProjects[5]);*/
    /*document.querySelector(".Portfolio").addEventListener('scroll', this.renderLanding);*/
  /*}*/

}

  /*document.querySelector("div#nextPieceBazini").addEventListener('mouseenter', this.Navigation.showNavigation);*/
  /*document.querySelector("div#nextPieceBazini").addEventListener('mouseenter', this.Navigation.previewProjects[1]);*/


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
      <div className="portfolioSection" id="toThreeOhThree" onClick={()=> this.renderThreeOhThree()} onMouseEnter={()=> this.Navigation.previewProjects[0]()} onMouseLeave={()=> this.leaveP1()}>
        <p className="portfolioNumber">1</p><p className="portfolioPiece">303 ESPORTS</p>
        <p className="viewProject">View Project</p>
      </div>
      <div className="portfolioSection" id="toBaziniHopp" onClick={()=> this.renderBaziniHopp()} onMouseEnter={()=> this.Navigation.previewProjects[1]()} onMouseLeave={()=> this.leaveP2()}>
        <p className="portfolioNumber">2</p><p className="portfolioPiece">BAZINIHOPP</p>
        <p className="viewProject">View Project</p>
      </div>
      <div className="portfolioSection" id="toWatchAConcept" onClick={()=> this.renderStructure()} onMouseEnter={()=> this.Navigation.previewProjects[2]()} onMouseLeave={()=> this.leaveP3()}>
        <p className="portfolioNumber">3</p><p className="portfolioPiece">STRUCTURE ANIMATION</p>
        <p className="viewProject">View Project</p>
      </div>
      <div className="portfolioSection" id="toFLShotUsers" onClick={()=> this.renderFLShotUsers()} onMouseEnter={()=> this.Navigation.previewProjects[3]()} onMouseLeave={()=> this.leaveP4()}>
        <p className="portfolioNumber">4</p><p className="portfolioPiece">FL SHOT USERS</p>
        <p className="viewProject">View Project</p>
      </div>
      <div className="portfolioSection" id="toHebronHarvest" onClick={()=> this.renderHebronHarvest()} onMouseEnter={()=> this.Navigation.previewProjects[4]()} onMouseLeave={()=> this.leaveP5()}>
        <p className="portfolioNumber">5</p><p className="portfolioPiece">HEBRON HARVEST</p>
        <p className="viewProject">View Project</p>
      </div>
      <div className="portfolioSection" id="toWatchAConcept" onClick={()=> this.renderWatchAConcept()} onMouseEnter={()=> this.Navigation.previewProjects[5]()} onMouseLeave={()=> this.leaveP6()}>
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
      <div className="nextPiece" id="nextPiece303" onClick={()=> this.renderThreeOhThree()} onMouseLeave={()=> this.setToSelected()}>
        <p>ENTER PORTFOLIO</p>
        <p className="viewNextPiece">View 303 Esports</p>
      </div>
      <div className="nextPiece" id="nextPieceBazini" onClick={()=> this.renderBaziniHopp()} onMouseLeave={()=> this.setToSelected()}>
        <p>NEXT PORTFOLIO PIECE</p>
        <p className="viewNextPiece">View BaziniHopp</p>
      </div>
      <div className="nextPiece" id="nextPieceStructure" onClick={()=> this.renderStructure()} onMouseLeave={()=> this.setToSelected()}>
        <p>NEXT PORTFOLIO PIECE</p>
        <p className="viewNextPiece">View Structure Animation</p>
      </div>
      <div className="nextPiece" id="nextPieceFLShotUsers" onClick={()=> this.renderFLShotUsers()} onMouseLeave={()=> this.setToSelected()}>
        <p>NEXT PORTFOLIO PIECE</p>
        <p className="viewNextPiece">View FL Shot Users</p>
      </div>
      <div className="nextPiece" id="nextPieceHebron" onClick={()=> this.renderHebronHarvest()} onMouseLeave={()=> this.setToSelected()}>
        <p>NEXT PORTFOLIO PIECE</p>
        <p className="viewNextPiece">View Hebron Harvest</p>
      </div>
      <div className="nextPiece" id="nextPieceWatch" onClick={()=> this.renderWatchAConcept()} onMouseLeave={()=> this.setToSelected()}>
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

      /*<div className="portfolioSection" id="toWatchAConcept" onClick={()=> this.renderWatchAConcept()} onMouseEnter={()=> this.Navigation.previewProjects[4]()} onMouseLeave={()=> this.leaveP5()}>
        <p className="portfolioNumber">6</p><p className="portfolioPiece">GREENHOUSE ANIMATION</p>
        <p className="viewProject">View Project</p>
      </div>*/

      /*      { this.state.currentDisplay === 6 && <Gallery currentComp={this.state.currentDisplay}/> }*/


      /*<div className="portfolioSection" id="toGallery" onClick={()=> this.renderLanding()} onMouseEnter={()=> this.Navigation.previewProjects[5]()} onMouseLeave={()=> this.leaveP6()}>
        <p className="portfolioNumber">gallery</p>
        <p className="visit">Visit</p>
      </div>*/

      /*<div className="previewDesktop" id="GalleryPreview">
        <video className="galleryDesktop" alt="galleryDesktop" autoPlay loop muted>
          <source src={galleryDesktop} type="video/mp4"/>
        </video>
      </div>*/

