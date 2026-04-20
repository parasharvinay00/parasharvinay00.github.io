const cats = [
  {
    id: "miso",
    name: "Miso",
    emoji: "🐈",
    age: "2 years",
    energy: "Playful",
    home: "Kids, couples",
    breed: "Ginger tabby",
    tagline: "A living spark plug with a soft side.",
    description:
      "Miso charges into every room like it belongs to him, then curls up beside the nearest warm laptop. He does well in active homes and likes puzzle toys.",
    chips: ["Indoor", "Toy-driven", "Lap cat in disguise"],
    compatibility: "Great for first-time adopters",
  },
  {
    id: "olive",
    name: "Olive",
    emoji: "🐈‍⬛",
    age: "4 years",
    energy: "Calm",
    home: "Quiet apartments",
    breed: "Bombay mix",
    tagline: "Low drama, high elegance.",
    description:
      "Olive is the cat for people who want a graceful companion with excellent nap discipline. She enjoys window watching, chin scratches, and slow introductions.",
    chips: ["Gentle", "Apartment-ready", "Independent"],
    compatibility: "Best with calm routines",
  },
  {
    id: "pixel",
    name: "Pixel",
    emoji: "😺",
    age: "8 months",
    energy: "Very high",
    home: "Busy homes",
    breed: "Tuxedo kitten",
    tagline: "Tiny chaos agent, extremely lovable.",
    description:
      "Pixel is pure kitten velocity. He wants climbing space, feather toys, and someone who thinks zoomies are charming instead of alarming.",
    chips: ["Kitten", "Climber", "Social"],
    compatibility: "Perfect with another playful pet",
  },
  {
    id: "luna",
    name: "Luna",
    emoji: "😸",
    age: "3 years",
    energy: "Balanced",
    home: "Remote workers",
    breed: "Silver shorthair",
    tagline: "Part coworker, part therapist.",
    description:
      "Luna likes calm company and predictable rhythms. She settles near desks, checks in on video calls, and gives affectionate head bumps after meals.",
    chips: ["People-focused", "Routine-loving", "Sweet"],
    compatibility: "Ideal for work-from-home households",
  },
];

const grid = document.getElementById("cat-grid");
const quickView = document.getElementById("quick-view");
const detailName = document.getElementById("detail-name");
const detailTagline = document.getElementById("detail-tagline");
const detailVisual = document.getElementById("detail-visual");
const detailAge = document.getElementById("detail-age");
const detailEnergy = document.getElementById("detail-energy");
const detailHome = document.getElementById("detail-home");
const detailChips = document.getElementById("detail-chips");
const detailDescription = document.getElementById("detail-description");
const adoptButton = document.getElementById("adopt-button");

function renderCards() {
  grid.innerHTML = cats
    .map(
      (cat) => `
        <article class="cat-card" data-cat-id="${cat.id}">
          <div class="cat-card-top">
            <div>
              <h3>${cat.name}</h3>
              <p class="cat-meta">${cat.breed} • ${cat.age}</p>
            </div>
            <div class="cat-avatar" aria-hidden="true">${cat.emoji}</div>
          </div>

          <p class="cat-description">${cat.tagline}</p>

          <div class="chip-row">
            ${cat.chips.map((chip) => `<span class="chip">${chip}</span>`).join("")}
          </div>

          <div class="card-actions">
            <span class="compatibility">${cat.compatibility}</span>
            <button class="quick-trigger" type="button" data-action="quick-view">
              Quick view
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function updateQuickView(catId) {
  const selectedCat = cats.find((cat) => cat.id === catId);
  if (!selectedCat) return;

  detailName.textContent = selectedCat.name;
  detailTagline.textContent = selectedCat.tagline;
  detailVisual.innerHTML = `<span>${selectedCat.emoji}</span>`;
  detailAge.textContent = selectedCat.age;
  detailEnergy.textContent = selectedCat.energy;
  detailHome.textContent = selectedCat.home;
  detailDescription.textContent = selectedCat.description;
  detailChips.innerHTML = selectedCat.chips
    .map((chip) => `<span class="chip">${chip}</span>`)
    .join("");

  adoptButton.disabled = false;
  adoptButton.textContent = `Adopt ${selectedCat.name}`;
  adoptButton.dataset.catId = selectedCat.id;

  document.querySelectorAll(".cat-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.catId === catId);
  });

  if (window.innerWidth < 960) {
    quickView.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".cat-card");
  if (!card) return;

  updateQuickView(card.dataset.catId);
});

adoptButton.addEventListener("click", () => {
  const selectedId = adoptButton.dataset.catId;
  const selectedCat = cats.find((cat) => cat.id === selectedId);
  if (!selectedCat) return;

  adoptButton.textContent = `${selectedCat.name} is on hold`;
});

renderCards();
updateQuickView(cats[0].id);
