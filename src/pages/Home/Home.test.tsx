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

  /* it('triggers button click event', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  
    const viewPortfolioButton = screen.getByTestId('view-portfolio-button');
    const mockButtonClick = jest.fn();
    viewPortfolioButton.onclick = mockButtonClick;
  
    fireEvent.click(viewPortfolioButton);
    expect(mockButtonClick).toHaveBeenCalledTimes(1);
    expect(mockButtonClick).toHaveBeenCalledWith(expect.anything(), 'buttonClick', 'View Portfolio');
  }); */
  
/*   it('scrolls to portfolio section when button is clicked', () => {
    const mockScrollIntoView = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;
  
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  
    const viewPortfolioButton = screen.getByTestId('view-portfolio-button');
    const portfolioSection = screen.getByTestId('portfolio-section');

    const scrollIntoViewMock = jest.spyOn(portfolioSection, 'scrollIntoView');
    scrollIntoViewMock.mockImplementation(() => {});

    fireEvent.click(viewPortfolioButton);
  
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'auto', block: 'end' });
  }); */
    
  it('renders the Portfolio component', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  
    expect(screen.getByTestId("portfolio-title")).toBeInTheDocument();
  });
  
});
