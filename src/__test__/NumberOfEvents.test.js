import { fireEvent, render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    const mockSetEventNumber = jest.fn();
    let NumberOfEventsComponent;

    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents eventNumber="32" setCurrentNOE={mockSetEventNumber} setErrorAlert={() => {}}/>);
    });

    test('has a textbox element', () => {
        expect(NumberOfEventsComponent.getByRole("textbox")).toBeInTheDocument();
    });

    test('render default value of 32', () => {
        expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue('32');
    });

    test('update when user types', async () => {
        const numberOfEvents = NumberOfEventsComponent.getByRole('textbox');
        
        fireEvent.change(numberOfEvents, { target: { value: '10' } });
        
        expect(mockSetEventNumber).toHaveBeenCalledWith('10');
    });
});
