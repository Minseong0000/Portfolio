gsap.registerPlugin(ScrollTrigger);

gsap.to(".img-wrapper", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",

    scrub: true,
    markers: true,
    pin: true,
  },
});
