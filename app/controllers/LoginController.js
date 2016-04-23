/* 
    Author     : Kamila Przychodzen <kamila.przychodzen@gmail.com>
*/

'use strict';

fyd.controller('LoginController', function ($scope, Auth) {
    $scope.login = function () {
        Auth.login();
        if (Auth.isLogedIn()){
            $('#loginModal').modal('hide');
        }
    };
    $scope.logout = function () {
        Auth.logout();

    };
});