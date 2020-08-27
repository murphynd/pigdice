let PLAYERS = [];
let PLAYERSINDEX = 0;
console.log(PLAYERS);
console.log(PLAYERSINDEX);

function addPlayerToGame(playerToAdd) {
  PLAYERS.push(playerToAdd);
}

function nextPlayer() {
  if (PLAYERSINDEX + 1 < PLAYERS.length) {
    PLAYERSINDEX++;
  } else {
    PLAYERSINDEX = 0;
  }
}

function Player(nameparam) {
  this.name = nameparam;
  this.score = 0;
  this.rollAmount = 0;
}

Player.prototype.roll = function () {
  let roll = Math.ceil(Math.random() * 6);
  if (roll > 1) {
    this.rollAmount += roll;
  } else {
    this.rollAmount = 0;
    this.hold();
  }
  return this.rollAmount;
};

Player.prototype.hold = function () {
  this.score += this.rollAmount;
  this.rollAmount = 0;
  nextPlayer();
};

console.log(PLAYERS[PLAYERSINDEX]);
console.log(PLAYERSINDEX);
nextPlayer();
console.log(PLAYERS[PLAYERSINDEX]);
console.log(PLAYERSINDEX);
nextPlayer();
console.log(PLAYERS[PLAYERSINDEX]);
console.log(PLAYERSINDEX);
nextPlayer();
console.log(PLAYERS[PLAYERSINDEX]);
console.log(PLAYERSINDEX);

$(document).ready(function () {
  $("form#playerNames").submit(function (event) {
    event.preventDefault();
    const inputtedPlayer1 = $("input#player1Name").val();
    const inputtedPlayer2 = $("input#player2Name").val();

    let newPlayer = new Player(inputtedPlayer1);
    let newPlayer2 = new Player(inputtedPlayer2);

    addPlayerToGame(newPlayer);
    addPlayerToGame(newPlayer2);

    $("#rollOrHold").show();
    $("#playerNames").hide();
    $(".name1").text(inputtedPlayer1);
    $(".name2").text(inputtedPlayer2);
  });
  $("#roll").click(function (event) {
    event.preventDefault();
    console.log("roll");
    PLAYERS[PLAYERSINDEX].roll();
    console.log(PLAYERS[PLAYERSINDEX]);
    $("#rollAmount1").text(PLAYERS[0].rollAmount);
    $("#rollAmount2").text(PLAYERS[1].rollAmount);
  });
  $("#hold").click(function (event) {
    event.preventDefault();
    console.log("hold");
    PLAYERS[PLAYERSINDEX].hold();
    console.log(PLAYERS[PLAYERSINDEX]);
    $("#scorePlayer1").text(PLAYERS[0].score);
    $("#scorePlayer2").text(PLAYERS[1].score);
    // $("#rollAmount1").text(PLAYERS[0].rollAmount);
    // $("#rollAmount2").text(PLAYERS[1].rollAmount);
  });
});
