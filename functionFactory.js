var mainPerson = (employment_status, salary, age) => {
    return {employment_status, salary, age};
}

console.log(mainPerson("employed", 200000, 50));

const gbagada = mainPerson("unemployed", 140000, 25);
const daniel = mainPerson("self-employed", 300000, 34);
console.log(gbagada, daniel);

var plus = (gbagada.salary + daniel.salary);
console.log(plus)



// let hero = "superman";
// let women = "tccc";

// function info() {
//     return {hero, women}
// }
// console.log(info());

function info(hero, status,surname, location) {
    return {hero, status, surname, location};

    const newHero = () => `${hero} This is my hero` ;

}

var newinfo = info("superman", "adult", "elijah", "lagos");
const newMember = info(` ${"Adebimpe"}, ${"teen"}, with the surname ${"wellington"}, living at ${"Ibadan"}`)

console.log(newinfo);

console.log(newMember);


function furniture(name, size, coverType, color) {

       const details = () => { `the size is ${size} and the cover material is ${coverType} ${color}` } 

    return{
        name : name,
        size : size,
        coverType : coverType,
        color: color,
       
        details,
}}

const newFurniture = furniture("chair", 24, "leather", "green", );

console.log(newFurniture);


function family(name, age, eyeColor, gender) {
    const nameOfFamily = name;
   
    const familyDetails = () => `My surname is ${name}. I am ${age} years old and a ${gender}. I have ${eyeColor} eyes`;

    return { 
        name, 
        age, 
        eyeColor, 
        gender,
        nameOfFamily,
        familyDetails}
}

familyInfo = family("Erobor", 9, "black", "female" );

console.log(familyInfo);
console.log(familyInfo.familyDetails());


function houses(number, color, landlord, street, ) {

    const houseDetails = () => `i live at ${number} ${street} street, Lagos, My house is a mixture of ${color}`

    return{ 
        number, 
        color, 
        landlord, 
        street, 
        houseDetails  }
}

const houseInfo = houses(12, ["brown", "blue", "green"], "Osagie", "lucky Osa");

console.log(houseInfo);

console.log(houseInfo.houseDetails())
