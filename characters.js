var names = ["Ember", "Echo", "Lyric", "Rainbow Rose", "Jazz", "Fudgy", "Marcus", "Ernesto", "Johnny", "Slim", "Trev", "Adam", "Thomas", "Moon", "Flow", "Frankie", "Applejack"];
var traits = ["spun", "high", "drunk", "hungover", "tripping", "sober", "hungry", "thirsty"];


  function Character (name,trait,hasTicket){
    this.name = names[Math.floor(Math.random()*names.length)];
    this.trait = traits[Math.floor(Math.random()*traits.length)];
    this.hasTicket = false;
  }

var wook_1 = new Character()
var wook_2 = new Character()
var wook_3 = new Character()
var wook_4 = new Character()
var wook_5 = new Character()
var wook_6 = new Character()
var wook_7 = new Character()
