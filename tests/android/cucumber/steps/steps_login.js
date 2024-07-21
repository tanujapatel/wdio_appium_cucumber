const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
// let platformname = process.env.platformname;

const login = {
	action: require('../../../../resources/android/pages/login/action.js'),
	assert: require('../../../../resources/android/pages/login/assert.js')
};
const mainPage = {
	assert: require('../../../../resources/android/pages/main-page/assert.js')
};

var variable = require('../../../../resources/android/testdata/variable.js');

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

