import { Component, OnInit } from '@angular/core';
import { UserService } from '../server/controllers/user.service';
import { User } from '../server/models/user';
import { MessageService } from '../server/controllers/message.service';
import { Message } from '../server/models/message';

@Component({
  selector: 'app-porfolio-body',
  templateUrl: './porfolio-body.component.html',
  styleUrls: ['./porfolio-body.component.scss']
})
export class PorfolioBodyComponent implements OnInit {

  users = null;
  primaryUser = null;
  newMessage = new Message()

  // particles background
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(
    private _userServices: UserService,
    private _mesageService: MessageService
  ) { }
  ngOnInit() {
    this.getUsers()

    // particles background
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 1,
      // 'background': '#171c37',
      'opacity': 0.9,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#fff'
        },
        shape: {
          type: "circle",
          stroke: {
            width: 5,
            color: "#5c8ba4"
          },
          polygon: {
            nb_sides: 8
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 0,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 170,
          color: "#5c8ba4",
          opacity: 0.9,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              // mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }
    };
  }
  getUsers(){
    this._userServices.getUsers()
    .then(users => {
      this.users = users
      this.primaryUser = users[0]
    })
    .catch(err => console.log(err))
  }

  createMessage(){
    this.newMessage._user = this.primaryUser._id
    this._mesageService.createMessage(this.newMessage)
    .then(status => this.getUsers())
    .catch(err => console.log(err))
    this.newMessage = new Message()
  }

}

