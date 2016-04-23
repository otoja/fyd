/* 
 Author     : Kamila Przychodzen <kamila.przychodzen@gmail.com>
 */

'use strict';
fyd.controller('JobController', function ($scope, JobService) {
    $scope.availableJobs = [];
    $scope.originalJobsObject = [];

    JobService.getAvailableJobs().then(function (response) {
        $scope.availableJobs = response;
        calculateIndustries();
        $scope.originalJobsObject = angular.extend({}, $scope.availableJobs);
    });

    $scope.cutDescription = function (desc) {
        //make nice multiline description with '...'
        if (desc.length > 400)
            desc = desc.slice(0, 400);

        var lastDot = _.lastIndexOf(desc, ".");
        return desc.slice(0, lastDot) + '...';
    };

    $scope.getJobDetails = function (job) {
        $scope.activeJob = _.where($scope.availableJobs, {title: job.title});
        if ($scope.activeJob)
            $scope.activeJob = $scope.activeJob[0];

        $('#jobDetails').modal('show');
    };

    $scope.filterJobs = function (industry) {
        $scope.availableJobs = _.reject($scope.originalJobsObject, function (job) {
            return job.industry !== industry;
        });
    };

    function calculateIndustries() {
        var availableIndustries = _.unique(_.pluck($scope.availableJobs, 'industry'));

        $scope.availableIndustries = [];

        _.each(availableIndustries, function (industry) {
            var obj = {};
            obj.name = "" + industry;
            obj.amount = _.filter($scope.availableJobs, function (job) {
                return job.industry === industry;
            }).length;

            $scope.availableIndustries.push(obj);
        });
    }
});