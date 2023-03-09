//指定日期`,必須是字串
// const newYear = '1 Jan 2023';
// const newYear = '2023 01 1';
// const newYearDate = new Date(newYear);
//當下時間
// const datetime = new Date();

const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');

const newYear = '1 Jan 2023';
function countdown() {
    const newYearDate = new Date(newYear);
    const datetime = new Date();

    const allSeconds = (newYearDate - datetime) / 1000;
    const days = Math.floor(allSeconds / 3600 / 24);
    const hours = Math.floor(allSeconds / 3600) % 24;
    const mins = Math.floor(allSeconds / 60) % 60;
    const seconds = Math.floor(allSeconds) % 60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minsE1.innerHTML = mins;
    secondsE1.innerHTML = seconds;
    // console.log(days, hours, mins, seconds);
}

countdown();
setInterval(countdown, 1000);

////tutorial :
