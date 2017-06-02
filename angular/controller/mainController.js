// create a controller named mainController
myApp.controller('mainController', ['$http','$q','listDataService', function($http, $q, listDataService){

// set the context
var main = this;

// create a function to load Data
this.loadData = function(){

// using listService to get data from API
         var Data1 = $http.get(listDataService.baseUrl+'/books');
         var Data2 = $http.get(listDataService.baseUrl+'/characters');
         var Data3 = $http.get(listDataService.baseUrl+'/houses');

// use $q service to combine all the response in one and store in combined variable
    $q.all([Data1, Data2, Data3])
        .then(function(results){

// create a vriable to store data
    main.combined = [];

// loop trough the results using forEach method
    angular.forEach(results, function(result){

// push the result into combined variable
      main.combined.push(result.data);
    });
},
//handle the error
function error(results){
alert('Error occured! Please check the console')
});
}    

}]);
// end

// create a controller named bookDetailController
myApp.controller('bookDetailController',['$http','$routeParams','listDataService', function($http, $routeParams,listDataService){

// set the context
var main = this;

// create a function loadBookData
this.loadBookData = function(){

// declare bookId using $routeParams
    main.bookId = $routeParams.bookId;

// call loadBookData function from listDataService
    listDataService.loadBooksData()
    .then(function success(response){

// create a variable bookdata to store response
        main.bookData = [];
        main.bookData = response.data[main.bookId]
    },
 //handle the error
    function error(response){
    alert('Error occured! Please check the console')
    });
    }

}]);
// end

// create a controller named houseDetailController
myApp.controller('houseDetailController',['$http','$routeParams','listDataService', function($http, $routeParams,listDataService){

// set the context
var main = this;

// create a function to loadHouseData
this.loadHouseData = function(){

// declare houseId using $routeParam
    main.houseId = $routeParams.houseId;

// call loadHousesData function from listDataService
    listDataService.loadHousesData()
    .then(function success(response){

// create a variable houseData to store response
        main.houseData = [];
        main.houseData = response.data[main.houseId]
    },
//handle the error
    function error(response){
    alert('Error occured! Please check the console')
    });

    }

}]);
// end

// create a controller named characterDetailController
myApp.controller('characterDetailController', ['$http','$routeParams', 'listDataService', function($http, $routeParams,listDataService){

// set the context
var main =this;

// create a function to loadcharacterData
this.loadcharacterData = function(){

// declare characterId using $routeParam
    main.characterId = $routeParams.characterId;

// call loadCharactersData function from listDataService
    listDataService.loadCharactersData()
    .then(function success(response){

// create a variable bookdata to store response
        main.characterData = [];
        main.characterData = response.data[main.characterId]
    },
//handle the error
    function error(response){
    alert('Error occured! Please check the console')
    });

    }
}]);
// end

