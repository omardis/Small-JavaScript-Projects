/*
Team Stats
We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

Omar Alvarado
*/

//The main object named "team"
const team = {
 //Players property initalized as an array
 _players: [
   {
     firstName: 'Kylian',
     lastName: 'Mbappe',
     age: 22
   }
 ],

 //Games property initialized as an array
 _games: [
   {
     opponent: 'ManchesterUnited',
     teamPoints: 42,
     opponentPoints: 27
   }
 ],

//Getter methods for players and games keys
 get players () {
   return this._players;
 },
 get games () {
   return this._games;
 },

 //Method to add new players to the team
 addPlayer(firstName, lastName, age){
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
  this.players.push(player);
 },

 addGame(opponent, teamPoints, opponentPoints) {
   let game = {
     opponent: opponent,
     teamPoints: teamPoints,
     opponentPoints: opponentPoints
   };
   this.games.push(game);
  }
}

//Invoke add player method for testing
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisla', 'Leslie', 28);
team.addPlayer('Bugs', 'Bunny', 28);

console.log(team._players);

//Invoke add game method for testing

team.addGame('NewYork', 70, 76);
team.addGame('The warriors', 65, 55);
team.addGame('Barcelona', 78, 77);

console.log(team._games);
