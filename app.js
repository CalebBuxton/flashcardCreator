var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js")
var flashCards = {
	basic: [],
	cloze: []
}

function init() {
	inquirer.prompt([
	{
		name: "cardType",
		message: "Basic or Cloze card?"
	}, 
	]).then(function(answer) {
		if (answer.cardType.toUpperCase() === "BASIC") {
			newBasicCard();
		}
		else if (answer.cardType.toUpperCase() === "CLOZE") {
			newClozeCard();
		}
		else {
			console.log("You entered and invalid card type.")
		}
	})
}


function newBasicCard () {
	inquirer.prompt([
	{
		name: "Front",
		message: "What text would you like on the front of the card?"
	},
	{
		name: "Back",
		message: "What is the answer for the back of the card?"
	}
	]).then(function(answers) {
		var newBasic = new BasicCard(answers.Front, answers.Back);
		flashCards.basic.push(newBasic)
		console.log(flashCards);
		addMore();
	})
	
}

function newClozeCard() {
	inquirer.prompt([
	{
		name: "full",
		message: "What is the full text for this card?"
	},
	{
		name: "hidden",
		message: "What word or phrase needs to be hidden?"
	}
	]).then(function(answers){
		var newCloze = new ClozeCard(answers.full, answers.hidden);
		flashCards.cloze.push(newCloze);
		console.log(flashCards);
		addMore();
	})

}

function addMore() {
	inquirer.prompt([
	{
		name: "result",
		message: "Would you like to create another card (Y/N)?"
	}
	]).then(function(answer){
		if (answer.result.toUpperCase() === "Y") {
			init();
		}
		else {
			console.log("Thank you for using the Buxton Flash Card Creator!")
		}
	})
}

init();