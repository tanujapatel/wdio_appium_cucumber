class Login {
	get usernameInputField() { return $('//android.widget.EditText[@content-desc="test-Username"]');}
	get passwordInputField() { return $('//android.widget.EditText[@content-desc="test-Password"]');}
	get loginButton() { return $('//android.widget.TextView[@text="LOGIN"]');}
	get errorMessageField() { return $('//android.view.ViewGroup[@content-desc="test-Error message"]//android.widget.TextView');}
	
}

module.exports = new Login();