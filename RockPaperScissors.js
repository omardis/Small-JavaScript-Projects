/*Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/

const getUserChoice = userInput => {
 userInput = userInput.toLowerCase();

 if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors') {
   return userInput;
 }
 else {
   console.log('Error, you input the wrong object');
 }
}

const getComputerChoice = computerInput => {
 computerInput = computerInput.toLowerCase();

 if (computerInput === 'rock' || computerInput === 'paper' || computerInput ==='scissors') {
   return computerInput;
 }
 else {
   console.log('Error, you input the wrong object');
 }
}

const determineWinner = (userChoice, computerChoice) => {
 if (userChoice == computerChoice) {
   return 'There is a Tie';
 }
 else if (userChoice === 'rock'){
   if (computerChoice === 'paper'){
     return 'The Computer Won';
   }
   else {
     return 'The User Won';
   }
 }
 else if (userChoice === 'paper'){
   if (computerChoice === 'scissors'){
     return 'The Computer Won';
   }
   else {
     return 'The User Won'
   }
 }
 else if (userChoice === 'scissors'){
   if (computerChoice === 'rock'){
     return 'The Computer Won';
   }
   else {
     return 'The User Won'
   }
 }
}

const playGame = (userInput, computerInput) => {
 userChoice = getUserChoice(userInput);
 computerChoice = getComputerChoice(computerInput);
 console.log(`The User uses ${userChoice} againts the computer who uses ${computerChoice}`);
 console.log(determineWinner(userChoice, computerChoice));
}

playGame('rock', 'scissors');