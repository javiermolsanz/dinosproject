const compareMeBtn = document.getElementById("btn");
const moreDataBtn = document.getElementById("generateFacts");

//create Dino functional mixin with the three comparissons
function Dino(object) {
  return Object.assign({}, object, {
    weightFact: function(humanWeight) {
      if (this.weight > humanWeight) {
        this.fact.push(
          `This dino weighted ${this.weight - humanWeight} pounds more than you`
        );
      } else if (this.weight === humanWeight) {
        this.fact.push(`I can't believe that you weight the same as this dino`);
      } else {
        this.fact.push(
          `You weighted ${humanWeight - this.weight} pounds more than this dino`
        );
      }
    },
    dietFact: function(humanDiet) {
      const fact =
        this.diet === humanDiet
          ? `This dino had the same diet as you`
          : `Unlike you, this dino had a ${this.diet} diet`;
      this.fact.push(fact);
    },
    heightFact: function(humanHeight) {
      if (this.height > humanHeight) {
        this.fact.push(
          `This dino was ${this.height - humanHeight} feet higher than you`
        );
      } else if (this.height === humanHeight) {
        this.fact.push(`I can't believe that you are as high this dino`);
      } else {
        this.fact.push(
          `You are ${humanHeight - this.height} feet higher than the dino`
        );
      }
    }
  });
}

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
      Dino({
        species: element.species,
        weight: element.weight,
        height: element.height,
        diet: element.diet,
        where: element.where,
        when: element.when,
        fact: [element.fact]
      })
      //   new Dino(
      //     element.species,
      //     element.weight,
      //     element.height,
      //     element.diet,
      //     element.where,
      //     element.when,
      //     element.fact
      //   )
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

//function that adds all possible random facts to all dinos but pigeon
const populateFacts = dinos => {
  dinos.forEach(dino => {
    if (dino.species != "Pigeon") {
      dino.weightFact(human.weight);
      dino.dietFact(human.diet);
      dino.heightFact(human.height);
    }
  });
  return dinoArray;
};
//function that appends the tiles to the dom.
const addTiles = (dinos, humanName) => {
  const humanTile = {
    species: humanName,
    fact: "boring human"
  };
  insertAt(dinos, 4, humanTile);
  const grid = document.getElementById("grid");
  for (let i = 0; i < dinos.length; i++) {
    if (i === 4) {
      const html = `<div class="grid-item">
      <h3>${humanName}</h3>
      <img src="./images/human.png" alt="">
      </div>`;
      grid.insertAdjacentHTML("afterbegin", html);
    } else {
      const dinoToShow = dinos[i];
      const factToShow =
        dinoToShow.fact[Math.floor(Math.random() * dinoToShow.fact.length)];
      const html = `<div class="grid-item">
        <h3>${dinoToShow.species}</h3>
        <p>${factToShow}</p>
        <img src="./images/${dinoToShow.species}.png" alt="">
        </div>`;
      grid.insertAdjacentHTML("afterbegin", html);
    }
  }
};

//EVENT LISTENERS

compareMeBtn.addEventListener("click", function(e) {
  e.preventDefault();
  hideForm();
  getDataandDisplay();
});

//event listener that generates new data
moreDataBtn.addEventListener("click", function(e) {
  e.preventDefault();
  removeTiles(grid);
  getDataandDisplay();
});

//function to hide the form from the screen
const hideForm = () => {
  const form = document.getElementById("dino-compare");
  form.style.display = "none";
};

//function that get the data (dino+human) and appends it to the dom. It gets called twice
const getDataandDisplay = () => {
  getData().then(data => {
    ({ dinoArray, human } = data);
    const humanName = human.name;
    const dinoWithFacts = populateFacts(dinoArray);
    addTiles(dinoWithFacts, humanName);
    moreDataBtn.style.display = "block";
  });
};

//utility to insert the human object in the middle of the data array
const insertAt = (array, index, ...elementsArray) => {
  array.splice(index, 0, ...elementsArray);
};

//utility to remove the tiles before adding new data to the dom
const removeTiles = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
};
