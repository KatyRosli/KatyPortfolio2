import { render, screen, within } from '@testing-library/react';
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

/*     test('opens GitHub link in a new tab when View Code button is clicked', () => {
        render(<Portfolio />);
      
        const firstProjectCard = screen.getAllByTestId('portfolio-card')[0];
        const viewCodeButton = within(firstProjectCard).getByText('View Code');
        const githubLink = projects[0].github;
      
        const openInNewTabSpy = jest.spyOn(window, 'open');
        viewCodeButton.click();
      
        expect(openInNewTabSpy).toHaveBeenCalledWith(githubLink, '_blank', 'noreferrer');
        openInNewTabSpy.mockRestore();
      });

      test('opens website link in a new tab when Visit Website button is clicked', () => {
        render(<Portfolio />);
      
        const firstProjectCard = screen.getAllByTestId('portfolio-card')[0];
        const visitWebsiteButton = within(firstProjectCard).getByText('Visit Website');
        const websiteLink = projects[0].website;
      
        const openInNewTabSpy = jest.spyOn(window, 'open');
        visitWebsiteButton.click();
      
        expect(openInNewTabSpy).toHaveBeenCalledWith(websiteLink, '_blank', 'noreferrer');
        openInNewTabSpy.mockRestore();
      }); */
});