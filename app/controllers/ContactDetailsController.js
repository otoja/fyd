fyd.controller("ContactDetailsController", function ($scope) {
    $scope.editContactDetails = false;
    $scope.editBankNo = false;
    $scope.editPhone = false;
    $scope.editMail = false;

    $scope.cancelEditingContactDetails = function () {
        revertChanges();
        $scope.endEditingContactDetails();
    };

    $scope.startEditingContactDetails = function () {
        backupUser();
        $scope.editContactDetails = true;
    };

    $scope.endEditingContactDetails = function () {
        $scope.editContactDetails = false;
    };

    $scope.editBankDetails = function () {
        $scope.editBankNo = true;
        backupUser();
    };

    $scope.startEditingBankDetails = function () {
        backupUser();
        $scope.editBankNo = true;
    };

    $scope.endEditingBankDetails = function () {
        $scope.editBankNo = false;
    };

    $scope.cancelEditingBankDetails = function () {
        revertChanges();
        $scope.endEditingBankDetails();
    };
    

    $scope.editPhoneDetails = function () {
        backupUser();
        $scope.editPhone = true;
    };

    $scope.endEditingPhoneDetails = function () {
        $scope.editPhone = false;
    };

    $scope.cancelEditingPhoneDetails = function () {
        revertChanges();
        $scope.editPhone = false;
    };

    $scope.editMailDetails = function () {
        backupUser();
        $scope.editMail = true;
    };

    $scope.endEditingMailDetails = function () {
        $scope.editMail = false;
    };

    $scope.cancelEditingMailDetails = function () {
        revertChanges();
        $scope.editMail = false;
    };

    var backupUser = function () {
        //keep this not chanaged in case a user wants to revert changes
        $scope.immutableUser = angular.copy($scope.user);
    };

    var revertChanges = function () {
        $scope.user = angular.copy($scope.immutableUser);
    };
});