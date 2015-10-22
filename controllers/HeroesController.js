dotaDraft.controller('HeroesCtrl', function HeroesCtrl($scope, HeroesFactory) {
    $scope.strHeroes = HeroesFactory.strHeroes;
    $scope.HeroesFactory = HeroesFactory;

    $scope.rStrHeroes = HeroesFactory.rStrHeroes;
    // console.log('heroes' + $scope.heroes);
})
