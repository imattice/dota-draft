var dotaDraft = angular.module('dotaDraft', ['ui.router']);

dotaDraft.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url:'',
        views: {
            'header': {
                templateUrl:'html/header.html',
                controller: 'HeroesCtrl',
            },
            'heroes': {
                url: '',
                templateUrl:'html/heroes.html',
                controller: 'HeroesCtrl',
            },
            // 'sidebar': {
            //     url: '',
            //     templateUrl: 'html/team_builder_sidebar.html',
            //     // controller: 'HeroesCtrl',
            // },
            'profile': {
                templateUrl:'html/profile.html',
                controller: 'HeroesCtrl',
            },
        }
    });
});
