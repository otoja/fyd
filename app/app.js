/* 
    Author     : Kamila Przychodzen <kamila.przychodzen@gmail.com>
*/

'use strict';

var fyd = angular
        .module('fyd', ['ngRoute', 'ngCookies'])
        .config(function ($routeProvider, $httpProvider) {
            
            $httpProvider.defaults.headers.post['Authorization'] = 'Basic ZnlkOjVsOGx2QXRKRXhOZDRIZTBhYmw0';
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
            
            $routeProvider
                    .when('/', {
                        templateUrl: './app/partials/jobs.html',
                        controller: 'JobController'
                    })
                    .when('/profile/:userId', {
                        templateUrl: './app/partials/profile.html',
                        controller: 'ProfileController'
                    })
//                    .when("/popoto", {
//                        templateUrl: './app/partials/popoto.html'
//                    })
                    .otherwise('/');

        })
       .constant('NEO4J_URL', 'https://fyd:5l8lvAtJExNd4He0abl4@db-kcu8nh3vkaizyloot4ax.graphenedb.com:24780/db/data/transaction/commit');


