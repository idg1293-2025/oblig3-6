// make the text boxes appear
// make the text boxes appear
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, { threshold: 0.5 });

const texts = document.querySelectorAll('.scene__text');

texts.forEach(text => {
  observer.observe(text);
});



// idk if working
const images = document.querySelectorAll('img');
images.forEach(image => {
    observer.observe(image);
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#firework1", {
    scrollTrigger: {
        trigger: "#firework1",
        toggleActions: "restart pause reverse pause"
    },
    y: -100,
    opacity: 1,
    scale: 2,
    rotation: 360,
    duration: 3
});


gsap.to("#firework2", {
  scrollTrigger: {
      trigger: "#firework2",
      toggleActions: "restart pause reverse pause"
  },
  y: -150,
  opacity: 1,
  scale:2,
  rotation: 360,
  duration: 5
});

gsap.to("#gamecube", {
  scrollTrigger: {
      trigger: "#gamecube",
      toggleActions: "restart pause reverse pause"
  },
  x: -350,
  duration: 3
});

gsap.to("#car", {
  scrollTrigger: {
      trigger: "#car",
      toggleActions: "restart pause reverse pause"
  },
  x: -390,
  duration: 3
});

gsap.to("#person", {
  scrollTrigger: {
      trigger: "#person",
      toggleActions: "restart pause reverse pause"
  },
  opacity: 1,
  duration: 5
});

gsap.to("#crown", {
  scrollTrigger: {
      trigger: "#crown",
      toggleActions: "restart pause reverse pause"
  },
  opacity: 1,
  duration: 5,
  delay: 1
});

gsap.to("#castle", {
  scrollTrigger: {
      trigger: "#castle",
      toggleActions: "restart pause reverse pause"
  },
  opacity: 1,
  duration: 5,
  delay:1.5
});

gsap.to("#viking-ship", {
  scrollTrigger: {
      trigger: "#viking-ship",
      toggleActions: "restart pause reverse pause"
  },
  x: -390,
  duration: 3
});

gsap.to("#bottle", {
  scrollTrigger: {
      trigger: "#bottle-effect",
      end: "80% 92%",
      markers: true,
      toggleActions: "restart resart pause reset"
  },
  opacity: 0,
  duration: 3
});