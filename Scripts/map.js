var gameItems_pot = [

  {
    name:"Half-Smoked Jay",
    price:10,
    potency:10,
  } , {
    name:"Top-Shelf Blunt",
    price:15,
    potency:18,
  } , {
    name:"Goo Ball",
    price:20,
    potency:25
  } , {
    name:"Deluxe Goo Ball",
    price:30,
    potency:40,
  }
];

var gameItems_booze = [
  {
    name:"Coors Light Tallboy",
    price:4,
    potency:4,
  },{
    name:"6 pack of Tecate",
    price:10,
    potency:12,
  },{
    name:"Flask of Cheap Bourbon",
    price:15,
    potency:18,
  },{
    name:"12 Pack of Craft Microbrews"
    price:20,
    potency:25,
  },{
    name:"Bottle of Vodka",
    price:30,
    potency:40,
  }
];

var gameItems_drugs = [
  {},{},{},{},{}
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
    },{

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
    name:"Curds Of A Feather",
    shopNumber:2,
    inventory: [{
      item:"Cheese Curds",
      price:15,
    },{
      item:"Deluxe Goo Ball",
      price:40,
    }]
  },{
    name:"Who's Got Yer Gooballs",
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
    shop: gameShops[0],
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
};
