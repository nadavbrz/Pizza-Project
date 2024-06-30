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
  const h1 = document.querySelector("h1");

  h1.addEventListener("mouseover", function () {
    h1.textContent += " 🍕 🍕";
  });

  h1.addEventListener("mouseout", function () {
    h1.textContent = h1.textContent.replace(" 🍕 🍕", "");
  });
});
