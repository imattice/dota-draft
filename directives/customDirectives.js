// enlarges portriat on hover
    dotaDraft.directive('grow', function() {
        return {
            link:
            function(scope, element, attrs) {
                element.bind('mouseenter', function() {
                    element.addClass('grow');
                });
                element.bind('mouseleave', function() {
                    element.removeClass('grow');
                });
            }
        }
    });

// removes coloration from hero portriats in grid
    dotaDraft.directive('desaturate', function() {
        return {
            link:
                function(scope, element, attrs){
                    element.bind('click', function() {
                        //will not work without jQuery loaded before angular.  Cannoy look up elements like this with jqLite
                        angular.element('.hero_container').addClass('desaturated');
                    });
                }
        }
    });

// returns color to hero portriats in grid
    dotaDraft.directive('resaturate', function() {
        return {
            link:
                function(scope, element, attrs){
                    element.bind('click', function() {
                        //will not work without jQuery loaded before angular.  Cannoy look up elements with jqLite
                        angular.element('.hero_container').removeClass('desaturated');
                    });
                }
        }
    });
