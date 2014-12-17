(function(angular) {
    "use strict";

    var app = angular.module('sensationApp');
// Inject in the CartService
    app.directive('socialMedia', function() {

        return {
            // Create an isolated scope
            scope: {
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'social-media.html',
            link: function($scope) {
                $scope.sharePost = function () {

                    var subject = $scope.item.title;
                    var message = $scope.item.content;
                    message = message.replace(/(<([^>]+)>)/ig,"");

                    var link = $scope.item.url;

                    //Documentation: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
                    //window.plugins.socialsharing.share('Message', 'Subject', 'Image', 'Link');
                    window.plugins.socialsharing.share(message, subject, null, link);
                }
            }

        };
    });

})(window.angular);