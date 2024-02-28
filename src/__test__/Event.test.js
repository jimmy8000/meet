import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import mockData from "../mock-data";

describe("<Event /> component", () => {
  let EventComponent;
  const event = mockData[0];
  beforeEach(() => {
    EventComponent = render(<Event event={event} />);
  });

  test("should render event title", () => {
    expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
  });
  
  test("should render event start time", () => {
    expect(EventComponent.queryByText(event.created)).toBeInTheDocument();
  });

  test("should render event location", () => {
    expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
  });
  
  test("should render event show details button", () => {
    expect(EventComponent.queryByText('Show details')).toBeInTheDocument();
  });

  test('by default, events details section should be hidden', () => {
    const details = EventComponent.container.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });

  test('shows details section, when user clicks show details button', async() => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText('Show details');
    await user.click(button);
    const details = EventComponent.container.querySelector('.details');
    expect(details).toBeInTheDocument();
  });

  test('hide details section, when user clicks hide details button', async() => {
    const user = userEvent.setup();
    const showButton = EventComponent.queryByText('Show details');
    const hideButton = EventComponent.queryByText('Hide details');
    user.click(hideButton);
    expect(showButton).toBeInTheDocument();
    expect(hideButton).not.toBeInTheDocument();

  })
  
});
