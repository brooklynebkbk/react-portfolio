import React, { Component } from 'react';
import './AnimatedStructure.css';



export default class AnimatedStructure extends React.Component {


  componentDidMount() {
  setTimeout(function selectAll() {
    for (let i = 1; i < 42; i++) {
      var beam = document.querySelector(".builder:nth-child("+i+") div");
      beam.classList.remove("firstPosition");
      beam.style.transition = "all 6s ease-out";
    }
  }, 100);
  setTimeout(function selectAll() {
      var structure = document.querySelector(".assembly");
      structure.style.animation = ("spinIt 30s linear infinite");
      structure.style.transition = "all 3s ease-in";
  }, 500);

  setTimeout(function selectAll() {
    for (let i = 1; i < 42; i++) {
      var beam = document.querySelector(".builder:nth-child("+i+") div");
      beam.classList.add("firstPosition");
      beam.style.transition = "all 7s ease-in-out";
    }
  }, 13000);
    //setTimeout(this.animateIn(), 3000);
  }

  render() {
    return (
    <div className="AnimatedStructure">
      <h2>AnimatedStructure has been imported</h2>
      <div className='assembly'>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamA'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamA'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamA'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamA'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamA'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamB'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamB'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamB'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamB'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamC'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamC'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamC'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamC'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamC'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamC'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamC'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamC'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamC'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamC'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamC'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamC'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamF'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamF'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamF'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamF'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamD'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamD'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamD'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamD'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamD'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamD'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamD'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamD'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamD'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamD'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamD'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamD'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamE'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamE'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamE'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>

        <div className='builder'>
        <div className='firstPosition'>
          <div className='beamE'>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
            <div className='beam_face'></div>
          </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

