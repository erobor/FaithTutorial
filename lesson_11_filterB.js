let numberGames = [1,2,3,4,5,6,7,8,9,0];


const selectNumbers = numberselect => numberselect > 3;
const NumberArray = numberGames.filter(selectNumbers)


console.log(NumberArray)


let women = [20,15,18,33,26,50,41,77,23];

const womenClub = womenClubNew => womenClubNew > 18;
const womenTotal = women.filter(womenClub)

console.log(womenTotal);


let tcccWomen = [
    {
        name: 'dami',
        profession: 'teacher',
        age: 35
    },
    {
        name: 'Cynthia',
        profession: 'Mechanic',
        age: 45
    },
    {
        name: 'Jennifer',
        profession: 'Hair_dresser',
        age: 25
    },
]
const tcccWomenAged = (tccc) => tccc.age > 25
const womenAged = tcccWomen.filter(tcccWomenAged)
console.log(womenAged)

// RECAP OF LAST LESSON

// - .filter()
// returns a brand new array
// that does not include the item you specify in the callback

const grades = [33, 36, 12, 76, 85, 23, 77, 88, 90, 50];

// let newGrades = []
// for (let index = 0; index < grades.length; index++) {
// 	if (grades[index] > 35) {
// 		newGrades.push(grades[index])
// 	}
// }

// console.log(newGrades)


//----------------------------------------------------



// re-implement this using .filter()
const selectPassGrades = (grade) => grade > 35
const arrayOfPasses = grades.filter(selectPassGrades)

console.log(arrayOfPasses)

//----------------------------------------------------


const attendees = [
	{
		name: "Ishaya",
		age: 12,
	},
	{
		name: "Favour",
		age: 17,
	},
	{
		name: "Faith",
		age: 22,
	},
	{
		name: "Jibola",
		age: 33,
	},
	{
		name: "Cynthia",
		age: 18,
	},
]

const removeAllKids = (person) => person.age >= 18
const adults = attendees.filter(removeAllKids)

console.log(adults)




// // EXERCISE

const employees = [
	{
		name: "Ishaya",
		hasIdCard: false,
		hasEmploymentLetter: true
	},
	{
		name: "Favour",
		hasIdCard: true,
		hasEmploymentLetter: true
	},
	{
		name: "Faith",
		hasIdCard: false,
		hasEmploymentLetter: false
	},
	{
		name: "Jibola",
		hasIdCard: true,
		hasEmploymentLetter: false
	},
	{
		name: "Cynthia",
		hasIdCard: false,
		hasEmploymentLetter: false
	},
]

// return a new array that filter employees who do not have an ID card or employment letter
// write your implementation down here

// EXERCISE SOLUTION

const employeesNoID = (staff) => staff.hasIdCard < true
const WithoutId = employees.filter(employeesNoID) 
console.log(WithoutId)

const noEmploymentLetter = (staffEP) => staffEP.hasEmploymentLetter < true
const noemploymentLetterList = employees.filter(noEmploymentLetter)
console.log(noemploymentLetterList)


let introduction = ['hello', 'i', 'am', 'sarah'];
let greetings = introduction[0];
let name = introduction [2];

// console.log(greetings, name)
// console.log(introduction[0]);
// console.log()

// let intro = ['hello', 'i', 'am', 'sarah'];
// let [greeting, pronoun, verb, noun] = intro;
// console.log(intro)
// console.log(greeting)
// console.log(pronoun)
// console.log(verb)
// console.log(noun)

let [greeting, , , shade] = ['hello', 'i', 'am', 'sarah'];
console.log(greeting)
console.log(greeting, shade) 


let person = {country: 'china', name: 'womenAged', location: 'Asia'};

console.log(person.name)