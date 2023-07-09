import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('react-ga', () => ({
  initialize: jest.fn(),
  pageview: jest.fn(),
}));

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();

    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();

    const cookieBannerElement = screen.getByTestId('cookie-consent-banner');
    expect(cookieBannerElement).toBeInTheDocument();
  });

   test('accepts cookie consent', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('cookie-accept-button'));
    expect(screen.queryByTestId('cookie-consent-banner')).toBeNull();
  });
});
