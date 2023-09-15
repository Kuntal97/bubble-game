document.querySelector(".start_button").addEventListener("click", function () {
	var hitRan = 0;
	var score = 0;
	var timer = 60;

	function incScore() {
		score += 10;
		document.querySelector("#points_box").textContent = score;
	}

	function getNewHit() {
		hitRan = Math.floor(Math.random() * 10);
		document.querySelector("#hit_box").textContent = hitRan;
	}

	function bubbler() {
		var bubbleGen = "";
		for (var i = 0; i <= 104; i++) {
			var ranGen = Math.floor(Math.random() * 10);
			bubbleGen += `<div class="bubble">${ranGen}</div>`;
		}

		document.querySelector(".console_bottom").innerHTML = bubbleGen;
	}

	function hittler() {
		var ranGen = Math.floor(Math.random() * 10);
		document.querySelector("#hit_box").textContent = ranGen;
	}

	function runTimer() {
		var timerInt = setInterval(function () {
			if (timer > 0) {
				timer--;
				document.querySelector("#timer_box").textContent = timer;
			} else {
				clearInterval(timerInt);
				document.querySelector(
					".console_bottom"
				).innerHTML = `<h1>Game Over</h1> <br> <h4>(refresh the page to play once again!)</h4>`;
			}
		}, 1000);
	}

	document
		.querySelector(".console_bottom")
		.addEventListener("click", function (details) {
			var numClicked = Number(details.target.textContent);
			if (numClicked === hitRan) {
				incScore();
				bubbler();
				getNewHit();
			}
		});

	runTimer();
	bubbler();
	getNewHit();
});
