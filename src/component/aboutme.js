import React, {Component} from 'react';
import Particles from 'react-particles-js';
import {Progress} from 'reactstrap';

export default class aboutme extends Component {
  render() {
    return (
      <div className=" container-fluid m-0 p-0 hidden-xs-up" id="about">
        <Particles
          params={{
          "particles": {
            "number": {
              "value": 231,
              "density": {
                "enable": true,
                "value_area": 2805.971106514665
              }
            },
            "color": {
              "value": "#f200b9"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 1,
                "color": "#cf0086"
              },
              "polygon": {
                "nb_sides": 6
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.02405118091298284,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 0,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 240.5118091298284,
              "color": "#e314cb",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": .5,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 80.17060304327615,
                "rotateY": 641.3648243462092
              }
            }
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "repulse"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 81.20772123013451,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": false
        }}
          style={{
          width: '90%',
          height: '80%',
          backgroundColor: '#EFF9F4'
        }}/>
        <div className="">
          <div id="rectangle" className="text-square">
            <div className="nav">
              <ul>
                <li className="home">
                  <a href="index.html">
                    <i className="icon1 fa fa-home fa-2x"></i>
                    <span>HOME</span>
                  </a>
                </li>
                <li className="about">
                  <a href="about">
                    <i className="icon1 fa fa-coffee fa-2x"></i>
                    <span>ABOUT</span>
                  </a>
                </li>
                <li className="projects">
                  <a href="#projects">
                    <i className="icon1 fa fa-code fa-2x"></i>
                    <span>PROJECTS</span>
                  </a>
                </li>
                <li className="contact">
                  <a href="#contact">
                    <i className="icon1 fa fa-comment fa-2x"></i>
                    <span>CONTACT</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="splash">
          <div className="row mt-4">
            <div className="col-5 col-sm-4 offset-1">
              <h1 className="subsubtitlepink">ACERCA DE MÍ</h1>
              <br/>
              <span className="littlefont mt-3 pt-2">Soy arquitecta y front-end developer.
                Tengo una pasión inmensa por el código, adoro resolver problemas y me encanta
                trabajar en equipo. Domino HTML, CSS, JavaScript, Bootstrap y Jquery. También he
                trabajado con React-redux.
              </span>
              <br/>
              <p className="littlefont mt-3 pt-2">
                Entre mis más grandes fortalezas encuentras que me encantan los retos, soy súper
                adaptable y me disfruto aprender.
              </p>
              <br/>
              <h1 className="subsubtitlepink">SOFT SKILLS</h1>
              <h3 className='subsubtitleblue'>Lider</h3>
              <h3 className='subsubtitleblue'>Perseverante</h3>
              <h3 className='subsubtitleblue'>Autodidacta</h3>
              <h3 className='subsubtitleblue'>Responsable</h3>
              <h3 className='subsubtitleblue'>Creativa</h3>
              <h3 className='subsubtitleblue'>Entusiasta</h3>
              <h3 className='subsubtitleblue'>Tenaz</h3>
            </div>
            <div className="col-4 col-sm-6 offset-1">
              <h1 className="subsubtitlepink animated tada">MIS HABILIDADES</h1>
              <br/>
              <br/>
              <div className="row">
                <div className="col-2">
                  <i className="fab fa-html5 bigicon "></i>
                </div>
                <div className="col-6">
                  <p></p>
                  <Progress animated value={80}>HTML5 - Avanzado</Progress>
                </div>
              </div>
            <div className="row">
              <div className="col-2">
                <img src="./images/bot.png" height="50px" className=" bigicon2 bigicon" alt="notfound"/>
              </div>
              <div className="col-6">
                <p></p>
                <Progress animated value={80}>Bootstrap - Avanzado</Progress>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="fab fa-github-square bigicon"></i>
              </div>
              <div className="col-6">
                <p></p>
                <Progress animated value={70}>Github - Intermedio</Progress>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="fab fa-css3-alt bigicon"></i>
              </div>
              <div className="col-6">
                <p></p>
                <Progress animated value={70}>CSS3 - Intermedio</Progress>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="fab fa-js-square bigicon"></i>
              </div>
              <div className="col-6">
                <p></p>
                <Progress animated value={70}>JavaScript - Intermedio</Progress>
              </div>
            </div>
          <div className="row">
            <div className="col-2">
              <i className="fab fa-react bigicon"></i>
            </div>
            <div className="col-6">
              <p></p>
              <Progress animated value={60}>React-redux - Intermedio</Progress>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <i className="fab fa-angular bigicon"></i>
            </div>
            <div className="col-6">
              <p></p>
              <Progress animated value={30}>Angular-Principiante</Progress>
            </div>
          </div>
          <h1 className="subsubtitlepink animated tada">Otros</h1>
        </div>
        </div>
        </div>
        </div>
        
    )
  }
}
