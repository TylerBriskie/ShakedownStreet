var gameItems_pot = [

  {
    name:"Half-Smoked Jay",
    price:5,
    potency:5,
    type:"weed"
  } , {
    name:"Top-Shelf Blunt",
    price:10,
    potency:12,
    type:"weed"
  } , {
    name:"Goo Ball",
    price:15,
    potency:20,
    type:"weed"
  } , {
    name:"Deluxe Goo Ball",
    price:20,
    potency:30,
    type:"weed"
  }
];

var gameItems_booze = [
  {
    name:"Coors Light Tallboy",
    price:4,
    potency:4,
    type:"booze"
  },{
    name:"6 pack of Tecate",
    price:10,
    potency:12,
    type:"booze"
  },{
    name:"Flask of Cheap Bourbon",
    price:15,
    potency:18,
    type:"booze"
  },{
    name:"12 Pack of Craft Microbrews",
    price:20,
    potency:25,
    type:"booze"
  },{
    name:"Bottle of Vodka",
    price:30,
    potency:40,
    type:"booze"
  }
];

var gameItems_food = [
  {
    name:"Grilled Cheese",
    price:5,
    potency:6,
    type: "food"
  },{
    name:"Giant Turkey Leg",
    price:10,
    potency:15,
    type:"food"
  },{
    name:"Half Empty Package Of Fruit Snacks",
    description:"It's mostly just purple flavored",
    price:2,
    potency:2,
    type:"food"
  },{
    name:"Wonton Soup",
    description:"Found behind the port-a-potties.  Could be poisonous",
    price:0,
    potency:-5,
    type:"food"
  },{
    name:"Cheeseburger",
    description:"A cheeseburger, medium rare, with lettuce, onions, and tomato.  Could use a little mustard though.",
    price:10,
    potency:15,
    type:"food"
  }
];

var gameItems_commodities = [
  {
    name:"30th Anniversary Pin",
    description:"A pin from Phish's 30th anniversary tour.  It's in the shape of a dick...",
    price:10,
    potency:15,
    type:"sundries"
  }, {
    name: "New Years Eve Poster",
    description: "2009 at Madison Square Garden.  Good show.",
    price: 15,
    potency: 22,
    type:"sundries"
  }, {
    name: "Grateful Dead Tee",
    description: "It's got some bears dancing on it",
    price: 20,
    potency: 32,
    type:"sundries"

  }, {
    name: "Jon Fishman Replica Moo Moo",
    description: "Just like the one he wears onstage!",
    price: 30,
    potency:43,
    type:"sundries"

  }

];

var gameItems_drugs = [
  {},{},{},{},{},{}
];

var gameShops = [
  {
    name:"Who's Got Yer Gooballs",
    shopNumber:0,
    inventory: [{
      item:"Goo Ball",
      price:25,
      type:"pot",
    },{
      item:"Deluxe Goo Ball",
      price:40,
      type:"pot",
    }]
  },{
    name:"Grilled Cheese Sammiches",
    shopNumber:1,
    inventory: [{
      item:"Grilled Cheese Sandwich",
      price:8,
      type:"food"
    },{
      item:"Side Of Fries",
      price:5,
    },{
      item:"Coors Light",
      price:3,
    }]

  },{
    name:"The Helping Friendly Cook",
    shopNumber:2,
    inventory: [{
      item:"Giant Turkey Leg",
      price:15,
    },{
      item:"Cheeseburger",
      price:40,
    },{
      item:"Coca Cola",
      description:"Hasn't had any cocaine in it since the 50's.  Bummer.",
      price:4,
    }]
  },{
    name:"Ramblin' Roast",
    shopNumber:3,
    inventory: [{
      item:"Goo Ball",
      price:25,
    },{
      item:"Deluxe Goo Ball",
      price:40,
    }]
  },{
    name:"Who's Got Yer Gooballs",
    shopNumber:4,
    inventory: [{
      item:"Goo Ball",
      price:25,
    },{
      item:"Deluxe Goo Ball",
      price:40,
    }]
  }

];
var gameMap =
  [{
    name:'North West Lot',
  },{
    name:'North Lot',
  },{
    name:'North East Lot',
  },{
    name:'West Lot',
  },{
    name:'Central Lot',
  },{
    name:'East Lot',
  },{
    name:'South West Lot',
  },{
    name:'South Lot',
  },{
    name:'South East Lot',
  }];


populateMap();



/*
=================
FUNCTIONS
=================
*/
function populateMap(){
  for (var i=0;i<gameMap.length;i++){
    gameMap[i].wook = lotWooks[i];
  }
  console.log(gameMap);
};
