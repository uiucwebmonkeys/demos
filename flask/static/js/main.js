const milliToSeconds = 1000 * 60;
const milliToMinutes = 1000 * 60 * 60;
const milliToHours = 1000 * 60 * 60 * 24;
const endTime = new Date("October 17 2019 18:00");

function startTimer() {
	setInterval(function() {
		const now = new Date().getTime();
		const diff = endTime.getTime() - now;

		const days = Math.floor(diff / (milliToHours));
		const hours = Math.floor((diff % (milliToHours)) / (milliToMinutes));
		const minutes = Math.floor((diff % (milliToMinutes)) / (milliToSeconds));
		const seconds = Math.floor((diff % (milliToSeconds)) / 1000);

		// Output the result in an element with id="demo"
		document.getElementById("time").innerHTML = days + " D " +
								hours + " H " +
								minutes + " M " +
								seconds + " S ";
	}, 1000);
};