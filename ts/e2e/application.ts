describe("BaseWeb App", function() {
  it("should have a title", function() {
    browser.get("www/index.html");
    expect(browser.getTitle()).toEqual("BaseWeb");
  });
});
