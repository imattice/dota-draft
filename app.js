var dotaDraft = angular.module('dotaDraft', ['ui.router']);

dotaDraft.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url:'',
        views: {
            'header': {
                templateUrl:'partials/header.html',
            },
            'str-heroes': {
                url: '',
                templateUrl:'partials/str_heroes.html',
                contoller: 'HeroesCtrl',
            },
            'agi-heroes': {
                url: '',
                templateUrl:'partials/agi_heroes.html',
                contoller: 'HeroesCtrl',
            },
            'int-heroes': {
                url: '',
                templateUrl:'partials/int_heroes.html',
                contoller: 'HeroesCtrl',
            }
        }
    });
});
