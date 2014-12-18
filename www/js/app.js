
var app = {
    // Application Constructor
    initialize: function() {

        this.bindEvents();
        //FastClick.attach(document.body);
        //StatusBar.show();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        //var splashscreen;
        document.addEventListener("deviceready", onDeviceReady, false);
        document.addEventListener("backbutton", onBackKeyDown, false);
        //function onDeviceReady() {
        //    navigator.splashscreen.show();
        //}
        function onBackKeyDown(){
            var sPath=window.location.pathname;
            var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
            if(sPage == "index.html"){
                e.preventDefault();
//  Method to close Phonegap application
                navigator.app.exitApp();
            } else {
                // Method to go back to previous page
                navigator.app.backHistory();
            }
        }
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        ons.setDefaultDeviceBackButtonListener(function() {
            if (navigator.notification.confirm("Are you sure to close the app?", 
                function(index) {
                    if (index == 1) { // OK button
                        navigator.app.exitApp(); // Close the app
                    }
                }
            ));
        });
        //define tab or click event type on rool level (can be combined with modernizr)
        //iaEvent = "click";
        if (typeof navigator !== "undefined" && navigator.app) {
            iaEvent = "tap";
        }
        //$('.ext-link').each.bind(iaEvent, function() {
        //    if (typeof navigator !== "undefined" && navigator.app) {
        //        // Mobile device.
        //        var linktarget = this.attr("href");
        //        navigator.app.loadUrl(linktarget, {openExternal: true});
        //    } else {
        //        // Possible web browser
        //        window.open(linktarget, "_system");
        //    }
        //});
      //  Open any external link with InAppBrowser Plugin
      //  $(document).on('click', 'a[href^=http], a[href^=https]', function(e){
      //      e.preventDefault();
      //      var $this = $(this);
      //      var target = $this.data('inAppBrowser') || '_blank';
      //      //var ref = window.open('http://apache.org', '_blank', 'location=yes');
      //      window.open($this.attr('href'), target);
      //  });
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            console.log("window.open works well");
        }
        //Initialize Push Notifications
        //Uncomment the following initialization when you have made the appropriate configuration for iOS - http://goo.gl/YKQL8k and for Android - http://goo.gl/SPGWDJ
        app.initPushwoosh();
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    // Register device for Push Notifications
    initPushwoosh: function() {
        var pushNotification = window.plugins.pushNotification;

		if(device.platform == "Android") {
			registerPushwooshAndroid();
		}
        if (device.platform == "iPhone" || device.platform == "iOS") {
            registerPushwooshIOS();
        }
    }
    
};

