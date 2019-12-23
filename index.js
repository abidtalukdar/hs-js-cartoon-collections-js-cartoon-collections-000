function dwarfRollCall(dwarves) {
  var dwarf = "";
  var i; 
  for (i=0; i<=dwarves.length - 1; i++) {
    dwarf+=(i+1 + ". " + dwarves[i] + " ");
  }
  return dwarf;
}
  

function summonCaptainPlanet(planeteerCalls) {
var list = [];
  var i; 
  for (i=0; i<=planeteerCalls.length - 1; i++) {
    list.push( (planeteerCalls[i]).toUpperCase() + "!");
  }
  return list ;
}


function longPlaneteerCalls(words) {
  for (var i=0; i<=words.length - 1; i++) {
    if (words[i].length>4) {
      return true;
    } 
  }
  return false;
}


function findTheCheese (foods) {
  for (var i=0; i<=foods.length - 1; i++) {
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
      return foods[i];
    } 
  }
  return "no cheese!";
}


