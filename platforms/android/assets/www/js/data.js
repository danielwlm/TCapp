var sensationApp = angular.module('sensationApp');

// Home Data: Home page configuration
sensationApp.factory('Data', function(){
    var data = {};
    
    data.items = [

        {
            title: 'View Menu',
            icon: 'search',
            page: 'food-menu-search.html'
        }
        //,
        //
        //{
        //    title: 'Order Online',
        //    icon: 'th',
        //    page: 'modal.html'}

        //
        //{
        //    title: 'Reservation',
        //    icon: 'envelope-o',
        //    page: 'rsvp.html'
        //}
        //{
        //    title: 'Gallery',
        //    icon: 'camera',
        //    page: 'gallery.html'
        //},

        //{
        //    title: 'Food Menu',
        //    icon: 'calendar',
        //    page: 'food-menu.html'
        //},
        //{
        //    title: 'Drinks Menu',
        //    icon: 'calendar',
        //    page: 'drinks-menu.html'
        //},
        //{
        //    title: 'Side & Dessert Menu',
        //    icon: 'calendar',
        //    page: 'sides-menu.html'
        //},

        //{
        //    title: 'Map',
        //    icon: 'map-marker',
        //    page: 'map.html'
        //}
    ]; 
    
    return data;
});

// Menu Data: Menu configuration
sensationApp.factory('MenuData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Home',
            icon: 'home',
            page: 'home.html'
        },

        {
            title: 'Menu',
            icon: 'search',
            page: 'food-menu-search.html'
        },
        //{
        //    title: 'Order Online',
        //    icon: 'th',
        //    //page: 'modal.html'
        //    page: 'https://tabachines.staging.wpengine.com/order-now/'
        //},
        //{
        //    title: 'Contact',
        //    icon: 'envelope-o',
        //    page: 'contact.html'
        //},
        {
            title: 'Map & Directions',
            icon: 'map-marker',
            page: 'map.html'
        }
        //{
        //    title: 'Connect With Us',
        //    icon: 'social',
        //    page:'social-media.html'
        //}

    ]; 
    
    return data;
});

// Map Data: Map configuration
sensationApp.factory('MapData', function(){
    var data = {};
    
    data.map = {
        zoom: 16,
        center: {
            latitude: 34.0469942,
            longitude: -118.2502639
        },
        markers: [
        {
            id: 1,
            icon: 'img/blue_marker.png',
            latitude: 34.0469942,
            longitude: -118.2502639,
            title: 'The Restaurant'
        }]

    };

    return data;
});

// Gallery Data: Gallery configuration
//sensationApp.factory('GalleryData', function(){
//    var data = {};
//
//    data.items = [
//        {
//            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
//            src: 'img/gallery-1.jpg',
//            location: 'New York, June 2014'
//        },
//        {
//            label: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
//            src: 'img/gallery-2.jpg',
//            location: 'Athens, August 2013'
//        },
//        {
//            label: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//            src: 'img/gallery-3.jpg',
//            location: 'Tokyo, May 2013'
//        }
//    ];
//
//    return data;
//});
//
//// Products Data: JSON Products configuration
//sensationApp.factory('ProductsData', function(){
//
//    var data = { url: 'json/products.json', letterLimit: 20 };
//
//    return data;
//});
//
//// News Data: JSON News configuration
//sensationApp.factory('NewsData', function(){
//
//    var data = { url: 'json/news.json', letterLimit: 20 };
//
//    return data;
//});

