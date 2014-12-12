(function(angular) {
    "use strict";

    var app = angular.module('sensationApp');
// Inject in the CartService
    app.directive('addToOrder', function() {

        return {
            // Create an isolated scope
            scope: {
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'add-to-order.html',
            link: function($scope) {
                $scope.addItem = function () {

                    var title = $scope.item.title;
                    var price = $scope.item.price;
                    //price = price.replace(/(<([^>]+)>)/ig,"");

                    var link = $scope.item.url;

                    //Documentation: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
                    //window.plugins.socialsharing.share('Message', 'Subject', 'Image', 'Link');
                    window.plugins.socialsharing.share(price, title, null, link);
                }
            }

        };
    });

})(window.angular);