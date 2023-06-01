const box = document.getElementById('box')
box.style.width = "25%";
box.style.height = "50px";
box.style.background = "green"
box.style.textAlign = "center"
box.style.borderRadius = "2%"
box.style.paddingTop = "15px"

box.addEventListener('click', () => {
    box.style.width = "100%"
});

box.addEventListener('click', () => {
    box.innerText = "You are welcome!"
});

const option = document.querySelector('.option')
option.style.width = "50%";

const correctText = document.querySelector(".CorrectText")
correctText.addEventListener('click', (e) => {
    correctText.style.background = "green"
});

correctText.addEventListener('click', () => {
    correctText.innerText = "Correct!"
});

