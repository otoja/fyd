/* 
 Author     : Kamila Przychodzen <kamila.przychodzen@gmail.com>
 */

'use strict';

fyd.controller('ProfileController', function ($scope, $q, UserProfileService, NEO4JService, JobService) {

    $scope.userSkills = [];
    $scope.availableSkills = [];

    var skillsData = [];



    function addSkill(skill) {
        //return if already assigned
        if (_.pluck($scope.userSkills, 'id').indexOf(skill.id) > -1)
            return;

        skill.level = 0;
        $scope.userSkills.push(skill);
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    }
    ;
    $scope.updateSkill = function (selectedSkill, level) {
        selectedSkill.level = level;
        UserProfileService.updateUserSkill($scope
                .user, selectedSkill);
    };



    $scope.removeSkill = function (skill) {
        $scope.userSkills = _.reject($scope.userSkills, function (item) {
            return item.label === skill.label;
        });

//        UserProfileService.removeSkill(skill);

        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };

    $scope.showRemoveIcon = function (skill) {
        skill.remove = true;
    };

    $scope.getJobActivity = function () {
        JobService.getAttempsHistory($scope.user).then(function (response) {
            $scope.jobsAttmpsHistory = response;
        });
    };

    skillsData.push(NEO4JService.loadSkills().then(function (response) {
        $scope.availableSkills = response;
    }));

    skillsData.push(UserProfileService.getUserSkills($scope.user).then(function (response) {
        $scope.userSkills = response;
    }));

    $scope.getJobActivity();

    /**
     * User skills and available skills are loaded wit async calls, so lets wait when both are done.
     * Then initialize autocomplete component.
     */

    $q.all(skillsData).then(function () {

        /**
         * @param availableScills list of skills from backend DB
         * @param addSKill callback function, run when user selects a skill from autocomplete component
         */
        initSkillInputField($scope.availableSkills, addSkill);
    });

    $scope.$on('$viewContentLoaded', function () {
        $('#profileTabs a:first').tab('show');
        initializeGraph();
    });
});