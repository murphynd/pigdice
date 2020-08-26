function Game(name) {
  this.name = name;
  this.players = [];
  this.currentId = 0;
}

Game.prototype.addplayer = function (player) {
  // player.id = this.assignId();
  this.players.push(player);
};

// Game; //assign ID

function Player(name) {
  this.name = name;
  this.score = 0;
  this.rollAmount = 0;
}

$(document).ready(function () {
  $("form#playerNames").submit(function (event) {
    event.preventDefault();
    let pigDice = new Game("pigDice");

    const inputtedPlayer1 = $("input#player1Name").val();
    const inputtedPlayer2 = $("input#player2Name").val();
    let newplayer1 = new Player(inputtedPlayer1);
    let newplayer2 = new Player(inputtedPlayer2);
    pigDice.addplayer(newplayer1);
    pigDice.addplayer(newplayer2);

    // newplayer1(inputtedPlayer1);
    console.log(inputtedPlayer2);
    console.log(inputtedPlayer1);
    console.log(newplayer1);
    console.log(pigDice);

    $("#rollOrHold").show();
    $("#playerNames").hide();
    $(".name1").text(inputtedPlayer1);
    $(".name2").text(inputtedPlayer2);
    $("#name1").show();
    $("#name2").show();
  });
});
// Player.prototype.hold = function (amount) {
//   this.score += this.rollAmount;
//   // change to next player
// };

// player.prototype.roll = function () {
//   let roll = Math.ceil(Math.random() * 6);
//   if (roll > 1) {
//     this.rollAmount += roll;
//   } else {
//     this.rollAmount = 0;
//     this.score += this.rollAmount;
//     // change to next player
//   }
// };

// let pigDice = new Game("pigDice");
// let Player1 = new Player("name");
// let Player2 = new Player("name");

// $("form#rollOrHold").submit(function (event) {
//   event.preventDefault();
//   let score = Player1.score;
//   $("#scorePlayer1").text(score);
// });
