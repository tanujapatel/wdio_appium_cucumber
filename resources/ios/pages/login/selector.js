/* eslint-disable no-undef */
class Login {
	get usernameInputField() { return $('~test-Username');}
	get passwordInputField() { return $('~test-Password');}
	get loginButton() { return $('~test-LOGIN');}
	get errorMessageField() { return $('~test-Error message');}
}

module.exports = new Login();