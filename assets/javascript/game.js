$(document).ready(function() {


//variables
var randomNumber = 0;
var score = 0;
var wins = 0;
var losses = 0;
var audio;
var crystal1Audio = document.createElement("audio");
	crystal1Audio.setAttribute("src", "assets/1.wav");
var crystal2Audio = document.createElement("audio");
	crystal2Audio.setAttribute("src", "assets/2.wav");
var crystal3Audio = document.createElement("audio");
	crystal3Audio.setAttribute("src", "assets/3.wav");
var crystal4Audio = document.createElement("audio");
	crystal4Audio.setAttribute("src", "assets/4.wav");
var clapAudio = document.createElement("audio");
var loseAudio = document.createElement("audio");
	clapAudio.setAttribute("src", "assets/clap2.wav");
	loseAudio.setAttribute("src", "assets/lose.wav");


//game
getRandomNumber ();
getscore ();
getwins ();
getlosses ();
getCrystalValues ();

$(".btn").on("click", function() {
	$("#message").text("...");
	var addToScore = ($(this).attr("crystalValue"));
	audio = ($(this).attr("audioValue"));
	playChord ();
	addToScore = parseInt(addToScore);
	score += addToScore;
	getscore ();
	winOrLose ();
});


//functions
function getRandomNumber () {
	randomNumber = (Math.floor(Math.random()*102)+19);
	$('#rn').text(randomNumber);
	return randomNumber;	
}


function getscore () {
	$('#s').text(score);
}


function getwins () {
	$('#w').text(wins);
}


function getlosses () {
	$('#l').text(losses);
}


function getCrystalValues () {
	var numberOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
	var index1 = [Math.floor(Math.random()*12)];
	var index2 = [Math.floor(Math.random()*11)];
	var index3 = [Math.floor(Math.random()*10)];
	var index4 = [Math.floor(Math.random()*9)];
	var value1 = numberOptions[index1];
	numberOptions.splice(index1, 1);
	var value2 = numberOptions[index2];
	numberOptions.splice(index2, 1);
	var value3 = numberOptions[index3];
	numberOptions.splice(index3, 1);
	var value4 = numberOptions[index4];
	$('#crystal1').attr("crystalValue", value1);
	$('#crystal2').attr("crystalValue", value2);
	$('#crystal3').attr("crystalValue", value3);
	$('#crystal4').attr("crystalValue", value4);
}


function playChord () {
	if (audio == 1) {
		crystal1Audio.play();
	} else if (audio == 2) {
		crystal2Audio.play();
	} else if (audio == 3) {
		crystal3Audio.play();
	} else if (audio == 4) {
		crystal4Audio.play();
	}
}


function winOrLose () {
		if (score > randomNumber) {
		losses += 1;
		getlosses ();
		$("p").text("");
		loseAudio.play();
		$("#message").text("Your score: " + score + ". Random number: " + randomNumber + ". You lost. Try again...");
		reset ();
	} else if (score === randomNumber) {
		wins += 1;
		getwins ();
		$("p").text("");
		clapAudio.play();
		$("#message").text("Your score: " + score + ". Random number: " + randomNumber + ". YOU WON!! Again...");
		reset ();
	}
}


function reset () {
	getRandomNumber ();
	score = 0;
	getscore ();
	getCrystalValues ();
}


});
