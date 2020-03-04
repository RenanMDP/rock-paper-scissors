(function() {
  // variáveis do placar
  let playerScoreCount = 0;
  let computerScoreCount = 0;

  // mantém o placar do jogo
  const scoreMsg = document.querySelector('#scoreMsg');
  const playerScoreTag = document.querySelector('#playerScore');
  const computerScoreTag = document.querySelector('#computerScore');
  scoreMsg.textContent = `Placar`;
  playerScoreTag.textContent = `Jogador: ${playerScoreCount}`;
  computerScoreTag.textContent = `Computador: ${computerScoreCount}`;

  // funções da escolha de mão
  pedra.onclick = function() {
    const rock = document.querySelector('#pedra');
    const userInput = rock.getAttribute('id');

    const userChoice = userInput;
    const computerChoice = getComputerChoice();

    document.querySelector('#compChoice').textContent = `Computador escolheu: ${computerChoice}`;
    document.querySelector('#outcome').textContent = `${determineWinner(userChoice, computerChoice)}`;
  };

  papel.onclick = function() {
    const paper = document.querySelector('#papel');
    const userInput = paper.getAttribute('id');

    const userChoice = userInput;
    const computerChoice = getComputerChoice();

    document.querySelector('#compChoice').textContent = `Computador escolheu: ${computerChoice}`;
    document.querySelector('#outcome').textContent = `${determineWinner(userChoice, computerChoice)}`;
  };

  tesoura.onclick = function() {
    const scissors = document.querySelector('#tesoura');
    const userInput = scissors.getAttribute('id');

    const userChoice = userInput;
    const computerChoice = getComputerChoice();

    document.querySelector('#compChoice').textContent = `Computador escolheu: ${computerChoice}`;
    document.querySelector('#outcome').textContent = `${determineWinner(userChoice, computerChoice)}`;
  };

  // gets the computer choice
  const getComputerChoice = () => {
    const compInput = Math.floor(Math.random() * 3);

    switch (compInput) {
      case 0:
        return 'pedra';
        break;
      case 1:
        return 'papel';
        break;
      case 2:
        return 'tesoura';
        break;
    }
  };

  // decides the outcome based on user and computer choices
  const determineWinner = (userChoice, computerChoice) => {
    // play sound according to each outcome
    const playSound = {
      audio: document.querySelector('audio'),
      winSound: 'sound/kids-shouting-yay-sound-effect.mp3',
      loseSound: 'sound/aww-sound-effect.mp3',
      tieSound: 'sound/roblox-death-sound.mp3',


      playerWin() {
        playerScoreCount++;
        playerScoreTag.textContent = `Jogador: ${playerScoreCount}`;
        this.audio.src = this.winSound;
        this.audio.play();
        return `Jogador ganhou! :D`;
      },

      playerLose() {
        computerScoreCount++;
        computerScoreTag.textContent = `Computador: ${computerScoreCount}`;
        this.audio.src = this.loseSound;
        this.audio.play();
        return `Computador ganhou! :(`;
      },

      playerTie() {
        this.audio.src = this.tieSound;
        this.audio.play();
        return `Empate! :/`;
      },
    };

    if ((userChoice === computerChoice)) {
      return playSound.playerTie();
    } else if ((userChoice === 'pedra')) {
      if ((computerChoice === 'papel')) {
        return playSound.playerLose();
      } else {
        return playSound.playerWin();
      }
    } else if ((userChoice === 'papel')) {
      if ((computerChoice === 'tesoura')) {
        return playSound.playerLose();
      } else {
        return playSound.playerWin();
      }
    } else if ((userChoice === 'tesoura')) {
      if ((computerChoice === 'pedra')) {
        return playSound.playerLose();
      } else {
        return playSound.playerWin();
      }
    }
  };
})();
