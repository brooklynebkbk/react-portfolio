import React, { Component } from 'react';
import './Gallery.css';
import './Portfolio.css';
import galleryDesktop from './galleryDesktop.mov';

export default class Gallery extends React.Component  {

  constructor(props){
        super(props);
        this.contentFadeInOut = {
          contentFadeOut: function() {
            console.log(this.props.currentComponent);
            if(this.props.currentComp === 6){
            var GalleryDiv = document.querySelector("div.Gallery");
              GalleryDiv.style.opacity = "0";
              GalleryDiv.style.transition = "1.1s ease";
            var previewDesktop = document.querySelector("div#GalleryPreview");
              previewDesktop.style.display = "block";
            var toNext = document.querySelector("div#nextPiece303");
              toNext.style.opacity = "0";
              toNext.style.transition = "1.1s ease";
            };
          }.bind(this),
          contentFadeIn: function() {//bind function once
            if(this.props.currentComp === 6){
            var GalleryDiv = document.querySelector("div.Gallery");
              GalleryDiv.style.opacity = "1";
            var previewDesktop = document.querySelector("div#GalleryPreview");
              previewDesktop.style.display = "none";
            };
            var toNext = document.querySelector("div#nextPiece303");
              toNext.style.opacity = "1";
              toNext.style.transition = "1s ease";
          }.bind(this),
          toNextPiece: function(event) {
            var page = event.target;
            if (page.scrollHeight - page.scrollTop <= (page.clientHeight+160)) {
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
          }.bind(this),
          viewNextEnter: function() {
            var theContent = document.querySelector("div.Gallery");
              theContent.style.opacity = "0";
              theContent.style.transition = "1s";
            var theNumber303 = document.querySelector("div.panel > div:nth-child(2) > p.portfolioNumber");
              theNumber303.style.right = "-4%";
          }.bind(this),
          viewNextLeave: function() {
            var theContent = document.querySelector("div.Gallery");
              theContent.style.opacity = "1";
              theContent.style.transition = "1s";
            var theNumber303 = document.querySelector("div.panel > div:nth-child(2) > p.portfolioNumber");
              theNumber303.style.right = "49%";
          }
    }
  };


  renderGallery = () => {
    var GalleryComponent = document.querySelector("div.GalleryContent");
    GalleryComponent.style.opacity = "1";
    GalleryComponent.style.transition = "1.2s ease";
  };


componentDidMount() {
  var renderComponent = this.renderGallery;
  setTimeout(function() {
    renderComponent();
  }, 750);
  /*var theNumber = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
    theNumber.style.left = "7.19em";*/
  document.querySelector("div.panel").addEventListener('mouseenter', this.contentFadeInOut.contentFadeOut, false);
  document.querySelector("div.panel").addEventListener('mouseleave', this.contentFadeInOut.contentFadeIn, false);
  document.querySelector("div.Gallery").addEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPiece303").addEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPiece303").addEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
  /*this.contentFadeInOut();*/
}

componentWillUnmount() {
  /*var theNumber = document.querySelector("div.panel > div:nth-child(3) > p.portfolioNumber");
    theNumber.style.left = "3em";*/
  document.querySelector("div.panel").removeEventListener('mouseenter', this.contentFadeInOut.contentFadeOut, false);
  document.querySelector("div.panel").removeEventListener('mouseleave', this.contentFadeInOut.contentFadeIn, false);
  document.querySelector("div.Gallery").removeEventListener('scroll', this.contentFadeInOut.toNextPiece, false);
  document.querySelector("div#nextPiece303").removeEventListener('mouseenter', this.contentFadeInOut.viewNextEnter, false);
  document.querySelector("div#nextPiece303").removeEventListener('mouseleave', this.contentFadeInOut.viewNextLeave, false);
  var toNext = document.querySelector("div#nextPiece303");
    toNext.style.bottom = "-18vh"
    toNext.style.opacity = "0";
    toNext.style.transition = "1s";
}
render() {
    return (<div className="Gallery">
      <div className="ThePreviews">
        <div className="previewDesktopCopy" id="GalleryPreviewCopy">
          <video className="galleryDesktop" alt="galleryDesktop" autoPlay loop muted>
            <source src={galleryDesktop} type="video/mp4"/>
          </video>
        </div>
      </div>
      <div className="GalleryContent">
        <div className="projectTitle">
          <p className="theTitle">THE GALLERY</p>
        </div>
      </div>
    </div>)
}


};
