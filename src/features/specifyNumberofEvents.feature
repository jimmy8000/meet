Feature: Specify Number of Events
  Scenario: When user hasn’t specified a number, 32 events are shown by default.
    Given the user has not specified a number of events to be displayed
    When the user views the list of upcoming events
    Then 32 events are shown
  Scenario: User can change the number of events displayed.
    Given the user is on the main page
    When the user specifies a number of events to display
    Then that specific number of events is shown
