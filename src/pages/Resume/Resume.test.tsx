import { render, screen } from '@testing-library/react';
import { Resume } from './Resume';

describe('Resume', () => {
  test('renders resume section with title', () => {
    render(<Resume />);
    const titleElement = screen.getByTestId('resume');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders tech stack cards', () => {
    render(<Resume />);
    const techStackElements = screen.getAllByTestId('techstack');
    expect(techStackElements).toHaveLength(3);
  });
});
