# Key Features

⭐︎ Filter Events by City: Allows users to find events in specific cities.
⭐︎ Show/Hide Event Details: Users can view more or less information about events as needed.
⭐︎ Specify Number of Events: Users can control the number of events displayed.
⭐︎ Use the App When Offline: Ensures access to event information without an internet connection.
⭐︎ Add an App Shortcut to the Home Screen: Facilitates easy access to the app directly from the device's home screen.
⭐︎ Display Charts Visualizing Event Details: Offers visual insights into event details through charts.

**Scenarios (Gherkin Syntax)**

## Feature 1: Filter Events by City

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
    Given the user has not entered a city
    When the user views the list of upcoming events
    Then events from all cities are shown

Scenario 2: User should see a list of suggestions when they search for a city.
    Given the user starts typing in the search box
    When they input the name of a city
    Then a list of suggested cities is shown

Scenario 3: User can select a city from the suggested list.
    Given the user is presented with a list of suggested cities
    When the user selects a city from the list
    Then the events list is filtered to show only events from that city

## Feature 2: Show/Hide Event Details

Scenario 1: An event element is collapsed by default.
    Given the user views the list of events
    When the user has not interacted with an event's details
    Then the event details are collapsed

Scenario 2: User can expand an event to see details.
    Given an event element is collapsed
    When the user clicks on the event's 'Details' button
    Then the event's details are expanded

Scenario 3: User can collapse an event to hide details.
    Given an event's details are expanded
    When the user clicks on the event's 'Details' button again
    Then the event's details are collapsed

## Feature 3: Specify Number of Events

Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
    Given the user has not specified a number of events to be displayed
    When the user views the list of upcoming events
    Then 32 events are shown

Scenario 2: User can change the number of events displayed.
    Given the user is on the main page
    When the user specifies a number of events to display
    Then that specific number of events is shown

## Feature 4: Use the App When Offline

Scenario 1: Show cached data when there’sno internet connection.
    Given the user is offline
    When the user tries to view events
    Then the cached list of events is displayed

Scenario 2: Show error when user changes search settings (city, number of events).
    Given the user is offline
    When the user changes the search settings
    Then an error message is displayed informing the user that updating settings requires an internet connection

## Feature 5: Add an App Shortcut to the Home Screen

Scenario 1: Prompt the user to add the app to their home screen.
    Given the user visits the app for the first time on a mobile device
    When the app meets the criteria for a PWA
    Then prompt the user to add the app to their home screen

## Feature 6: Display Charts Visualizing Event Details

Scenario 1: Show a chart with the number of upcoming events in each city.
    Given the user has selected a city
    When the user views the event details
    Then display a chart showing the number of upcoming events in that city
