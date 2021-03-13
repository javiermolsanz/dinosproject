// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
  (this.species = species),
    (this.weight = weight),
    (this.height = height),
    (this.diet = diet),
    (this.where = where),
    (this.when = when),
    (this.fact = [fact]);
}

//comparison 1
Dino.prototype.weightFact = function(humanWeight) {
  if (this.weight > humanWeight) {
    this.fact.push(
      `This dino weighted ${this.weight - humanWeight} pounds more than you`
    );
  } else if (this.weight === humanWeight) {
    this.fact.push(`I can't believe that you weight the same as this dino`);
  } else {
    this.fact.push(
      `You weighted ${humanWeight - this.weight} pounds more than the dino`
    );
  }
};

//comparisson 2

Dino.prototype.dietFact = function(humanDiet) {
  const fact =
    this.diet === humanDiet
      ? `This dino had the same diet as you`
      : `Unlike you, this dino had a ${this.diet} diet`;
  this.fact.push(fact);
};

//
Dino.prototype.heightFact = function(humanHeight) {
  if (this.height > humanHeight) {
    this.fact.push(`This dino was ${this.height - humanHeight} feet than you`);
  } else if (this.height === humanHeight) {
    this.fact.push(`I can't believe that you are as high this dino`);
  } else {
    this.fact.push(
      `You are ${humanHeight - this.height} feet higher than the dino`
    );
  }
};

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

const getData = async () => {
  const dataJson = await fetch("./dino.json");
  const dinoData = await dataJson.json();
  const dinoArray = [];

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

  // Use IIFE to get human data from form
  const human = new Human();
  (function getHumanData() {
    human.name = document.getElementById("name").value;
    human.weight = document.getElementById("weight").value;
    human.inches = document.getElementById("inches").value;
    human.feet = document.getElementById("feet").value;
    human.diet = document.getElementById("diet").value;
    human.height = human.inches + human.feet * 12;
  })(human);
  return { dinoArray, human };
};

//const populateFacts =
const populateFacts = dinos => {
  ({ dinoArray, human } = dinos);
  //console.log(dinos);
  dinoArray.forEach(dino => {
    dino.weightFact(human.weight);
    dino.dietFact(human.diet);
    dino.heightFact(human.height);
  });
  return dinoArray;
  console.log(dinoArray);
};

const addTiles = dinos => {
  for (let i = 0; i < dinos.length; i++) {
    if (i != 4) {
      const dinoToShow = dinos[Math.floor(Math.random() * dinos.length)];
      const factToShow =
        dinoToShow.fact[Math.floor(Math.random() * dinoToShow.fact.length)];
      console.log(dinoToShow.species, factToShow);
    }
  }
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
  // Remove form from screen
  hideFormn();
  //this gets me human data
  getData().then(dino => {
    const dinoWithFacts = populateFacts(dino);
    addTiles(dinoWithFacts);
  });
});

const hideFormn = () => {
  const form = document.getElementById("dino-compare");
  form.style.display = "none";
};
