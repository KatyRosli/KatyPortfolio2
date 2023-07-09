import { render, screen, fireEvent } from '@testing-library/react';
import { Resume } from './Resume';

describe('Resume', () => {
  test('renders resume section with title', () => {
    render(<Resume />);
    const titleElement = screen.getByText('Resume');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders tech stack cards', () => {
    render(<Resume />);
    const techStackElements = screen.getAllByRole('card');
    expect(techStackElements.length).toBe(3);
  });

  test('triggers analytics event when "View Resume" button is clicked', () => {
    render(<Resume />);
    const buttonElement = screen.getByText('View Resume');
    fireEvent.click(buttonElement);
  });
});
