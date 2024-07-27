/* eslint-disable no-undef */
const selector = {
	mainMenu: require('./main.page.js'),
	keyboard: require('../shared/keyboard.js')
};
class Login {
    
	get usernameInputField() {
        const selectorAndroid = '//android.widget.EditText[@content-desc="test-Username"]'
        const selectorIOS = '~test-Username'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
		return $(`${selector}`)
    }
	get passwordInputField() {
        const selectorAndroid = '//android.widget.EditText[@content-desc="test-Password"]'
        const selectorIOS = '~test-Password'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
		return $(`${selector}`)
    }
	get loginButton() {
        const selectorAndroid = '//android.widget.TextView[@text="LOGIN"]'
        const selectorIOS = '~test-LOGIN'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
		return $(`${selector}`)
    }

	get errorMessageField() {
        const selectorAndroid = '//android.view.ViewGroup[@content-desc="test-Error message"]//android.widget.TextView'
        const selectorIOS = '~test-Error message'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
		return $(`${selector}`)
    }

    // functions
    async fillUsername(username) {
		await this.usernameInputField.waitForExist({ timeout: 30000 });
		if(!driver.isAndroid){
		await this.usernameInputField.click(); 
		await selector.keyboard.returnKey.waitForExist({ timeout: 30000 });
		}
		await this.usernameInputField.setValue(username);
		if(!driver.isAndroid){
		await selector.keyboard.returnKey.click(); 
	    }
	}

	async fillPassword(password) {
		await this.passwordInputField.waitForExist({ timeout: 30000 });
		if(!driver.isAndroid){
		await this.passwordInputField.click(); 
		await selector.keyboard.returnKey.waitForExist({ timeout: 30000 });
		}
		await this.passwordInputField.clearValue();
		await this.passwordInputField.addValue(password);
		if(!driver.isAndroid){
		await selector.keyboard.returnKey.click(); 
	}
	}

	async clickLogin() {
		await this.loginButton.waitForExist({ timeout: 30000 });
		await this.loginButton.click(); 
	}

	async checkLoginState() {
		await selector.mainMenu.pageTitle.waitForExist({ timeout: 30000 });
		const response = await selector.mainMenu.pageTitle.getText();

		return response;
	}

	async checkLoginStateExpectErrorMessage() {
		await this.errorMessageField.waitForExist({ timeout: 30000 });
		const errorText = await this.errorMessageField.getText();

		return errorText;
	}
}
module.exports = new Login();