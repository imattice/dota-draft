dotaDraft.controller('HeroesCtrl', function HeroesCtrl($scope, HeroesFactory) {
    $scope.strHeroes = HeroesFactory.strHeroes;
    $scope.HeroesFactory = HeroesFactory;

    $scope.radientStrHeroes = HeroesFactory.radientStrHeroes;
    $scope.direStrHeroes = HeroesFactory.direStrHeroes;

    $scope.radientAgiHeroes = HeroesFactory.radientAgiHeroes;
    $scope.direAgiHeroes = HeroesFactory.direAgiHeroes;

    $scope.radientIntHeroes = HeroesFactory.radientIntHeroes;
    $scope.direIntHeroes = HeroesFactory.direIntHeroes;

    // console.log('heroes' + $scope.heroes);
})
