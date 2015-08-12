describe("Application", function() {
  beforeEach(module("BaseWeb.Application"));
  console.log(BaseWeb.Application.main);

  it("should be able to ...", inject(function($rootScope) {
    var scope = $rootScope.$new();
    expect(scope.name).toEqual("BaseWeb");
  }));
});
