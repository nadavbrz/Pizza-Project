

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

let modalCaesarSalad = document.querySelector(".modal-caesar-salad");
let modalBruschetta = document.querySelector(".modal-bruschetta");
let modalArancini = document.querySelector(".modal-arancini");
let modalGarlicBread = document.querySelector(".modal-garlic-bread");
let modalBacon = document.querySelector(".modal-bacon");
let modalClassic = document.querySelector(".modal-classic");
let modalFourCheese = document.querySelector(".modal-four-cheese");
let modalMargarita = document.querySelector(".modal-margarita");
let modalOlives = document.querySelector(".modal-olives");
let modalPepperoni = document.querySelector(".modal-pepperoni");
let modalVegan = document.querySelector(".modal-vegan");
let modalSoda = document.querySelector(".modal-soda");
let modalWine = document.querySelector(".modal-wine");
let modalBeer = document.querySelector(".modal-beer");
let modalWater = document.querySelector(".modal-water");
let modalCola = document.querySelector(".modal-cola");
let modalSprite = document.querySelector(".modal-sprite");

let overlay = document.querySelector(".overlay");

document.querySelector(".show-modal-caesar-salad").addEventListener("click", function () {
    modalCaesarSalad.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

document.querySelector(".show-modal-bruschetta").addEventListener("click", function () {
    modalBruschetta.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

document.querySelector(".show-modal-arancini").addEventListener("click", function () {
    modalArancini.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

document.querySelector(".show-modal-garlic-bread").addEventListener("click", function () {
    modalGarlicBread.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

document.querySelector(".show-modal-bacon").addEventListener("click", function () {
    modalBacon.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

document.querySelector(".show-modal-classic").addEventListener("click", function () {
    modalClassic.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

document.querySelector(".show-modal-four-cheese").addEventListener("click", function () {
    modalFourCheese.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

document.querySelector(".show-modal-margarita").addEventListener("click", function () {
    modalMargarita.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

document.querySelector(".show-modal-olives").addEventListener("click", function () {
    modalOlives.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

document.querySelector(".show-modal-pepperoni").addEventListener("click", function () {
    modalPepperoni.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

document.querySelector(".show-modal-vegan").addEventListener("click", function () {
    modalVegan.classList.remove("hidden");
    overlay.classList.remove("hidden");
});
document.querySelector(".show-modal-soda").addEventListener("click", function () {
    modalSoda.classList.remove("hidden");
    overlay.classList.remove("hidden");
});
document.querySelector(".show-modal-sprite").addEventListener("click", function () {
    modalSprite.classList.remove("hidden");
    overlay.classList.remove("hidden");
});
document.querySelector(".show-modal-wine").addEventListener("click", function () {
    modalWine.classList.remove("hidden");
    overlay.classList.remove("hidden");
});
document.querySelector(".show-modal-beer").addEventListener("click", function () {
    modalBeer.classList.remove("hidden");
    overlay.classList.remove("hidden");
});
document.querySelector(".show-modal-water").addEventListener("click", function () {
    modalWater.classList.remove("hidden");
    overlay.classList.remove("hidden");
});
document.querySelector(".show-modal-cola").addEventListener("click", function () {
    modalCola.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

let closeButtons = document.querySelectorAll(".close-modal");
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function () {
    closeButtons[i].parentElement.classList.add("hidden");
    overlay.classList.add("hidden");
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    let modals = document.querySelectorAll(".modal");
    for (let i = 0; i < modals.length; i++) {
      modals[i].classList.add("hidden");
    }
    overlay.classList.add("hidden");
  }
});

