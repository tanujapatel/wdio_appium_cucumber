const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
// let platformname = process.env.platformname;

const assertDet = require('../../resources/pages/assert.js')
const login = require('../../resources/pages/login.page.js')
const variable = require('../../resources/testdata/variable.js');

When(
	/^I enter "([^"]*)?" user deatils on login fields$/,
	async function (userDetails) {
		userId = eval('variable.LOGIN_USERS.'+userDetails+'.username');
		pwd = eval('variable.LOGIN_USERS.'+userDetails+'.password');
		console.log(userId)
		await login.fillUsername(userId);
		await login.fillPassword(pwd);
	}
);

When(
	/^Click login button$/,
	async function () {
		await login.clickLogin();
	}
);

Then(
	/^Login will be successful$/,
	async function () {
		const response = await login.checkLoginState();
		expect(response).equal(assertDet.attribute.MAIN_PAGE.PRODUCTS_MAIN_PAGE_TITLE, response);
	}
);

Then(
	/^Login will failed and I see an error messsage about "([^"]*)?"$/,
	async function (errMsg) {
		const response = await login.checkLoginStateExpectErrorMessage();

		expect(response).equal(eval("assertDet.attribute.LOGIN."+errMsg));
	}
);

