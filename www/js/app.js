/// <reference path="../../typings/app.tsd.d.ts" />
var BaseWeb;
(function (BaseWeb) {
    var Application;
    (function (Application) {
        var ngModule;
        function main() {
            ngModule = angular.module("BaseWeb.Application", ["ui.router"]);
            ngModule.run(angular_initialize);
            ngModule.config(angular_configure);
        }
        Application.main = main;
        function angular_initialize($rootScope, $location) {
            //TODO : Remove this. It is just to demonstrate with.
            $rootScope["name"] = "BaseWeb";
        }
        function angular_configure($stateProvider, $urlRouterProvider, $provide, $httpProvider, $compileProvider) {
            //TODO
        }
    })(Application = BaseWeb.Application || (BaseWeb.Application = {}));
})(BaseWeb || (BaseWeb = {}));
BaseWeb.Application.main();
