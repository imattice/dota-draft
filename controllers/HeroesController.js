dotaDraft.controller('HeroesCtrl', function HeroesCtrl($scope, HeroesFactory) {
    $scope.strHeroes = HeroesFactory.strHeroes;
    $scope.HeroesFactory = HeroesFactory;

    $scope.heroes = HeroesFactory.strHeroes;
    console.log('heroes' + $scope.heroes);
})
