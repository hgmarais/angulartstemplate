module BaseWeb.Application {

  var ngModule: ng.IModule;

  export function main(): void {
    ngModule = angular.module("BaseWeb.Application", ["ui.router"]);
    ngModule.run(angular_initialize);
    ngModule.config(angular_configure);
  }

  function angular_initialize($rootScope: ng.IScope, $location: ng.ILocationService): void {
    //TODO : Remove this. It is just to demonstrate with.
    $rootScope["name"] = "BaseWeb";
  }

  function angular_configure($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $provide: ng.auto.IProvideService, $httpProvider: ng.IHttpProvider, $compileProvider: ng.ICompileProvider): void {
    //TODO
  }

}

BaseWeb.Application.main();