/**.
 * User: johncomposed
 * Date: 2015-03-31
 * Time: 02:28 AM
 */
var app = angular.module('docuformAdmin', ['ngRoute', 'schemaForm', 'schemaFormCallout']);


app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'dash.html',
            controller: 'dashCtrl'
        }).when('/:status/:uuid', {
            templateUrl:'form.html',
            controller: 'formCtrl'
        })
        .otherwise({redirectTo: '/'});
});



app.directive('bindUnsafeHtml', ['$compile',
  function($compile) {
    return function(scope, element, attrs) {
      scope.$watch(
        function(scope) {
          // watch 'bindUnsafeHtml' for changes
          return scope.$eval(attrs.bindUnsafeHtml);
        },
        function(value) {
          //when'bindUnsafeHtml' changes assign to current dom
          element.html(value);
          // compile new DOM and link to current scope
          // NOTE: only compile .childNodes to prevent infinite loop

          $compile(element.contents())(scope);
        }
      );
    };
  }
]);

app.directive("clickToEdit", function () {
    var editorTemplate = '' +
        '<div class="click-to-edit">' +
            '<div ng-hide="view.editorEnabled">' +
                '{{value}} ' +
                '<a class="btn btn-info btn-xs" ng-click="enableEditor()">Edit</a>' +
            '</div>' +
            '<div ng-show="view.editorEnabled">' +
                '<input type="text" class="" ng-model="view.editableValue"> ' +
                '<a class="btn btn-success btn-xs" ng-click="saveEditor()">Save</a>' +
                ' ' +
                '<a class="btn btn-danger btn-xs" ng-click="disableEditor()">Cancel</a>' +
            '</div>' +
        '</div>';

    return {
        restrict: "A",
//        replace: true,
        template: editorTemplate,
        scope: {
            value: "=clickToEdit",
        },
        link: function (scope, element, attrs) {
            scope.view = {
                editableValue: scope.value,
                editorEnabled: false
            };

            scope.enableEditor = function () {
                scope.view.editorEnabled = true;
                scope.view.editableValue = scope.value;
                setTimeout(function () {
                    element.find('input')[0].focus();
                });
            };

            scope.disableEditor = function () {
                scope.view.editorEnabled = false;
            };

            scope.saveEditor = function () {
                scope.value = scope.view.editableValue;
                scope.disableEditor();
            };

        }
    };
});
