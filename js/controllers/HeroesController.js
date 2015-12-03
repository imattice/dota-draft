dotaDraft.controller('HeroesCtrl', function HeroesCtrl($scope, HeroesFactory) {

    $scope.radientStrHeroes = HeroesFactory.radientStrHeroes;
    $scope.direStrHeroes = HeroesFactory.direStrHeroes;

    $scope.radientAgiHeroes = HeroesFactory.radientAgiHeroes;
    $scope.direAgiHeroes = HeroesFactory.direAgiHeroes;

    $scope.radientIntHeroes = HeroesFactory.radientIntHeroes;
    $scope.direIntHeroes = HeroesFactory.direIntHeroes;

    //sets hero profile as hidden, initially
    $scope.profileVisible = false;

    //shows hidden profile
    $scope.openProfile = function(hero) {
        $scope.profileVisible = true;

        $scope.selectedHero = hero;
    };

    //hides hero profile
    $scope.closeProfile = function() {
        $scope.profileVisible = false;
    };

    //shows description of item
    $scope.showDetails = function(quality) {
        this.details = true;
    };
    //hides description of item
    $scope.hideDetails = function() {
        this.details = false;
    };

});
