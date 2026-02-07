import { data } from "../config/db.js";

// Function to render the card
function renderCard() {
  const container = document.getElementById("app");

  data.forEach((item) => {
    const html = `
        <div class="max-w-6xl mx-auto px-4 py-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <!-- Image -->
            <div class="overflow-hidden rounded-lg shadow-md">
              <img src="${
                item.image
              }" alt="App Preview" class="w-full transition-transform duration-500 ease-in-out hover:scale-105" />
            </div>

            <!-- Text -->
            <div>
              <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">${
                item.title
              }</h1>
              <p class="text-gray-600 mb-6">${item.description}</p>

              <ul class="space-y-3 mb-8">
                ${item.servicePoints
                  .map(
                    (point) => `
                  <li class="flex items-start gap-2">
                    <img src="./img/check.svg"  alt="Check" class="w-5 h-5 mt-1 bg-green-400 rounded-full" />
                    <span>${point}</span>
                  </li>`
                  )
                  .join("")}
              </ul>

              <a href="https://wa.me/918857098119" target="_blank" rel="noopener noreferrer">
                <button class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-semibold text-lg">
                  BOOK FREE CONSULTATION
                </button>
              </a>
            </div>
          </div>
        </div>
      `;

    container.innerHTML += html;
  });
}

// Call the function after DOM is loaded
document.addEventListener("DOMContentLoaded", renderCard);

// <-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

import { cardData } from "../config/db2.js";


function Cards() {
  const cards = document.getElementById("cards");
  cards.innerHTML = ""; // Clear existing content before rendering

  cardData.forEach((item) => {
    const card = document.createElement("div");

    card.className = `
      bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100
      border border-gray-200 dark:border-gray-700
      hover:bg-indigo-50 dark:hover:bg-gray-700
      hover:text-black dark:hover:text-white
      rounded-xl shadow-lg p-6 m-4 w-full 
      sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] 
      max-w-md transition-all duration-300 ease-in-out transform hover:scale-105
    `;

    card.innerHTML = `
      <h2 class="text-2xl font-bold mb-4 text-center">${item.title}</h2>
      <ul class="space-y-3 mb-6">
        ${item.points
          .map(
            (point) => `
              <li class="flex items-start gap-3 text-base">
                <img src="./img/check.svg" alt="Included" class="w-5 h-5 mt-1 bg-green-500 rounded-full p-1" />
                <span>${point}</span>
              </li>
            `
          )
          .join("")}
      </ul>
      <p class="text-xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4 text-center">
        ₹${item.price.toLocaleString()}
      </p>
    <a href="https://wa.me/918857098119" target="_blank">
      <button  
        class="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg 
               hover:bg-indigo-700 transition duration-300 
               focus:outline-none focus:ring-2 focus:ring-indigo-400"
        aria-label="Book Free Consultancy for ${item.title}"
      >
        Book Free Consultancy
      </button></a>
    `;

    cards.appendChild(card);
  });
}




document.addEventListener("DOMContentLoaded", Cards);
