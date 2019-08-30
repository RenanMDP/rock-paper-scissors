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
  const winSound = new Audio("sound/kids-shouting-yay-sound-effect.mp3");
  const loseSound = new Audio("sound/aww-sound-effect.mp3");
  const tieSound = new Audio ("sound/roblox-death-sound.mp3");
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

const playWinSound = () => {
  winSound.pause();
  winSound.currentTime = 0;
  loseSound.pause();
  loseSound.currentTime = 0;
  tieSound.pause();
  tieSound.currentTime = 0;
  winSound.play();
};

const playLoseSound = () => {
  loseSound.pause();
  loseSound.currentTime = 0;
  winSound.pause();
  winSound.currentTime = 0;
  tieSound.pause();
  tieSound.currentTime = 0;
  loseSound.play();
};

const playTieSound = () => {
  tieSound.pause();
  tieSound.currentTime = 0;
  loseSound.pause();
  loseSound.currentTime = 0;
  winSound.pause();
  winSound.currentTime = 0;
  tieSound.play();
};