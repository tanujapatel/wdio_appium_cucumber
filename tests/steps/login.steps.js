const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
// let platformname = process.env.platformname;

// const login = {
// 	action: require('../../../../resources/pages/login/action.js'),
// 	assert: require('../../../../resources/pages/login/assert.js')
// };
// const mainPage = {
// 	assert: require('../../../../resources/pages/main-page/assert.js')
// };
const assertDet = require('../../resources/pages/assert.js')
const login = require('../../resources/pages/login.page.js')
// const mainPage = require('../../resources/pages/main.page.js')
const variable = require('../../resources/testdata/variable.js');


// Given(
// 	/^Sauce Demo app opened and directed to login page$/,
// 	async function () {
// 		await login.accessLoginPage();
// 		const response = await login.checkContent();

// 		expect(response.pageTitle).equal(assertDet.attribute.LOGIN.pageTitleText, response.pageTitle);
// 		expect(response.pageDesc).equal(assertDet.attribute.LOGIN.pageDescText, response.pageDesc);
// 		expect(response.loginBtn).equal(assertDet.attribute.LOGIN.loginBtnText, response.loginBtn);
// 	}
// );

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