(function() {
    var app = angular.module('sensationApp', ['onsen.directives', 'ngTouch', 'ngSanitize', 'angular-carousel', 'google-maps'.ns(), 'appLocalStorage', 'LocalStorageModule', 'ui.map', 'ui.event', 'nvd3']);

    // Home Controller
    app.controller('HomeController', function($scope, Data) {

//Open any external link with InAppBrowser Plugin
//        $(document).on('click', 'a[href^=http], a[href^=https]', function(e){
//
//            e.preventDefault();
//            var $this = $(this);
//            var target = $this.data('inAppBrowser') || '_system';
//
//            window.open($this.attr('href'), target);
//
//        });

        $scope.items = Data.items;

        $scope.showDetail = function(index){
            var selectedItem = $scope.items[index];
            Data.selectedItem = selectedItem;
            $scope.ons.navigator.pushPage(selectedItem.page, {title: selectedItem.title, animation: 'slide'});
        }
        
    });
    
    // Menu Controller
    app.controller('MenuController', function($scope, MenuData) {
        
        $scope.items = MenuData.items;

        $scope.showDetail = function(index){
            var selectedItem = $scope.items[index];
            MenuData.selectedItem = selectedItem;

            $scope.ons.slidingMenu.setMainPage(selectedItem.page, {closeMenu: true})
            
        }

        // If Mac//

        var twitterCheck = function(){

            appAvailability.check('twitter://', function(availability) {
                // availability is either true or false
                if(availability) { window.open('twitter://user?screen_name=xerxesnoble', '_system', 'location=yes');}
                else{window.open('https://itunes.apple.com/ca/app/twitter/id333903271?mt=8', '_system', 'location=yes'); };
            });
        };


        //If Android

        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

        if (isAndroid) {

            //alert('This is a Android!');

          twitterCheck = function() {
                alert('This is a Android Twitter Alert!');
                var now = new Date().valueOf();

                setTimeout(function () {
                    if (new Date().valueOf() - now > 100) return;
                    window.open('https://play.google.com/store/apps/details?id=com.twitter.android', '_system', 'location=yes');
                }, 50);

                window.open('twitter://user?screen_name=XerxesNoble', '_system', 'location=yes');
            };
        };

        $('.twitterNav').click(function() {
            window.open('twitter://user?screen_name=xerxesnoble', '_system', 'location=yes');
        });
        //
        //// Open any external link with InAppBrowser Plugin
        //$(document).on('click', 'a[href^=http], a[href^=https]', function(e){
        //
        //    e.preventDefault();
        //    var $this = $(this);
        //    var target = $this.data('inAppBrowser') || '_blank';
        //
        //    window.open($this.attr('href'), target);
        //
        //});

    });
    
    // Plugins Controller
    app.controller('PluginsController', function($scope, PluginsData) {
        $scope.items = PluginsData.items;
            
        $scope.showDetail = function(index){
            var selectedItem = $scope.items[index];
            PluginsData.selectedItem = selectedItem;
            $scope.ons.navigator.pushPage('plugins/' + selectedItem.page, {title: selectedItem.title, animation: 'slide'});

        }
        
    });
    
    // Parameters Controller
    app.controller('ParametersController', function($scope) {
        var page = $scope.ons.navigator.getCurrentPage();
        $scope.param1 = page.options.param1;
    });
    
    // Map Controller
    app.controller('MapController', function($scope, MapData) {
        
        $scope.windowOptions = false;

        $scope.onClick = function () {
        this.windowOptions = !this.windowOptions;
        };

        $scope.closeClick = function () {
        this.windowOptions = false;
        };
        
        $scope.map = MapData.map;
        

        
    });
    
    // Contact Controller
    app.controller('ContactController', function($scope) {

        $scope.submitForm = function() {
            
            window.plugin.email.open({
                to:      ['social@tabachinescocina.com'],
                cc:      ['social@tabachinescocina.com'],
                bcc:     ['social@tabachinescocina.com'],
                subject: $scope.subject,
                body:    $scope.message
            });

        };

    });

    // Food Menu Controller
    app.controller('FoodMenuController', function($scope, $http, FoodMenuData) {

// Open any external link with InAppBrowser Plugin
//        $(document).on('click', 'a[href^=http], a[href^=https]', function(e){
//
//            e.preventDefault();
//            var $this = $(this);
//            var target = $this.data('inAppBrowser') || '_blank';
//
//            window.open($this.attr('href'), target);
//
//        });

        $scope.food = [];


        $scope.addItem = function() {
            $scope.items.push({
                qty: 1,
                description: '',
                cost: 0
            });
        },

            $scope.removeItem = function(index) {
                $scope.items.splice(index, 1);
            },

            $scope.total = function() {
                var total = 0;
                angular.forEach($scope.items, function(item) {
                    total += item.qty * item.cost;
                });

                return total;
            },


        $http({method: 'GET', url: FoodMenuData.url}).
            success(function(data, status, headers, config) {
                $scope.food = data.result;
                $scope.letterLimit = FoodMenuData.letterLimit;
            }).
            error(function(data, status, headers, config) {

            });

        $scope.showDetail = function(index) {
            var selectedItem = $scope.food[index];
            FoodMenuData.selectedItem = selectedItem;
            $scope.ons.navigator.pushPage('food.html', selectedItem);
        }

        // getFoodMenu() function()
        $scope.getFoodMenu = function() {
            // Filter FoodMenu by $scope.search
            return $scope.food.filter(function(item) {

                // Filter food by Title
                var itemDoesMatch = !$scope.search ||
                    item.title.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;

                // Filter News by Title or Body
                //var itemDoesMatch = !$scope.search ||
                //item.title.toLowerCase().indexOf($scope.search.toLowerCase()) > -1 ||
                //item.body.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;

                return itemDoesMatch;
            });
        };

        // Search Detail function()
        $scope.showSearchDetail = function(index) {
            var items = $scope.getFoodMenu();
            var selectedItem = items[index];
            FoodMenuData.selectedItem = selectedItem;
            //$scope.ons.navigator.pushPage('food.html', selectedItem);
        }

    });

    // Food Item Controller pass the other menus in as dependencies
    app.controller('FoodItemController', function($scope, FoodMenuData) {
        $scope.item = FoodMenuData.selectedItem;


    });

    // PLUGINS: Geolocation Controller
    app.controller('GeolocationController', function($scope) {

        $scope.latitude = '0';
        $scope.longitude = '0';
        $scope.accuracy = '0';
        $scope.altitude = '0';
        $scope.altitudeAccuracy = '0';
        $scope.heading = '0';
        $scope.speed = '0';
        $scope.timestamp = '0';
        $scope.error = '';
        $scope.model = { map: undefined };
        $scope.markers = [];
 
        $scope.showResult = function () {
            return $scope.error == '';
        }
 
        $scope.mapOptions = {
            center: new google.maps.LatLng($scope.latitude, $scope.longitude),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        $scope.showPosition = function (position) {
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
            $scope.accuracy = position.coords.accuracy;
            $scope.altitude = position.coords.altitude;
            $scope.altitudeAccuracy = position.coords.altitudeAccuracy;
            $scope.heading = position.coords.heading;
            $scope.speed = position.coords.speed;
            $scope.timestamp = position.timestamp;
            $scope.$apply();
 
            var latlng = new google.maps.LatLng($scope.latitude, $scope.longitude);
            $scope.model.map.setCenter(latlng);
            $scope.markers.push(new google.maps.Marker({ map: $scope.model.map, position: latlng }));
        }
 
        $scope.showError = function (error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    $scope.error = "User does not allow the app to retrieve position information."
                    break;
                case error.POSITION_UNAVAILABLE:
                    $scope.error = "The device is unable to retrieve a position. In general, this means the device is not connected to a network or can't get a satellite fix."
                    break;
                case error.TIMEOUT:
                    $scope.error = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    $scope.error = "An unknown error occurred."
                    break;
            }
            $scope.$apply();
        }
 
        $scope.getLocation = function () {
            if (navigator.geolocation) {
                var options = { enableHighAccuracy: true };
                navigator.geolocation.getCurrentPosition($scope.showPosition, $scope.showError, options);
            }
            else {
                $scope.error = "Geolocation is not supported by this browser.";
            }
        }
 
        $scope.getLocation();

    });
    
    // PLUGINS: Notifications Controller
    app.controller('NotificationsController', function($scope) {
        
        $scope.alertNotify = function() {
        navigator.notification.alert("Sample Alert",function() {console.log("Alert success")},"My Alert","Close");
        };

        $scope.beepNotify = function() {
        navigator.notification.beep(1);
        };

        $scope.vibrateNotify = function() {
        navigator.notification.vibrate(3000);
        };

        $scope.confirmNotify = function() {
        navigator.notification.confirm("My Confirmation",function(){console.log("Confirm Success")},"Are you sure?",["Ok","Cancel"]);
        };
        
    });

})();