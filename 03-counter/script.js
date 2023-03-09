const number = document.querySelector('.number');
const btns = document.querySelectorAll('.btn');
// console.log(btns);

//classList獲得class
//currentTarget抓取當前目標資料
//contains('')包含括弧內的文字時
let count = 0;
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            number.style.color = 'green';
        }
        if (count < 0) {
            number.style.color = 'red';
        }
        if (count === 0) {
            number.style.color = 'rgb(125, 70, 136)';
        }
        number.textContent = count;
    });
});
