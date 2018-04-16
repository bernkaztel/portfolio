import React, {Component} from 'react';
import Particles from 'react-particles-js';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Carrousel from './carrousel'

export default class projects extends Component {
constructor(){
  super();
  this.getAgora = this.getAgora.bind(this);
  this.getGot = this.getGot.bind(this);
}
getAgora(params) {
  console.log("agora")
}
getGot(params) {
console.log("got")
}
  render() {
    return (
      <div className=" container-fluid m-0 p-0" id="project">
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
              "onClick": {
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
        <div className="row m-0 p-0 splash">
          <div className="col-3">
            <br/>
            <br/>
            <h6 className="subsubtitlepink animated tada m-0 p-0">MIS PROYECTOS</h6>
            <h6 className="subsubtitleblue m-0 p-0">Da click en el logo para ver màs detalles</h6>
            <a onClick={this.getGot}>
              <img src="./images/got.png" alt="" className="project d-block mx-auto"/>
            </a>
            <a onClick={this.getAgora}>
              <img src="./images/agora.png" alt="" className="project d-block mx-auto"/>
            </a>
            <a onClick={this.getAgora}>
              <img src="./images/LOGO.png" alt="" className="project d-block mx-auto"/>
            </a>
            <a onClick={this.getAgora}>
              <img src="./images/lab.png" alt="" className="project d-block mx-auto"/>
            </a>
            <a onClick={this.getAgora}>
              <img src="./images/icee.png" alt="" className="project d-block mx-auto"/>
            </a>
          </div>
          <div className="col-8">
           <Carrousel></Carrousel>

              <div className="info">
                <h6 className="subsubtitlepinky m-0 p-0">Game of Thrones project</h6>
                <span className="tex-center littlefont">Lorem ipsum dolor sit amet endi odio
                  ipsa harum. Aspernatur doloribus nisi deserunt dicta, nobis eius aliquam
                  asperiores.Perspiciatis consectetur recusandae magnam commodi, fuga fugit itaque
                  ab cupiditate distinctio, velit eligendi consequuntur nam dolore optio dolorem
                  alias. Quibusdam veritatis sapiente perspiciatis, aperiam animi nobis commodi
                  dolores repudiandae odit.</span>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