// FoodMenu Data: JSON FoodMenu configuration
sensationApp.factory('FoodMenuData', function(){
    var data = { url: 'json/loop.json' };

    return data;

});
//// DrinkMenu Data: JSON FoodMenu configuration
//sensationApp.factory('DrinkMenuData', function(){
//
//    var data = { url: 'json/drinks.json', letterLimit: 20 };
//
//    return data;
//});
//
//// sideMenu Data: JSON FoodMenu configuration
//sensationApp.factory('SideMenuData', function(){
//
//    var data = { url: 'json/sides.json', letterLimit: 20 };
//
//    return data;
//});
//
//// Posts Data: JSON Wordpress Posts configuration
//sensationApp.factory('PostsData', function(){
//
//    /* (For DEMO purposes) Local JSON data */
//    //var data = { url: 'json/wordpress.json' };
//
//    /* Set your URL as you can see in the following example */
//   // var data = { url: 'https://tabachines.staging.wpengine.com/?json=get_recent_posts' };
//
//    /* With user-friendly permalinks configured */
//     var data = { url: 'http://tabachines.staging.wpengine.com/api/get_recent_posts' };
//
//    return data;
//});
//
//// Server Posts Data (Server side pagination with AngularJS)
//sensationApp.factory('ServerPostsData', function(){
//
//    /* (For DEMO purposes) Local JSON data */
//    //var data = { url: 'json/serverposts&' };
//
//    /* Set your URL as you can see in the following example */
//    /* NOTE: In case of the default permalinks, you should add '&' at the end of the url */
//    //var data = { url: 'http://tabachines.staging.wpengine.com/?json=get_recent_posts&' };
//
//    /* With user-friendly permalinks configured */
//    /* NOTE: In case of the user-friendly permalinks, you should add '?' at the end of the url */
//    var data = { url: 'http://tabachines.staging.wpengine.com/api/get_recent_posts?' };
//
//    return data;
//});
//
//// Categories Data: JSON Categories configuration
//sensationApp.factory('CategoriesData', function(){
//
//    /* (For DEMO purposes) Local JSON data */
//    var data = { url: 'json/categories.json',
//                 category_url: 'json/category' };
//
//    /* Set your URL as you can see in the following example */
//    // var data = { url: 'YourWordpressURL/?json=get_category_index',
//    //             category_url: 'YourWordpressURL/?json=get_category_posts&' };
//
//    /* With user-friendly permalinks configured */
//    // var data = { url: 'YourWordpressURL/api/get_category_index',
//    //             category_url: 'YourWordpressURL/api/get_category_posts?' };
//
//    return data;
//});
//
//// About Data: JSON News configuration
//sensationApp.factory('AboutData', function(){
//
//    var data = { url: 'json/about.json' };
//
//    return data;
//});

// NVD3Data Data: JNVD3Data configuration
sensationApp.factory('NVD3Data', function(){
    
    var data = {};
    
    data.options = {
            chart: {
                type: 'discreteBarChart',
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 65
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 30
                }
            }
        };

    data.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "A" ,
                        "value" : -29.765957771107
                    } ,
                    {
                        "label" : "B" ,
                        "value" : 0
                    } ,
                    {
                        "label" : "C" ,
                        "value" : 32.807804682612
                    } ,
                    {
                        "label" : "D" ,
                        "value" : 196.45946739256
                    } ,
                    {
                        "label" : "E" ,
                        "value" : 0.19434030906893
                    } ,
                    {
                        "label" : "F" ,
                        "value" : -98.079782601442
                    } ,
                    {
                        "label" : "G" ,
                        "value" : -13.925743130903
                    } ,
                    {
                        "label" : "H" ,
                        "value" : -5.1387322875705
                    }
                ]
            }
        ];
    
    return data;
});

// Plugins Data: Mobile Plugins configuration
sensationApp.factory('PluginsData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Device Plugin',
            icon: 'mobile',
            page: 'device.html'
        },
        { 
            title: 'Notifications Plugin',
            icon: 'exclamation',
            page: 'notifications.html'
        },
        { 
            title: 'Geolocation Plugin',
            icon: 'location-arrow',
            page: 'geolocation.html'
        }
        //,
        //{
        //    title: 'Barcode Scanner',
        //    icon: 'barcode',
        //    page: 'barcodescanner.html'
        //}
    ]; 
    
    return data;
});
//
//// Settings Data: Settings configuration
//sensationApp.factory('SettingsData', function(){
//    var data = {};
//
//    data.items = {
//        options: [
//        {
//           name: 'First Setting',
//           value: true
//        },
//        {
//           name: 'Second Setting',
//           value: false
//        },
//        {
//           name: 'Third Setting',
//           value: false
//        },
//        {
//           name: 'Fourth Setting',
//           value: false
//        },
//        {
//           name: 'Fifth Setting',
//           value: false
//        }],
//        range:30
//    };
//
//    return data;
//});
//
//// RSS Data: Feeds configuration
//sensationApp.factory('FeedData', function(){
//
//    var data = { url: 'http://tabachines.staging.wpengine.com/api/get_recent_posts' };
//
//    return data;
//});
//
//// FEED Data Structure: JSON FEED Data Structure configuration
//sensationApp.factory('FeedPluginData', function(){
//
//   // var data = { url: 'json/structure.json' };
//
//    return data;
//});