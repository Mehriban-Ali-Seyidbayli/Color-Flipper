const colors = ["red", "green", "rgba(133,122,200)", "#f15025"];
const btnn = document.querySelector('#btn');
const colorr = document.querySelector('.color ');
btnn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    colorr.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}