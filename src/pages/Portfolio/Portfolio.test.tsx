import { render, screen } from '@testing-library/react';
import { Portfolio } from './Portfolio';

describe('Portfolio', () => {
    test('renders portfolio section with correct title and description', () => {
    render(<Portfolio />);

    const portfolioSection = screen.getByTestId('portfolio-section');
    const portfolioTitle = screen.getByTestId('portfolio-title');
    const portfolioDescription = screen.getByTestId('portfolio-description');

    expect(portfolioSection).toBeInTheDocument();
    expect(portfolioTitle).toBeInTheDocument();
    expect(portfolioDescription).toBeInTheDocument();
    });

/*     test('renders project cards with correct information', () => {
    render(<Portfolio />);

    const projectCards = screen.getAllByRole('article');
    
    expect(projectCards).toHaveLength(11);


    const firstProjectCard = projectCards[0];
    const firstProjectImage = screen.getByAltText('SaltHub - work with BE');
    const firstProjectTitle = screen.getByText('SaltHub - work with BE');
    const firstProjectTags = screen.getByText('Next Js, TypeScript, Bootstrap, Vercel, ASP.NET WebApi, SQL Server, Azure');
    const firstProjectButton1 = screen.getByText('View Code');
    const firstProjectButton2 = screen.getByText('Learn More');

    expect(firstProjectCard).toBeInTheDocument();
    expect(firstProjectImage).toBeInTheDocument();
    expect(firstProjectTitle).toBeInTheDocument();
    expect(firstProjectTags).toBeInTheDocument();
    expect(firstProjectButton1).toBeInTheDocument();
    expect(firstProjectButton2).toBeInTheDocument();
    }); */
});