function Game(nameparam) {
  this.name = nameparam;
  this.players = [];
  this.currentId = 0;
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
}
Player.prototype.addscore = function () {
  this.score += this.rollAmount;
  this.rollAmount = 0;
  // fucntion next turn (this is hold button)
};

Player.prototype.roll = function () {
  // let rollAmount = 0;
  let roll = Math.ceil(Math.random() * 6);
  if (roll > 1) {
    this.rollAmount += roll;
  } else {
    this.rollAmount = 0;
    // addscore function
  }

  return this.rollAmount;
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
      newplayer1.roll();
      console.log(pigDice.players[0].rollAmount);

      // let score = newplayer1.roll();
      // $("#scorePlayer1").text(score); //just for testing
    });
    $("#hold").click(function (event) {
      event.preventDefault();
      newplayer1.addscore();
      console.log(pigDice.players[0].score);
      $("#scorePlayer1").text(pigDice.players[0].score);
      $("#scorePlayer2").text(pigDice.players[1].score);

      // let score = newplayer1.roll();
      // $("#scorePlayer1").text(score); //just for testing
    });
  });
});

// function writeNameAndValue(name, value) {
//   $('#account-name').text("Welcome " + name + '!');
//   $('#balance').val('$' + value.toFixed(2));
// }
// writeNameAndValue(newBankaccount.name, newBankaccount.Check());
// $(".scorePlayer1").show();
// $(".scorePlayer2").show();

// let pigDice = new Game("pigDice");
// let Player1 = new Player("name");
// let Player2 = new Player("name");

// $("form#rollOrHold").submit(function (event) {
//   event.preventDefault();
//   let score = Player1.score;
//   $("#scorePlayer1").text(score);
// });
// $("#roll").submit(function (event) {
//   event.preventDefault();
//   let score = newplayer1.roll();
//   $("#scorePlayer1").text(score);
// } else {
//   this.rollAmount = 0;
//   this.score += this.rollAmount;
//   // change to next player
