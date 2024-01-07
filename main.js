let carousel = document.querySelector('.carousel'),
  figure = carousel.querySelector('figure'),
  nav = carousel.querySelector('nav'),
  numImages = figure.childElementCount,
  theta = 1.5 * Math.PI / numImages,
  currImage = 0;

  
nav.addEventListener('click', onClick, true);

let images = document.querySelectorAll('.plan');

images.forEach(function (image) {
  image.addEventListener('click', function () {
    window.location.href = "https://openclassrooms.com/fr/";

  });
});

// // Sélectionnez toutes les images avec la classe 'plan'
// let image = document.querySelectorAll('.plan');

// // Attachez un gestionnaire d'événements à chaque image
// images.forEach(function(image) {
//     image.onclick = function() {
//         window.location.href = "https://openclassrooms.com/fr/";
//     };
// });
