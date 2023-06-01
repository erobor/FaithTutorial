// two very important array methods
// - .map()
// returns a brand new array with each array item
// based off the expression in the callback

// - .filter()
// returns a brand new array
// that does not include the item you specify in the callback

const numbers = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  
  const newNumbers = [];
  
  // print the square of each item within the array
  console.log(numbers[5] * numbers[5]);
  
  // traditional for loop
  for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index] ** 2);
  }
  
  // for..in loop >>
  // access to the indices of the array
  for (let index in numbers) {
    console.log(index * 2);
  }
  
  // for..of loop >>
  // access to the items of the array
  for (let index of numbers) {
    console.log(index ** 2);
  }
  
  console.log(numbers);
  
  function squareEachNumber(number) {
    return number ** 2;
  }
  const newArray = numbers.map(squareEachNumber);
  
  console.log(newArray);
  
  const peopleData = [
    {
      name: 'Ishaya',
      score: 40,
      transactionLimit: 100000,
    },
    {
      name: 'Favour',
      score: 30,
      transactionLimit: 100000,
    },
    {
      name: 'Faith',
      score: 60,
      transactionLimit: 100000,
    },
  ];
  console.log(peopleData[0].score)
  
  // exercise
  // debug this function
  function add20ToScore(person) {
      return person.score + 20
  }
  
  const newPeopleData = peopleData.map(add20ToScore)
  console.log(newPeopleData)




let peopleDetails =  peopleData;

peopleDetails = peopleDetails.filter(xy => `${xy.name}, ${xy.score}, ${xy.transactionLimit}`);


console.log(peopleDetails);







  // expected output
  // [
  //   {
  //     name: 'Ishaya',
  //     score: 60,
  //     transactionLimit: 100000,
  //   },
  //   {
  //     name: 'Favour',
  //     score: 50,
  //     transactionLimit: 100000,
  //   },
  //   {
  //     name: 'Faith',
  //     score: 80,
  //     transactionLimit: 100000,
  //   },
  // ];
  

  //----------------------------------


 let eroborFamily  = [
{name: "shalom",
school: "vester International",
age: '9 years old',
class: 'grade 5',
familyStatus: 'daughter'
},

{name: "king",
school: "vester International",
age: '7 years old',
class: 'grade 3',
familyStatus: 'son'
},

{name: "victoria",
school: "vester International",
age: '41 years old',
class: 'graduated',
familyStatus: 'wife'
}

  ];

  console.log(eroborFamily[1].age)
  eroborFamily.sort();
  console.log(eroborFamily)

 function  debugfamily(){
  return (eroborFamily.name + eroborFamily.school + eroborFamily.age + eroborFamily.class + eroborFamily.familyStatus)
 }
 console.log(debugfamily())


  // exercise
  // debug this function
  // function add20ToScore(person) {
  //   return person.score + 20


//const newPeopleData = peopleData.map(add20ToScore)
//console.log(newPeopleData)


// example

let vals = [2,3,4,6,7,9,10]
console.log(vals);

function doubler(x) {
  return x * 2;
}
vals.map(doubler);

console.log(vals);


let tunde = [2,3,4,6,7,8,9,10]
// console.log(tunde);
tunde = tunde.map(x => x * 5 );
console.log(tunde)


// let numberss = [
//   2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// console.log(numbers);


// print the addition of N1,000 of each item within the array


// numberss = numberss.map(y => (y * 3 ));
// console.log(numberss)


let loanRequest = [20000,35000,40000,61000,700000,80000,900000,11100,120000,151200,16100,120000,100000]

console.log(loanRequest);

loanRequest = loanRequest.map(charges => (charges + 1000))

console.log(` Process fee: N1,000 - ${loanRequest}`)


let loanFees = loanRequest;

loanFees = loanFees.map( rate => rate + 100 )


console.log(loanFees)

for (amount = 0; amount <= loanFees.length; amount++) {
  console.log(amount);
}


// let sum = 0;
// for (let i = 0; i < loanRequest.length; i++ ) {
  //   sum += loanRequest[i];
// }

// or

let sum = 0;
for(let loanrequestTotal of loanRequest) {
  // sumtotal
  sum += loanrequestTotal;
}
console.log(`Total Payment Received: Nigerian Naira ${sum}`)


//-----------------------------------


//sort 

//formulae object.sort();

// let meme = [14,15,2,3,4,17,18,20,5,9,11]
// console.log(meme);

// meme.sort();
// console.log(meme)


// let meme = ['hi', 'b', 'good', 'c', 'd','watch']
// console.log(meme);

// meme.sort();
// console.log(meme)

let s = "it was a dark and stormy night";
let words = s.split(/W+/). filter(word => word.length > 3);
console.log(words)




let ballotLGA = [10,5,20,12,25,50,22,60,30,21,45,66,58];


  ballotLGA = ballotLGA.map(i => i );

  ballotLGA.sort();
  ballotLGA.push(70,100)
  ballotLGA = ballotLGA.filter(maxNumber => maxNumber !== 22 ? true : false) 


console.log(ballotLGA)

let LGAnames = [
  {name: "Orile", 
  PollingUnitNo: 021,
PollingOfficer: "Adebayo Olumide"
},
{name: "Ikeja", 
PollingUnitNo: 022,
PollingOfficer: "Adebayo Ara"
},
{name: "Apapa", 
PollingUnitNo: 023,
PollingOfficer: "Ayodele Shina"
}
];



console.log(LGAnames[2].PollingOfficer)



console.log(LGAnames)

console.log(`LGA: ${LGAnames[1].name}, PU No.: ${LGAnames[1].PollingUnitNo}, PU Supervisor: ${LGAnames[1].PollingOfficer} `)



//given the array [60, 65, 70, 33, 15

let arrayAssignment = [60, 65, 70, 33, 15];
function xx() {
  return arrayAssignment;
}
console.log(xx)


