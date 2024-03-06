import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Event from '../components/Event';
import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  const eventMock = {
    summary: 'Test Event',
    created: '2020-01-01',
    location: 'Test Location',
    details: 'This is a test event.'
  };

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user views the list of events', () => {
      render(<Event event={eventMock} />);
    });

    when('the user has not interacted with an event\'s details', () => {
    });

    then('the event details are collapsed', () => {
      expect(screen.queryByText('Event Details')).not.toBeInTheDocument();
    });
  });

  test('User can expand an event to see details', ({ given, when, then }) => {
    given('an event element is collapsed', () => {
      render(<Event event={eventMock} />);
    });

    when('the user clicks on the event\'s \'Details\' button', () => {
      fireEvent.click(screen.getByText('Show details'));
    });

    then('the event\'s details are expanded', () => {
      expect(screen.getByText('Event Details')).toBeInTheDocument();
      expect(screen.getByText(eventMock.details)).toBeInTheDocument();
    });
  });

  test('User can collapse an event to hide details', ({ given, when, then }) => {
    given('an event\'s details are expanded', () => {
      render(<Event event={eventMock} />);
      fireEvent.click(screen.getByText('Show details'));
    });

    when('the user clicks on the event\'s \'Details\' button again', () => {
      fireEvent.click(screen.getByText('Hide details'));
    });

    then('the event\'s details are collapsed', () => {
      expect(screen.queryByText('Event Details')).not.toBeInTheDocument();
    });
  });
});
