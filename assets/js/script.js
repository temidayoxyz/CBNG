// function for generating a new business name
function generateBusinessName() {
  // array of words to use in the business name
  let words = ['Creative', 'Design', 'Innovative', 'Artistic', 'Vibrant', 'Elegant', 'Modern', 'Craft', 'Studio', 'Works'];

  // generate a random number between 0 and the number of words in the array
  let randomIndex = Math.floor(Math.random() * words.length);

  // use the random number to select a word from the array
  let firstWord = words[randomIndex];

  // repeat the process for the second word
  randomIndex = Math.floor(Math.random() * words.length);
  let secondWord = words[randomIndex];

  // combine the two words to form the business name
  let businessName = firstWord + ' ' + secondWord;

  // display the generated business name on the page
  let businessNameDisplay = document.getElementById('business-name-display');
  businessNameDisplay.innerHTML = businessName;
}

// add event listener to the generate button to run the function when clicked
let generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', generateBusinessName);
