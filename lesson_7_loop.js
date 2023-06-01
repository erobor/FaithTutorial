//const arrayNumber = [1,2,3,4,5,6,7,8,9]
//for(list of arrayNumber){


//}
/*
const arrayNumber = [1,2,3,4,5,6,7,8,9]
for(list of arrayNumber){
console.log(arrayNumber[4]);
break;
}

*/

let x = 3;

for(x = 3; x <= 15; x++){
  console.log(x);
}

const shalom = [5,10,15,20,25,30,32,34,36,38,40];

for(i = 0; i <= shalom.length; i++){
  console.log(i);
}

let fruits = ['mango', 'banana', 'orange', 'carrot', 'watermelon'];

console.log(fruits)

for (z = 0; z < fruits.length; z++){
  console.log(fruits[z])
  console.log(z)
}


//data types

var data = {
  name: 'Erobor Favour',
  age: 37,
  maritalStatus: "Married",
  profession: 'Graphic Artist',
  lga: 'Surulere',
  amount: '...'
}

for (var person in data) {
  console.log(person)
  console.log(`${person}: ${data[person]}`)
}

//to write it's is it/'s



for (z = 1; z <= 10; z++) {
  console.log(z)
}


let even = [2,4,6,8,10,12,14,16,18,20]
for (f = 0; f <= even.length; f++) {
  console.log(f)
}

let names = ['adam', 'peace', 'tina', 'uche']

for (let w = 0; w < names.length; w++ ){
  console.log(names[w]);
}

let nameb = [2,4,6,8,10,12,14,16,18,20]

// even number
for (let p = 2; p <= 20; p = p += 2 ){
  console.log(p)
}