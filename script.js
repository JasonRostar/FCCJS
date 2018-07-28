

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];



function golfScore(par, strokes) {
  // Only change code below this line
  if (par >= 1 && strokes === 1) { //"Hole-in-one!"
        return (names[0]); 
 }  else if (par - 2 >= strokes) { //"Eagle"
        return (names[1]); 
 }  else if (par - 1 === strokes) { //"Birdie"
        return (names[2]);
 }  else if (par === strokes) { //"Par"
        return (names[3]);
 }  else if (par + 1 === strokes) { //"Bogey"
        return (names[4]);
 }  else if (par + 2 === strokes) { //"Double Bogey"
        return (names[5]);
 }  else { 
    return (names[6]);
 }
  // Only change code above this line
};

// Change these values to test
console.log(golfScore(5, 2));