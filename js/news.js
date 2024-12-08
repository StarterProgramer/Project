const characters = [
  {
    name: "Amelia Whitney",
    description: "Amelia Whitney, born on February 5, 1973, is an adventurous and independent spirit. Her journey from tragedy to finding purpose inspires all who know her.",
    image: "https://via.placeholder.com/400"
  },
  {
    name: "John Doe",
    description: "John Doe is a mysterious figure. Known for his bravery and leadership in times of crisis.",
    image: "https://via.placeholder.com/400"
  }
];

const slidesContainer = document.querySelector('.slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Render slides
function renderSlides() {
  slidesContainer.innerHTML = characters
    .map((character, index) => {
      const image = character.image || "https://via.placeholder.com/400";
      const description = character.description || "Description unavailable.";
      return `
        <div class="slide" data-index="${index}">
          <img src="${image}" alt="${character.name}">
          <div>
            <h2>${character.name}</h2>
            <p>${description}</p>
          </div>
        </div>
      `;
    })
    .join('');
}

// Update slider position
function updateSlider() {
  const offset = -currentIndex * 100;
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Add event listeners
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : characters.length - 1;
  updateSlider();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < characters.length - 1) ? currentIndex + 1 : 0;
  updateSlider();
});

// Initial setup
renderSlides();
updateSlider();
