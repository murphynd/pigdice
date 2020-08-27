function Game(nameparam) {
  this.name = nameparam;
  this.players = [];
  this.currentId = 0;
}
// Game.prototype.nextPlayer = function (i) {
//   if (this.players[i].currentId < this.players.length) {
//     this.players[i]++;
//   } else {
//     this.players[i] = 1;
//   }
// };

let currentPlayer;

function nextPlayer() {
  // change back to Game.prototype?
  let playerID = 1;
  if (playerID === 1) {
    currentPlayer = this.players[i];
  } else {
    currentPlayer = this.players[0];
    i = 0;
  }
  // playerObject.turn = !playerObject.turn;
  // playerObject2.turn = !playerObject2.turn;
  i++;
  return currentPlayer;
}

Game.prototype.addplayer = function (playerparam) {
  playerparam.id = this.assignId();
  this.players.push(playerparam);
};
Game.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};
function Player(name) {
  this.name = name;
  this.score = 0;
  this.rollAmount = 0;
  this.turn = false;
}

function switchTurn(player) {
  if (player.turn === false) {
    player.turn = true;
    currentPlayer = player;
  } else {
    player.turn = false;
}

// Game.prototype.swapPlayers = function (players) {
//   this.players.forEach(player.switchTurn());
// };
function swapPlayers() {
  GAME.players.forEach(function (player) {
    player.switchTurn;
  });
}

Player.prototype.addscore = function () {
  this.score += this.rollAmount;
  this.rollAmount = 0;
  // alert("i added something!!");
  // fucntion next turn (this is hold button)
  swapPlayers();
};
Player.prototype.roll = function () {
  let roll = Math.ceil(Math.random() * 6);
  if (roll > 1) {
    this.rollAmount += roll;
  } else {
    this.rollAmount = 0;
    this.addscore();
  }
  return this.rollAmount;
};
let GAME = new Game("pigdice");

$(document).ready(function () {
  $("form#playerNames").submit(function (event) {
    event.preventDefault();
    // let GAME = new Game("GAME");

    const inputtedPlayer1 = $("input#player1Name").val();
    const inputtedPlayer2 = $("input#player2Name").val();
    let newplayer1 = new Player(inputtedPlayer1);
    let newplayer2 = new Player(inputtedPlayer2);
    newplayer2.turn = true;

    GAME.addplayer(newplayer1);
    GAME.addplayer(newplayer2);
    let currentPlayer = newplayer1;

    // newplayer1(inputtedPlayer1);
    console.log(inputtedPlayer2);
    console.log(inputtedPlayer1);
    console.log(newplayer1);
    console.log(GAME);

    $("#rollOrHold").show();
    $("#playerNames").hide();
    $(".name1").text(inputtedPlayer1);
    $(".name2").text(inputtedPlayer2);

    $("#scorePlayer1").text(GAME.players[0].score);
    $("#scorePlayer2").text(GAME.players[1].score);
    // console.log(GAME.players[0].score);
    // console.log(GAME.players[1].score);

    // $(".name1").show();
    // $(".name2").show();
    $("#roll").click(function (event) {
      event.preventDefault();
      currentPlayer.roll();
      console.log(GAME.players[0].rollAmount);

      // let score = GAME.players[0].roll();
      // $("#scorePlayer1").text(score); //just for testing
    });
    $("#hold").click(function (event) {
      event.preventDefault();
      currentPlayer.addscore();
      console.log(GAME.players[0].score);
      $("#scorePlayer1").text(GAME.players[0].score);
      $("#scorePlayer2").text(GAME.players[1].score);
      swapPlayers();
    });
  });
});
