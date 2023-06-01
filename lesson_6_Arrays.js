// *** ARRAYS ***
// Changing Elements
// Length of an array

// USEFUL AND MOST USED ARRAY METHODS
// push() - adds item(s) to the end of the array
// unshift() - adds item(s) to the beginning of the array
// pop() - removes one item at the end of the array
// shift() - removes one item at the beginning of the array
// toString() - converts all items in the array to a string of comma-separated values
// join() - converts all items in the array to a string of custom-separated values
// concat() - joins multiple arrays together

// coming soon
// slice() and splice()

// undefined holes

let scores = []
scores[0] = 80
scores[2] = 75
console.log(scores.length)
scores[3] = 45
scores[1] = 35

console.log(scores)

// push() - adds item(s) to the end of the array
scores.push(90)
console.log(scores)

scores.push(72, 59)
console.log(scores)

scores.push(72, 59, 67, 88)
console.log(scores)

// unshift() - adds item(s) to the beginning of the array
scores.unshift(33)
console.log(scores)

console.log(scores.unshift(99))
console.log(scores)

scores.unshift(99, 74, 33, 0)
console.log(scores)

// pop() - removes one item at the end of the array
scores.pop()
console.log(scores)

console.log(scores.pop())
console.log(scores)

// shift() - removes one item at the beginning of the array
scores.shift()
console.log(scores)

console.log(scores.shift())
console.log(scores)

// toString() - converts all items in the array to a string of comma-separated values
const stringifiedArray = scores.toString()
console.log(`stringified array = ${stringifiedArray}`)

// join() - converts all items in the array to a string of custom-separated values
const anotherStringifiedValue = scores.join(" - ")
console.log(`stringified array = ${anotherStringifiedValue}`)


// concat() - joins multiple arrays together
let staffList = []
let productTeam = []

const engineeringTeam = ["Adam", "Ishaya", "Favour", "Deborah"]
const designTeam = ["Daniel", "Oscar", "Chinyere", "Isaac", "Sandra"]
const hrTeam = ["Akintayo", "Faith"]
const cleaners = ["Joseph", "Tony", "Timothy"]

productTeam = engineeringTeam.concat(designTeam)
console.log(productTeam)
console.log(engineeringTeam)

staffList = productTeam.concat(hrTeam, cleaners, ["newPerson1", "newPerson2"])
console.log(staffList)





// deviation
function addTwoNumbers(number1, number2) {
	return number1 + number2
}

const sum = addTwoNumbers(4, 6)
console.log(sum);

console.log(typeof staffList)

const personName = "Ishaya"
console.log(personName.toUpperCase())


let programmers = ["shina", "pelumi", "faith", "favour", "ishaya"]
console.log(programmers.length-1)

programmers.pop("ade")
console.log(programmers)


console.log(programmers.sort())

let server = programmers.push("chidi", "joshua");
console.log(server)


let numbers = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


for (let index  = 0; index < numbers.length; index++ ) {
	console.log(numbers[index] **2);
}

for (let index in numbers) {
	console.log(index * 2)
}

	for (index of numbers) {
		console.log(index * 2)
	}

let people = [10,20,30,40,50,60,70,80,90,100,10]

// From my understanding: for of is used for getting the object in an index

for (const index of people) {
	console.log(index *2)
	
}

//** is a square-root formulae */

for (const index in people) {
	console.log(index)
}

// From my understanding: for and for in have similarities interms of extracting the numbers of index in an object

for (let index = 0; index < people.length; index++) {
	console.log(index )
	if (index < 5) {
		console.log(index)
	}
}


//---------------------------------------
// exercises on array

let getValue = [1,2,3];

console.log(getValue[0])

let xx = [1,2,3,4,5]

function xxArray() {
	return xx[0];
}
console.log(xxArray());


let xyz = [ 80, 5, 100   ]

function xyxArray() {
	return xyz[0];
}
console.log(xyxArray())


let pair = [512124,215];

function makePair() {
	return pair;
}

console.log(makePair())

