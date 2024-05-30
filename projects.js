gsap.registerPlugin(ScrollTrigger);
/* gsap.to(".portfolio-project", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    scrub: true,
    markets: true,
    pin: true
  },
  pin: true,
}); */

gsap.to(".portfolio-wrapper li", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    scrub: true,
    markets: true,
  },
  translateY: '-200vh',
});