function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch(val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c": 
        answer = "cat";
        break;
      case "d":
        answer = "stuff";
        break;
      case 4:
        answer = "stuff";
        break;
      default: 
        return "stuff";
        break;
    }
    
    
    // Only change code above this line  
    return answer;  
  }
  
  // Change this value to test
  switchOfStuff(1);
  