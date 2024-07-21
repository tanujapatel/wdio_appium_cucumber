const selector = {
	mainMenu: require('../main-page/selector.js'),
	// sideMenu: require('../sidemenu/selector.js'),
	login: require('./selector.js')
};

module.exports = {

	fillUsername: async function (username) {
		await selector.login.usernameInputField.waitForExist({ timeout: 30000 });
		await selector.login.usernameInputField.clearValue();
		await selector.login.usernameInputField.addValue(username);
	},

	fillPassword: async function (password) {
		await selector.login.passwordInputField.waitForExist({ timeout: 30000 });
		await selector.login.passwordInputField.clearValue();
		await selector.login.passwordInputField.addValue(password);
	},

	clickLogin: async function () {
		await selector.login.loginButton.waitForExist({ timeout: 30000 });
		await selector.login.loginButton.click(); //action('touch');
	},

	checkLoginState: async function () {
		await selector.mainMenu.pageTitle.waitForExist({ timeout: 30000 });
		const response = await selector.mainMenu.pageTitle.getText();

		return response;
	},

	checkLoginStateExpectErrorMessage: async function () {
		await selector.login.errorMessageField.waitForExist({ timeout: 30000 });
		const errorText = await selector.login.errorMessageField.getText();

		return errorText;
	}
};