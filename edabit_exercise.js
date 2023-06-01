let objectSize = {
    width : 2,
    lenght: 5,
    height: 1,

volume: function() {
    return (objectSize.width * objectSize.lenght * objectSize.height)
}
}
console.log(objectSize.volume());      


let ati = {
    
    atiNeeds: 50,
    atiWant: 30 ,
    atiSavings: 20,

    budget: function() {
    return (`${ati.atiNeeds}% + ${ati.atiWant}% + ${ati.atiSavings} % = 100%`  )

    }   

}

salary= [100000, 200000]

console.log(ati.budget())

console.log(`${salary[1]}`)

function expense() {
return (`${salary[1]} / ${ati.atiWant} = `)

}

console.log(expense())



let cityFacts = {
    name: "Paris",
    population: "2,000,000",
    continent: "europe",


    citydetails: () => {
        return (`Paris has a population of ${cityFacts.population} and is situated at ${cityFacts.continent}`)


    }

} ,

cityFactsb = {
    name: "Tokyo",
    population: "12,000,000",
    continent: "Asia",

    citydetailsb: () => {

    return (`Tokyo has a population of ${cityFactsb.population} and is situated in ${cityFactsb.continent}`)

    }
}

let fulldata = [cityFacts,cityFactsb]


console.log(fulldata)


for (let v = 0; v < fullData.length; fullData++)

// how do i make multiple list of objects?