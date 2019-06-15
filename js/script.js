
let humanResult = 0,
 computerResult = 0;

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }

  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
      humanResult++;
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
      humanResult++;
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
      humanResult++;
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remisujesz !');
    } else {
      printMessage('Przegrywasz :(');
      computerResult++;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    console.log('Human result: ', humanResult);
    console.log('Computer result:', computerResult);
    document.getElementById('result-human').innerHTML = (humanResult);
    document.getElementById('result-computer').innerHTML = (computerResult);
  }

  const playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);

}
const buttonPaper = document.getElementById('button-paper'),
 buttonRock = document.getElementById('button-rock'),
 buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
