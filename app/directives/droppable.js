(function() {
    'use strict';

    var jqueryUi = angular.module('jqueryUI');

    jqueryUi.directive('droppable', function($compile) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var templateHtml = element.html();
                var options = scope.$eval(attrs.dropOptions);
                element.html(($compile(templateHtml))(scope)).droppable(options);
            }
        };
    });
}());