var app = angular.module('skillsWidget', []);
app.controller('SkillsController', function ($scope) {
    $scope.userSkills = [
        {level: 3, label: "Telecom services", id: 600},
        {level: 2, label: "HTML5", id: 598},
        {level: 4, label: "Java", id: 597},
        {level: 2, label: "Python", id: 607},
        {level: 2, label: "C programming", id: 603}
    ];
    $scope.availableSkills = [
        {label: "HTML5", count: 1, id: 598},
        {label: "Java", count: 1, id: 597},
        {label: "Python", count: 1, id: 607},
        {label: "TCPIP Network Protocols", count: 1, id: 611},
        {label: "C programming", count: 1, id: 603},
        {label: "PHP", count: 1, id: 608},
        {label: "CSS3", count: 1, id: 599},
        {label: "React", count: 1, id: 610},
        {label: "3D Computer graphics OpenGL", count: 1, id: 604},
        {label: "Telecom services", count: 1, id: 600},
        {label: "Linux/UNIX", count: 1, id: 605},
        {label: "M2M", count: 1, id: 601},
        {label: "ITIL", count: 1, id: 602},
        {label: "JavaScript", count: 1, id: 609},
        {label: "Perl", count: 1, id: 606}
    ];
    function addSkill(skill) {
        //return if already assigned
        if (_.pluck($scope.userSkills, 'label').indexOf(skill.label) > -1)
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
    };
    $scope.removeSkill = function (skill) {
        $scope.userSkills = _.reject($scope.userSkills, function (item) {
            return item.label === skill.label;
        });
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $('#skills').autocomplete({
        source: function (request, response) {
            response(filterGatheredSkills(request.term, $scope.availableSkills));
        },
        minLength: 1,
        select: function (event, ui) {
            var item = ui.item;
            $(this).val("");
            addSkill(item);
            return false;
        }
    });
    function filterGatheredSkills(term, gatheredSkills) {
        var re = $.ui.autocomplete.escapeRegex(term);
        var matcher = new RegExp("^" + re, "i");
        return $.grep(gatheredSkills, function (item) {
            return matcher.test(item.label);
        });
    }

});