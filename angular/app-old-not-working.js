// define angular module
var myApp = angular.module('eplApp',['ngRoute']);

// define controller
myApp.controller('mainController', ['$http',function($http){
  var main = this;
this.match = [];
// function to load data from JSON
  this.loadAllMatches = function(){

// http request for 1st JSON file
 $http.get("en.1.json").then(function success(response) { 
 main.match1 =response.data
},

// error handling for 1st JSON
  function error(response){
  alert("some error occurred. Check the console.");
});

// http request for 2nd JSON file
$http.get("en.2.json").then(function success(response) { 
main.match2 = response.data
},

// error handling for 2nd JSON
function error(response){
    alert("some error occurred. Check the console.");
});
console.log(this.match)
  }
}])
// end

// define controller for Match Detail View
.controller('singleMatchController', ['$http','$routeParams', function($http, $routeParams){
    var main = this;
    this.match1 = [];

// using $routeParams to get matchId and roundId
    main.matchId = $routeParams.matchId;
    main.roundId = $routeParams.roundId;

// function to load single match data
this.loadSingleMatch = function(){

// get data from first JSON using HTTP
  $http.get("en.1.json").then(function success(response) { 
  main.match1 = response.data.rounds[main.roundId].matches[main.matchId];
},

// error handling for first JSON data
function error(response){
    alert("some error occurred. Check the console.");
});

// get data from second JSON using HTTP
$http.get("en.2.json").then(function success(response) { 
main.match2 = response.data.rounds[main.roundId].matches[main.matchId];
},

// error handling for first JSON data
function error(response){
    alert("some error occurred. Check the console.");
});
    }
}])
// end

// define controller for Team Detail View
.controller('TeamController', ['$http','$routeParams', function($http, $routeParams){
   
//  define context
var main = this;

// variable to store response data
this.match1 = [];

// function to get team stats
this.loadTeamStats = function(){
// define teamId using $routeParams
main.teamId = $routeParams.teamId;

// get data from second JSON using HTTP
$http.get("en.1.json").then(function success(response) { 

// store response data in match2
main.match2 = response.data.rounds;

// declare a variable to count no of matches palyed    
var count = 0;

// iterate throgh match2 
angular.forEach(main.match2, function(data){
 
 // iterate throgh data  
angular.forEach(data.matches, function(value){

// store the value in match1 variable
main.match1 = value;

// check if the condition is true or false
if(value.team1.key === main.teamId || value.team2.key === main.teamId){
  count++;
}
});
});

// show the result in view
document.getElementById("score").innerText = count;
},

// handling the error for first JSON
    function error(response){
          alert("some error occurred. Check the console.");

    });
//end

// get data from second JSON using HTTP
$http.get("en.2.json").then(function success(response) { 

// store response data in match2
main.match2 = response.data.rounds;

// declare a variable to count no of matches palyed    
var count = 0;

// iterate throgh match2 
angular.forEach(main.match2, function(data){
 
 // iterate throgh data  
angular.forEach(data.matches, function(value){

// store the value in match1 variable
main.match2 = value;

// check if the condition is true or false
if(value.team1.key === main.teamId || value.team2.key === main.teamId){
  count++;
}
});
});

// show the result in view
document.getElementById("score").innerText = count;
},

// handling the error for second JSON
    function error(response){
          alert("some error occurred. Check the console.");

    });
//end
  }
}])