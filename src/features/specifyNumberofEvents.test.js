import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberofEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 events are shown by default.', async ({ given, when, then }) => {
    given('the user has not specified a number of events to be displayed', () => {
      // No specific setup required if 32 is the default state
    });

    when('the user views the list of upcoming events', () => {
      render(<App />);
    });

    then('32 events are shown', async () => {
      await waitFor(() => {
        const eventItems = screen.getAllByRole("listitem");
        expect(eventItems.length).toBe(32);
      });
    });
  });

  test('User can change the number of events displayed.', async ({ given, when, then }) => {
    given('the user is on the main page', () => {
      render(<App />);
    });

    when('the user specifies a number of events to display', () => {
      const input = screen.getByDisplayValue('32');
      fireEvent.change(input, { target: { value: '10' } });
    });

    then('that specific number of events is shown', async () => {
      await waitFor(() => {
        const eventItems = screen.getAllByRole("listitem");
        expect(eventItems.length).toBe(10);
      });
    });
  });
});
