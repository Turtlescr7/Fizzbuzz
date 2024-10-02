//function defenition - fizzBuzz with n as parameter
function fizzBuzz(n) {
  //input validation checks if n is a postive interger between 1-99
  // if not error
  if (n <= 0 || n >= 100) {
    console.error("Error: n must be a positive interger between 1 and 99");
    returnl;
  }
  //for loop which iterates 1 to n, incrementing i in each iteration
  for (let i = 1; i <= n; i++) {
    /*divisibility checks and outputs Ex:
    if i is divisible by both 3 and 5 then print
    "FizzBuzz"
    */
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

//calls  the fizzBuzz function with the argument of 15
fizzBuzz(15);
