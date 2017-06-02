//create a service named listDataService
myApp.service('listDataService', ['$http', function($http){

//set baseUrl
     this.baseUrl = 'https://www.anapioficeandfire.com/api';

//get data of books from books Api
     this.loadBooksData = function(){
         return $http.get(this.baseUrl+'/books');
    };

//get data of character from characters Api
    this.loadCharactersData = function(){
        return $http.get(this.baseUrl+'/characters')
    };

//get data of houses from houses Api
    this.loadHousesData = function(){
        return $http.get(this.baseUrl+'/houses');
    }
}]);
// end