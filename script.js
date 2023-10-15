// Sélectionnez les éléments du DOM
const guessInput = document.getElementById('guessInput');
const checkButton = document.getElementById('checkButton');
const screen = document.querySelector('.sdf');



// Générez un nombre aléatoire pour le juste prix
const minPrice = 1;
const maxPrice = 100;
const correctPrice = getRandomArbitrary(1, 100);
console.log(correctPrice);



// On renvoie un nombre aléatoire entre une valeur min (incluse)
// et une valeur max (exclue)
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}  



// Écoutez le clic sur le bouton de validation
checkButton.addEventListener('click', checkGuess);



// Écoutez l'événement "keydown" sur l'élément d'entrée
guessInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      // Si l'utilisateur appuie sur "Entrée", déclenchez la vérification
      event.preventDefault(); // Empêche le saut de ligne dans l'input
      checkGuess();
    }
});


// Check l'input de l'utilisateur
function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    if (userGuess >= 1 && userGuess <= 100) {  
        if (userGuess === correctPrice) {
          screen.textContent = 'GAGNÉ !';
          //screen.style.backgroundColor = "#00FF00";
        } else if (userGuess < correctPrice) {
          screen.textContent = 'SUPÉRIEUR';
          //screen.style.backgroundColor = "#CD113B";
          guessInput.value = ''; // Effacer le contenu de l'input
        } else if (userGuess > correctPrice) {
          screen.textContent = 'INFÉRIEUR';
          //screen.style.backgroundColor = "#CD113B";
          guessInput.value = ''; // Effacer le contenu de l'input
        }
    }
    else {
        screen.textContent = "T'es con ?"
        guessInput.value = ''; // Effacer le contenu de l'input
    }
};
