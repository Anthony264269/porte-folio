// Sélectionnez toutes les images avec la classe 'plan'
let images = document.querySelectorAll('.plan');
console.log(images);
// Attachez un gestionnaire d'événements à chaque image
images.forEach(function(image) {
    image.onclick = function() {
      
        window.location.href = "https://openclassrooms.com/fr/";
    };
});
