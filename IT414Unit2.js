// Step 1: Define a function that takes in two numbers and returns the result of adding them
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Step 2: Define a main entry function to call the addNumbers function
function main() {
  const result = addNumbers(2, 3);
  console.log(`The result is: ${result}`);
}

// Step 3: Define a unit test that automatically tests the addNumbers function
function testAddNumbers() {
  const result = addNumbers(2, 3);
  if (result !== 5) {
    throw new Error(`Expected 5 but got ${result}`);
  }
}

// Call the main entry function to run the program
main();

// Call the unit test function to test the addNumbers function
testAddNumbers();