// create a directive named allHouses
myApp.directive('allHouses', function(){
    return{
        restrict: 'E',
        templateUrl : './views/houses-view.html',
        controller : function(){
            // console.log('houses')
        }

    }
})