// create a directive named allBooks
myApp.directive("allBooks", function(){

    return{
        restrict : 'E',
        templateUrl :'./views/books-view.html',
        controller : function(){
            // console.log('books')

        }    
    }
})