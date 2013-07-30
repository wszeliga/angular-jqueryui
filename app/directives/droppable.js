(function() {
    'use strict';

    var jqueryUi = angular.module('jqueryUI');

    jqueryUi.directive('droppable', function() {
        return {
            restrict: 'A',
            replace: true,
            transclude: true,
            scope: { dropOptions: '=' },
            template: '<div data-ng-transclude></div>',
            link: function(scope, element) {
                element.droppable(scope.dropOptions);
            }
        };
    });
}());