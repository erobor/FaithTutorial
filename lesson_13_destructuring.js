const scores = [56, 57, 78, 99, 57, 87];
console.log(scores)

const shalomScore = scores[0];
const kingScore = scores[2];
const favouriteScore = scores[4]

console.log(shalomScore, kingScore, favouriteScore)

const shuffleArray = Array => Array.sort(() => Math.random() - 0.5);
const dice = [1,2,3,4,5,6,7,8,9,0,];
console.log(shuffleArray(dice))
console.log(shuffleArray(dice))
console.log(shuffleArray(dice))
console.log(shuffleArray(dice))

let platform = {
    namePlatform: "The Convenant",
    Pastor: "Poju Oyemade",
    LGA: "Lagos Mainland",
    Period:{
        December:"15th - 17th",
        April: "10th - 12th",
        September: "5th - 19th"
    } 
}

console.log(platform.Pastor);

let {Pastor, LGA, Period} = platform;

console.log(`${Pastor} will be live at the ${LGA} Mall, Nigeria on the ${Period.April}`);

let newName = platform[0];
console.log(newName)

// formula used for finding out the length of an object

let { length } = "super Man";
console.log(length)

// let books = ['The Gods', 'Toyin Lawani', "Nigeria", ["uche", "simon", "cletus"]];

// let {book, author, location, {}} = books;
// console.log({book, author, location, {a, b, c}})


let user = {
    FirstName: "Erobor", 
    Country: "Nigeria", 
    ToDoList: { 
        Todo1:"do the shopping", 
        Todo2: 'play some game',
        Todo3:"Exercise", 
        Todo4: 'Visit'}

};


console.log(user )

let {FirstName, Country, ToDoList} = user;

console.log( {FirstName, Country, ToDoList})





let magazine = [
    "The Gods are not to blame",
     "Little Mermaind",
   "Authority"
   [
    "The American Hero",
    "Water Goddess",
    "Shattered"
     ]
 
]

let [book1, book2, book3 ] = magazine;


console.log({book1, book2, book3})


// spread array is used to get all the numbers without writing all

// e.g
let numbers = [1,2,3,4,5,6,7,8]

if (index = 0, index )
console.log(...numbers)



// DESTRUCTURING
// objects

const person = {
	name: "Ishaya",
	company: "The Bulb Africa",
	dept: "Engineering",
	location: {
		street: "washington street",
		city: "afghanistan",
		country: "netherlands",
	},
	favorites: {
		food: {
			local: "jollof",
			global: "sharwarma",
		},
		drink: "soft"
	}
}

const favoriteGlobal = person.favorites.food.global

// extract drink, name and local food from the object and 
// put it in a sentence

// ANSWER

const {
    name, 
    drink, 
    food: local
    }
    
 = person;

// let sayName = person.name
// let sayCompany = person.company
// const sayStreet = person.location.city

// console.log(sayName, sayCompany, sayStreet )


const yourName = (name ) => `my name is ${name} `
console.log(yourName(name))

const favourites = ({favourites: {food: {local}}} ) => `My favoutrite food is ${local}`
console.log()

