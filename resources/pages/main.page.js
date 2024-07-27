/* eslint-disable no-undef */
class MainMenu {
	get pageTitle() {
        const selectorAndroid = '//android.widget.TextView[@text="PRODUCTS"]'
        const selectorIOS = '//XCUIElementTypeOther[@name="PRODUCTS"]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
		return $(`${selector}`)
    }
}
module.exports = new MainMenu();