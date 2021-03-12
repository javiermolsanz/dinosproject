// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
  (this.species = species),
    (this.weight = weight),
    (this.height = height),
    (this.diet = diet),
    (this.where = where),
    (this.when = when),
    (this.fact = fact);
}
// Create Dino Objects

(async function generateDinoSpecs() {
  const dataJson = await fetch("./dino.json");
  const dinoData = await dataJson.json();
  const dinoArray = [];
  console.log(dinoData);
  //spec.map(e => new Dino(e));
  dinoData.Dinos.map(element => {
    dinoArray.push(
      new Dino(
        element.species,
        element.weight,
        element.height,
        element.diet,
        element.where,
        element.when,
        element.fact
      )
    );
  });
  //console.log(dinoArray);
  generateRandomFact(dinoArray);
})();

const generateRandomFact = dinoArray => {
  const dinoNumber = Math.floor(Math.random() * dinoArray.length);
  console.log(dinoArray[dinoNumber].fact);
  //   Dino.prototype.getDiet = function() {
  //     console.log(`The ${this.species} was ${this.diet}`);
  //   };
  //dinoArray[dinoNumber].getDiet();
  // for (let i = 0; i< dinoArray.length; i++){
  // }
};

// Create Human Object
function Human(name, weight, inches, feet, diet) {
  (this.name = name),
    (this.weight = weight),
    (this.inches = inches),
    (this.feet = feet),
    (this.diet = diet);
}

// Use IIFE to get human data from form

const getData = () => {
  const human = new Human();
  (function getHumanData() {
    human.name = document.getElementById("name").value;
    human.weight = document.getElementById("weight").value;
    human.inches = document.getElementById("inches").value;
    human.feet = document.getElementById("feet").value;
    human.diet = document.getElementById("diet").value;
    console.log(human);

    //it works only if using live server
    //return weight;
  })(human);
};

//usage:

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// On button click, prepare and display infographic
const button = document.getElementById("btn");

button.addEventListener("click", function(e) {
  e.preventDefault();
  //this gets me human data
  getData();
  // Remove form from screen
  hideFormn();
});

const hideFormn = () => {
  const form = document.getElementById("dino-compare");
  form.style.display = "none";
};
