// set the module
var myApp = angular.module('eplApp',['ngRoute']);

// add controller to module
myApp.controller('mainController', ['$http', '$q',function($http, $q){

// set context
  var main = this;

// function to get data from json
  this.loadAllMatches = function(){

//get JSON data using $http and $q
  var JSON1 = $http.get('en.1.json');
  var JSON2 = $http.get('en.2.json');

  $q.all([JSON1, JSON2]).then(function(response){
    main.matchData = []; 

// loop through the response
 angular.forEach(response, function(responseData){
     main.match = responseData.data;

// push data to matchData variable
    main.matchData.push(main.match);
        console.log(main.matchData)

    },

// handle the error
    function error(response){
    alert("some error occurred. Check the console.");
    });
 
  });

  }


}]);

myApp.controller('singleMatchController', ['$http','$routeParams','$q',function($http, $routeParams, $q){
// set context
  var main = this;

// function to get data from json
  this.loadSingleMatch = function(){
//define yearId
  main.yearId = $routeParams.yearId;

//define matchId
  main.matchId = $routeParams.matchId;

//define roundId
  main.roundId = $routeParams.roundId;

//get JSON data using $http and $q
  var JSON1 = $http.get('en.1.json');
  var JSON2 = $http.get('en.2.json');

  $q.all([JSON1, JSON2]).then(function(response){
    main.matchData = [];
main.matchData = response[main.yearId].data.rounds[main.roundId].matches[main.matchId];
console.log(main.matchData);

    },

// handle the error
    function error(response){
    alert("some error occurred. Check the console.");
    });
 }
}
 ])


// define controller for Team Detail View
.controller('TeamController', ['$http','$routeParams','$q', function($http, $routeParams, $q){
   
//  define context
var main = this;
// function to get data from json
  this.teamDetails = function(){
//define teamId
  main.teamId = $routeParams.teamId;
 
//get JSON data using $http and $q
  var JSON1 = $http.get('en.1.json');
  var JSON2 = $http.get('en.2.json');

  $q.all([JSON1, JSON2]).then(function(response){
//define matchData to store the response
  main.matchData = [];

// define variable for Total no of matches
  var count = 0;

// define variable for Total no of matches won
  var win = 0;

// define variable for Total no of matches lost
  var loss = 0;

// define variable for Total no of matches draw
  var draw = 0;

// define variable for Total no of goal scored
  var goal = 0;

  angular.forEach(response, function(result){
  main.match = result.data.rounds;

// iterate throgh main.match 
angular.forEach(main.match, function(data){

 // iterate throgh data  
angular.forEach(data.matches, function(value){

// condition to get total match played
if(value.team1.name === main.teamId || value.team2.name === main.teamId){
  count++;
}
// show the total match Played in view
document.getElementById("score").innerText = count;
// end


// condition to get total match won
if(value.team1.name === main.teamId && value.score1>value.score2 || value.team2.name === main.teamId && value.score2>value.score1){
  win++;
}
// show the result in view
document.getElementById("win").innerText = win;
// end

// condition to get total match lost
if(value.team1.name === main.teamId && value.score1<value.score2 || value.team2.name === main.teamId && value.score2<value.score1){
  loss++;
}
// show the result in view
document.getElementById("loss").innerText = loss;
// end

// condition to get total match draw
if(value.team1.name === main.teamId && value.score1 == value.score2 || value.team2.name === main.teamId && value.score2==value.score1){
  draw++;
}
// show the result in view
document.getElementById("draw").innerText = draw;
// end

// condition to get total goal scored

if(value.team1.name === main.teamId  ){
  goal += value.score1; 
}
if(value.team2.name === main.teamId  ){
  goal += value.score2; 
}

// show the result in view
document.getElementById("goal").innerText = goal;
// end

});
});
});

    },

// handle the error
    function error(response){
    alert("some error occurred. Check the console.");
    });
 }
  
}])