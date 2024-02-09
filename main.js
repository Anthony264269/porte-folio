document.addEventListener('DOMContentLoaded', function() {
  // Sélectionnez le bouton
  let btnCopierEmail = document.getElementById('copierEmail');

  // Ajoutez un gestionnaire d'événements au clic sur le bouton
  btnCopierEmail.addEventListener('click', function() {
    // Sélectionnez l'adresse e-mail à copier
    let adresseEmail = 'tony264269@gmail.com'; // Remplacez par votre adresse e-mail

    // Créez un élément temporaire pour copier le texte dans le presse-papiers
    let tempInput = document.createElement('input');
    tempInput.value = adresseEmail;
    document.body.appendChild(tempInput);

    // Sélectionnez et copiez le texte
    tempInput.select();
    document.execCommand('copy');

    // Supprimez l'élément temporaire
    document.body.removeChild(tempInput);

    // Affichez une confirmation à l'utilisateur
    alert('Adresse e-mail copiée : ' + adresseEmail);
  });
});