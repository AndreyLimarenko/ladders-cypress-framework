Feature: Sign up as new member and edit account info

  some description

  @focus
  Scenario: Sign Up
    Given I open member start page
    And I select value from whatYouDo dropdown
    And I select current salary value from dropdown
    And I select desired salary value from dropdown
    And I set job title
    And I click 'Next' button
    And I set first name
    And I set last name
    And I set zip code
    And I click 'Next' button
    And I set valid email
    And I set valid password
    And I checked 'Terms of Use' checkbox
    And I click 'Get started' button
    And I click 'Continue with Basic account' link on Members sign up paywall page
    And I click 'View Jobs' button on Members select specialities form
    And I select 'Account Info' tab on Members settings page
    And I click 'Edit' button at contact section on Members account info page
    And I set 'new_firstName' as new first name on Members account info page
    And I set 'new_lastName' as new last name on Members account info page
    And I set 'new_email' as new account email on Members account info page
    And I set 'new_work_email' as new work email on Members account info page
    And I set 'new_phone_number' as new phone number on Members account info page
#    And I set 'new_zip' as new zip code on Members account info page
    And I click 'Save' button on Members account info page
    And Full name is '_generated_new_firstName _generated_new_lastName' on Members account info page
    And Personal email is '_generated_new_email' on Members account info page
    And Work email is '_generated_new_work_email' on Members account info page
