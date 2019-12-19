// add solution here
var beatlesFact = [];

const musicians = ["John Lennon", 
                  "Paul McCartney", 
                  "George Harrison", 
                  "Ringo Starr"];
                  
const instruments = ["Guitar", 
                    "Bass Guitar", 
                    "Lead Guitar", 
                    "Drums"];
                    
const facts = ["He was the last Beatle to learn to drive",
              "He was never a vegetarian",
              "He was a choir boy and boy scout",
              "He hated the sound of his own voice"];

var shoutFacts = [];

function theBeatlesPlay() {
  for (var i = 0; i < musicians.length; i++) {
    beatlesFact.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatlesFact;
}


function johnLennonFacts() {
  var i = 0;
  while (i < facts.length) {
    shoutFacts.push(facts[i] + "!!!");
    i++;
  }
  return shoutFacts;
}

function iLoveTheBeatles(num) {
  var love = [];
  do {
    love.push("I love the Beatles!");
  } while (num < 15);
  return love;
}

