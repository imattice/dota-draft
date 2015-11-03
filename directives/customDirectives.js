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

// dotaDraft.directive('viewProfile', function() {
//     return {
//         link:
//         function(scope, element, attrs) {
//             element.bind('click', function)
//         }
//     }
// })
