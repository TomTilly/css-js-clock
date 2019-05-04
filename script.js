const hrHand = document.querySelector('.hr-hand');
const minHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.seconds-hand');

function setTime() {
    const now = new Date();

    const seconds = now.getSeconds();
	let secondsDegrees = ((seconds / 60) * 360) - 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    if(seconds === 59){
        secondsDegrees = -96;
        secondsHand.classList.add('no-transition');
        secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
        setTimeout( function () {
            secondsHand.classList.remove('no-transition')
        }, 1000);
    }
    console.log(secondsDegrees);

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) - 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) - 90;
    hrHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setTime, 1000);

setTime();