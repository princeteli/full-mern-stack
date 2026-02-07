// header navbar
window.addEventListener("DOMContentLoaded", () => {
  // Animate the header on page load
  gsap.from("#mainHeader", {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });

  // Animate nav links one by one
  gsap.from("#mainHeader nav a", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    delay: 0.6,
    stagger: 0.1,
    ease: "power2.out",
  });
});

// home
window.addEventListener("DOMContentLoaded", () => {
  // Animate entire hero section fade in
  gsap.from("#home", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power4.out",
  });

  // Animate heading
  gsap.from("#home h1", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });

  // Animate paragraph
  gsap.from("#home p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
    ease: "power2.out",
  });

  // Animate buttons with stagger
  gsap.from("#home .flex a", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 1.4,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });
});

// sevices
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate section heading
  gsap.from("#services h2", {
    scrollTrigger: {
      trigger: "#services h2",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  // Animate each service block
  gsap.from("#services .grid > div", {
    scrollTrigger: {
      trigger: "#services .grid",
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });
});
//Why Choose Us
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the heading
  gsap.from("#why h2", {
    scrollTrigger: {
      trigger: "#why h2",
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out",
  });

  // Animate the paragraph under heading
  gsap.from("#why p", {
    scrollTrigger: {
      trigger: "#why p",
      start: "top 90%",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.1,
    ease: "power2.out",
  });

  // Animate each feature card with stagger
  gsap.from("#why .grid > div", {
    scrollTrigger: {
      trigger: "#why .grid",
      start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    delay: 0.2,
    ease: "back.out(1.7)",
  });
});
// portfolio
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Heading
  gsap.from("#portfolio h2", {
    scrollTrigger: {
      trigger: "#portfolio h2",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  // Paragraph
  gsap.from("#portfolio p", {
    scrollTrigger: {
      trigger: "#portfolio p",
      start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    ease: "power2.out",
  });

  // Portfolio Cards (if already in DOM)
  gsap.from("#project > div", {
    scrollTrigger: {
      trigger: "#project",
      start: "top 90%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.5)",
  });
});
// About us
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate Heading
  gsap.from("#about h2", {
    scrollTrigger: {
      trigger: "#about h2",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Animate First Paragraph
  gsap.from("#about p:nth-of-type(1)", {
    scrollTrigger: {
      trigger: "#about p:nth-of-type(1)",
      start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    ease: "power2.out",
  });

  // Animate Second Paragraph
  gsap.from("#about p:nth-of-type(2)", {
    scrollTrigger: {
      trigger: "#about p:nth-of-type(2)",
      start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
  });

  // Animate Vision / Commitment / Expertise cards
  gsap.from("#about .grid > div", {
    scrollTrigger: {
      trigger: "#about .grid",
      start: "top 90%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 0.2,
    ease: "back.out(1.5)",
  });
});
// Contact form
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate Contact heading
  gsap.from("#contact h2", {
    scrollTrigger: {
      trigger: "#contact h2",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Animate Contact paragraph
  gsap.from("#contact p", {
    scrollTrigger: {
      trigger: "#contact p",
      start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
  });

  // Animate form fields one by one with stagger
  gsap.from("#contact form#contactForm > *", {
    scrollTrigger: {
      trigger: "#contact form#contactForm",
      start: "top 90%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    delay: 0.4,
    ease: "back.out(1.7)",
  });
});

// pricing header

// Timeline for better control
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

// Header slide from top
tl.from("#priciHeader", {
  duration: 1,
  y: -100,
  opacity: 0,
})

  // Logo fade-in + scale
  .from(
    "#priciHeader img",
    {
      duration: 0.8,
      opacity: 0,
      scale: 0.5,
    },
    "-=0.6"
  ) // Overlap with header animation

  // Nav links stagger in from top
  .from(
    "#priciHeader nav a",
    {
      duration: 0.6,
      y: -20,
      opacity: 0,
      stagger: 0.15,
    },
    "-=0.4"
  ); // Overlap slightly with logo

