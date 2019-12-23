function computerPlay() {
		let possiblePlays = ['Rock', 'Paper', 'Scissors'];
		let randomIndex = Math.floor(Math.random()*possiblePlays.length);
		let play = possiblePlays[randomIndex];
		return play;
	}

	function singleRound(playerSelection, computerSelection) {
		if (playerSelection == 'rock') {
			if (computerSelection == 'Rock') {
				return 'Rock vs. Rock! It\'s a tie!';
			} else if (computerSelection == 'Paper') {
				return 'You lost! Paper covers rock!';
			} else if (computerSelection == 'Scissors') {
				return 'You won! Rock breaks scissors!';
			}
		} else if (playerSelection == 'paper') {
			if (computerSelection == 'Rock') {
				return 'You won! Paper covers rock!';
			} else if (computerSelection == 'Paper') {
				return 'Paper vs. Paper! It\'s a tie!';
			} else if (computerSelection == 'Scissors') {
				return 'You lost! Scissors cut paper!';
			}
		} else if (playerSelection == 'scissors') {
			if (computerSelection == 'Rock') {
				return 'You lost! Rock smashes scissors!';
			} else if (computerSelection == 'Paper') {
				return 'You won! Scissors cut paper!';
			} else if (computerSelection == 'Scissors') {
				return 'Scissors vs. Scissors! It\'s a tie!';
			}
		}
	}

	var playerScore = 0;
	var computerScore = 0;

	var body = document.querySelector('body');
	var score = document.createElement('div');
	var results = document.createElement('div');

	function checkScores() {
		if (playerScore == 5) {
				body.removeChild(score);
				score.textContent = "Congratulations, you won! You scored " + playerScore + ", while the computer scored " + computerScore + ".";
				playerScore = 0;
				computerScore = 0;
				body.removeChild(results);
				body.appendChild(score);
				return;
			} else if (computerScore == 5) {
				body.removeChild(score);
				score.textContent = "You lost! The computer scored " + computerScore + ", while you scored " + playerScore + ". Better luck next time!";
				playerScore = 0;
				computerScore = 0;
				body.removeChild(results);
				body.appendChild(score);
				return;
			} else {
				return;
			}
	}

		var rock = document.querySelector('#rock');
		rock.addEventListener('click', () => {
				let computerSelection = computerPlay();
				results.textContent = singleRound('rock', computerSelection);
				body.appendChild(results);
				if (computerSelection == 'Scissors') {
					playerScore += 1;
					score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
					body.appendChild(score);
				} else if (computerSelection == 'Paper') {
					computerScore += 1;
					score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
					body.appendChild(score);
				} else {
					score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
					body.appendChild(score);
				}
				checkScores();
		});

		var paper = document.querySelector('#paper');
		paper.addEventListener('click', () => {
				let computerSelection = computerPlay();
				results.textContent = singleRound('paper', computerSelection);
				body.appendChild(results);
				if (computerSelection == 'Rock') {
				 playerScore += 1;
				 score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
				 body.appendChild(score);
			 } else if (computerSelection == 'Scissors') {
				 computerScore += 1;
				 score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
				 body.appendChild(score);
			 } else {
				 score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
				 body.appendChild(score);
			 }
			 checkScores();
		});

		var scissors = document.querySelector('#scissors');
		scissors.addEventListener('click', () => {
				let computerSelection = computerPlay();
				results.textContent = singleRound('scissors', computerSelection);
				body.appendChild(results);
				if (computerSelection == 'Paper') {
				 playerScore += 1;
				 score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
				 body.appendChild(score);
			 } else if (computerSelection == 'Rock') {
				 computerScore +=1;
				 score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
				 body.appendChild(score);
			 } else {
				 score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
				 body.appendChild(score);
			 }
			 checkScores();
	 	});
