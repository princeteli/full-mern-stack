const project = [
  {
    title: "Insight Admin Control Panel",
    image: "./img/admin.png",
    descrip: "A modern, fully responsive admin dashboard UI featuring data analytics, real-time charts, and user management capabilities for internal tools.",
  },
  {
    title: "3D Korean Portfolio Showcase",
    image: "./img/korianboy.png",
    descrip: "A stunning 3D website built with Three.js and GSAP, showcasing a Korean character model with interactive animations and immersive visuals.",
  },
  {
    title: "CodeSyntax Interactive 3D Portfolio",
    image: "./img/codesyntax.png",
    descrip: "An eye-catching 3D developer portfolio featuring interactive project sections, smooth animations, and a futuristic user experience.",
  },
  {
    title: "Smart Expense Management App",
    image: "./img/exprenss.png",
    descrip: "Track your daily spending and income with this lightweight finance tracker — includes history, category filters, and real-time balance updates.",
  },
  {
    title: "Classic Tic Tac Toe - JS Game",
    image: "./img/game.png",
    descrip: "A clean and responsive two-player Tic Tac Toe game with instant win/draw detection, reset functionality, and simple game logic using JavaScript.",
  },
  {
    title: "DevDocs - Animated Documentation UI",
    image: "./img/docs.png",
    descrip: "A sleek documentation template designed for developers, featuring animated transitions, smooth scrolling, and TailwindCSS for rapid styling.",
  },
  {
    title: "ThirtySix Studios Showcase Site",
    image: "./img/Thirtysixstudios.png",
    descrip: "A dynamic and branded portfolio site for ThirtySix Studios, with scroll-based animations, project highlights, and responsive design elements.",
  },
  {
    title: "MacBook Pro Product Page Concept",
    image: "./img/MacBook.png",
    descrip: "A high-end landing page concept inspired by Apple's design — complete with scroll-based animations, product focus, and sleek transitions.",
  },
  {
    title: "FutureDesk – SaaS Landing Page Clone",
    image: "./img/Fature.png",
    descrip: "A modern SaaS landing page clone of FutureDesk featuring animated sections, gradient overlays, responsive layouts, and CTA-focused design.",
  },
];


function renderCard() {
  const container = document.getElementById("project");

  project.forEach((item) => {
    const html = `
      <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl transition-colors duration-300">
        <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">${item.title}</h2>
          <p class="text-gray-600 dark:text-gray-300 text-sm">${item.descrip}</p>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}

document.addEventListener("DOMContentLoaded", renderCard);
