// Include images
let img_src = [
  'assets/img/controller.png',
  'assets/img/mobile.png',
  'assets/img/pc.png',
  'assets/img/vr.png',
  'assets/img/unity.png',
  'assets/img/nintendo.png',
];

// Name images included
let image_type = img_src.map(function(currentEl, index){ return "image" + index});

// Configure particles-js
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": img_src.length, // Number of images
        "density": {
          "enable": true,
          "value_area": 800 // Specify area (Lesser is greater density)
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type":  image_type, // Add images to particle-js
        "stroke": {
          "width": 0,
        },
        "polygon": {
          "nb_sides": 4
        },
        "image": {
          "src": img_src,
          "width": 80,
          "height": 80
        }
      },
      "opacity": {
        "value": 0.8, // Adjust opacity
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 15, // Adjust the image size
        "random": false,
        "anim": {
          "enable": false,
          "speed": 3,
          "size_min": 10,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
      },
      "move": {
        "enable": true,
        "speed": 1, // Speed of particle motion
        "direction": "bottom", // Particles move downwards
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 300,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
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
          "distance": 50,
          "size": 20,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 150,
          "duration": 0.1
        },
        "push": {
          "particles_nb": 1
        },
        "remove": {
          "particles_nb": 1
        }
      }
    },
    "retina_detect": true
  }
);
