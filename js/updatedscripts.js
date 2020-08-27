let GAME = new Game();
function NEXTPLAYER() {
  //NEXTPLAYER will toggle GAME.this.players array back and forth from [0,1]
  if (GAME.players + 1 < GAME.players.length) {
    GAME.players++;
  } else {
    GAME.players = 0;
  }
}
function Game() {
  this.players = [];
}
Game.prototype.addplayer = function (playerparam) {
  this.players.push(playerparam);
};
function Player(name) {
  this.name = name;
  this.score = 0;
  this.rollAmount = 0;
}
Player.prototype.addscore = function () {
  this.score += this.rollAmount;
  this.rollAmount = 0;
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

$(document).ready(function () {
  $("form#playerNames").submit(function (event) {
    event.preventDefault();
    const inputtedPlayer1 = $("input#player1Name").val();
    const inputtedPlayer2 = $("input#player2Name").val();
    let newplayer1 = new Player(inputtedPlayer1);
    let newplayer2 = new Player(inputtedPlayer2);
    GAME.addplayer(newplayer1);
    GAME.addplayer(newplayer2);

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

    $("#roll").click(function (event) {
      event.preventDefault();
      GAME.players[0].roll();
      // console.log(GAME.players[0].rollAmount);
    });

    $("#hold").click(function (event) {
      event.preventDefault();
      GAME.players[0].addscore();
      // console.log(GAME.players[0].score);
      $("#scorePlayer1").text(GAME.players[0].score);
      $("#scorePlayer2").text(GAME.players[1].score);
    });
  });
});
