class MainMenu {
	get pageTitle() { return $('//android.widget.TextView[@text="PRODUCTS"]');}
}

module.exports = new MainMenu();