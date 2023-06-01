// OBJECTS - are standalone entities that carry information about the properties
// of the object and values of those properties.
// takeaway - all objects have a "property: value" pair

// examples of objects
// cup - has properties
// size: small, medium, large
// color: blue, yellow, black, white
// type: plastic, ceramic, glass 

// person - has properties
// name: Adam, Eve, Favour
// height: 178cm
// skinTone: dark, light
// gender: male, female
// hairColor: black, brown, white

// two ways of creating javascript objects
// 1. object constructor
const cup = new Object();

console.log(cup)

cup.size = "small";
console.log(cup)
cup.color = "white";
console.log(cup)
cup.type = "ceramic"
console.log(cup)


// 2. object literal >>>
const person = {
	name: "Adam",
	height: 176,
	skinTone: "Dark",
	gender: "Male",
	hairColor: "Black",
	isNigerian: false,
	displayInfo: function() {
		return(`${person.name} is a ${person.skinTone} skinned ${person.gender}, he is ${person.height}cm tall, he has a ${person.hairColor} hair and ${person.isNigerian ? "he is nigerian" : "he is not a nigerian"}`)
	},
	courses: ["JavaScript", "React", "Typescript"],
	// nesting
	school: {
		name: "University of Colorado",
		location: "Mushin",
	}
}


// console.log(typeof person.height)
// console.log(typeof person.height.toString())

// person.favColor = "green"

// console.log(person["name"])

// console.log(person)
// person.displayInfo()
// console.log(person.displayInfo())

// console.log(person.school.name)
// console.log(person.school.location)

// console.log(`${person.name} goes to ${person.school.name} and his school is located in ${person.school.location}`)

// // const courses = ["JavaScript", "React", "Typescript"]
// console.log(person.courses[1])

// if (person.isNigerian) {
// 	console.log("he is nigerian")
// } else {
// 	console.log("he is not a nigerian")
// }

// console.log(person.isNigerian ? "he is nigerian" : "he is not a nigerian")

// console.log(person)

// console.log(person.height)
// console.log(typeof person.height)
// console.log(person.isNigerian)
// console.log(typeof person.isNigerian)
// console.log(person.name)
// console.log(typeof person.name)


const total = 100
const exam = 0
const test = 30
const attendance = 1
// if there is no attendance = 0

if (attendance <= 0) {
	console.log(`grade: ${0}`)
} else {
	if (test > 0) {
		console.log(`you wrote the test`)
		if (exam) {
			console.log(`you wrote the exams`)
		} else {
			console.log(`your script is missing`)
		}
	} else {
		console.log(`you did not write the test`)
	}
}

//properties of a stduent: 
//uniform: "White and Brown"
// Dept: "science"
// level: "level 5"
// teacher: "Mr Ade"
// Class-Captain: "Linus"
// FAvourite Sport: "Tennis"



let student = {
title: "Mr",
dept: "Science",
level: "Grade 5",
teacher: "Ade Adebimpe",
ClassCaptain: "Linus John",
favouriteSport: "Football",
sportPersonality: true,

studentInfo: function() {
    return (`My name is ${student.title} ${student.teacher}. I am a ${student.level} teacher in the ${student.dept} department. 
    The Grade 5 Class Captain is ${student.title} ${student.ClassCaptain}, and their favourite sport is ${student.favouriteSport}.`)
}

}

   let linusinfo = [2019, 2020, 2021, 2022,2023];

console.log(`${student.studentInfo()} In ${linusinfo[2]}, they won the departmental competition in their category`);

//array

console.log(student.sportPersonality ? "He's a sport personality" : "He's NOT a sport personality")



// another formular

// let keys = Object.keys(student);
// console.log( 'keys ', keys)


// let entries = Object.entries(student);
// console.log( 'Entries ', entries)



let houseProperties = {
houseType: "Story Building",
houseNo: 8,
houseStreet: "Omilagba",
area: "Ibafo",
lga: "Owode",
state: "Ogun state",
facility1: "security Post",
facility2: "Generator House",
facility3: "Children's Playground",
facility4: "Fencing Paramenters",

houseDetails: function() {
	return (`This property is a ${houseProperties.houseType} situated at No. ${houseProperties.houseNo}  ${houseProperties.houseStreet}
	Street, ${houseProperties.area}, ${houseProperties.lga}, ${houseProperties.state}. Available Faciltites include ${houseProperties.facility1}, ${houseProperties.facility2}, ${houseProperties.facility3}, ${houseProperties.facility4} etc.,`)
},

facilities : [ "Security Post", "Generator House", "Childrens Playground", "Parameter Fencing"  ] 



}

console.log(houseProperties.houseDetails())

console.log(houseProperties.facility1);

let facility1 = "security post";

if (facility1 === "security Post") {
console.log("The House is secured")
}

else if ( facility1 === "Generator House" ) {
	console.log("The facilities is electrified")
}