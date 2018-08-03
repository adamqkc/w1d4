var countdownGenerator = function (x) {
  var timeLeft = x + 1;

  return function() {
    timeLeft--;
    
    if (timeLeft === 0) {
      return `Blast Off!`;
    } 
    
    if (timeLeft < 0) {
      return `Rockets already gone, bub!`;
    }
    
    return `T-minus ${timeLeft}...`;
  }
};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!

//counter
//check
//modify
//result