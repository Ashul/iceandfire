myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl : 'views/index-view.html',
            controller : 'mainController',
            controllerAs : 'mainData'
        })
        .when('/books/:bookId',{
            templateUrl:'views/bookDetails-view.html',
            controller :'bookDetailController',
            controllerAs:'singleBook'
        })
        .when('/houses/:houseId',{
            templateUrl:'views/houseDetails-view.html',
            controller :'houseDetailController',
            controllerAs:'singleHouse'
        })
        .when('/characters/:characterId',{
            templateUrl :'views/characterDetails-view.html',
            controller : 'characterDetailController',
            controllerAs : 'singleCharacter'
        })
        .otherwise(
            { template : '<h2>Page not Found</h2>'}
        )
}])