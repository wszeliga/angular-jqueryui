(function () {
    'use strict';
    
    var jqueryUi = angular.module('jqueryUI');

    jqueryUi.directive('draggable', function() {
        return {
            restrict: 'A',
            replace: true,
            transclude: true,
            scope: {dragOptions:'='},
            template: '<div data-ng-transclude></div>',
            link: function (scope, element) {
                element.draggable(scope.dragOptions);
            }
        };
    });
}());