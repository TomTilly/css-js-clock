const hrHand = document.querySelector('.hr-hand');
const minHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.seconds-hand');

function degreesToRotate(time){
	if('hrs' in time){
		return (time.hrs * 30) - 90; // hr hand moves 30 degrees on increment
	}
	if('min' in time){
		return (time.min * 6) - 90; // min hand moves 6 degrees on increment
	}
	if('sec' in time){
		return (time.sec * 6) - 90; // seconds hand moves 6 degrees on increment
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