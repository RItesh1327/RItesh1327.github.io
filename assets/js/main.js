document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 50,
                density: { enable: true, value_area: 1000 }
            },
            color: { value: "#00aaff" }, // Blue color
            shape: {
                type: "image", // Use image shape
                stroke: { width: 1, color: "#ffffff" }, // White stroke around images
                image: {
                    src: "assets/img/pc.svg", // Default image (initially empty)
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.8, // Higher opacity
                random: true, // Random opacity
                anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false }
            },
            size: {
                value: 5, // Larger particles
                random: true, // Random sizes
                anim: { enable: true, speed: 10, size_min: 0.5, sync: false }
            },
            line_linked: {
                enable: false // Disable connecting lines
            },
            move: {
                enable: true,
                speed: 6, // Faster movement
                direction: "bottom", // Particles move downward
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" }, // Repulse particles on hover
                onclick: { enable: true, mode: "bubble" }, // Bubble effect on click
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 250, size: 10, duration: 2, opacity: 1, speed: 3 },
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });

    // Function to randomly choose an image for each particle
    function getRandomImage() {
        const images = [
            "assets/img/pc.svg",
            "assets/img/vr.svg",
            "assets/img/controller.svg",
            "assets/img/oculus.svg"
        ];
        return images[Math.floor(Math.random() * images.length)];
    }

    // Update particles after initialization
    setTimeout(() => {
        const particles = window.pJSDom[0].pJS.particles.array;
        particles.forEach(particle => {
            const imgSrc = getRandomImage();
            // Update each particle's image
            particle.img = new Image();
            particle.img.src = imgSrc;
            particle.img.onload = () => {
                particle.img.loaded = true;
            };
        });
    }, 500);
}, false);
