var person = {
  firstName: 'Andy',
  lastName: 'Tan',
  hobby: 'Videogames'
};
console.log(person);

var fullName = "This person's name is: " + 'Andy ' + 'Tan' + '.';
console.log(fullName);

person.job = 'Train Conductor';
console.log("This person's current job is: " + person.job + '.');

person.previousJob = 'Restaurant Chef';
console.log("This person's previous job was: " + person.previousJob + '.');

console.log(person);
