function addNumber(a, b) {
    return a + b;

}

function subtractNumber(a, b) {
    return a - b;
}

function divideNumber(a, b) {
    return a / b;
}

function multiplyNumber(a, b) {
    return a * b;
}

console.log(addNumber(10, 20))
console.log(subtractNumber(30, 25))
console.log(multiplyNumber(400, 200))



function greetings(a = 'Hello!', b = 'What can we do for you') {
    return a + b;
}

console.log(greetings('Hello!', ' its good to see you.'))

/*

// strings in function

function electronicGadget (phone, iron = ' electronic solve problems') {
    return phone + iron;
    
  }
  console.log(electronicGadget ('Do not place in a high tension wire,') )


  // function and if statement

  function greetings (person) {
    return  `Hello ${person}!... Its my pleasure to meet you`;
  }

  const new_person = greetings('Rachael')

  console.log(new_person)
  console.log(greetings('Favourite'))


  //exercises

 const nutrient = (carbonhydrate, protein) => {
    console.log(carbonhydrate + protein)
    return([2,5,6,9,5])
 }

 nutrient('rice', ' beans')



 console.log(nutrient[1])



 //exercises

const name = (a, b) => {
    return a + b;
}
console.log(name(12, 6))



//exercise

const calcuLator = (numA, numB) => {
    console.log(`the sum of ${numA} + ${numB} = ` + ( numA + numB))
    console.log(`the sum of ${numA} - ${numB} = ` + ( numA - numB))
    console.log(`the sum of ${numA} x ${numB} = ` + ( numA * numB))
    console.log(`the sum of ${numA} / ${numB} = ` + ( numA / numB))
}

calcuLator(50, 6)

const ageScores = [18, 20, 22, 25, 30];

console.log(`the Age of the first student is ${ageScores[1]}`)
console.log(`The Age of the second student is ${ageScores[2]} + ${ageScores[1]}`)

const scoresText = ['Driver License', 'International Passport', 'National ID', 'Voters Card', 'Employment ID'    ]

console.log(`me and them + ${ageScores[1]} + ${scoresText[2]}`)

const nameArray = (scores, scoresText)  => {
    return scores + scoresText; 
}
ageScores.push(6);

console.log(`The sum of the scores is ${ageScores[2]} and the means of identification is ${scoresText[2]}`);


// statement


const loanmarket = 'advert';

switch(loanmarket) {
    case 'requester':
    case 'news':
    case 'financial':            
    case 'blog':
    case 'advert':
        console.log('This is ' + loanmarket + ' page')
        break;

        default: 
        console.log('Kindly spell correctly the options')

} 

*/

//if statement

let meansOfIdentification = 'Voters Card'

if (meansOfIdentification === 'Driver license') {
    console.log('You have chosen ' + meansOfIdentification);
} else if (meansOfIdentification === 'Voters Card') {
    console.log('You have chosen ' + meansOfIdentification)
} else if (meansOfIdentification === 'National ID') {
    console.log('You have chosen ' + meansOfIdentification)
} else if (meansOfIdentification === 'International passport') {
    console.log('You have chosen ' + meansOfIdentification)
} else if (meansOfIdentification === 'Employment ID') {
    console.log('You have chosen ' + meansOfIdentification)
} else {
    console.log('Select from the options');
}

let nonMeansOfIdentification = meansOfIdentification;
if (meansOfIdentification != meansOfIdentification);



function howManyseconds(hours) {
    return (60 * 60) * (hours);
}
console.log(howManyseconds(2))
console.log(howManyseconds(10))
console.log(howManyseconds(24))


//------

function dating() {

    const dating = 'woman';

    if (dating === 'man') {
        console.log(`he is a ${dating} `)
    } else if (dating === 'woman') {
        console.log(`he is a ${dating} `)
    } else {
        console.log(`he is ${dating} `)
    }
}

dating();

function animals() {

    const animal = 'lion';

    switch (animal) {
        case 'dog':
            console.log(`A ${animal} is an animal`);
            break;
        case 'lion':
            console.log(`A ${animal} is an animal`);
            break;

        case 'cow':
            console.log(`A ${animal} is an animal`);
            break;

        case 'chicken':
            console.log(`A ${animal} is an animal`);
            break;

        default:
            console.log('none is an animal');
    }
}

/*

const animal = 'dog';
    switch (animal) {
        case 'dog' :
            console.log(`A ${animal} is N1,000 naira`);
            break;
        case 'lion' :
            console.log(`A ${animal} is N200,000 naira`);
            break;

        case 'cow' :
                console.log(`A ${animal} is N2,800 naira`);
                break;

        case 'chicken' :
            console.log(`A ${animal} is N300 naira`);
                break;

                default :
                console.log(`A ${animal} is N1,000 naira`);
    }



let basicSalary = 100_000;
let overTime = 20;
let rate = 0.25;

function wageSum(basicSalary, overTime, rate ) { 
    return basicSalary + (overTime * rate);  
}

wageSum();




function wageSum(basicSalary, overTime, rate) { 
    return basicSalary + (overTime * rate);  

}

console.log(wageSum(200000, 20, (5/100)));
*/

//-------




let goods = 8000;
let commision = (4 / 100)

function commisionReceive() {
    return goods * commision;
}
console.log(commisionReceive());

let cars = 650000;
let commisionb = 3 / 100;

function carDealer() {
    return cars * commisionb;
}
console.log(carDealer());

let mattress = 2350;
let taxi = 50;
let sold = 2600;

function profit() {
    return sold - (mattress + taxi);
}
console.log(profit())

let profitP = 200;
let mattressb = 2350;

function Percentage() {
    return (profitP / mattressb) * 100;
}
console.log(Percentage());

let discount = 25 / 100;
let omo = 80;

function reducedPrice() {
    return omo - (discount * omo);
}
console.log(reducedPrice())

let letter25kg = 50;
stamp = 40;

function cost40() {
    return letter25kg * stamp;
}
console.log(`The cost for the 40 letters is N${cost40()}`)


var academic = "university";

switch (academic) {
    case "primary":
        console.log("This is a primary School")
        break;

    case "secondary":
        console.log("This is a secondary School")
        break;

    case "university":
        console.log("This is a university School")
        break;

    case "Post University":
        console.log("This is a Post University School")
        break;

    default:
        console.log("it's none of these")
        break;
}

console.log(academic)