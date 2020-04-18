describe("Challenge Test", () => {
  it("Navigate To the URL and click contact-us button", () => {
    browser.url("/");
    browser.maximizeWindow();

    const loginPageTitle = browser.getTitle();
    const loginUrl = browser.getUrl();
    expect(loginPageTitle).to.contains("WebDriverUniversity.com");
    expect(loginUrl).to.contains("webdriveruniversity.com");
    $("#contact-us h1").click();
    browser.switchWindow("WebDriver | Contact Us");
  });

  it("Submit all information via the contact us page", () => {
    $("[name='first_name']").setValue("Praveen");
    $("[name='last_name']").setValue("Kumar");
    $("[name='email']").setValue("praveenngp15@gmail.com");
    $("[name='message']").setValue("Section 46: Test Creation - Challenge!");
    $('#form_buttons [value="SUBMIT"]').click();

    console.log($("#contact_reply h1").getText())
    const thankURL = browser.getUrl();
    const thankPageTitle = browser.getTitle();
    expect(thankPageTitle).to.contains("Gianni Bruno - Designer");
    expect(thankURL).to.contains("contact-form-thank-you.html");
  });
});
