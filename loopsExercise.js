// LOOPS EXERCISE

// #1
for (i = 1; i <= 7; i++){
    console.log(i);
  }

  console.log("=========");
  
  // #2
  for (i = 5; i <= 25; i+=4){
    console.log(i);
  }
  
  console.log("=========");
  // #3a
  const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
  ];
  
  // #3b
  for (n of wizards){
    console.log(n);
  }
  
  // #4a
  let harryPotterMovies = 0;
  
  // #4b
  while (harryPotterMovies <= 8){
    console.log(harryPotterMovies);
    harryPotterMovies++;
  }

// BONUS

// #5a
for (house of hogwartsHouses){
    for (chr of house){
      console.log(chr);
    }
  }

// #6a
const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
  ];

// #6b
let variable = "";
for (word of quote){
  fullQuote += `${word}`
}
console.log(variable);
