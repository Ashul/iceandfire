
  myApp.config(['$routeProvider', function($routeProvider){
      $routeProvider
            .when('/',{
                templateUrl : 'views/index-view.html',
                controller  : 'mainController',
                controllerAs: 'eplMatches'
            })
            .when('/match/:yearId/:roundId/:matchId',{
                templateUrl : 'views/matchDetail-view.html',
                controller  : 'singleMatchController',
                controllerAs: 'singleMatch'
            })
            .when('/match/:teamId',{
                templateUrl : 'views/teamStats-view.html',
                controller  : 'TeamController',
                controllerAs: 'singleTeam'
            })

            .otherwise(
                {
                    template : '<h2>Page not Found</h2>'
                }
            )
  }

  ]);

