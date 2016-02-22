var questions = require("questions");
var q = require("q");

module.exports = {
  askFavouriteFootballTeam: function() {
    var deferred = q.defer();
    questions.askOne({ info:"Who's your favourite football team?" }, function(answer){
      deferred.resolve(answer);
    });
    return deferred.promise;
  },
  askFavouritePlayer: function() {
    var deferred = q.defer();
    questions.askOne({ info: "Who is your favourite player?" }, function(answer) {
      deferred.resolve(answer);
    });
    return deferred.promise;
  },
  askWhatNumberHeIs: function() {
    var deferred = q.defer();
    questions.askOne({ info: "What number is he?" }, function(answer) {
      deferred.resolve(answer);
    });
    return deferred.promise;
  }
}
