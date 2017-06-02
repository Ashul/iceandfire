// create a directive named allCharacters
myApp.directive('allCharacters', function(){
    return{
        rectrict : 'E',
        templateUrl :'./views/characters-view.html',
        controller : function(){
            // console.log('characters')
        }
    }
})