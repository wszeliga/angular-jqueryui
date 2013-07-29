(function () {
    'use strict';
    
    var jqueryUi = angular.module('jqueryUI');

    jqueryUi.directive('draggable', function($compile) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var templateHtml = element.html();
                var options = scope.$eval(attrs.dragOptions);
                element.html(($compile(templateHtml))(scope)).draggable(options);
            }
        };
    });
}());