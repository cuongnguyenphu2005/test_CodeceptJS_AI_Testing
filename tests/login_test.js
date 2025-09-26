const { I } = inject();
const LoginPage = require('../pages/LoginPage');
const cases = require('../test_data/loginData.json');

Feature('Login');

cases.forEach(({scenario, email, password, expected }) => {
  Scenario(scenario, ({ I }) => {
    I.amOnPage(LoginPage.url);
    I.fillField(LoginPage.fields.email, email);
    I.fillField(LoginPage.fields.password, password);
    I.click(LoginPage.buttons.login);
    I.waitForText(expected, 5);
    
  });
});
