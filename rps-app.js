// hand choice functions
rock.onclick = function() {
  const rock = document.querySelector("#rock");
  let userInput;
  userInput = rock.getAttribute("id");

  const userChoice = userInput;
  const computerChoice = getComputerChoice();

  document.querySelector("#compChoice").textContent = `Computer picked: ${computerChoice}`;
  document.querySelector("#outcome").textContent = `${determineWinner(userChoice, computerChoice)}`;
}

paper.onclick = function() {
  const paper = document.querySelector("#paper");
  let userInput;
  userInput = paper.getAttribute("id");

  const userChoice = userInput;
  const computerChoice = getComputerChoice();

  document.querySelector("#compChoice").textContent = `Computer picked: ${computerChoice}`;
  document.querySelector("#outcome").textContent = `${determineWinner(userChoice, computerChoice)}`;
}

scissors.onclick = function() {
  const scissors = document.querySelector("#scissors");
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
  const playSound = {
    audio: document.querySelector("audio"),
    winSound: "sound/kids-shouting-yay-sound-effect.mp3",
    loseSound: "sound/aww-sound-effect.mp3",
    tieSound: "sound/roblox-death-sound.mp3",
  
    playerWin() {
      this.audio.src = this.winSound;
      this.audio.play();
      return `Player wins! :D`;
    },
  
    playerLose() {
      this.audio.src = this.loseSound;
      this.audio.play();
      return `Computer wins! :(`;
    },
  
    playerTie() {
      this.audio.src = this.tieSound;
      this.audio.play();
      return `It's a tie! :/`;
    }
  };

  if ((userChoice === computerChoice)) {
    return playSound.playerTie()
  } else if ((userChoice === 'rock')) {
      if ((computerChoice === 'paper')) {
        return playSound.playerLose();
      } else {
        return playSound.playerWin();
      }
  } else if ((userChoice === 'paper')) {
    	if ((computerChoice === 'scissors')) {
        return playSound.playerLose();
      } else {
        return playSound.playerWin();
      }
  } else if ((userChoice === 'scissors')) {
      if ((computerChoice === 'rock')) {
        return playSound.playerLose();
      } else {
        return playSound.playerWin();
      }
  }
};