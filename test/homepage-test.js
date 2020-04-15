const assert = require('assert')

describe("Twst Webdriver University HomePage", () => {
  it("Test Webdriver university Homepage Title", () => {
    browser.url('./');
    const title = browser.getTitle();
    assert.strictEqual(title,'WebDriverUniversity.com')
  });
});
