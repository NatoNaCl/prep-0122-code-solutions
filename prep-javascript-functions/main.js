function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('World');
console.log('getGreeting Exercise:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideResult = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('getFullName Exercise:', fullName);

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);
console.log('cube Exercise:', cubeResult);
