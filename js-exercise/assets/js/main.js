var name = "Sarah";
console.log('hi! my name is', name);

var favNumber = 23;
var favNumberString = "23";
console.log('my favorite number is', favNumber);

var dogsAreCute = true;
console.log('dogs are cute', dogsAreCute);

var myArray = ['s','a','r','a','h'];
console.log('how do you spell my name?', myArray);


var dataArray = ['tokyo', 'seoul', 19, true];
console.log(dataArray);

var firstName = "Sarah";
var lastName = "Kim";
var space = " ";
console.log(firstName + space + lastName);

var hundred = 30 + 70;
console.log(hundred);

var firstLetter = myArray[0];
var lastLetter = myArray[myArray.length-1]
console.log(firstLetter);
console.log(lastLetter);

var superWord = "supercalifragilisticexpialidocious";
console.log('the length of the word', superWord, 'is', superWord.length);

var nameLength = firstName.length == lastName.length;
console.log('is the length of my first name and my last name the same?', nameLength);

var students = 15;
if (students == 15) {
  console.log('everyone is here');
} else {
  console.log('we are missing people');
}

for ( var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

var date = new Date;
var hour = date.getTime();
var min = date.getMinutes();

if (19 < hour < 21 && min ==40) {
  console.log("the time is between 7PM and 9:40PM");
} else {
  console.log("the time is not between 7PM and 9:40PM");
} 

var day = date.getDay();

if (day == 1) {
  console.log("it's Monday! get some coffee!");
} else if (day == 2) {
  console.log("it's Tuesday! don't give up!");
} else if (day == 3) {
  console.log("it's Wednesday! happy hump day!");
} else if ( day == 4) {
  console.log("it's Thursday! almost there!");
} else if ( day == 5 ) {
  console.log("yay it's Friday! go celebrate!");
} else if (day == 6 ) {
  console.log("it's Saturday! go wild!");
} else if (day == 7) {
  console.log("it's Sunday! rest up!")
}

var favRestaurants = [
  "Tsurutontan",
  "Shanghai Dumpling",
  "PhoBar"
];

var favAnimals = [
  "kangaroos",
  "koalas",
  "shibas"
];

var favPlaces = [
  "central park",
  "k-town",
  "whitney museum"
];

var favPokemon = [
  "snorlax",
  "ditto",
  "togekiss"
];

var favArray = [favRestaurants, favAnimals, favPlaces, favPokemon];

for ( var i = 0; i < favArray.length; i++ ) {
console.log(favArray[i]);
}

for ( var i = 0; i < favArray.length; i++ ) {
  console.log(i + ' ' + favRestaurants[i]);
  console.log(i + ' ' + favAnimals[i]);
  console.log(i + ' ' + favPlaces[i]);
  console.log(i + ' ' + favPokemon[i]);
}




