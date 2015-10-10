dotaDraft.controller('HeroesCtrl', function HeroesCtrl($scope, HeroesFactory) {
    $scope.strHeroes = HeroesFactory.strHeroes;
    $scope.HeroesFactory = HeroesFactory;
})
