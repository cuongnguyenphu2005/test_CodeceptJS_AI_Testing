const { I } = inject();
const assert = require('assert');
const LoginPage = require('../pages/LoginPage');
const cases = require('../testdata/loginData.json');

Feature('Login - Email Validation');

cases.forEach(({ scenario, email, password, expected }) => {
  Scenario(scenario, async ({ I }) => {
    I.amOnPage(LoginPage.url);
    I.fillField('#email', email);
    I.fillField(LoginPage.fields.password, password);
    I.click(LoginPage.buttons.login);

    // Lấy validation message từ input email
    const message = await I.executeScript(() => {
      return document.querySelector('#email').validationMessage;
    });

    I.say('Validation message: ' + message);
    assert.ok(message.includes(expected), `Expected validation message to include: ${expected}`);
  });
});
