const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.onclick = function() {
  let userInput;
  userInput = rock.getAttribute("id");

  const userChoice = userInput;
  const computerChoice = getComputerChoice();

  document.querySelector("#compChoice").textContent = `Computer picked: ${computerChoice}`;
  document.querySelector("#outcome").textContent = `${determineWinner(userChoice, computerChoice)}`;
}

paper.onclick = function() {
  let userInput;
  userInput = paper.getAttribute("id");

  const userChoice = userInput;
  const computerChoice = getComputerChoice();

  document.querySelector("#compChoice").textContent = `Computer picked: ${computerChoice}`;
  document.querySelector("#outcome").textContent = `${determineWinner(userChoice, computerChoice)}`;
}

scissors.onclick = function() {
  let userInput;
  userInput = scissors.getAttribute("id");

  const userChoice = userInput;
  const computerChoice = getComputerChoice();

  document.querySelector("#compChoice").textContent = `Computer picked: ${computerChoice}`;
  document.querySelector("#outcome").textContent = `${determineWinner(userChoice, computerChoice)}`;
}

// gets the computer choice
const getComputerChoice = () => {
  const compInput = Math.floor(Math.random() * 3);
  
  switch(compInput) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};

// decides the outcome based on user and computer choices
const determineWinner = (userChoice, computerChoice) => {
  if ((userChoice === computerChoice)) {
    playTieSound();
    return `It's a tie! :/`;
  } else if ((userChoice === 'rock')) {
      if ((computerChoice === 'paper')) {
        playLoseSound();
        return `Computer wins! :(`;
      } else {
        playWinSound();
        return `Player wins! :D`;
      }
  } else if ((userChoice === 'paper')) {
    	if ((computerChoice === 'scissors')) {
        playLoseSound();
        return `Computer wins! :(`;
      } else {
        playWinSound();
        return `Player wins! :D`;
      }
  } else if ((userChoice === 'scissors')) {
      if ((computerChoice === 'rock')) {
        playLoseSound();
        return `Computer wins! :(`;
      } else {
        playWinSound();
        return `Player wins! :D`;
      }
  }
};

// sound effect for winning and losing
const playWinSound = () => {
  document.querySelector("#winSound").play();
};

const playLoseSound = () => {
  document.querySelector("#loseSound").play();
};

const playTieSound = () => {
  document.querySelector("#tieSound").play();
};