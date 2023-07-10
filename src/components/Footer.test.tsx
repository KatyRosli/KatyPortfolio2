import { render, screen, fireEvent } from '@testing-library/react';
import { Footer } from './Footer';
import useAnalyticsEventTracker from '../useAnalyticsEventTracker';

jest.mock('../useAnalyticsEventTracker', () => {
    const originalModule = jest.requireActual('../useAnalyticsEventTracker');
    return {
      __esModule: true,
      default: jest.fn(originalModule.default),
    };
  });

describe('Footer', () => {
    it('should render the social media icons', () => {
        render(<Footer />);
     
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
    expect(screen.getByTestId('behance-icon')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();       
    });

    it('should call the analytics event tracker when a social media icon is clicked', () => {
        const mockEventTracker = jest.fn();
        (useAnalyticsEventTracker as jest.Mock).mockReturnValue(mockEventTracker);

        render(<Footer />);

        fireEvent.click(screen.getByTestId('linkedin-icon'));
        expect(mockEventTracker).toHaveBeenCalledWith('buttonClick', 'Visit LinkedIn');

        fireEvent.click(screen.getByTestId('github-icon'));
        expect(mockEventTracker).toHaveBeenCalledWith('buttonClick', 'Visit Github');

        fireEvent.click(screen.getByTestId('behance-icon'));
        expect(mockEventTracker).toHaveBeenCalledWith('buttonClick', 'Visit Behance');

        fireEvent.click(screen.getByTestId('instagram-icon'));
        expect(mockEventTracker).toHaveBeenCalledWith('buttonClick', 'Visit Instagram');
    });

    it('should render the correct copyright text', () => {
        render(<Footer />);

        const copyrightText = screen.getByText((content, element) => {
            return content.startsWith('© 2023 Katy Rosli');
        });
        expect(copyrightText).toBeInTheDocument();
    })
});