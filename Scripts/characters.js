var names = ["Ember", "Echo", "Cosmo", "Zeke", "T-Bird", "Django", "Frankie", "Whisper", "Sundance", "Moon Beam", "Quest", "Energy Turtle", "Lyric", "India", "Wind Song", "August", "Rain", "Aspen","Rainbow Rose", "Jazz", "Shandelle", "Marcus", "Ernesto", "Johnny", "Slim", "Trev", "Adam", "Thomas", "J-Bone", "Flow", "Frankie", "Applejack"];
var traits = ["spun", "high", "drunk", "coked out", "hungover", "tripping", "sober", "hungry", "thirsty"];


function Character (number){
  this.name = names[Math.floor(Math.random()*names.length)];
  this.trait = traits[Math.floor(Math.random()*traits.length)];
  this.hasTicket = false;
  this.wookNumber = number;
  // this.location = gameMap[number].name;
}

/* ==================
Declare Characters
===================*/
var wook_0 = new Character(0);
var wook_1 = new Character(1);
var wook_2 = new Character(2);
var wook_3 = new Character(3);
var wook_4 = new Character(4);
var wook_5 = new Character(5);
var wook_6 = new Character(6);
var wook_7 = new Character(7);
var wook_8 = new Character(8);
var lotWooks = [wook_0, wook_1, wook_2, wook_3, wook_4, wook_5, wook_6, wook_7, wook_8];

whoHasTicket();



/* ==================
Functions
===================*/
function randomWook(){
  var a_wook = {};
  a_wook = lotWooks[Math.floor(Math.random()*lotWooks.length)];
  return a_wook;
};

function whoHasTicket(){
  var ticketHolder = randomWook();
  ticketHolder.hasTicket = true;
};

function getTraits(){
  var x = [];
  x.push(traits[Math.floor(Math.random()*traits.length)]);
  x.push(traits[Math.floor(Math.random()*traits.length)]);
};
