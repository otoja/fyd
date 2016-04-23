/* 
    Author     : Kamila Przychodzen <kamila.przychodzen@gmail.com>
*/

'use strict';

fyd.factory('Auth', function ($cookieStore, $http) {
    return {
        login: function () {
            var token = window.btoa("LetsJustMakeSomeFakeTokenItShouldBeBankIdAuthAnyway");
            $http.defaults.headers.common.Authorization = 'Basic ' + token;
            $cookieStore.put('authuser', token);
        },
        logout: function () {
            $cookieStore.remove('authuser');
            $http.defaults.headers.common.Authorization = 'Basic ';
        },
        isLogedIn:function(){
            return $cookieStore.get('authuser') && $cookieStore.get('authuser').length;
        }
    };
});


