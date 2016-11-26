var names = ["Ember", "Echo", "Moon Song", "Energy Turtle", "Lyric", "India", "Wind Song", "August","Rain", "Aspen", "Rainbow Rose", "Jazz", "Shandelle", "Marcus", "Ernesto", "Johnny", "Slim", "Trev", "Adam", "Thomas", "Moon", "Flow", "Frankie", "Applejack"];
var traits = ["spun", "high", "drunk", "hungover", "tripping", "sober", "hungry", "thirsty"];


function Character (name,trait,hasTicket){
  this.name = names[Math.floor(Math.random()*names.length)];
  this.trait = traits[Math.floor(Math.random()*traits.length)];
  this.hasTicket = false;
}

var wook_0 = new Character();
var wook_1 = new Character();
var wook_2 = new Character();
var wook_3 = new Character();
var wook_4 = new Character();
var wook_5 = new Character();
var wook_6 = new Character();
var wook_7 = new Character();
var lotWooks = [wook_0, wook_1, wook_2, wook_3, wook_4, wook_5, wook_6, wook_7];
whoHasTicket();


function randomWook(){
  var a_wook = '';
  a_wook = lotWooks[Math.floor(Math.random()*lotWooks.length)]
  return a_wook;
};

function whoHasTicket(){
  var ticketHolder = randomWook();
  ticketholder.hasTicket = true;

};
