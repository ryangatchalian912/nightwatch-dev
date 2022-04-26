// tests/e2e/excel-import.spec.js
"use strict";

describe("Excel Import", () => {
  before((browser) =>
    browser.url("https://c0hbr529.caspio.com/dp/710c90005103ff6401f3456ca211")
  );

  test("Test that login fails on incorrect password", (browser) => {
    browser
      .waitForElementVisible("body", 5000)
      .assert.title("03_Forecast_COST CODE LEVEL")
      .assert.visible("#xip_Username")
      .assert.visible("#xip_Password")
      .setValue("#xip_Username", "caspioadmin@mailinator.com")
      .setValue("#xip_Password", "caspio")
      .waitForElementVisible("input[type=submit]", 5000)
      .click("input[type=submit]")
      .waitForElementVisible(
        {
          selector: `//div[@class="cbFormCommonError"]`,
          locateStrategy: "xpath",
        },
        5000
      )
      .pause(1000)
      .end();
  });

  test("Test that import button exists", (browser) => {
    browser
      .waitForElementVisible("body", 5000)
      .assert.title("03_Forecast_COST CODE LEVEL")
      .assert.visible("#xip_Username")
      .assert.visible("#xip_Password")
      .setValue("#xip_Username", "caspioadmin@mailinator.com")
      .setValue("#xip_Password", "caspio123")
      .waitForElementVisible("input[type=submit]", 5000)
      .click("input[type=submit]")
      .waitForElementVisible(".cb-btn-import", 5000)
      .pause(1000)
      .end();
  });

  after((browser) => browser.end());
});
