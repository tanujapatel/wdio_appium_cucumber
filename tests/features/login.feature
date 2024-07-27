Feature: Login

    As a valid User,
    I should be able to log in to Sauce Demo app.

    Background: Sauce Demo app opened
    

    Scenario: 1. Login to Sauce Demo app with LOCKED user details
        When I enter "LOCKED" user deatils on login fields
        And Click login button
         Then Login will failed and I see an error messsage about "LOCKED_USER_MESSAGE"

    Scenario: 2. Login to Sauce Demo app with invalid user details
        When I enter "NO_MATCH" user deatils on login fields
        And Click login button
        Then Login will failed and I see an error messsage about "INVALID_USER_MESSAGE"

    Scenario: 3. Login to Sauce Demo app with blank user and password
        When I enter "NO_USER_DETAILS" user deatils on login fields
        And Click login button
       Then Login will failed and I see an error messsage about "USERNAME_REQUIRED"
        
    Scenario: 4. Login to Sauce Demo app with valid user and no password
        When I enter "NO_PASSWORD" user deatils on login fields
        And Click login button
        Then Login will failed and I see an error messsage about "PASSWORD_REQUIRED"

    Scenario: 5. Login to Sauce Demo app with blank user and a valid password
        When I enter "NO_USERNAME" user deatils on login fields
        And Click login button
        Then Login will failed and I see an error messsage about "USERNAME_REQUIRED"

    @loginWithValidDetails
    Scenario: 6. Login to Sauce Demo app with valid user details
        When I enter "STANDARD" user deatils on login fields
        And Click login button
        Then Login will be successful
