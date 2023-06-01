let person = {
    name: "ade",
    school: "akintan Grammer School",
    age: 27,
    status : "married",

    updateAge: function() {
        return ++person.age;
    }

}

console.log(person.age, person.school);


//---------

let school = {
    schoolName: "Akintan Grammer School",
    location: "Akintan Street, Ojuelegba",
    lga: "Surulere",
    headm: "Seyi Makinde",
    uniformColour: "Blue and White",

    schoolDetails: function() {
        return ++schoolDetails;
    }
}

console.log(school.schoolName)
console.log(school.location)
console.log(school.lga)
console.log(school.headm)
console.log(school.uniformColour)

//---------

let jobs = {
    mechanic: "workshop",
    electrician:"workshop",
    doctor: "hospital",
    farmer: "land",

    profession: function() {
        return ++profession;
    }

}

console.log(jobs.doctor, jobs.farmer)