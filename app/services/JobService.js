/* 
 Author     : Kamila Przychodzen <kamila.przychodzen@gmail.com>
 */

'use strict';

fyd.service('JobService', function ($http, $q) {
    return {
        getAvailableJobs: function (user) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: './data/jobs_data.json'
            }
            ).success(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        },
        getAttempsHistory: function (user) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: './data/jobs_activity.json'
            }
            ).success(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        }

    };
});
