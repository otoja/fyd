/* 
 Author     : Kamila Przychodzen <kamila.przychodzen@gmail.com>
 */

'use strict';

fyd.controller('MainController', function ($scope, $q, Auth, NEO4JService) {

//    $scope.$on('$viewContentLoaded',function(){
//        if (!Auth.isLogedIn()){
//            $('#loginModal').modal({backdrop:'static',show:true});
//        };
//    });
//    
    var promisses = [];
//    promisses.push(NEO4JService.generateUeser());
    promisses.push(NEO4JService.generateJobOffersFromJSON());

    $q.all(promisses).then(function(response){
        console.log("Data created in Neo4J");
    });


    $scope.getNumber = function (num) {
        return new Array(num);
    };

    $scope.user = {};
    $scope.user.street = "Klåvsteinane 19";
    $scope.user.city = "4324 SANDNES";
    $scope.user.name = "Deb";
    $scope.user.bankNo = "3232 32 3232";
    $scope.user.phone = "999 99 999";
    $scope.user.mail = "deb@fyd.com";

});