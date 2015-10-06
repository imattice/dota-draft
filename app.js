var dotaDraft = angular.module('dotaDraft', ['ui.router']);

dotaDraft.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url:'',
        views: {
            'header': {
                templateUrl:'partials/header.html',
            },
            'str-heroes': {
                templateUrl:'partials/str_heroes.html',
            },
            'agi-heroes': {
                templateUrl:'partials/agi_heroes.html',
            },
            'int-heroes': {
                templateUrl:'partials/int_heroes.html',
            }
        }
    });
});
