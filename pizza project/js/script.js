

document.addEventListener("DOMContentLoaded", function () {
  /// pizza emoji

  const h1 = document.querySelector("h1");
  h1.addEventListener("mouseover", function () {
    h1.textContent += " 🍕 🍕";
  });

  h1.addEventListener("mouseout", function () {
    h1.textContent = h1.textContent.replace(" 🍕 🍕", "");
  });

  /// border style when hover on img

  const galleryItems = document.querySelectorAll(".gallery-item");
  for (let i = 0; i < galleryItems.length; i++) {
    let pic = galleryItems[i];
    pic.addEventListener("mouseover", function () {
      pic.style.border = "1px solid hsl(0, 0%, 60%)";
    });
    pic.addEventListener("mouseout", function () {
      pic.style.border = "none";
    });
  }
});

// menu

const items = ["caesar-salad", "bruschetta", "arancini", "garlic-bread", "bacon", "classic", "four-cheese", "margarita", "olives", "pepperoni", "vegan", "soda", "sprite", "wine", "beer", "water", "cola"];
const overlay = document.querySelector(".overlay");

function showModal(modal) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal(modal) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < items.length; i++) {
    const showButton = document.querySelector(`.show-modal-${items[i]}`);
    const modal = document.querySelector(`.modal-${items[i]}`);
    showButton.addEventListener("click", () => showModal(modal));
}

const closeButtons = document.querySelectorAll(".close-modal");
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", () => {
        closeModal(closeButtons[i].parentElement);
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        const modals = document.querySelectorAll(".modal");
        for (let i = 0; i < modals.length; i++) {
            closeModal(modals[i]);
        }
    }
});


