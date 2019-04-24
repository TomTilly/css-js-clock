const hrHand = document.querySelector('.hr-hand');
const minHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.seconds-hand');

function degreesToRotate(time){
	if('hrs' in time){
		return (time.hrs * 30) - 90;
	}
	if('min' in time){
		return (time.min * 6) - 90;
	}
	if('sec' in time){
		return (time.sec * 6) - 90;
	}
}

function getCurrentTime(){
	const currentDate = new Date();
	return {
		hrs: currentDate.getHours(),
		min: currentDate.getMinutes(),
		sec: currentDate.getSeconds(),
	}
}

function moveHands(){
	const currentTime = getCurrentTime();
	hrHand.style.transform = `rotate(${degreesToRotate({ hrs: currentTime.hrs })}deg)`;
	minHand.style.transform = `rotate(${degreesToRotate({ min: currentTime.min })}deg)`;
	secondsHand.style.transform = `rotate(${degreesToRotate({ sec: currentTime.sec })}deg)`;
}

moveHands();
setInterval(moveHands, 1000);

// Hr hand moves 30 degrees every increment
// Min and Sec hand moves 6 degrees every increment