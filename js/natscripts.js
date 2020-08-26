function Game(nameparam) {
  this.name = nameparam;
  this.players = [];
  this.rollAmount = 0;
  this.score = 0;
}
Game.prototype.addplayer = function (playerparam) {
  playerparam = this.assignId();
  this.players.push(playerparam);
};
Game.prototype.nextPlayer = function () {
  // change back to Game.prototype?
  let currentPlayer;
  let i = 0;
  if (i < this.players.length) {
    currentPlayer = this.players[i];
  } else {
    currentPlayer = this.players[0];
    i = 0;
  }
  i++;
  return currentPlayer;
};
Game.prototype.addscore = function () {
  this.score += this.rollAmount;
  this.rollAmount = 0;
  alert("i added something!!");
  // fucntion next turn (this is hold button)
};
Game.prototype.roll = function () {
  let roll = Math.ceil(Math.random() * 6);
  if (roll > 1) {
    this.rollAmount += roll;
  } else {
    this.rollAmount = 0;
    this.addscore();
  }
  return this.rollAmount;
};

function Player(name) {
  this.name = name;
  this.currentId = 0;
}

Player.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

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

    $("#scorePlayer1").text(pigDice.players[0].score);
    $("#scorePlayer2").text(pigDice.players[1].score);
    // console.log(pigDice.players[0].score);
    // console.log(pigDice.players[1].score);

    // $(".name1").show();
    // $(".name2").show();
    $("#roll").click(function (event) {
      event.preventDefault();
      pigDice.players[0].roll();
      console.log(pigDice.players[0].rollAmount);

      // let score = pigDice.players[0].roll();
      // $("#scorePlayer1").text(score); //just for testing
    });
    $("#hold").click(function (event) {
      event.preventDefault();
      pigDice.players[0].addscore();
      console.log(pigDice.players[0].score);
      $("#scorePlayer1").text(pigDice.players[0].score);
      $("#scorePlayer2").text(pigDice.players[1].score);
      pigDice.nextPlayer(1);
    });
  });
});
