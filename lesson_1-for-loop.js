// for & while loop

//rules: const variable = [];

/* 
for  (name of variable) {
    console.log(name)
}

*/

//e.g

const akintanStudent = ['Chima', 'Yetunde', 'Philo', 'Gabriel', 'Mercy'];

for (name of akintanStudent) {
       console.log(`Hello ${name}!`)

    
if (name === 'Yetunde') {
    console.log(`Thats right ${name} is on my list!`)
    break;
}

// .length is used to know the quantity of elements in an array.
const numberList = [1, 2, 3, 4, 5] 

    for (list of numberList) {
    console.log(list)
}
if (name === 'Chima') {
    console.log(`${name} thats correct ${list} `)
    console.log(numberList.length)
    console.log(numberList[2])
    console.log(numberList.at(-1))

}

}


let nameLead = 100;
console.log(`Surely, ${name} is ${nameLead} years old`)



//while  loop

let loading = 0;
while (loading < 5) {
    loading++;
   
}
console.log(loading);


let n = 0;
while (n < 4) {
    n++;
}
console.log(n)

/*
To loop over the elements of the array:

for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
for (let item of arr) – the modern syntax for items only,
for (let i in arr) – never use.
*/

function female () {

  let female = ['hannah', 'beathrice', 'shalom', 'seyi', 'ade']
    console.log(female.length)
    console.log
    
}

female();



let age = ("What is your age?", 18) ;

// conditionally declare a function
if (age < 18) {

  function welcome() {
    console.log("Hello!");
  }

} else {

  function welcome() {
    console.log("Greetings!");
  }

}

// ...use it later


/*let ages = prompt("What is your age?", 18);

let welcome = (ages < 18) ?
  function() { alert("Hello!"); } : 
  function() { alert("Greetings!"); };
*/

  function mile_km (mile) {
   
    var answer = 1.6 * mile * 2;
    var answer2 = 40 * mile * 2;
    return answer * answer2;
    
    function km() {

    }
  }

  console.log(mile_km(10));


 let arrayVal = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];

                                                                          //  let sum = 0;

                                                                          //  for(let i = 0; i < arrayVal.length; i++) {
                                                                          //   sum += arrayVal[i];

                                                                          //  }


                                                                          //  console.log(sum)

                                                                          //reduce is used to sum from the biggest

                                                                          //Reduce();

function sum (acc, arrayVal) {

  return acc + arrayVal;

}

let answer = arrayVal.reduce(sum);
console.log(answer)

let ibafo = [17,19,21,23,25,27,22,]

// function summer(acc, ibafo) {
//   console.log(acc);
//   return acc + ibafo;
// }
 
// let summation = ibafo.reduce(summer, 10);
// console.log(summation)

function findMax (acc, ibafo) {
  if (ibafo > acc) {
    acc = ibafo;
  }
  return acc;
}
let biggest = ibafo.reduce(findMax);
console.log(biggest)

//guide: if (a > b) {
//   return a;
// }


// --------------

// let, var, const

let w = "favour";
var x = 10;
let y = 'faith';
const z = 21;

const faith = "100 Years old";


// to print...

console.log(faith)

console.log(w);
console.log(x);
console.log(y);
console.log(z);

// or use alert( );