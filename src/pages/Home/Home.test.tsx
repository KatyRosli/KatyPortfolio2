import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
  it('renders the header and button correctly', () => {
    render(
    <MemoryRouter>
        <Home />
    </MemoryRouter>);

    expect(screen.getByTestId("header-title")).toBeInTheDocument();
    expect(screen.getByTestId("header-body")).toBeInTheDocument();
    expect(screen.getByTestId("header-content")).toBeInTheDocument();

    const viewPortfolioButton = screen.getByTestId('view-portfolio-button');
    expect(viewPortfolioButton).toBeInTheDocument();

    fireEvent.click(viewPortfolioButton);
  });
    
  it('renders the Portfolio component', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  
    expect(screen.getByTestId("portfolio-title")).toBeInTheDocument();
  });
  
});
