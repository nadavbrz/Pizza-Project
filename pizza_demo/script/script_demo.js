// Example of DOM manipulation
// document.addEventListener('DOMContentLoaded', function() {
//     const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

//     headings.forEach(function(heading) {
//         heading.addEventListener('mouseover', function() {
//             this.style.backgroundColor = '#c6c6c6';
//         });

//         heading.addEventListener('mouseout', function() {
//             this.style.backgroundColor = '#f4f4f4';
//         });
//     });
// });

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
