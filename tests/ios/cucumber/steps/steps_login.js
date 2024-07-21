const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
// let platformname = process.env.platformname;

const login = {
	action: require('../../../../resources/ios/pages/login/action.js'),
	assert: require('../../../../resources/ios/pages/login/assert.js')
};
const mainPage = {
	assert: require('../../../../resources/ios/pages/main-page/assert.js')
};

const variable = require('../../../../resources/ios/testdata/variable.js');


Given(
	/^Sauce Demo app opened and directed to login page$/,
	async function () {
		await login.action.accessLoginPage();
		const response = await login.action.checkContent();

		expect(response.pageTitle).equal(login.assert.attribute.pageTitleText, response.pageTitle);
		expect(response.pageDesc).equal(login.assert.attribute.pageDescText, response.pageDesc);
		expect(response.loginBtn).equal(login.assert.attribute.loginBtnText, response.loginBtn);
	}
);

When(
	/^I enter "([^"]*)?" user deatils on login fields$/,
	async function (userDetails) {
		userId = eval('variable.LOGIN_USERS.'+userDetails+'.username');
		pwd = eval('variable.LOGIN_USERS.'+userDetails+'.password');
		console.log(userId)
		await login.action.fillUsername(userId);
		await login.action.fillPassword(pwd);
	}
);

When(
	/^Click login button$/,
	async function () {
		await login.action.clickLogin();
	}
);

Then(
	/^Login will be successful$/,
	async function () {
		const response = await login.action.checkLoginState();
		expect(response).equal(mainPage.assert.attribute.PRODUCTS_MAIN_PAGE_TITLE, response);
	}
);

Then(
	/^Login will failed and I see an error messsage about "([^"]*)?"$/,
	async function (errMsg) {
		const response = await login.action.checkLoginStateExpectErrorMessage();

		expect(response).equal(eval("login.assert.attribute."+errMsg));
	}
);

