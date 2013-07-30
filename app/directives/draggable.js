(function () {
    'use strict';
    
    var jqueryUi = angular.module('jqueryUI');

    jqueryUi.directive('draggable', function() {
        return {
            restrict: 'A',
            link: function (scope, element) {
                element.draggable(scope.dragOptions);
            }
        };
    });
}());