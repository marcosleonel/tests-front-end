// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "default e2e tests": browser => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.elementPresent(".home")
      .assert.containsText("h1", "Home")
      .assert.elementCount("input", 7)
      .setValue("input[name=partner]", "Marsellus Wallace")
      .setValue("input[name=burger]", "Big Kahuna")
      .click("#submit")
      .waitForElementVisible(".el-message-box")
      .click(".el-message-box__btns button")
      .waitForElementVisible(".result")
      .assert.elementCount("img", 2)
      .end();
  },

  "example e2e test using a custom command": browser => {
    browser
      .openHomepage()
      .assert.elementPresent(".home")
      .end();
  }
};
