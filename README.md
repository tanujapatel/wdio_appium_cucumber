# MobileUI Automation Test Project Example with Appium & WebdriverIO

<h3><ins>Description:</h3>

An example project about Mobile automation (Android & iOS) testing using WebdriverIO. The test examples are created in Cucumber framework

<h3><ins>Requirements</h3>
  
- NodeJS
- Appium Server
- Appium Inspector (to find selector)
- Android Studio (for device emulator)
- Xcode (for iOS Simulator)
- Demo App (for testing sample) by Sauce Labs

<h3><ins>Inside the project:</h3>

- <b>WebdriverIO Packages</b>
    - Mocha and Cucumber as Test Framework
    - Allure as Test Reporter
    - Appium Server as a service to run the test
    - Appium Driver (`uiautomator2` & `xcuitest`)

<h3><ins>How to setup:</h3>

- Clone the project \
  Run `npm install`

<h3><ins>How to run the test:</h3>
        
<h4>Android:</h4>

- all the test
    - `npm run test-android-bdd`
- specific feature / test file
    - `npm run test-android-bdd --spec ./to/file/location.feature`
- specific test case or suite using tags
    - `npm run test-android-bdd --cucumberOpts.tagExpression='@sanity and @stage'`

<h4>iOS</h4>

- all the test
    - `npm run test-ios-bdd`
- specific feature / test file
    - `npm run test-ios-bdd --spec ./to/file/location.feature`
- specific test case or suite using tags
    - `npm run test-ios-bdd --cucumberOpts.tagExpression='@sanity and @stage'`


<h3><ins>Common issue might happen:</h3>

- Appium doesn't start automatically during the test (in local)
    
    - to solve the issue, just run the Appium server manually and re-run your test.

<h3><ins>How the report look like?</h3>

<h4>Allure Report</h4>

use `npm run report` to open the test report

Execution Video:

https://github.com/user-attachments/assets/f5af56a7-7151-485a-83ec-7e9bd09b6cda

