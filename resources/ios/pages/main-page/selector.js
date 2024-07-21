/* eslint-disable no-undef */
class MainMenu {
	get pageTitle() { return $('//XCUIElementTypeOther[@name="PRODUCTS"]');}
}

module.exports = new MainMenu();