const hrHand = document.querySelector('.hr-hand');
const minHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.seconds-hand');


function initClock(){
	const currentDate = new Date();
	const currentHrs = currentDate.getHours();
	const currentMin = currentDate.getMinutes();
	const currentSec = currentDate.getSeconds();

	hrHand.style.transform = `rotate(${degreesToRotate({ hr: currentHrs })}deg)`;
	minHand.style.transform = `rotate(${degreesToRotate({ min: currentMin })}deg)`;
	secondsHand.style.transform = `rotate(${degreesToRotate({ sec: currentSec })}deg)`;
}

function degreesToRotate(time){
	if(time.hr){
		return (time.hr * 30) - 90;
	}
	if(time.min){
		return (time.min * 6) - 90;
	}
	if(time.sec){
		return (time.sec * 6) - 90;
	}
}

function moveHands(){

}

initClock();
setInterval(moveHands, 1000);

// Hr hand moves 30 degrees every increment
// Min and Sec hand moves 6 degrees every increment