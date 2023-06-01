// // SOME SELECTORS AT YOUR DISPOSAL
// // document.getElementById()

const entry = document.getElementById("entrance")
 entry.innerText = "Hi...I got injected from a JS file"

//-------------


// // document.querySelector() - with id
// const entry2 = document.querySelector("#entrance")
// entry2.innerHTML = "I came from a query selector"

// // document.querySelector() - with class
// const entry3 = document.querySelector(".div")
// entry2.innerHTML = "I came from a query selector with class"


// DOM methods
// Element Creation
const div = document.createElement('div');
div.style.color = 'green';
div.style.cssText = 'color: green; background-color: black'
div.setAttribute('class', 'newDiv');
div.innerText = 'My name is Favour'

entry.appendChild(div)
console.log(div.getAttribute('class'))

// // alert("This is Javascript file")
// const username = prompt('what is your name?');
// alert(`Hello ${username}... you are welcome!`);

// const button = document.createElement('button');
// button.innerText = 'click me';
// button.onclick = () => alert('you are welcome!');

// entry.appendChild(button);


// const victoria = document.getElementById('course')
// victoria.innerText = 'Javascript is an interesting Subject' 

// const victoriab = prompt ('Who are you' )
// alert ('Hello ${victoriab}... Welcome!')



const button = document.createElement ('button');
button.innerText = 'Click Me';
button.onclick = () => alert('Can We Discuss?');
entry.appendChild(button);

const buttonClick = document.getElementById('buttoner');
buttonClick.innerText = 'Touch Me';
buttonClick.onclick = () => alert('Can we meet?');
