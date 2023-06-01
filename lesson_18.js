// FACTORY FUNCTIONS
// factory functions are functions that are simply set up
// to return a new object with encapsulation abilities whenever you call the function.
// the object that is returned is a new instance of the factory/function.

// encapsulation - data hiding

const newPerson = (name, age, city) => {
    // using the object shorthand syntax


    return { name, age, city };
}

const ishaya = newPerson('Ishaya', 100, 'london');
const favour = newPerson('Favour', 200, 'lagos');

console.log(ishaya);
console.log(favour);

console.log(ishaya === favour)


const Animal = (name, type, age, sound) => {
    const makeSound = () => sound;
    const introduce = () => `${name} is a ${age} year-old ${type}`;

    return { makeSound, introduce, name }
}

const newCat = Animal('kitty', 'cat', 4, 'meow!');
const newDog = Animal('billy', 'dog', 8, 'bark!');

console.log(newCat.makeSound())
console.log(newCat.introduce())

console.log(newDog.makeSound())
console.log(newDog.introduce())

console.log(newDog.name)

const createProduct = (name, price, description) => {
    const product = {
        name,
        price,
        description,
        displayInfo: () => `this ${name} is ${description} and it's sold for ${price}`

    }

    return product;
}

let newProduct = createProduct("pen", "$2", "a special golden pen");
let book = createProduct("book", "$20", "Buhari's diary");

console.log(newProduct.displayInfo())
console.log(book.displayInfo())


function nameOfSchool(name, local_Govt_Area, established) {
    var school_details = () => name + local_Govt_Area + established;
    return { school_details }
}

let sch_info = nameOfSchool("High Achievers Secondary School", "Ikorodu_Lagos", 2023)

console.log(sch_info.school_details())


function studentNames(nameOfSchools, established, state, totalNoOfPupils) {
    let anotherSchool = ["Adebayo College", "CCT College", "Acumen College"]

    var schoolsNames = {
        nameOfSchools,
        established,
        state,
        totalNoOfPupils,
        information: () => `${nameOfSchools} was established in ${state} at ${established} with an initial number of pupils totaling ${totalNoOfPupils}, as well others that came later, ${anotherSchool}; `

    }
    return { schoolsNames }
}

var schoolInformation = studentNames("HopeBay College", "Ikoyi-Lagos", 1972, 10)



console.log(schoolInformation)

console.log(schoolInformation.schoolsNames.information())