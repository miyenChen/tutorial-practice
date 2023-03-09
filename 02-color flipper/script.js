const colors = ['blue', 'red', '#f1a5f8', 'rgba(156, 130, 34'];

const btn = document.getElementById('btn');
const colorName = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.background = colors[randomNumber];
    colorName.textContent = colors[randomNumber];
});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
