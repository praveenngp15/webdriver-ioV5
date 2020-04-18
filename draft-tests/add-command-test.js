describe("Chai assertions", () => {
    beforeEach(function() {
      browser.setWindowSize(1800, 1200);
      browser.url("./");
    });
  
    it("Test webdriveruni login portal", () => {
      const clickById = $("#login-portal");
      clickById.click();
  
      browser.switchWindow('WebDriver | Login Portal')
  
      const loginData = browser.getUrlAndTitle()
      expect(loginData.title).to.contains('Login Portal');
      expect(loginData.url).to.contains('Login-Portal');
    });
  });
  