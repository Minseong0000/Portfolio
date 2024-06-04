gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "body",
  start: "top top",
  end: "bottom 300vh",
  pin: ".portfolio-wrapper",
  markers: false,
  pinSpacing: false,
});

gsap.to(".portfolio-wrapper li", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    markers: false,
  },
  y: "-312vh",
});

gsap.to(".poster img", {
  scale: 1.2,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    markers: false,
  },
  y: 50,
});

ScrollTrigger.create({
  trigger: ".vivienne-westwood",
  start: "200vh top",
  onEnter: () => gsap.to(".img-container1 img", { display: "none" }),
  onLeaveBack: () => gsap.to(".img-container1 img", { display: "block" }),
});

ScrollTrigger.create({
  trigger: ".second",
  start: "90vh top",
  onEnter: () => gsap.to(".img-container2", { display: "none" }),
  onLeaveBack: () => gsap.to(".img-container2", { display: "block" }),
});

ScrollTrigger.create({
  trigger: ".third",
  start: "90vh top",
  onEnter: () => gsap.to(".img-container3", { display: "none" }),
  onLeaveBack: () => gsap.to(".img-container3", { display: "block" }),
});

// ===================================

ScrollTrigger.create({
  trigger: ".vivienne-westwood",
  start: "200vh top",
  onEnter: () =>
    gsap.to(".portfolio-wrapper", {
      background: "linear-gradient(to right bottom, #fff, #E0EBED)",
    }),
  onLeaveBack: () =>
    gsap.to(".portfolio-wrapper", {
      background:
        "linear-gradient(to right bottom, #fff, #ddd, rgb(77, 125, 96, 0.5))",
    }),
});

ScrollTrigger.create({
  trigger: ".second",
  start: "90vh top",
  onEnter: () => gsap.to(".portfolio-wrapper", { backgroundColor: "orange" }),
  onLeaveBack: () =>
    gsap.to(".portfolio-wrapper", { backgroundColor: "#f8b400" }),
});

ScrollTrigger.create({
  trigger: ".third",
  start: "90vh top",
  onEnter: () => gsap.to(".portfolio-wrapper", { backgroundColor: "red" }),
  onLeaveBack: () =>
    gsap.to(".portfolio-wrapper", { backgroundColor: "orange" }),
});

// =======================================

ScrollTrigger.create({
  trigger: ".vivienne-westwood",
  start: "90vh top",
  onEnter: () =>
    gsap.to(".portfolio-list ul li:first-child", { color: "#9F9F9F" }),
  onLeaveBack: () =>
    gsap.to(".portfolio-list ul li:first-child", { color: "#000" }),
});
ScrollTrigger.create({
  trigger: ".vivienne-westwood",
  start: "90vh top",
  onEnter: () =>
    gsap.to(".portfolio-list ul li:nth-child(2)", { color: "#000" }),
  onLeaveBack: () =>
    gsap.to(".portfolio-list ul li:nth-child(2)", { color: "#9f9f9f" }),
});

ScrollTrigger.create({
  trigger: ".second",
  start: "90vh top",
  onEnter: () =>
    gsap.to(".portfolio-list ul li:nth-child(2)", { color: "#9f9f9f" }),
  onLeaveBack: () =>
    gsap.to(".portfolio-list ul li:nth-child(2)", { color: "#000" }),
});
ScrollTrigger.create({
  trigger: ".second",
  start: "90vh top",
  onEnter: () =>
    gsap.to(".portfolio-list ul li:nth-child(3)", { color: "#000" }),
  onLeaveBack: () =>
    gsap.to(".portfolio-list ul li:nth-child(3)", { color: "#9f9f9f" }),
});

ScrollTrigger.create({
  trigger: ".third",
  start: "90vh top",
  onEnter: () =>
    gsap.to(".portfolio-list ul li:nth-child(3)", { color: "#9f9f9f" }),
  onLeaveBack: () =>
    gsap.to(".portfolio-list ul li:nth-child(3)", { color: "#000" }),
});
ScrollTrigger.create({
  trigger: ".third",
  start: "90vh top",
  onEnter: () =>
    gsap.to(".portfolio-list ul li:nth-child(4)", { color: "#000" }),
  onLeaveBack: () =>
    gsap.to(".portfolio-list ul li:nth-child(4)", { color: "#9f9f9f" }),
});
