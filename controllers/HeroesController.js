dotaDraft.controller('HeroesCtrl', function HeroesCtrl($scope, HeroesFactory) {
    $scope.strHeroes = HeroesFactory.strHeroes;
    $scope.HeroesFactory = HeroesFactory;

    $scope.radientStrHeroes = HeroesFactory.radientStrHeroes;
    $scope.direStrHeroes = HeroesFactory.direStrHeroes;

    $scope.radientAgiHeroes = HeroesFactory.radientAgiHeroes;
    $scope.direAgiHeroes = HeroesFactory.direAgiHeroes;

    $scope.radientIntHeroes = HeroesFactory.radientIntHeroes;
    $scope.direIntHeroes = HeroesFactory.direIntHeroes;

//shows profile on portriat click
    $scope.profileVisible = false;

    $scope.openProfile = function() {
        $scope.profileVisible = true;
    };

    $scope.closeProfile = function() {
        $scope.profileVisible = false;
    };
})
