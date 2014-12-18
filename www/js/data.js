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

        {
            title: 'Map & Directions',
            icon: 'map-marker',
            page: 'map.html'
        }

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


// FoodMenu Data: JSON FoodMenu configuration
sensationApp.factory('FoodMenuData', function(){
    var data = { url: 'json/loop.json' };

    return data;

});

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

    ]; 
    
    return data;
});
