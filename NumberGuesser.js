let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:
const alert = () => {
  return 'You are out of range. Its not possible to set a number outside the range 0 - 9';
}

const generateTarget = () => {
  const target = Math.floor(Math.random() * 9);
  return target;
  }

const getAbsoluteDistance = (number1, number2) => {
    return Math.abs(number1 - number2);
  }

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
  
    const distanceHuman = getAbsoluteDistance(currentHumanGuess, target);
    const distanceComputer = getAbsoluteDistance(computerGuess, target);

    if (currentHumanGuess > 9) {
      return alert();
    } 
    else if (currentHumanGuess < 0) {
      return alert();
    }
    else {
      if(distanceHuman < distanceComputer) {
        return true;
      }

      else if (distanceHuman === distanceComputer) {
       return true;
      }
      else {
        return false;
      }
    }
  }

const updateScore = winner => {
    if (winner === 'human'){
      humanScore += 1;
    }
    else if (winner === 'computer') {
      computerScore += 1;
    }
  }

const advanceRound = () => {
    currentRoundNumber += 1;
  }






