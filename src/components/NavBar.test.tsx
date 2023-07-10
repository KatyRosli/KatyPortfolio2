import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { NavBar } from './NavBar';
import useAnalyticsEventTracker from '../useAnalyticsEventTracker';

jest.mock('../useAnalyticsEventTracker');

it('renders the NavBar component', () => {
    render(
        <HashRouter>
        <NavBar />
        </HashRouter>
    );
    
    const navBar = screen.getByTestId('navbar');
    expect(navBar).toBeInTheDocument();

    const logoLink = screen.getByText('Katy');
    expect(logoLink).toBeInTheDocument();

    const portfolioLink = screen.getByText('Portfolio');
    expect(portfolioLink).toBeInTheDocument();

    const resumeLink = screen.getByText('Resume');
    expect(resumeLink).toBeInTheDocument();

    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();

    const blogLink = screen.getByText('Blog');
    expect(blogLink).toBeInTheDocument();
});

it('updates the navbar style on scroll', () => {
    render(
        <HashRouter>
        <NavBar />
        </HashRouter>
    )

    const navbar = screen.getByTestId('navbar');
    expect(navbar).toHaveClass('navbar');

    fireEvent.scroll(window, { target: { scrollY: 100 } });

    expect(navbar).toHaveClass('navbar__active');

    fireEvent.scroll(window, { target: { scrollY: 0 } });

    expect(navbar).not.toHaveClass('navbar__active');
});

it('tracks analytics events on link clicks', () => {
    const mockGaEventTracker = jest.fn();
    (useAnalyticsEventTracker as jest.Mock).mockReturnValue(mockGaEventTracker);
  
    render(
      <HashRouter>
        <NavBar />
      </HashRouter>
    );
  
    const portfolioLink = screen.getByText('Portfolio');
    const resumeLink = screen.getByText('Resume');
    const contactLink = screen.getByText('Contact');
    const blogLink = screen.getByText('Blog');
  
    fireEvent.click(portfolioLink);
    expect(mockGaEventTracker).toHaveBeenCalledWith('buttonClick', 'Visit Katy Portfolio Page');
  
    fireEvent.click(resumeLink);
    expect(mockGaEventTracker).toHaveBeenCalledWith('buttonClick', 'Visit Katy Resume Page');
  
    fireEvent.click(contactLink);
    expect(mockGaEventTracker).toHaveBeenCalledWith('buttonClick', 'Visit Katy Contact Page');
  
    fireEvent.click(blogLink);
    expect(mockGaEventTracker).toHaveBeenCalledWith('buttonClick', 'Visit Katy Blog');
  });
