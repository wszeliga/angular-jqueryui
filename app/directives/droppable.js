(function() {
    'use strict';

    var jqueryUi = angular.module('jqueryUI');

    jqueryUi.directive('droppable', function() {
        return {
            restrict: 'A',
            link: function(scope, element) {
                element.droppable(scope.dropOptions);
            }
        };
    });
}());