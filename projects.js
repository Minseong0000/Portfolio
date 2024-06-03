gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "body",
  start: "top top",
  end: "bottom 300vh",
  pin: ".portfolio-wrapper",
  markers: true,
  pinSpacing: false,
});

gsap.to(".portfolio-wrapper li", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    markers: true,
  },
  y: "-312vh",
});
