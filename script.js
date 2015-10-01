angular.module('testApp', ['ngMessages'])
    .constant('emailValidationPattern', /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)
    .controller('LoginController', function($scope, emailValidationPattern) {
        $scope.emailPattern = emailValidationPattern;
    })
    .controller('RegisterController', function($scope, emailValidationPattern) {
        $scope.emailPattern = emailValidationPattern;
    })
    .controller('ForgotController', function($scope, emailValidationPattern) {
        $scope.emailPattern = emailValidationPattern;
    })
    .directive('confirmMatch', function () {
        return {
            require: 'ngModel',
            scope: {
                matchAgainst: '=confirmMatch'
            },
            link: function (scope, elem, attr, ngModel) {
                ngModel.$validators.confirmMatch = function (val) {
                    return val === scope.matchAgainst;
                };

                scope.$watch('matchAgainst', function () {
                    ngModel.$validate();
                })
            }
        }
    });