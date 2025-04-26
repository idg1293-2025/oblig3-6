gsap.registerPlugin( ScrollTrigger );

gsap.to("#firework1", {
    scrollTrigger: {
        trigger: "#firework1",
        toggleActions: "restart pause reverse pause"
    },
    y: -100,
    rotation: 360,
    duration: 3
});

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
  