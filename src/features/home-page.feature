Feature: As a user I expect everything to happen in one day

  @dev
    @smoke
    @regression
  Scenario: As a user I expect to home page
    Given I am on "home" page
    Then I should see "Testing talk logo" on the page
    And I should see "contacts" page contains text "Contacts"
