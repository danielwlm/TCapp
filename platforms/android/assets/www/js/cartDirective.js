(function(angular) {
    "use strict";

    var app = angular.module('sensationApp');
// Inject in the CartService
app.directive('miniCart', function() {

    return {
        // Create an isolated scope
        scope: {
        },
        restrict: 'E',
        replace: true,
        templateUrl: 'mini-cart.html',
        link: function(scope) {

        }

    };
});

})(window.angular);