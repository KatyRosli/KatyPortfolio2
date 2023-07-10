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

    test('renders project cards with correct information', () => {
    render(<Portfolio />);

    const projectCards = screen.getAllByTestId('portfolio-card');
    const projectImages = screen.getAllByTestId('card-image');
    const projectTitles = screen.getAllByTestId('card-title');
    const projectTags = screen.getAllByTestId('card-tags');
    const projectButton1 = screen.getAllByTestId('button-secondary');
    const projectButton2 = screen.getAllByTestId('button-primary');

    expect(projectCards).toHaveLength(11);
    expect(projectImages).toHaveLength(11);
    expect(projectTitles).toHaveLength(11);
    expect(projectTags).toHaveLength(11);
    expect(projectButton1).toHaveLength(11);
    expect(projectButton2).toHaveLength(11);
    });
});