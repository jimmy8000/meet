Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default
        Given the user views the list of events
        When the user has not interacted with an event's details
        Then the event details are collapsed
    Scenario: User can expand an event to see details
        Given an event element is collapsed
        When the user clicks on the event's 'Details' button
        Then the event's details are expanded
    Scenario: User can collapse an event to hide details
        Given an event's details are expanded
        When the user clicks on the event's 'Details' button again
        Then the event's details are collapsed