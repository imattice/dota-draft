var dotaDraft = angular.module('dotaDraft', ['ui.router']);

dotaDraft.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url:'',
        views: {
            'header': {
                templateUrl:'partials/header.html',
                controller: 'HeroesCtrl',
            },
            'heroes': {
                url: '',
                templateUrl:'partials/heroes.html',
                controller: 'HeroesCtrl',
            },
            // 'sidebar': {
            //     url: '',
            //     templateUrl: 'partials/team_builder_sidebar.html',
            //     // controller: 'HeroesCtrl',
            // },
            // 'profile': {
            //     templateUrl:'partials/profile.html',
            //     controller: 'HeroesCtrl',
            // },
        }
    });
});
