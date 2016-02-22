var questions = require("./js/questions.js");

questions.askFavouriteFootballTeam()
  .then(function(answer) {
    console.log(answer);
    questions.askFavouritePlayer()
      .then(function(answer) {
        console.log(answer);
        questions.askWhatNumberHeIs()
          .then(function(answer) {
            console.log(answer);
          });
      });
  });
