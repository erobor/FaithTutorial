// function myFunction() {

//     // Create a p element:
//     const para = document.createElement("p");
    
//     // Create a text node:
//     const node = document.createTextNode("This is a paragraph.");
    
//     // Append text node to the p element:
//     para.appendChild(node);
    
//     // Append the p element to the body:
//     document.getElementById("myDIV").appendChild(para);
//     }


    const person = [{
        name : "shola Femi",
        school: "Akintan Grammer School",
        Age: "59 years",
        Marital_Status: "Married"
    },
    {
        name : "Imade Silver",
        school: "Silverfield Grammer School",
        Age: "40 years",
        Marital_Status: "Married"
    }];

    console.log(person)
   
   function personNew() {
        return `Name: ${person[0].name} Name2: ${person[1].name}`
    }
 console.log(personNew())
 

function myFunction() {
   document.getElementById("myInput").setAttribute("type", "button")
}

const results = getElementById("result");
results.addEventListener('click', myFunction() )


