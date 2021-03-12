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
  const spec = await dataJson.json();
  console.log(spec);
})();

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
