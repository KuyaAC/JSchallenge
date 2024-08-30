// Basic Addition in JS using return
function addition(a, b) {
  return a + b;
}

// Increment by 1
function addition(num) {
  var num = num + 1;
  return num;
}

// Compute Remainder in division (using modulo)
function remainder(x, y) {
  return x % y;
}

//Convert minutes in secs
function convert(minutes) {
  return minutes * 60;
}

//Calculation of perimeter of rectangle
function findPerimeter(length, width) {
  var width = width * 2;
  var length = length * 2;
  return width + length;
}

//return cube of number
function cubes(a) {
  return a ** 3;
}

//add something string to any value set in variable
function giveMeSomething(a) {
  a = "something " + a;
  return a;
}

//calculate age by days
function calcAge(age) {
  age = age * 365;
}

//calculate hours into secs
function calcHour(hours) {
  return hours * (60 * 60);
}

//basketball points Expected Output: points(1, 1) = 5
function points(twoPointers, threePointers) {
  var twoPointers = twoPointers * 2;
  var threePointers = threePointers * 3;
  return twoPointers + threePointers;
}

//Power Calculation Expected Output: circuitPower(230, 10) ➞ 2300
function circuitPower(voltage, current) {
  return voltage * current;
}

//Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  } else return false;
}

//Swap value
function swap(a, b) {
  const tmp = a;
  a = b;
  b = tmp;
  return [a, b];
}
