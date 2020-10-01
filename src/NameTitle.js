import React, { Component } from 'react';
import './NameTitle.css';
import baselayer from './baselayer.png';
import leafOne from './leafOne.png';
import leafTwo from './leafTwo.png';
import leafThree from './leafThree.png';
import leafFour from './leafFour.png';
import leafFive from './leafFive.png';
import leafSix from './leafSix.png';
import architectureAnimation from './AnimatedStructure/architectureAnimation.mov';


export default class NameTitle extends React.Component  {


  bluePlant = () =>{
      var plantDiv = document.querySelector("div.floatingPlant");
      plantDiv.style.opacity = "1";
      plantDiv.style.transition = "1.8s ease-in-out";
  };

componentDidMount() {

  var bluePlantAppear = this.bluePlant;
  setTimeout(function() {
    bluePlantAppear();
  }, 6800);
    /*setTimeout(function selectAll() {
    for (let i = 1; i < 31; i++) {
      var design = document.querySelector("p.letterTitle:nth-child("+i+")");
      design.classList.add("titleLoad");
    }
  }, 7000);*/
}


  render() {
    return (
      <div className="nameTitle">
        <link href="https://fonts.googleapis.com/css2?family=Khand:wght@300&display=swap" rel="stylesheet"/>
        <div className="landingFirstName">
          <h2 className="letterName">B</h2>
          <h2 className="letterName">R</h2>
          <h2 className="letterName">O</h2>
          <h2 className="letterName">O</h2>
          <h2 className="letterName">K</h2>
          <h2 className="letterName">L</h2>
          <h2 className="letterName">Y</h2>
          <h2 className="letterName">N</h2>
          <h2 className="letterName">E</h2>
          </div>
          <div className="landingLastName">
          <h2 className="letterName">F</h2>
          <h2 className="letterName">I</h2>
          <h2 className="letterName">N</h2>
          <h2 className="letterName">N</h2>
          <h2 className="letterName">I</h2>
        </div>
      </div>)
  }

};
