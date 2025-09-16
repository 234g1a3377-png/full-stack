// simple.js

// A program to calculate the square of numbers
function square(num) {
  return num * num;
}

console.log("Squares of numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(`${i}² = ${square(i)}`);
}
